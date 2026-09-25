import { kaomoji as catalog } from "@/data/items";
import type { Kaomoji } from "@/data/types";

export type { Kaomoji } from "@/data/types";
export { kaomoji } from "@/data/items";

export type SearchDoc = {
  id: string;
  face: string;
  name: string;
  text: string;
  popular: boolean;
  /** Primary category id â€” used for scoped search without rebuilding docs. */
  category: string;
};

/** Max faces rendered in a category grid (full set stays searchable). */
export const PAGE_GRID_LIMIT = 96;

/** SEO depth cap: crawlable /page/n stops here; remainder is search-only. */
export const MAX_PAGINATION_PAGES = 15;

/** Max faces listed in ItemList JSON-LD. */
export const ITEM_LIST_LIMIT = 48;

/** Research-backed phrases attached per primary category (not routes). */
const CATEGORY_SEARCH: Record<string, string[]> = {
  cute: [
    "cute kaomoji",
    "kaomoji cute",
    "kawaii",
    "kawaii kaomoji",
    "kawaii emoticons",
    "aesthetic kaomoji",
  ],
  happy: [
    "happy kaomoji",
    "kaomoji happy",
    "smiling kaomoji",
    "kaomoji smiling",
    "excited kaomoji",
  ],
  cat: ["cat kaomoji", "neko", "nyanko", "catmoji", "kitty", "kitten"],
  sad: ["sad kaomoji", "kaomoji sad", "sad kamoji"],
  crying: [
    "crying kaomoji",
    "cry kaomoji",
    "kaomoji cry",
    "kaomoji crying",
    "sob",
  ],
  japanese: [
    "japanese emoticons",
    "japanese kaomoji",
    "kaomoji japanese",
    "japan kaomoji",
  ],
  "text-faces": ["text faces", "kaomoji faces", "kaomoji face", "shrug kaomoji"],
};

const LIBRARY_SEARCH = [
  "kaomoji",
  "kaomojis",
  "kamoji",
  "koamoji",
  "kaimoji",
  "kaamoji",
  "kaomoji copy and paste",
  "copy and paste kaomoji",
  "kaomoji copy paste",
  "copy paste",
];

function rankForGrid(items: Kaomoji[]): Kaomoji[] {
  const popular = items.filter((item) => item.popular);
  const rest = items.filter((item) => !item.popular);
  return [...popular, ...rest];
}

export function getByCategory(
  id: string,
  options?: { primaryOnly?: boolean },
): Kaomoji[] {
  const primaryOnly = options?.primaryOnly ?? true;
  return catalog.filter((item) =>
    primaryOnly
      ? item.categories[0] === id
      : item.categories.includes(id),
  );
}

export function getPopular(): Kaomoji[] {
  return catalog.filter((item) => item.popular);
}

export function getRelatedKaomoji(
  input: string[] | Kaomoji,
  limit = 8,
): Kaomoji[] {
  const categories = Array.isArray(input)
    ? input
    : input.categories.slice(1).length > 0
      ? input.categories.slice(1)
      : [];
  if (categories.length === 0) return [];
  const exclude = Array.isArray(input) ? new Set<string>() : new Set([input.id]);
  const wanted = new Set(categories);
  const pool = catalog.filter(
    (item) => !exclude.has(item.id) && wanted.has(item.categories[0]),
  );
  return rankForGrid(pool).slice(0, limit);
}

/** Faces shown in the page grid (capped for category pages). Optional 1-indexed page. */
export function getForPage(input: {
  path: string;
  category?: string;
  page?: number;
}): Kaomoji[] {
  if (input.category) {
    return getForCategoryPage(input.category, input.page ?? 1);
  }
  if (input.path === "/" || input.path === "/kaomoji-copy-paste") {
    return getPopular().slice(0, PAGE_GRID_LIMIT);
  }
  return [];
}

/** Full pool used for in-page search docs (uncapped within scope). */
export function getSearchPoolForPage(input: {
  path: string;
  category?: string;
}): Kaomoji[] {
  if (input.category) {
    return getByCategory(input.category, { primaryOnly: true });
  }
  if (input.path === "/" || input.path === "/kaomoji-copy-paste") {
    return catalog;
  }
  return [];
}

export function catalogSize(): number {
  return catalog.length;
}

/** Cheap primary-category (default) or any-category count â€” no array allocation. */
export function countByCategory(
  id: string,
  options?: { primaryOnly?: boolean },
): number {
  const primaryOnly = options?.primaryOnly ?? true;
  let count = 0;
  for (const item of catalog) {
    if (primaryOnly) {
      if (item.categories[0] === id) count += 1;
    } else if (item.categories.includes(id)) {
      count += 1;
    }
  }
  return count;
}

export function buildSearchDocs(items: Kaomoji[] = catalog): SearchDoc[] {
  return items.map((item) => {
    const primary = item.categories[0] ?? "";
    // LIBRARY_SEARCH only on popular faces to keep client payloads lean at 7k+.
    const library = item.popular ? LIBRARY_SEARCH : ["kaomoji"];
    const text = [
      item.name,
      item.id.replace(/-/g, " "),
      ...item.categories,
      ...item.tags,
      ...item.aliases,
      ...(CATEGORY_SEARCH[primary] ?? []),
      ...library,
    ]
      .join(" ")
      .toLowerCase()
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return {
      id: item.id,
      face: item.face,
      name: item.name,
      text,
      popular: Boolean(item.popular),
      category: primary,
    };
  });
}

export function pageCountForCategory(id: string): number {
  const total = countByCategory(id);
  return Math.max(1, Math.ceil(total / PAGE_GRID_LIMIT));
}

/** Crawlable page count capped for SEO depth (not full ceil). */
export function crawlablePageCountForCategory(id: string): number {
  return Math.min(MAX_PAGINATION_PAGES, pageCountForCategory(id));
}

/** 1-indexed page slice for a primary category. */
export function getForCategoryPage(categoryId: string, page: number): Kaomoji[] {
  const safe = Math.max(1, Math.floor(page));
  const start = (safe - 1) * PAGE_GRID_LIMIT;
  return rankForGrid(getByCategory(categoryId, { primaryOnly: true })).slice(
    start,
    start + PAGE_GRID_LIMIT,
  );
}
