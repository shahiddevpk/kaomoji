import type { MetadataRoute } from "next";
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
    case "/heart-kaomoji":
    case "/shy-kaomoji":
    case "/bunny-kaomoji":
    case "/dog-kaomoji":
    case "/shocked-kaomoji":
    case "/smug-kaomoji":
    case "/sleepy-kaomoji":
    case "/confused-kaomoji":
    case "/bear-kaomoji":
      return 0.75;
    case "/table-flip-kaomoji":
    case "/fight-kaomoji":
    case "/pout-kaomoji":
    case "/multiline-kaomoji":
      return 0.7;
    default:
      return 0.65;
  }
}

/**
 * Indexable URLs only (page 1 / bare paths from `pages`).
 * Pagination page≥2 stays crawlable via on-page links + noindex,follow metadata,
 * but is intentionally omitted here so sitemap generation never pulls the
 * ~6MB catalog via category-pagination / crawlablePageCountForMeta.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
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
}