import type { Kaomoji } from "@/data/types";
import { copyAriaLabel, faceLangAttr } from "@/lib/utils";

export type GridItem = Pick<Kaomoji, "id" | "face" | "name"> &
  Partial<Kaomoji> & { multiline?: boolean; caption?: string; wide?: boolean };

function isTall(item: GridItem): boolean {
  if (item.multiline === true) return true;
  return item.face.includes("\n");
}

/** Static grid — copy handled by document delegation in copy-provider (no per-card hydration). */
export function KaomojiGridCore({
  items,
  empty = "No faces for this page yet.",
  compact = false,
}: {
  items: Array<GridItem>;
  empty?: string;
  /** Denser grid for single symbols. */
  compact?: boolean;
}) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-secondary/60 px-4 py-8 text-center type-meta">
        {empty}
      </p>
    );
  }

  return (
    <ul className={compact ? "kaomoji-grid kaomoji-grid--compact" : "kaomoji-grid"}>
      {items.map((item) => {
        const tall = isTall(item);
        const faceId = `face-${item.id}`;
        return (
          <li key={item.id} className={item.wide ? "kaomoji-cell--wide" : undefined}>
            <article
              className={
                tall ? "kaomoji-card kaomoji-card--tall" : "kaomoji-card"
              }
            >
              <p
                id={faceId}
                className={
                  tall ? "kaomoji-face kaomoji-face--tall" : "kaomoji-face"
                }
                lang={faceLangAttr(item.face)}
              >
                {item.face}
              </p>
              {item.caption ? (
                <p className="kaomoji-caption">{item.caption}</p>
              ) : null}
              <button
                type="button"
                className="kaomoji-fav"
                aria-pressed="false"
                aria-label={`Add ${item.name} to favorites`}
                data-fav-id={item.id}
                data-fav-name={item.name}
                data-fav-face={item.face}
              >
                ☆
              </button>
              <button
                type="button"
                className="kaomoji-copy"
                aria-label={copyAriaLabel(item.face, item.name)}
                aria-describedby={faceId}
                data-copy-id={item.id}
                data-copy-name={item.name}
                data-copy-face={item.face}
              >
                Copy
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
