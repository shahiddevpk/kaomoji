import type { Kaomoji } from "@/data/types";
import raw from "@/data/items.json";

function normalizeFace(face: string): string {
  return face
    .replaceAll("\\n", "\n")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&");
}

/** Catalog with multiline faces decoded for render + copy. */
export const kaomoji = (raw as Kaomoji[]).map((item) => ({
  ...item,
  face: normalizeFace(item.face),
}));
