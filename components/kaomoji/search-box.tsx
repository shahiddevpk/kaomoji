"use client";

import { HEADER_SEARCH_RESULTS_ID } from "@/components/kaomoji/search-constants";

export { HEADER_SEARCH_RESULTS_ID };

import {
  useEffect,
  useId,
  useState,
  useSyncExternalStore,
  useTransition,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchKaomojiGrid } from "@/components/kaomoji/search-kaomoji-grid";
import type { GridItem } from "@/components/kaomoji/kaomoji-grid-core";
import {
  searchFaces,
  type SearchHit,
  type SearchScope,
} from "@/lib/search/actions";
import { resolveSearchScope, searchPlaceholderForScope } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeNoop() {
  return () => {};
}

export function SearchBox({
  scope: scopeProp,
  placeholder: placeholderProp,
  variant = "page",
}: {
  scope?: SearchScope;
  placeholder?: string;
  /** page = inline results; header = compact input, results in #header-search-results */
  variant?: "page" | "header";
}) {
  const searchId = useId();
  const pathname = usePathname();
  const isHeader = variant === "header";
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const scope =
    scopeProp ?? (isHeader ? resolveSearchScope(pathname) : { path: "/" });
  const placeholder =
    placeholderProp ??
    (isHeader
      ? searchPlaceholderForScope(scope)
      : "Search faces, like cute, cry, or shrug");
  const scopedSearch = Boolean(scope.category || scope.tags);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchHit[]>([]);
  const [debouncing, setDebouncing] = useState(false);
  const [pending, startTransition] = useTransition();
  const path = scope.path;
  const category = scope.category;
  const tags = scope.tags;
  const trimmed = query.trim();
  const searching = trimmed.length >= 2;

  useEffect(() => {
    if (trimmed.length < 2) {
      setResults([]);
      setDebouncing(false);
      return;
    }

    setDebouncing(true);
    let cancelled = false;
    const handle = window.setTimeout(() => {
      startTransition(() => {
        void searchFaces(trimmed, { path, category, tags })
          .then((hits) => {
            if (!cancelled) {
              setResults(hits);
              setDebouncing(false);
            }
          })
          .catch(() => {
            if (!cancelled) {
              setResults([]);
              setDebouncing(false);
            }
          });
      });
    }, 180);

    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [trimmed, path, category, tags]);

  useEffect(() => {
    if (!isHeader || !searching) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setQuery("");
        setResults([]);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isHeader, searching]);

  const statusText =
    trimmed.length < 2
      ? ""
      : pending || debouncing
        ? "Searching..."
        : results.length === 0
          ? "0 matches"
          : `${results.length} ${results.length === 1 ? "match" : "matches"}`;

  const resultsBody = (
    <>
      {statusText ? (
        <p
          className={cn("type-meta", isHeader ? "px-1" : "mt-2")}
          aria-live="polite"
        >
          {statusText}
        </p>
      ) : null}
      {scopedSearch && trimmed.length >= 2 ? (
        <p className={cn("type-meta", isHeader ? "mt-1 px-1" : "mt-1")}>
          Results are limited to this page.{" "}
          <Link href="/" className="text-accent underline-offset-2 hover:underline">
            Search all faces
          </Link>
        </p>
      ) : null}
      <div className={cn("min-w-0", isHeader ? "mt-3" : "mt-4")}>
        <SearchKaomojiGrid
          items={results as GridItem[]}
          empty={pending ? "Searching..." : "No faces match that search."}
        />
      </div>
    </>
  );

  let headerPortal: ReactNode = null;
  if (isHeader && searching && mounted) {
    const slot = document.getElementById(HEADER_SEARCH_RESULTS_ID);
    if (slot) {
      headerPortal = createPortal(
        <section
          id={`${searchId}-results`}
          aria-labelledby={`${searchId}-results-heading`}
          className="border-t border-border px-0 pb-3 pt-3"
        >
          <h2 id={`${searchId}-results-heading`} className="type-h2">
            Matches
          </h2>
          {resultsBody}
        </section>,
        slot,
      );
    }
  }

  return (
    <div className="min-w-0">
      <form role="search" onSubmit={(event) => event.preventDefault()}>
        <label
          htmlFor={searchId}
          className={isHeader ? "sr-only" : "type-label"}
        >
          Search
        </label>
        <div className={cn("flex min-w-0 gap-2", isHeader ? "mt-0" : "mt-2")}>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setResults([]);
              if (event.target.value.trim().length >= 2) {
                setDebouncing(true);
              } else {
                setDebouncing(false);
              }
            }}
            placeholder={placeholder}
            autoCapitalize="none"
            autoCorrect="off"
            enterKeyHint="search"
            aria-label="Search kaomoji faces"
            aria-controls={
              isHeader && searching ? `${searchId}-results` : undefined
            }
            className="min-h-11 w-full min-w-0 rounded-full border border-border bg-card px-4 text-base text-foreground shadow-[var(--shadow-sm)] outline-none transition-colors focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              aria-label="Clear search"
              className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Clear
            </button>
          ) : null}
        </div>
      </form>

      {headerPortal}

      {!isHeader && searching ? (
        <section
          className="mt-4 min-w-0"
          aria-labelledby="search-results-heading"
        >
          <h2 id="search-results-heading" className="type-h2">
            Matches
          </h2>
          {resultsBody}
        </section>
      ) : null}
    </div>
  );
}