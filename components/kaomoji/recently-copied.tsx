"use client";

import { useCopy } from "@/components/kaomoji/copy-provider";

export function RecentlyCopied() {
  const { recent } = useCopy();

  if (recent.length === 0) {
    return null;
  }

  return (
    <section aria-label="Recently copied" className="mt-6">
      <h2 className="type-h2">Recently copied</h2>
      <p className="mt-1 type-meta text-muted">Tap a face to copy it again</p>
      <ul className="kaomoji-recent-list">
        {recent.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              aria-label={`Copy ${item.name} again`}
              data-copy-id={item.id}
              data-copy-face={item.face}
              data-copy-name={item.name}
              className="kaomoji-recent-chip"
            >
              <span className="kaomoji-face kaomoji-recent-face" lang="ja">
                {item.face}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}