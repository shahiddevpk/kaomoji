"use server";

import type { SearchDoc } from "@/data/index";
import { searchIndexed } from "@/lib/search/index-engine";

export type SearchScope = {
  path: string;
  category?: string;
};

export type SearchHit = Pick<SearchDoc, "id" | "face" | "name">;

/** Server-side face search — keeps the 24k catalog off the client bundle. */
export async function searchFaces(
  query: string,
  scope: SearchScope,
): Promise<SearchHit[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  if (scope.category) {
    return searchIndexed(trimmed, { category: scope.category }).map((doc) => ({
      id: doc.id,
      face: doc.face,
      name: doc.name,
    }));
  }

  if (scope.path === "/" || scope.path === "/kaomoji-copy-paste") {
    return searchIndexed(trimmed).map((doc) => ({
      id: doc.id,
      face: doc.face,
      name: doc.name,
    }));
  }

  return [];
}