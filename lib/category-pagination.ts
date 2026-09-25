import {
  crawlablePageCountForCategory,
  MAX_PAGINATION_PAGES,
  pageCountForCategory,
} from "@/data/index";

export { MAX_PAGINATION_PAGES, pageCountForCategory, crawlablePageCountForCategory };

/** Slug folder → site path + primary category id for paginated browse pages. */
export const PAGINATED_SLUGS = {
  "cute-kaomoji": { path: "/cute-kaomoji", categoryId: "cute" },
  "happy-kaomoji": { path: "/happy-kaomoji", categoryId: "happy" },
  "cat-kaomoji": { path: "/cat-kaomoji", categoryId: "cat" },
  "sad-kaomoji": { path: "/sad-kaomoji", categoryId: "sad" },
  "crying-kaomoji": { path: "/crying-kaomoji", categoryId: "crying" },
  "japanese-emoticons": { path: "/japanese-emoticons", categoryId: "japanese" },
  "text-faces": { path: "/text-faces", categoryId: "text-faces" },
} as const;

export type PaginatedSlug = keyof typeof PAGINATED_SLUGS;

/** Static params for /page/[n] — n = 2..min(15, pageCount). Never emits 1. */
export function buildPageStaticParams(categoryId: string): { n: string }[] {
  const totalPages = crawlablePageCountForCategory(categoryId);
  const params: { n: string }[] = [];
  for (let n = 2; n <= totalPages; n++) {
    params.push({ n: String(n) });
  }
  return params;
}

/** Parse a dynamic [n] segment; null if not a positive integer string. */
export function parsePageParam(n: string): number | null {
  if (!/^\d+$/.test(n)) return null;
  const num = Number(n);
  if (!Number.isInteger(num) || num < 1) return null;
  return num;
}

/** Href for a category page number (trailing slash). Page 1 → bare path/. */
export function categoryPageHref(path: string, pageNumber: number): string {
  if (pageNumber <= 1) return `${path}/`;
  return `${path}/page/${pageNumber}/`;
}