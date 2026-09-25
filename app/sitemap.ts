import type { MetadataRoute } from "next";
import {
  crawlablePageCountForMeta,
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
    case "/kaomoji-generator":
      return 0.8;
    case "/happy-kaomoji":
    case "/cat-kaomoji":
    case "/sad-kaomoji":
    case "/crying-kaomoji":
    case "/angry-kaomoji":
      return 0.75;
    case "/table-flip-kaomoji":
    case "/fight-kaomoji":
    case "/rage-kaomoji":
    case "/pout-kaomoji":
    case "/glare-kaomoji":
    case "/multiline-kaomoji":
      return 0.7;
    default:
      return 0.65;
  }
}

/** Page 2+ browse depth - listed but noindex via pageMetadata. */
const PAGINATION_SITEMAP_PRIORITY = 0.4;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: "2026-09-25",
    changeFrequency:
      page.group === "hub"
        ? "weekly"
        : page.group === "trust"
          ? "yearly"
          : "monthly",
    priority: sitemapPriority(page),
  }));

  const paginationEntries: MetadataRoute.Sitemap = [];
  for (const meta of Object.values(PAGINATED_SLUGS)) {
    const totalPages = crawlablePageCountForMeta(meta);
    for (let n = 2; n <= totalPages; n++) {
      paginationEntries.push({
        url: absoluteUrl(`${meta.path}/page/${n}`),
        lastModified: "2026-09-25",
        changeFrequency: "monthly",
        priority: PAGINATION_SITEMAP_PRIORITY,
      });
    }
  }

  return [...baseEntries, ...paginationEntries];
}
