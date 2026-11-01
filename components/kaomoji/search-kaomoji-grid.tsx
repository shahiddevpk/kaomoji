"use client";
import { island } from "@/lib/island";

import { KaomojiGridCore, type GridItem } from "@/components/kaomoji/kaomoji-grid-core";

/** Client chunk for search results only (main grids stay server-rendered). */
function SearchKaomojiGrid__impl({
  items,
  empty,
}: {
  items: Array<GridItem>;
  empty?: string;
}) {
  return <KaomojiGridCore items={items} empty={empty} />;
}

export { SearchKaomojiGrid__impl };
export const SearchKaomojiGrid = island("kaomoji/search-kaomoji-grid#SearchKaomojiGrid", SearchKaomojiGrid__impl);
