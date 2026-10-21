import {
  crawlablePageCountForCategory,
  crawlablePageCountForTags,
  MAX_PAGINATION_PAGES,
  pageCountForCategory,
  pageCountForTags,
} from "@/data/index";

export {
  MAX_PAGINATION_PAGES,
  pageCountForCategory,
  crawlablePageCountForCategory,
  pageCountForTags,
  crawlablePageCountForTags,
};

export type PaginatedPageMeta = {
  path: string;
  categoryId?: string;
  tags?: string[];
  includeNewlines?: boolean;
};

/** Slug folder key -> site path + category or tags for paginated browse pages. */
export const PAGINATED_SLUGS: Record<string, PaginatedPageMeta> = {
  "cute-kaomoji": { path: "/cute-kaomoji", categoryId: "cute" },
  "happy-kaomoji": { path: "/happy-kaomoji", categoryId: "happy" },
  "cat-kaomoji": { path: "/cat-kaomoji", categoryId: "cat" },
  "sad-kaomoji": { path: "/sad-kaomoji", categoryId: "sad" },
  "crying-kaomoji": { path: "/crying-kaomoji", categoryId: "crying" },
  "japanese-emoticons": { path: "/japanese-emoticons", categoryId: "japanese" },
  "text-faces": { path: "/text-faces", categoryId: "text-faces" },
  "angry-kaomoji": { path: "/angry-kaomoji", tags: ["angry"] },
  "table-flip-kaomoji": {
    path: "/table-flip-kaomoji",
    tags: ["tableflip", "table flip"],
  },
  "fight-kaomoji": {
    path: "/fight-kaomoji",
    tags: ["fight", "punch", "hit"],
  },
  "pout-kaomoji": {
    path: "/pout-kaomoji",
    tags: ["pout", "hmph", "annoyed"],
  },
  "heart-kaomoji": {
    path: "/heart-kaomoji",
    tags: ["heart", "love", "kiss", "hug"],
  },
  "shy-kaomoji": {
    path: "/shy-kaomoji",
    tags: ["shy", "blush", "embarrassed"],
  },
  "bunny-kaomoji": {
    path: "/bunny-kaomoji",
    tags: ["bunny", "rabbit"],
  },
  "dog-kaomoji": {
    path: "/dog-kaomoji",
    tags: ["dog", "puppy"],
  },
  "shocked-kaomoji": {
    path: "/shocked-kaomoji",
    tags: ["shocked", "surprised"],
  },
  "smug-kaomoji": {
    path: "/smug-kaomoji",
    tags: ["smug"],
  },
  "sleepy-kaomoji": {
    path: "/sleepy-kaomoji",
    tags: ["sleepy", "tired"],
  },
  "confused-kaomoji": {
    path: "/confused-kaomoji",
    tags: ["confused"],
  },
  "bear-kaomoji": {
    path: "/bear-kaomoji",
    tags: ["bear"],
  },
  "lenny-face": { path: "/lenny-face", tags: ["lenny"] },
  "shrug-kaomoji": { path: "/shrug-kaomoji", tags: ["shrug"] },
  "uwu-kaomoji": { path: "/uwu-kaomoji", tags: ["uwu"] },
  "food-kaomoji": { path: "/food-kaomoji", tags: ["food"] },
  "christmas-kaomoji": { path: "/christmas-kaomoji", tags: ["christmas"] },
  "new-year-kaomoji": { path: "/new-year-kaomoji", tags: ["new year"] },
  "winter-kaomoji": { path: "/winter-kaomoji", tags: ["winter"] },
  "valentine-kaomoji": { path: "/valentine-kaomoji", tags: ["valentine"] },
  "thanksgiving-kaomoji": { path: "/thanksgiving-kaomoji", tags: ["thanksgiving"] },
  "sorry-kaomoji": { path: "/sorry-kaomoji", tags: ["sorry"] },
  "thank-you-kaomoji": { path: "/thank-you-kaomoji", tags: ["thanks"] },
  "cool-kaomoji": { path: "/cool-kaomoji", tags: ["cool"] },
  "sick-kaomoji": { path: "/sick-kaomoji", tags: ["illness"] },
  "scared-kaomoji": { path: "/scared-kaomoji", tags: ["fear"] },
  "devil-kaomoji": { path: "/devil-kaomoji", tags: ["devil"] },
  "halloween-kaomoji": { path: "/halloween-kaomoji", tags: ["halloween"] },
  "birthday-kaomoji": { path: "/birthday-kaomoji", tags: ["birthday"] },
  "bowing-kaomoji": { path: "/bowing-kaomoji", tags: ["bow", "bowing", "dogeza"] },
  "dance-kaomoji": { path: "/dance-kaomoji", tags: ["dance"] },
  "excited-kaomoji": { path: "/excited-kaomoji", tags: ["excited"] },
  "fish-kaomoji": { path: "/fish-kaomoji", tags: ["fish"] },
  "flower-kaomoji": { path: "/flower-kaomoji", tags: ["flower", "sakura"] },
  "giggling-kaomoji": { path: "/giggling-kaomoji", tags: ["giggle", "laugh"] },
  "hug-kaomoji": { path: "/hug-kaomoji", tags: ["hug"] },
  "kiss-kaomoji": { path: "/kiss-kaomoji", tags: ["kiss"] },
  "love-kaomoji": { path: "/love-kaomoji", tags: ["love"] },
  "nervous-kaomoji": { path: "/nervous-kaomoji", tags: ["nervous"] },
  "running-kaomoji": { path: "/running-kaomoji", tags: ["run", "running", "dash"] },
  "smile-kaomoji": { path: "/smile-kaomoji", tags: ["smile"] },
  "sparkle-kaomoji": { path: "/sparkle-kaomoji", tags: ["sparkle"] },
  "star-kaomoji": { path: "/star-kaomoji", tags: ["star", "twinkle"] },
  "thinking-kaomoji": { path: "/thinking-kaomoji", tags: ["thinking"] },
  "thumbs-up-kaomoji": { path: "/thumbs-up-kaomoji", tags: ["thumbs up", "ok"] },
  "waving-kaomoji": { path: "/waving-kaomoji", tags: ["waving", "wave"] },
  "wink-kaomoji": { path: "/wink-kaomoji", tags: ["wink"] },
};

