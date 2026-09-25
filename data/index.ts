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
  /** Primary category id - used for scoped search without rebuilding docs. */
  category: string;
  /** Lowercased tags for tag-scoped search. */
  tags: string[];
};

/** Max faces rendered in a category grid (full set stays searchable). */
export const PAGE_GRID_LIMIT = 96;

/** SEO depth cap: crawlable /page/n stops here; remainder is search-only. */
export const MAX_PAGINATION_PAGES = 15;

/** Max faces listed in ItemList JSON-LD (matches PAGE_GRID_LIMIT / visible page-1 grid). */
export const ITEM_LIST_LIMIT = 96;

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

/** Tag-page search phrase boosts (any matching tag pulls these phrases into the doc). */
const TAG_SEARCH: Record<string, string[]> = {
  angry: ["angry kaomoji", "kaomoji angry", "mad kaomoji", "angry face"],
  tableflip: ["table flip kaomoji", "tableflip", "flip table", "table flip"],
  "table flip": ["table flip kaomoji", "tableflip", "flip table"],
  fight: ["fight kaomoji", "punch kaomoji", "fighting kaomoji"],
  punch: ["punch kaomoji", "fight kaomoji"],
  hit: ["hit kaomoji", "punch kaomoji"],
  rage: ["rage kaomoji", "mad kaomoji", "furious kaomoji"],
  mad: ["mad kaomoji", "rage kaomoji"],
  pout: ["pout kaomoji", "hmph kaomoji", "annoyed kaomoji"],
  hmph: ["hmph kaomoji", "pout kaomoji"],
  annoyed: ["annoyed kaomoji", "pout kaomoji"],
  glare: ["glare kaomoji", "grr kaomoji", "gununu"],
  grr: ["grr kaomoji", "glare kaomoji"],
  gununu: ["gununu", "glare kaomoji"],
  "multi-line": [
    "multiline kaomoji",
    "multi-line kaomoji",
    "ascii art kaomoji",
    "ascii art faces",
  ],
  multiline: ["multiline kaomoji", "multi-line kaomoji", "ascii art"],
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

function normalizeTag(tag: string): string {
  return tag.toLowerCase().trim();
}


const MULTILINE_TAGS = new Set(["multi-line", "multiline"]);

/** True when face has a real newline (post-normalize) or a multi-line / multiline tag. */
export function isMultilineFace(
  item: Pick<Kaomoji, "face" | "tags">,
): boolean {
  if (item.face.includes("\n")) return true;
  return item.tags.some((tag) => MULTILINE_TAGS.has(normalizeTag(tag)));
}

/** Count multiline faces in an already-loaded list. */
export function countMultilineIn(items: readonly Kaomoji[]): number {
  let count = 0;
  for (const item of items) {
    if (isMultilineFace(item)) count += 1;
  }
  return count;
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

/** ANY-tag match. Optionally also include faces with a real newline. */
export function getByTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): Kaomoji[] {
  const wanted = new Set(tags.map(normalizeTag));
  return catalog.filter((item) => {
    if (item.tags.some((tag) => wanted.has(normalizeTag(tag)))) return true;
    if (options?.includeNewlines && item.face.includes("\n")) return true;
    return false;
  });
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

/** Faces shown in the page grid (capped). Optional 1-indexed page. */
export function getForPage(input: {
  path: string;
  category?: string;
  tags?: string[];
  includeNewlineFaces?: boolean;
  page?: number;
}): Kaomoji[] {
  if (input.tags && input.tags.length > 0) {
    return getForTagPage(input.tags, input.page ?? 1, {
      includeNewlines: input.includeNewlineFaces,
    });
  }
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
  tags?: string[];
  includeNewlineFaces?: boolean;
}): Kaomoji[] {
  if (input.tags && input.tags.length > 0) {
    return getByTags(input.tags, { includeNewlines: input.includeNewlineFaces });
  }
  if (input.category) {
    return getByCategory(input.category, { primaryOnly: true });
  }
  if (input.path === "/" || input.path === "/kaomoji-copy-paste") {
    return catalog;
  }
  return [];
}


/** Multiline count for a category/tag page pool (full set, not page slice). */
export function countMultilineForPage(input: {
  path: string;
  category?: string;
  tags?: string[];
  includeNewlineFaces?: boolean;
}): number {
  return countMultilineIn(getSearchPoolForPage(input));
}


export function catalogSize(): number {
  return catalog.length;
}

/** Cheap primary-category (default) or any-category count - no array allocation. */
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

export function countByTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): number {
  const wanted = new Set(tags.map(normalizeTag));
  let count = 0;
  for (const item of catalog) {
    if (item.tags.some((tag) => wanted.has(normalizeTag(tag)))) {
      count += 1;
      continue;
    }
    if (options?.includeNewlines && item.face.includes("\n")) {
      count += 1;
    }
  }
  return count;
}

