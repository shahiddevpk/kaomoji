"use client";

import { KaomojiGridCore, type GridItem } from "@/components/kaomoji/kaomoji-grid-core";

/** Client chunk for search results only (main grids stay server-rendered). */
export function SearchKaomojiGrid({
  items,
  empty,
}: {
  items: Array<GridItem>;
  empty?: string;
}) {
  return <KaomojiGridCore items={items} empty={empty} />;
}
