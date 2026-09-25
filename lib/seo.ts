import type { Metadata } from "next";
import type { Kaomoji } from "@/data/types";
import {
  categoryPageHref,
  crawlablePageCountForMeta,
  PAGINATED_SLUGS,
} from "@/lib/category-pagination";
import { getPage, siteConfig, type SitePage } from "@/lib/site";
import { absoluteUrl, canonicalPath } from "@/lib/utils";

/**
 * Per-page primary title - never blanket-append "Copy and Paste".
 * Hub uses a full absolute title; other pages use root `%s | Paste Kaomoji`.
 */
function documentTitleSegment(page: SitePage): string {
  return page.titleSegment;
}

export function pageMetadata(
  page: SitePage,
  options?: { pageNumber?: number },
): Metadata {
  const pageNumber = options?.pageNumber ?? 1;
  const baseSegment = documentTitleSegment(page);
  const segment =
    pageNumber > 1 ? `${baseSegment} - page ${pageNumber}` : baseSegment;
  const fullTitle =
    page.path === "/" ? segment : `${segment} | ${siteConfig.siteName}`;
  const pathForCanonical =
    pageNumber > 1 ? `${page.path}/page/${pageNumber}` : page.path;
  const canonical = canonicalPath(pathForCanonical);

  // Pagination page 2+ stays noindex,follow (anti-cannibalization for GSC):
  // page 1 owns the head intent; deeper pages stay crawlable via follow +
  // prev/next/sitemap but must not compete as indexable duplicates.
  // Valuable unique intent pages stay indexable unless page.robots overrides.
  const robots =
    pageNumber > 1
      ? { index: false, follow: true }
      : page.robots
        ? {
            index: page.robots.index ?? true,
            follow: page.robots.follow ?? true,
          }
        : undefined;

  const paginatedMeta = Object.values(PAGINATED_SLUGS).find(
    (entry) => entry.path === page.path,
  );
  const totalPages = paginatedMeta
    ? crawlablePageCountForMeta(paginatedMeta)
    : undefined;
  let pagination: Metadata["pagination"];
  if (totalPages && totalPages > 1) {
    if (pageNumber > 1) {
      pagination = {
        previous: absoluteUrl(categoryPageHref(page.path, pageNumber - 1)),
      };
    }
    if (pageNumber < totalPages) {
      pagination = {
        ...pagination,
        next: absoluteUrl(categoryPageHref(page.path, pageNumber + 1)),
      };
    }
  }

  return {
    title: page.path === "/" ? { absolute: segment } : segment,
    description: page.description,
    ...(robots ? { robots } : {}),
    ...(pagination ? { pagination } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonical,
      siteName: siteConfig.siteName,
      type: "website",
      locale: siteConfig.locale,
      // Keep layout default OG; omitting images here would wipe root openGraph.images.
      images: [
        {
          url: absoluteUrl("/og.png"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} — kaomoji library by mood`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [absoluteUrl("/og.png")],
    },
  };
}

export function breadcrumbJsonLd(
  page: SitePage,
  options?: { pageNumber?: number },
) {
  const pageNumber = options?.pageNumber ?? 1;
  const elements: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];
  let position = 2;
  if (page.parentPath) {
    const parent = getPage(page.parentPath);
    elements.push({
      "@type": "ListItem",
      position,
      name: parent.heading,
      item: absoluteUrl(parent.path),
    });
    position += 1;
  }
  elements.push({
    "@type": "ListItem",
    position,
    name: page.heading,
    item: absoluteUrl(page.path),
  });
  position += 1;
  if (pageNumber > 1) {
    elements.push({
      "@type": "ListItem",
      position,
      name: `Page ${pageNumber}`,
      item: absoluteUrl(`${page.path}/page/${pageNumber}`),
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    alternateName: ["Paste Kaomoji library", "pastekaomoji.com"],
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}

/** ItemList for category/utility grids. No Product/Offer.
 * numberOfItems must equal itemListElement length (the faces passed in —
 * typically the page-1 slice capped at ITEM_LIST_LIMIT), not the full catalog total.
 */
export function itemListJsonLd(
  page: SitePage,
  faces: Kaomoji[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.heading,
    numberOfItems: faces.length,
    itemListElement: faces.map((face, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: face.face,
      description: face.name,
    })),
  };
}

/** Strip light markdown so FAQ answers stay plain text in JSON-LD. */
function plainTextAnswer(answer: string): string {
  return answer
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * FAQPage JSON-LD. Emit only when faqs.length > 0.
 * Answers are forced to plain text (no markdown).
 */
export function faqJsonLd(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainTextAnswer(item.answer),
      },
    })),
  };
}
