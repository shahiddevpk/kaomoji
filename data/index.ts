import {
  passesCategoryIntegrity,
  passesTagIntegrity,
} from "@/data/category-integrity";
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
  "text-faces": [
    "text faces",
    "lenny face",
    "lenny",
    "shrug",
    "shrug face",
    "disapproval face",
    "kaomoji faces",
  ],
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

function normalizeTag(tag: string): string {
  return tag.toLowerCase().trim();
}

/** Lead-order buckets: lower sorts earlier. Popular still wins within bias. */
type RankOptions = {
  demoteTags?: string[];
  preferTags?: string[];
  /** Substrings in face text that force demotion (glyph-level specialty leak). */
  demoteFaceIncludes?: string[];
  /** Substrings in face text that boost lead order (e.g. teddy ears on bear). */
  preferFaceIncludes?: string[];
};

function leadBucket(item: Kaomoji, options?: RankOptions): number {
  const tags = item.tags.map(normalizeTag);
  const demote = new Set((options?.demoteTags ?? []).map(normalizeTag));
  const prefer = new Set((options?.preferTags ?? []).map(normalizeTag));
  const faceDemoted =
    (options?.demoteFaceIncludes ?? []).some((needle) =>
      item.face.includes(needle),
    );
  const demoted =
    faceDemoted ||
    (demote.size > 0 && tags.some((t) => demote.has(t)));
  const facePreferred =
    (options?.preferFaceIncludes ?? []).some((needle) =>
      item.face.includes(needle),
    );
  const preferred =
    facePreferred ||
    (prefer.size > 0 && tags.some((t) => prefer.has(t)));
  // Intent-first: keep demoted cross-mood faces behind ALL on-intent faces
  // (popular and not), so angry page-1 is not oraora-dominated when few
  // pure-angry faces are flagged popular. Faces stay on the page (no thinning).
  if (preferred && item.popular && !demoted) return 0;
  if (item.popular && !demoted) return 1;
  if (preferred && !demoted) return 2;
  if (!demoted) return 3;
  if (preferred && item.popular) return 4;
  if (item.popular) return 5;
  if (preferred) return 6;
  return 7;
}

function rankForGrid(items: Kaomoji[], options?: RankOptions): Kaomoji[] {
  return [...items].sort(
    (a, b) => leadBucket(a, options) - leadBucket(b, options),
  );
}

/** Stable rotate so category first screens differ from hub popular stack. */
function rotatePopularFirst(items: Kaomoji[], offset: number): Kaomoji[] {
  if (offset <= 0 || items.length < 2) return items;
  const popular = items.filter((item) => item.popular);
  const rest = items.filter((item) => !item.popular);
  if (popular.length < 2) return items;
  const o = offset % popular.length;
  return [...popular.slice(o), ...popular.slice(0, o), ...rest];
}



/**
 * True only when the face has a real line break (after normalizeFace).
 * Do not trust multi-line / multiline tags alone — the catalog tags some
 * single-line faces as both multi-line and single-line, which mixed filters.
 */
export function isMultilineFace(
  item: Pick<Kaomoji, "face" | "tags">,
): boolean {
  return item.face.includes("\n") || item.face.includes("\r");
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
  return catalog.filter((item) => {
    const inCategory = primaryOnly
      ? item.categories[0] === id
      : item.categories.includes(id);
    if (!inCategory) return false;
    return passesCategoryIntegrity(item, id);
  });
}


/**
 * Hard mood walls for tag pages: never show happy-primary faces on angry-family
 * grids (angry / table-flip / fight / pout). Shared tags alone used to leak them
 * (e.g. cheer "fight"/ganbare faces on /fight-kaomoji, mis-tagged happy on angry).
 */
function excludeCategoriesForTags(tags: string[]): string[] | undefined {
  const normalized = tags.map(normalizeTag);
  const angryFamily = normalized.some(
    (t) =>
      t === "angry" ||
      t === "tableflip" ||
      t === "table flip" ||
      t === "fight" ||
      t === "punch" ||
      t === "hit" ||
      t === "pout" ||
      t === "hmph" ||
      t === "annoyed" ||
      t === "rage" ||
      t === "glare",
  );
  if (angryFamily) return ["happy"];
  return undefined;
}

function categoryExcluded(
  item: Kaomoji,
  excludeCategories?: string[],
): boolean {
  if (!excludeCategories || excludeCategories.length === 0) return false;
  const excl = new Set(excludeCategories.map(normalizeTag));
  return item.categories.some((c) => excl.has(normalizeTag(c)));
}

/** ANY-tag match. Optionally also include faces with a real newline. */
export function getByTags(
  tags: string[],
  options?: { includeNewlines?: boolean; excludeCategories?: string[] },
): Kaomoji[] {
  const wanted = new Set(tags.map(normalizeTag));
  const excludeCategories = [
    ...(options?.excludeCategories ?? []),
    ...(excludeCategoriesForTags(tags) ?? []),
  ];
  return catalog.filter((item) => {
    if (categoryExcluded(item, excludeCategories)) return false;
    if (!passesTagIntegrity(item, tags)) return false;
    if (item.tags.some((tag) => wanted.has(normalizeTag(tag)))) return true;
    if (options?.includeNewlines && (item.face.includes("\n") || item.face.includes("\r"))) return true;
    return false;
  });
}

export function getPopular(): Kaomoji[] {
  return catalog.filter((item) => item.popular);
}

