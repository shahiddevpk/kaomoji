import { KaomojiGridCore, type GridItem } from "@/components/kaomoji/kaomoji-grid-core";

export type { GridItem };

export function KaomojiGrid({
  items,
  empty,
}: {
  items: Array<GridItem>;
  empty?: string;
}) {
  return <KaomojiGridCore items={items} empty={empty} />;
}
