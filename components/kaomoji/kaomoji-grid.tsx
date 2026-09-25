import type { Kaomoji } from "@/data/types";
import { CopyButton } from "@/components/kaomoji/copy-button";

export function KaomojiGrid({
  items,
  empty = "No faces for this page yet.",
}: {
  items: Array<Pick<Kaomoji, "id" | "face" | "name"> & Partial<Kaomoji>>;
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
      {items.map((item) => (
        <li key={item.id}>
          <article className="flex h-full min-h-[8.75rem] flex-col gap-2 rounded-2xl border border-border/80 bg-card p-3 shadow-[var(--shadow-sm)] transition-colors hover:border-primary/40 sm:min-h-[9.5rem] sm:gap-3 sm:p-4">
            <p
              className="kaomoji-face flex min-h-11 flex-1 items-center justify-center select-all text-center"
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
      ))}
    </ul>
  );
}