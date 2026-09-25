"use client";

import type { Kaomoji } from "@/data/types";
import { useCopy } from "@/components/kaomoji/copy-provider";

type GridItem = Pick<Kaomoji, "id" | "face" | "name"> &
  Partial<Kaomoji> & { multiline?: boolean };

function isTall(item: GridItem): boolean {
  if (item.multiline === true) return true;
  return item.face.includes("\n");
}

export function KaomojiGrid({
  items,
  empty = "No faces for this page yet.",
}: {
  items: Array<GridItem>;
  empty?: string;
}) {
  const { flash, copy } = useCopy();

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-secondary/60 px-4 py-8 text-center type-meta">
        {empty}
      </p>
    );
  }

  return (
    <ul className="kaomoji-grid">
      {items.map((item) => {
        const tall = isTall(item);
        const flashing = flash?.id === item.id ? flash : null;
        return (
          <li key={item.id}>
            <article
              className={
                tall ? "kaomoji-card kaomoji-card--tall" : "kaomoji-card"
              }
            >
              <p
                className={
                  tall ? "kaomoji-face kaomoji-face--tall" : "kaomoji-face"
                }
                lang="ja"
              >
                {item.face}
              </p>
              <button
                type="button"
                className="kaomoji-copy"
                aria-label={
                  flashing
                    ? flashing.state === "copied"
                      ? "Copied"
                      : "Copy failed"
                    : `Copy ${item.name}`
                }
                aria-live={flashing ? "polite" : undefined}
                data-copy-id={item.id}
                data-copy-name={item.name}
                data-copied={flashing ? flashing.state : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  copy({ id: item.id, face: item.face, name: item.name });
                }}
              >
                {flashing ? flashing.label : "Copy"}
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
}