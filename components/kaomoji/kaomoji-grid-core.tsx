import type { Kaomoji } from "@/data/types";
import { copyAriaLabel, faceLangAttr } from "@/lib/utils";

export type GridItem = Pick<Kaomoji, "id" | "face" | "name"> &
  Partial<Kaomoji> & { multiline?: boolean };

function isTall(item: GridItem): boolean {
  if (item.multiline === true) return true;
  return item.face.includes("\n");
}

/** Static grid — copy handled by document delegation in copy-provider (no per-card hydration). */
export function KaomojiGridCore({
  items,
  empty = "No faces for this page yet.",
}: {
  items: Array<GridItem>;
  empty?: string;
}) {
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
        const faceId = `face-${item.id}`;
        return (
          <li key={item.id}>
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