export function countPopular(): number {
  let count = 0;
  for (const item of catalog) {
    if (item.popular) count += 1;
  }
  return count;
}

/**
 * Hub vs /kaomoji-copy-paste/ both show PAGE_GRID_LIMIT popular faces in SSR HTML,
 * but leading order differs via a stable rotate so the two URLs are not identical grids.
 * Same pool, same count, no cloaking — ItemList/HTML order match getForPage.
 */
function popularGridForPath(path: string): Kaomoji[] {
  const popular = getPopular();
  // Hub, utility, and happy must not share an identical first-screen stack.
  if (path === "/kaomoji-copy-paste") {
    const offset = Math.min(PAGE_GRID_LIMIT, Math.max(0, popular.length - 1));
    const rotated =
      offset === 0
        ? popular
        : [...popular.slice(offset), ...popular.slice(0, offset)];
    return rotated.slice(0, PAGE_GRID_LIMIT);
  }
  if (path === "/happy-kaomoji") {
    const offset = Math.min(20, Math.max(0, popular.length - 1));
    const rotated =
      offset === 0
        ? popular
        : [...popular.slice(offset), ...popular.slice(0, offset)];
    return rotated.slice(0, PAGE_GRID_LIMIT);
  }
  return popular.slice(0, PAGE_GRID_LIMIT);
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
    return popularGridForPath(input.path);
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
    const inCategory = primaryOnly
      ? item.categories[0] === id
      : item.categories.includes(id);
    if (!inCategory) continue;
    if (!passesCategoryIntegrity(item, id)) continue;
    count += 1;
  }
  return count;
}

export function countByTags(
  tags: string[],
  options?: { includeNewlines?: boolean; excludeCategories?: string[] },
): number {
  const wanted = new Set(tags.map(normalizeTag));
  const excludeCategories = [
    ...(options?.excludeCategories ?? []),
    ...(excludeCategoriesForTags(tags) ?? []),
  ];
  let count = 0;
  for (const item of catalog) {
    if (categoryExcluded(item, excludeCategories)) continue;
    if (!passesTagIntegrity(item, tags)) continue;
    if (item.tags.some((tag) => wanted.has(normalizeTag(tag)))) {
      count += 1;
      continue;
    }
    if (options?.includeNewlines && (item.face.includes("\n") || item.face.includes("\r"))) {
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

const TEXT_FACES_DEMOTE = [
  "throw",
  "toss",
  "flip",
  "tableflip",
  "table flip",
  "fight",
  "punch",
  "hit",
  "oraora",
  "aggressive",
  "angry",
];

/** Classic flip/fight signatures often tagged only "classic" — catch by glyph. */
const TEXT_FACES_DEMOTE_FACE = ["┻━┻", "┬─┬", "彡┻"];

const CUTE_DEMOTE_HEART = ["heart", "love", "kiss", "hug"];

const HEART_PREFER = ["heart", "love"];

const TEXT_FACES_PREFER = ["shrug", "lenny", "disapproval", "wave"];

const ANGRY_DEMOTE_FIGHT = [
  "fight",
  "punch",
  "hit",
  "oraora",
  "aggressive",
];

const FIGHT_PREFER = ["fight", "punch", "hit", "oraora"];

function rankOptionsForCategory(
  categoryId: string,
): RankOptions | undefined {
  if (categoryId === "text-faces") {
    return {
      demoteTags: TEXT_FACES_DEMOTE,
      demoteFaceIncludes: TEXT_FACES_DEMOTE_FACE,
      preferTags: TEXT_FACES_PREFER,
    };
  }
  // Cute page-1: non-heart kawaii first; heart/love/kiss/hug defer to /heart-kaomoji/.
  if (categoryId === "cute") {
    return { demoteTags: CUTE_DEMOTE_HEART };
  }
  return undefined;
}

function rankedPoolForCategory(categoryId: string): Kaomoji[] {
  let pool = rankedCategoryPool.get(categoryId);
  if (!pool) {
    pool = rankForGrid(
      getByCategory(categoryId, { primaryOnly: true }),
      rankOptionsForCategory(categoryId),
    );
    // Happy first-screen should not mirror the hub popular stack.
    if (categoryId === "happy") {
      pool = rotatePopularFirst(pool, 20);
    }
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

function rankOptionsForTags(tags: string[]): RankOptions | undefined {
  const normalized = tags.map(normalizeTag);
  // Angry hub: demote fight/oraora leads so scowls own page 1.
  if (normalized.length === 1 && normalized[0] === "angry") {
    return { demoteTags: ANGRY_DEMOTE_FIGHT };
  }
  if (normalized.some((t) => t === "fight" || t === "punch" || t === "hit")) {
    return { preferTags: FIGHT_PREFER };
  }
  // Heart page-1: ♡/♥/love-first (prefer heart+love over kiss/hug-only leads).
  if (normalized.some((t) => t === "heart" || t === "love")) {
    return { preferTags: HEART_PREFER };
  }
  if (normalized.length === 1 && normalized[0] === "bear") {
    return {
      preferFaceIncludes: ["ʕ", "ᴥ"],
    };
  }
  return undefined;
}

function rankedPoolForTags(
  tags: string[],
  options?: { includeNewlines?: boolean },
): Kaomoji[] {
  const key = tagPoolKey(tags, options);
  let pool = rankedTagPool.get(key);
  if (!pool) {
    pool = rankForGrid(getByTags(tags, options), rankOptionsForTags(tags));
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
