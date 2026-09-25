import { passesSearchScope } from "@/data/category-integrity";
import { kaomoji } from "@/data/items";
import { buildSearchDocs, type SearchDoc } from "@/data/index";
import { tokenize } from "@/lib/search";

const catalogById = new Map(kaomoji.map((item) => [item.id, item]));

type SearchIndex = {
  docs: SearchDoc[];
  /** Exact word → doc indices in `docs`. */
  inverted: Map<string, number[]>;
  /** Unique words for prefix / substring candidate expansion. */
  words: string[];
};

let cachedIndex: SearchIndex | null = null;

function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreToken(words: string[], token: string): number {
  let best = 0;
  for (const word of words) {
    if (word === token) best = Math.max(best, 5);
    else if (token.length >= 2 && word.startsWith(token)) best = Math.max(best, 3);
    else if (token.length >= 3 && word.includes(token)) best = Math.max(best, 1);
  }
  return best;
}

function wordMatchesToken(word: string, token: string): boolean {
  if (word === token) return true;
  if (token.length >= 2 && word.startsWith(token)) return true;
  if (token.length >= 3 && word.includes(token)) return true;
  return false;
}

function buildIndex(): SearchIndex {
  const docs = buildSearchDocs();
  const inverted = new Map<string, number[]>();
  const wordSet = new Set<string>();

  for (let i = 0; i < docs.length; i++) {
    const seen = new Set<string>();
    for (const word of docs[i].text.split(" ")) {
      if (!word || seen.has(word)) continue;
      seen.add(word);
      wordSet.add(word);
      const list = inverted.get(word);
      if (list) list.push(i);
      else inverted.set(word, [i]);
    }
  }

  return { docs, inverted, words: Array.from(wordSet) };
}

/** Module-scoped search index: SearchDoc[] + inverted token→id map. Built once. */
export function getSearchIndex(): SearchIndex {
  if (!cachedIndex) {
    cachedIndex = buildIndex();
  }
  return cachedIndex;
}

function candidateIndices(index: SearchIndex, token: string): Set<number> {
  const out = new Set<number>();
  const exact = index.inverted.get(token);
  if (exact) {
    for (const i of exact) out.add(i);
  }

  for (const word of index.words) {
    if (word === token) continue;
    if (!wordMatchesToken(word, token)) continue;
    const list = index.inverted.get(word);
    if (!list) continue;
    for (const i of list) out.add(i);
  }

  return out;
}

/**
 * Fast server search over the prebuilt inverted index.
 * Optional `category` filters by primary category without rebuilding docs.
 */
export function searchIndexed(
  query: string,
  options?: { category?: string; tags?: string[]; includeNewlines?: boolean; limit?: number },
): SearchDoc[] {
  const limit = options?.limit ?? 48;
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const index = getSearchIndex();

  let candidates: Set<number> | null = null;
  for (const token of tokens) {
    const set = candidateIndices(index, token);
    if (candidates === null) {
      candidates = set;
    } else {
      const next = new Set<number>();
      for (const i of candidates) {
        if (set.has(i)) next.add(i);
      }
      candidates = next;
    }
    if (candidates.size === 0) return [];
  }

  const category = options?.category;
  const tags = options?.tags?.map((t) => t.toLowerCase());
  const includeNewlines = options?.includeNewlines;
  const scored: Array<{ doc: SearchDoc; score: number }> = [];

  for (const i of candidates!) {
    const doc = index.docs[i];
    const catalogItem = catalogById.get(doc.id);
    if (category && doc.category !== category) continue;
    if (tags && tags.length > 0) {
      const docTags = doc.tags ?? [];
      const tagHit = tags.some((t) => docTags.includes(t));
      const nlHit = includeNewlines && doc.face.includes("\n");
      if (!tagHit && !nlHit) continue;
    }
    if (
      catalogItem &&
      !passesSearchScope(catalogItem, { category, tags })
    ) {
      continue;
    }

    const words = doc.text.split(" ");
    let score = 0;
    let matched = true;
    for (const token of tokens) {
      const hit = scoreToken(words, token);
      if (hit === 0) {
        matched = false;
        break;
      }
      score += hit;
    }
    if (!matched) continue;
    if (doc.popular) score += 1;
    if (normalizeName(doc.name).includes(tokens[0])) score += 2;
    scored.push({ doc, score });
  }

  scored.sort(
    (a, b) => b.score - a.score || a.doc.name.localeCompare(b.doc.name),
  );
  return scored.slice(0, limit).map((entry) => entry.doc);
}