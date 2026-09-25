import type { Kaomoji } from "@/data/types";
import { CopyButton } from "@/components/kaomoji/copy-button";

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
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border px-4 py-8 type-meta">
        {empty}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {items.map((item) => {
        const tall = isTall(item);
        return (
          <li key={item.id}>
            <article
              className={
                tall
                  ? "kaomoji-card flex h-full min-h-[10.5rem] flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-sm)] transition-colors hover:border-primary/50 hover:bg-hover/50 focus-within:border-primary focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring sm:min-h-[12rem] sm:gap-3 sm:p-4"
                  : "kaomoji-card flex h-full min-h-[8.75rem] flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-sm)] transition-colors hover:border-primary/50 hover:bg-hover/50 focus-within:border-primary focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring sm:min-h-[9.5rem] sm:gap-3 sm:p-4"
              }
            >
              <p
                className={
                  tall
                    ? "kaomoji-face flex min-h-14 flex-1 items-start justify-center select-all py-1 text-center"
                    : "kaomoji-face flex min-h-11 flex-1 items-center justify-center select-all text-center"
                }
                lang="ja"
              >
                {item.face}
              </p>
              <div className="mt-auto flex justify-center">
                <CopyButton
                  id={item.id}
                  face={item.face}
                  name={item.name}
                  className="w-full min-w-11"
                />
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}