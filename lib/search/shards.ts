/**
 * Build-time only: lean, pre-scoped search shards served as static JSON
 * (/search-data/<key>.json). The browser fetches one shard on first query,
 * so the 6 MB catalog never ships in a client bundle.
 */
import { buildSearchDocs } from "@/data/index";
import { kaomoji } from "@/data/items";
import { passesSearchScope } from "@/data/category-integrity";
import { navPages } from "@/lib/site";
import { createHash } from "node:crypto";

/** Catalog ids are "k" + sha1(face)[0..10]; omit them from shards when derivable. */
function derivedId(face: string): string {
  return "k" + createHash("sha1").update(face).digest("hex").slice(0, 10);
}

/** [id ("" = derive from face), face, name, popular, profileIndex, own word indices (base36, space-joined)] */
export type ShardDoc = [string, string, string, 0 | 1, number, string];
/** w: words (most frequent first); p: shared word-index profiles (base36); d: docs. */
export type Shard = { w: string[]; p: string[]; d: ShardDoc[] };

export function shardScopes(): { key: string; category?: string; tags?: string[] }[] {
  const out: { key: string; category?: string; tags?: string[] }[] = [{ key: "all" }];
  for (const p of navPages()) {
    if (p.group === "trust" || p.path === "/") continue;
    const key = p.path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
    if (p.tags && p.tags.length > 0) out.push({ key, tags: p.tags });
    else if (p.category) out.push({ key, category: p.category });
  }
  return out;
}

export function buildShard(scope: { category?: string; tags?: string[] }): Shard {
  const byId = new Map(kaomoji.map((k) => [k.id, k]));
  const tags = scope.tags?.map((t) => t.toLowerCase());
  const picked: { id: string; face: string; name: string; popular: boolean; words: string[] }[] = [];
  const freq = new Map<string, number>();
  for (const doc of buildSearchDocs()) {
    if (scope.category && doc.category !== scope.category) continue;
    if (tags && tags.length > 0 && !tags.some((t) => doc.tags.includes(t))) continue;
    const item = byId.get(doc.id);
    if (item && !passesSearchScope(item, scope)) continue;
    const words = [...new Set(doc.text.split(" "))].filter(Boolean);
    for (const w of words) freq.set(w, (freq.get(w) ?? 0) + 1);
    picked.push({ id: doc.id, face: doc.face, name: doc.name, popular: doc.popular, words });
  }
  const w = [...freq.keys()].sort((a, b) => freq.get(b)! - freq.get(a)! || (a < b ? -1 : 1));
  const rank = new Map(w.map((word, i) => [word, i]));
  const shared = Math.max(20, Math.floor(picked.length / 100));
  const profiles = new Map<string, number>();
  const d: ShardDoc[] = picked.map((doc) => {
    const ranks = doc.words.map((x) => rank.get(x)!).sort((a, b) => a - b);
    const common = ranks.filter((r) => freq.get(w[r])! >= shared).map((r) => r.toString(36)).join(" ");
    const own = ranks.filter((r) => freq.get(w[r])! < shared).map((r) => r.toString(36)).join(" ");
    let pi = profiles.get(common);
    if (pi === undefined) { pi = profiles.size; profiles.set(common, pi); }
    return [derivedId(doc.face) === doc.id ? "" : doc.id, doc.face, doc.name, doc.popular ? 1 : 0, pi, own];
  });
  return { w, p: [...profiles.keys()], d };
}
