"use client";

import { useCopy } from "@/components/kaomoji/copy-provider";

export function CopiedToast() {
  const { notice } = useCopy();

  return (
    <div
      className="pointer-events-none fixed bottom-4 left-1/2 z-20 mb-[env(safe-area-inset-bottom,0px)] flex min-h-11 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-center"
      aria-hidden={!notice}
    >
      <p
        role="status"
        aria-live="polite"
        className={
          notice
            ? "rounded-full border border-success/30 bg-success px-4 py-3 type-button text-success-foreground shadow-[var(--shadow-sm)]"
            : "sr-only"
        }
      >
        {notice || "Ready to copy"}
      </p>
    </div>
  );
}