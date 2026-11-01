/**
 * Client face search. Fetches one pre-scoped static shard
 * (/search-data/<key>.json, built by lib/search/shards.ts) on first query —
 * the full catalog is never bundled into client JS.
 */
import { searchCollection, type CollectionKey } from "@/data/collections";
import { tokenize } from "@/lib/search/index";

export type SearchScope = {
  path: string;
  category?: string;
  tags?: string[];
  includeNewlines?: boolean;
  /** Curated non-kaomoji collection owned by this page (emoticons, symbols, combos). */
  collection?: CollectionKey;
};

export type SearchHit = { id: string; face: string; name: string };

type ShardDoc = [string, string, string, 0 | 1, number, string];
type Loaded = { docs: ShardDoc[]; words: string[]; inverted: Map<string, number[]>; docWords: string[][] };

const cache = new Map<string, Promise<Loaded | null>>();

function loadShard(key: string): Promise<Loaded | null> {
  let p = cache.get(key);
  if (!p) {
    p = fetch(`/search-data/${key}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((s: { w: string[]; p: string[]; d: ShardDoc[] } | null) => {
        if (!s) return null;
        const inverted = new Map<string, number[]>();
        const parse = (v: string) => (v ? v.split(" ").map((x) => s.w[parseInt(x, 36)]) : []);
        const profiles = s.p.map(parse);
        const docWords = s.d.map((doc, i) => {
          const ws = profiles[doc[4]].concat(parse(doc[5]));
          for (const w of ws) {
            const l = inverted.get(w);
            if (l) l.push(i); else inverted.set(w, [i]);
          }
          return ws;
        });
        return { docs: s.d, words: s.w, inverted, docWords };
      })
      .catch(() => { cache.delete(key); return null; });
    cache.set(key, p);
  }
  return p;
}

function matches(word: string, token: string): boolean {
  return word === token || (token.length >= 2 && word.startsWith(token)) || (token.length >= 3 && word.includes(token));
}

function scoreToken(words: string[], token: string): number {
  let best = 0;
  for (const word of words) {
    if (word === token) return 5;
    if (token.length >= 2 && word.startsWith(token)) best = Math.max(best, 3);
    else if (token.length >= 3 && word.includes(token)) best = Math.max(best, 1);
  }
  return best;
}

function normalizeName(v: string): string {
  return v.toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function shardKey(scope: SearchScope): string | null {
  if (scope.category || (scope.tags && scope.tags.length > 0)) {
    return scope.path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  }
  // Every other page (guides, blog, unscoped hubs) searches the full catalog
  // instead of silently returning no matches.
  return "all";
}

export async function searchFaces(query: string, scope: SearchScope): Promise<SearchHit[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];
  if (scope.collection) return searchCollection(scope.collection, trimmed);

  const key = shardKey(scope);
  if (!key) return [];
  const tokens = tokenize(trimmed);
  if (tokens.length === 0) return [];
  const idx = await loadShard(key);
  if (!idx) return [];

  let candidates: Set<number> | null = null;
  for (const token of tokens) {
    const set = new Set<number>();
    for (const w of idx.words) {
      if (!matches(w, token)) continue;
      for (const i of idx.inverted.get(w) ?? []) set.add(i);
    }
    candidates = candidates === null ? set : new Set([...candidates].filter((i) => set.has(i)));
    if (candidates.size === 0) return [];
  }

  const scored: { doc: ShardDoc; score: number }[] = [];
  for (const i of candidates!) {
    const doc = idx.docs[i];
    let score = 0;
    for (const t of tokens) score += scoreToken(idx.docWords[i], t);
    if (doc[3]) score += 1;
    if (normalizeName(doc[2]).includes(tokens[0])) score += 2;
    scored.push({ doc, score });
  }
  scored.sort((a, b) => b.score - a.score || a.doc[2].localeCompare(b.doc[2]));
  const top = scored.slice(0, 48);
  return Promise.all(
    top.map(async ({ doc }) => ({ id: doc[0] || (await faceId(doc[1])), face: doc[1], name: doc[2] })),
  );
}

/** Mirrors the catalog id scheme: "k" + first 10 hex chars of sha1(face). */
async function faceId(face: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(face));
  const hex = Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
  return "k" + hex.slice(0, 10);
}
