import type { MetadataRoute } from "next";
import {
  crawlablePageCountForCategory,
  PAGINATED_SLUGS,
} from "@/lib/category-pagination";
import { pages, type SitePage } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

/** Modest sitemap priorities - one intent owner per URL. */
function sitemapPriority(page: SitePage): number {
  if (page.group === "hub") return 1;
  if (page.group === "trust") return 0.3;
  switch (page.path) {
    case "/kaomoji-copy-paste":
      return 0.9;
    case "/cute-kaomoji":
    case "/japanese-emoticons":
      return 0.85;
    case "/text-faces":
      return 0.8;
    case "/happy-kaomoji":
    case "/cat-kaomoji":
    case "/sad-kaomoji":
    case "/crying-kaomoji":
      return 0.75;
    default:
      return 0.7;
  }
}

/** Page 2+ browse depth: below page-1 browse priorities, still crawlable. */
const PAGINATION_SITEMAP_PRIORITY = 0.5;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: "2026-09-24",
    changeFrequency:
      page.group === "hub" ? "weekly" : page.group === "trust" ? "yearly" : "monthly",
    priority: sitemapPriority(page),
  }));

  const paginationEntries: MetadataRoute.Sitemap = [];
  for (const meta of Object.values(PAGINATED_SLUGS)) {
    const totalPages = crawlablePageCountForCategory(meta.categoryId);
    for (let n = 2; n <= totalPages; n++) {
      paginationEntries.push({
        url: absoluteUrl(`${meta.path}/page/${n}`),
        lastModified: "2026-09-24",
        changeFrequency: "monthly",
        priority: PAGINATION_SITEMAP_PRIORITY,
      });
    }
  }

  return [...baseEntries, ...paginationEntries];
}