"use client";

import { useMemo, useState, type ReactNode } from "react";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";

export type FaceLineMode = "all" | "multiline" | "single";

export type ToolbarFace = {
  id: string;
  face: string;
  name: string;
  /** Server-computed: real newline in the face string. */
  multiline: boolean;
};

const chipBase =
  "inline-flex min-h-11 items-center justify-center rounded-full px-4 type-button transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
const chipActive = `${chipBase} border border-primary bg-primary font-semibold text-accent-foreground`;
const chipIdle = `${chipBase} border border-border bg-card text-foreground hover:border-primary hover:bg-hover`;

export function CategoryFacesToolbar({
  items,
  multilineItems,
  multilineTotal,
  total,
  safePage,
  rangeStart,
  rangeEnd,
  hideFilter = false,
  defaultMode = "all",
  pagination = null,
}: {
  /** Current SSR page slice (used for All / Single line). */
  items: ToolbarFace[];
  /**
   * Full multiline pool for this category/tag set (not just this page).
   * Multiline filter always renders from this list so page 2+ never goes empty.
   */
  multilineItems: ToolbarFace[];
  /** Multiline count across the full category/tag pool (not just this page). */
  multilineTotal: number;
  total: number;
  safePage: number;
  rangeStart: number;
  rangeEnd: number;
  /** Hide chips (e.g. on /multiline-kaomoji hub). */
  hideFilter?: boolean;
  defaultMode?: FaceLineMode;
  /** Shown once, below the face grid — only while mode is All. */
  pagination?: ReactNode;
}) {
  const [mode, setMode] = useState<FaceLineMode>(defaultMode);
  const singleTotal = Math.max(0, total - multilineTotal);
  /** Only when the set has both multiline and single-line faces. */
  const showFilter =
    !hideFilter && multilineTotal > 0 && singleTotal > 0;

  const filtered = useMemo(() => {
    if (mode === "all") return items;
    if (mode === "multiline") {
      // Multiline hub already SSR-paginates the multiline pool — keep the page slice.
      if (hideFilter) return items;
      return multilineItems;
    }
    // Single line: filter the current page slice (almost all faces are single).
    return items.filter((item) => !item.multiline);
  }, [items, multilineItems, mode, hideFilter]);

  const showingLabel = useMemo(() => {
    if (mode === "all") {
      if (safePage > 1 && items.length > 0) {
        return `Showing ${rangeStart}-${rangeEnd} of ${total}`;
      }
      return `Showing ${items.length}${total > items.length ? ` of ${total}` : ""} faces`;
    }
    if (mode === "multiline") {
      return `Showing ${filtered.length} multiline face${filtered.length === 1 ? "" : "s"}`;
    }
    return `Showing ${filtered.length} single-line on this page (${singleTotal} in this set)`;
  }, [
    mode,
    safePage,
    items.length,
    rangeStart,
    rangeEnd,
    total,
    filtered.length,
    singleTotal,
  ]);

  const hint =
    mode === "all" && (total > items.length || safePage > 1)
      ? " - use search in the header for the full set"
      : mode === "all"
        ? " in this set"
        : mode === "single"
          ? " - switch pages for more single-line faces"
          : "";

  return (
    <>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="type-meta m-0">
          {showingLabel}
          {hint}
        </p>
        {showFilter ? (
          <div
            role="group"
            aria-label="Filter by line style"
            className="flex flex-wrap gap-2"
          >
            {(
              [
                { id: "all", label: "All" },
                { id: "multiline", label: "Multiline" },
                { id: "single", label: "Single line" },
              ] as const
            ).map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={mode === chip.id ? chipActive : chipIdle}
                aria-pressed={mode === chip.id}
                onClick={() => setMode(chip.id)}
              >
                {chip.label}
                {chip.id === "multiline" ? (
                  <span className="ml-1.5 tabular-nums opacity-90">
                    ({multilineTotal})
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <KaomojiGrid
          items={filtered}
          empty={
            mode === "multiline"
              ? "No multiline faces in this set."
              : mode === "single"
                ? "No single-line faces on this page."
                : "No faces for this page yet."
          }
        />
      </div>

      {/* Server pagination only applies to the unfiltered All grid. */}
      {mode === "all" || hideFilter ? pagination : null}
    </>
  );
}