export function buildSearchDocs(items: Kaomoji[] = catalog): SearchDoc[] {
  return items.map((item) => {
    const primary = item.categories[0] ?? "";
    const library = item.popular ? LIBRARY_SEARCH : ["kaomoji"];
    const tagBoosts = new Set<string>();
    for (const tag of item.tags) {
      const phrases = TAG_SEARCH[normalizeTag(tag)];
      if (phrases) {
        for (const phrase of phrases) tagBoosts.add(phrase);
      }
    }
    const text = [
      item.name,
      item.id.replace(/-/g, " "),
      ...item.categories,
      ...item.tags,
      ...item.aliases,
      ...(CATEGORY_SEARCH[primary] ?? []),
      ...tagBoosts,
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
      tags: item.tags.map(normalizeTag),
    };
  });
}

export function pageCountForCategory(id: string): number {
  const total = countByCategory(id);
  return Math.max(1, Math.ceil(total / PAGE_GRID_LIMIT));
}

export function pageCountForTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): number {
  const total = countByTags(tags, options);
  return Math.max(1, Math.ceil(total / PAGE_GRID_LIMIT));
}

/** Crawlable page count capped for SEO depth (not full ceil). */
export function crawlablePageCountForCategory(id: string): number {
  return Math.min(MAX_PAGINATION_PAGES, pageCountForCategory(id));
}

export function crawlablePageCountForTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): number {
  return Math.min(MAX_PAGINATION_PAGES, pageCountForTags(tags, options));
}

/** Module-level memo: fully ranked category pools (rank once, slice per page). */
const rankedCategoryPool = new Map<string, Kaomoji[]>();

/** Module-level memo: fully ranked tag pools (rank once, slice per page). */
const rankedTagPool = new Map<string, Kaomoji[]>();

function rankedPoolForCategory(categoryId: string): Kaomoji[] {
  let pool = rankedCategoryPool.get(categoryId);
  if (!pool) {
    pool = rankForGrid(getByCategory(categoryId, { primaryOnly: true }));
    rankedCategoryPool.set(categoryId, pool);
  }
  return pool;
}

function tagPoolKey(
  tags: string[],
  options?: { includeNewlines?: boolean },
): string {
  const normalized = tags.map(normalizeTag).sort().join("\0");
  return `${normalized}|${options?.includeNewlines ? "1" : "0"}`;
}

function rankedPoolForTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): Kaomoji[] {
  const key = tagPoolKey(tags, options);
  let pool = rankedTagPool.get(key);
  if (!pool) {
    pool = rankForGrid(getByTags(tags, options));
    rankedTagPool.set(key, pool);
  }
  return pool;
}

/** 1-indexed page slice for a primary category. */
export function getForCategoryPage(categoryId: string, page: number): Kaomoji[] {
  const safe = Math.max(1, Math.floor(page));
  const start = (safe - 1) * PAGE_GRID_LIMIT;
  return rankedPoolForCategory(categoryId).slice(
    start,
    start + PAGE_GRID_LIMIT,
  );
}

/** 1-indexed page slice for a tag filter. */
export function getForTagPage(
  tags: string[],
  page: number,
  options?: { includeNewlines?: boolean },
): Kaomoji[] {
  const safe = Math.max(1, Math.floor(page));
  const start = (safe - 1) * PAGE_GRID_LIMIT;
  return rankedPoolForTags(tags, options).slice(
    start,
    start + PAGE_GRID_LIMIT,
  );
}
