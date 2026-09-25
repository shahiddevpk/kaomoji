"use client";

import dynamic from "next/dynamic";

/** Chrome-only islands (not face HTML). Faces stay in SSR KaomojiGrid. */
export const LazyRecentlyCopied = dynamic(
  () =>
    import("@/components/kaomoji/recently-copied").then(
      (m) => m.RecentlyCopied,
    ),
  { ssr: false },
);
