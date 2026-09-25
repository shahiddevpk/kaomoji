"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";

export type FaceLineMode = "all" | "multiline" | "single";

export type ToolbarFace = {
  id: string;
  face: string;
  name: string;
  /** Server-computed: real newline and/or multi-line tag. */
  multiline: boolean;
};

const chipBase =
  "inline-flex min-h-11 items-center justify-center rounded-full px-4 type-button transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
const chipActive = `${chipBase} border border-primary bg-primary font-semibold text-accent-foreground`;
const chipIdle = `${chipBase} border border-border bg-card text-foreground hover:border-primary hover:bg-hover`;

function filterFaces(items: ToolbarFace[], mode: FaceLineMode): ToolbarFace[] {
  if (mode === "all") return items;
  if (mode === "multiline") return items.filter((item) => item.multiline);
  return items.filter((item) => !item.multiline);
}

export function CategoryFacesToolbar({
  items,
  multilineTotal,
  total,
  safePage,
  rangeStart,
  rangeEnd,
  hideFilter = false,
  defaultMode = "all",
  renderPagination,
}: {
  items: ToolbarFace[];
  /** Multiline count across the full category/tag pool (not just this page). */
  multilineTotal: number;
  total: number;
  safePage: number;
  rangeStart: number;
  rangeEnd: number;
  /** Hide chips (e.g. on /multiline-kaomoji hub). */
  hideFilter?: boolean;
  defaultMode?: FaceLineMode;
  /** Fresh pagination node for top + bottom (avoid reusing one element twice). */
  renderPagination?: () => ReactNode;
}) {
  const [mode, setMode] = useState<FaceLineMode>(defaultMode);
  const showFilter = !hideFilter && multilineTotal > 0;

  const filtered = useMemo(() => filterFaces(items, mode), [items, mode]);

  const pageMultiline = useMemo(
    () => items.filter((item) => item.multiline).length,
    [items],
  );

  const showingLabel = useMemo(() => {
    if (mode === "all") {
      if (safePage > 1 && items.length > 0) {
        return `Showing ${rangeStart}-${rangeEnd} of ${total}`;
      }
      return `Showing ${items.length}${total > items.length ? ` of ${total}` : ""} faces`;
    }
    if (mode === "multiline") {
      return `Showing ${filtered.length} multiline on this page (${multilineTotal} in this set)`;
    }
    const singleTotal = Math.max(0, total - multilineTotal);
    return `Showing ${filtered.length} single-line on this page (${singleTotal} in this set)`;
  }, [
    mode,
    safePage,
    items.length,
    rangeStart,
    rangeEnd,
    total,
    filtered.length,
    multilineTotal,
  ]);

  const hint =
    mode === "all" && (total > items.length || safePage > 1)
      ? " - use search in the header for the full set"
      : mode === "all"
        ? " in this set"
        : "";

  const emptyMultilinePage =
    mode === "multiline" && filtered.length === 0 && multilineTotal > 0;

  const topPaging = renderPagination?.() ?? null;
  const bottomPaging = renderPagination?.() ?? null;

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

      {topPaging}

      <div className="mt-4">
        {emptyMultilinePage ? (
          <div className="rounded-2xl border border-dashed border-border bg-secondary/60 px-4 py-8 text-center">
            <p className="type-meta m-0 text-foreground">
              No multiline faces on this page ({pageMultiline} of {items.length}{" "}
              here), but {multilineTotal} multiline{" "}
              {multilineTotal === 1 ? "face" : "faces"} exist in this set.
            </p>
            <p className="mt-2 type-meta m-0">
              More multiline faces on other pages, or see the{" "}
              <Link
                href="/multiline-kaomoji"
                className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                multiline hub
              </Link>
              .
            </p>
          </div>
        ) : (
          <KaomojiGrid
            items={filtered}
            empty={
              mode === "single"
                ? "No single-line faces on this page."
                : "No faces for this page yet."
            }
          />
        )}
      </div>

      {bottomPaging}
    </>
  );
}