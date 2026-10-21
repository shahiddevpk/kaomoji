import type { CollectionKey } from "@/data/collections";
import type { SearchScope } from "@/lib/search/actions";
import type { NavPage } from "@/lib/site";

/**
 * Client-safe search scope helpers. They work on the slim NavPage list the
 * layout passes down, so client bundles never import lib/site.ts (all page copy).
 */

/** Pages that render a curated collection instead of catalog faces. */
const COLLECTION_PATHS: Record<string, CollectionKey> = {
  "/emoticons": "emoticons",
  "/cute-symbols": "cute-symbols",
  "/emoji-combos": "emoji-combos",
};

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

/** Placeholder copy for header search when scoped to a category or tag page. */
export function searchPlaceholderForScope(
  scope: SearchScope,
  pages: NavPage[],
): string {
  if (scope.collection) {
    const page = pages.find((item) => item.path === scope.path);
    return page ? `Search within ${page.label}` : "Search this page";
  }
  if (!scope.category && !scope.tags) {
    return "Search faces, like cute, cry, or shrug";
  }
  const page = pages.find((item) => item.path === scope.path);
  if (page) return `Search within ${page.label}`;
  return "Search faces on this page";
}

/** Header search scope from the current pathname (longest path match). */
export function resolveSearchScope(
  pathname: string,
  pages: NavPage[],
): SearchScope {
  const normalized = normalizePathname(pathname);

  const exact = pages.find((item) => item.path === normalized);
  const page =
    exact ??
    [...pages]
      .filter((item) => item.path !== "/")
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => normalized.startsWith(`${item.path}/`));

  if (!page || page.group === "trust") {
    return { path: "/" };
  }

  if (page.tags && page.tags.length > 0) {
    return {
      path: page.path,
      tags: page.tags,
    };
  }

  if (page.category) {
    return { path: page.path, category: page.category };
  }

  const collection = COLLECTION_PATHS[page.path];
  if (collection) {
    return { path: page.path, collection };
  }

  return { path: page.path };
}
