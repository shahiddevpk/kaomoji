"use client";

import { useCopy } from "@/components/kaomoji/copy-provider";

export function RecentlyCopied() {
  const { recent, flash, copy } = useCopy();

  if (recent.length === 0) {
    return null;
  }

  return (
    <section aria-label="Recently copied" className="mt-6">
      <h2 className="type-h2">Recently copied</h2>
      <p className="mt-1 type-meta text-muted">Tap a face to copy it again</p>
      <ul className="kaomoji-recent-list">
        {recent.map((item) => {
          const flashing = flash?.id === item.id ? flash : null;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-label={
                  flashing?.state === "copied"
                    ? "Copied"
                    : `Copy ${item.name} again`
                }
                data-copy-id={item.id}
                data-copy-face={item.face}
                data-copy-name={item.name}
                data-copied={flashing ? flashing.state : undefined}
                className="kaomoji-recent-chip"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  copy(item);
                }}
              >
                <span className="kaomoji-face kaomoji-recent-face" lang="ja">
                  {item.face}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}