import type { SearchDoc } from "@/data/index";

export type { SearchDoc };

function normalize(value: string): string {
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

/** Lightweight client-safe search over name/tags/aliases/categories docs. */
export function searchDocs(
  docs: SearchDoc[],
  query: string,
  limit = 48,
): SearchDoc[] {
  const tokens = normalize(query)
    .split(" ")
    .filter((token) => token.length >= 2);
  if (tokens.length === 0) return [];

  const scored: Array<{ doc: SearchDoc; score: number }> = [];
  for (const doc of docs) {
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
    if (normalize(doc.name).includes(tokens[0])) score += 2;
    scored.push({ doc, score });
  }

  scored.sort(
    (a, b) => b.score - a.score || a.doc.name.localeCompare(b.doc.name),
  );
  return scored.slice(0, limit).map((entry) => entry.doc);
}

export function tokenize(query: string): string[] {
  return normalize(query)
    .split(" ")
    .filter((token) => token.length >= 2);
}
