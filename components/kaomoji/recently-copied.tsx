"use client";

import { useCopy } from "@/components/kaomoji/copy-provider";

export function RecentlyCopied() {
  const { recent, copy } = useCopy();

  if (recent.length === 0) {
    return null;
  }

  return (
    <section aria-label="Recently copied" className="mt-6">
      <h2 className="type-label text-muted">Recently copied</h2>
      <ul className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin]">
        {recent.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => copy(item)}
              aria-label={`Copy ${item.name} again`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-secondary px-3 text-sm transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              <span className="kaomoji-face max-w-[12rem] truncate whitespace-nowrap !text-base !font-medium" lang="ja">
                {item.face}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}