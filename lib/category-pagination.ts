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
  "multiline-kaomoji": {
    path: "/multiline-kaomoji",
    tags: ["multi-line"],
    includeNewlines: true,
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
