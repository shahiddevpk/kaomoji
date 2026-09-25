"use client";

import type { ReactNode } from "react";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";

export type ToolbarFace = {
  id: string;
  face: string;
  name: string;
};

export function CategoryFacesToolbar({
  items,
  total,
  safePage,
  rangeStart,
  rangeEnd,
  pagination = null,
}: {
  items: ToolbarFace[];
  total: number;
  safePage: number;
  rangeStart: number;
  rangeEnd: number;
  pagination?: ReactNode;
}) {
  const showingLabel =
    safePage > 1 && items.length > 0
      ? `Showing ${rangeStart}-${rangeEnd} of ${total}`
      : `Showing ${items.length}${total > items.length ? ` of ${total}` : ""} faces`;

  const hint =
    total > items.length || safePage > 1
      ? " — use search in the header for the full set"
      : " in this set";

  return (
    <>
      <p className="mt-2 type-meta m-0">
        {showingLabel}
        {hint}
      </p>
      <div className="mt-4">
        <KaomojiGrid items={items} />
      </div>
      {pagination}
    </>
  );
}