export type PaginatedSlug = string;

export function crawlablePageCountForMeta(meta: PaginatedPageMeta): number {
  if (meta.tags && meta.tags.length > 0) {
    return crawlablePageCountForTags(meta.tags, {
      includeNewlines: meta.includeNewlines,
    });
  }
  if (meta.categoryId) {
    return crawlablePageCountForCategory(meta.categoryId);
  }
  return 1;
}

/** Full browse depth (uncapped); SEO crawl cap stays on crawlablePageCountForMeta. */
export function browsePageCountForMeta(meta: PaginatedPageMeta): number {
  if (meta.tags && meta.tags.length > 0) {
    return pageCountForTags(meta.tags, {
      includeNewlines: meta.includeNewlines,
    });
  }
  if (meta.categoryId) {
    return pageCountForCategory(meta.categoryId);
  }
  return 1;
}

/** Static params for /page/[n] - n = 2..min(15, pageCount). Never emits 1. */
export function buildPageStaticParamsFromMeta(
  meta: PaginatedPageMeta,
): { n: string }[] {
  const totalPages = crawlablePageCountForMeta(meta);
  const params: { n: string }[] = [];
  for (let n = 2; n <= totalPages; n++) {
    params.push({ n: String(n) });
  }
  return params;
}

/** @deprecated Prefer buildPageStaticParamsFromMeta for tag pages. */
export function buildPageStaticParams(categoryId: string): { n: string }[] {
  return buildPageStaticParamsFromMeta({ path: "", categoryId });
}

/** Parse a dynamic [n] segment; null if not a positive integer string. */
export function parsePageParam(n: string): number | null {
  if (!/^\d+$/.test(n)) return null;
  const num = Number(n);
  if (!Number.isInteger(num) || num < 1) return null;
  return num;
}

/** Href for a category page number (trailing slash). Page 1 -> bare path/. */
export function categoryPageHref(path: string, pageNumber: number): string {
  if (pageNumber <= 1) return `${path}/`;
  return `${path}/page/${pageNumber}/`;
}
