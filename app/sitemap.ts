import type { MetadataRoute } from "next";
import { postPath, posts, postsForPage } from "@/lib/blog";
import { guidePath, guides, guidesForPage } from "@/lib/guides";
import { pages, type SitePage } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

/** Latest content date: page's own edit date, or a newer guide or post it now features. */
function lastModified(page: SitePage): string {
  const dates = [
    contentModified(page),
    ...guidesForPage(page.path).map((g) => g.updated),
    ...postsForPage(page.path).map((p) => p.updated),
  ];
  return dates.reduce((latest, d) => (d > latest ? d : latest));
}

function contentModified(page: SitePage): string {
  switch (page.path) {
    case "/":
      // Guides section + guide links added to the hub.
      return "2026-10-20";
    case "/halloween-kaomoji":
      // Named popular-faces section and new title.
      return "2026-10-23";
    case "/kaomoji-copy-paste":
    case "/japanese-emoticons":
    case "/text-faces":
    case "/thumbs-up-kaomoji":
    case "/bowing-kaomoji":
    case "/running-kaomoji":
    case "/star-kaomoji":
    case "/bear-kaomoji":
    case "/waving-kaomoji":
    case "/flower-kaomoji":
    case "/thinking-kaomoji":
    case "/cute-kaomoji":
    case "/happy-kaomoji":
    case "/cat-kaomoji":
    case "/sad-kaomoji":
    case "/crying-kaomoji":
    case "/table-flip-kaomoji":
    case "/fight-kaomoji":
    case "/pout-kaomoji":
      return "2026-10-05";
    case "/lenny-face":
    case "/shrug-kaomoji":
    case "/uwu-kaomoji":
    case "/food-kaomoji":
    case "/emoticons":
    case "/cute-symbols":
    case "/emoji-combos":
    case "/shy-kaomoji":
      return "2026-10-19";
    case "/halloween-kaomoji":
    case "/christmas-kaomoji":
    case "/thanksgiving-kaomoji":
    case "/bear-kaomoji":
    case "/table-flip-kaomoji":
    case "/hug-kaomoji":
    case "/sorry-kaomoji":
    case "/thank-you-kaomoji":
    case "/cool-kaomoji":
    case "/sick-kaomoji":
    case "/scared-kaomoji":
    case "/devil-kaomoji":
      return "2026-10-19";
    case "/new-year-kaomoji":
    case "/winter-kaomoji":
    case "/valentine-kaomoji":
    case "/disclaimer":
      return "2026-10-21";
    default:
      return "2026-09-25";
  }
}

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
    case "/lenny-face":
    case "/shrug-kaomoji":
    case "/emoticons":
    case "/cute-symbols":
    case "/emoji-combos":
      return 0.8;
    case "/uwu-kaomoji":
    case "/food-kaomoji":
      return 0.75;
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
    case "/star-kaomoji":
    case "/giggling-kaomoji":
    case "/sparkle-kaomoji":
    case "/love-kaomoji":
    case "/flower-kaomoji":
    case "/kiss-kaomoji":
    case "/smile-kaomoji":
    case "/excited-kaomoji":
    case "/nervous-kaomoji":
    case "/wink-kaomoji":
    case "/hug-kaomoji":
    case "/waving-kaomoji":
    case "/thinking-kaomoji":
    case "/dance-kaomoji":
    case "/fish-kaomoji":
    case "/birthday-kaomoji":
    case "/christmas-kaomoji":
    case "/halloween-kaomoji":
    case "/new-year-kaomoji":
    case "/winter-kaomoji":
    case "/valentine-kaomoji":
      return 0.7;
    case "/thumbs-up-kaomoji":
    case "/bowing-kaomoji":
    case "/running-kaomoji":
      return 0.75;
    case "/table-flip-kaomoji":
    case "/fight-kaomoji":
    case "/pout-kaomoji":
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
  const guideEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/guides"),
      lastModified: guides.reduce((latest, g) => (g.updated > latest ? g.updated : latest), ""),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...guides.map((guide) => ({
      url: absoluteUrl(guidePath(guide)),
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/blog"),
      lastModified: posts.reduce((latest, p) => (p.updated > latest ? p.updated : latest), ""),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(postPath(post)),
      lastModified: post.updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: lastModified(page),
    changeFrequency:
      page.group === "hub"
        ? "weekly"
        : page.group === "trust"
          ? "yearly"
          : "monthly",
    priority: sitemapPriority(page),
  }));
  return [...pageEntries, ...guideEntries, ...blogEntries];
}