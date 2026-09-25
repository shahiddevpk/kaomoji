import type { Kaomoji } from "@/data/types";
import raw from "@/data/items.json";

function normalizeFace(face: string): string {
  let s = face.replaceAll("\\n", "\n");
  s = s.replace(
    /&(#x[0-9a-fA-F]+|#\d+|quot|amp|lt|gt|apos);/g,
    (match, ent: string) => {
      if (ent.startsWith("#x")) {
        const code = Number.parseInt(ent.slice(2), 16);
        return Number.isFinite(code) ? String.fromCodePoint(code) : match;
      }
      if (ent.startsWith("#")) {
        const code = Number.parseInt(ent.slice(1), 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : match;
      }
      const named: Record<string, string> = {
        quot: '"',
        amp: "&",
        lt: "<",
        gt: ">",
        apos: "'",
      };
      return named[ent] ?? match;
    },
  );
  // Legacy numeric/named forms not caught above (e.g. &#39;).
  return s
    .replaceAll("&#39;", "'")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&");
}

/** Catalog with multiline faces decoded for render + copy. */
export const kaomoji = (raw as Kaomoji[]).map((item) => ({
  ...item,
  face: normalizeFace(item.face),
}));
