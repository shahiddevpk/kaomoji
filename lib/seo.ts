import type { Metadata } from "next";
import type { Kaomoji } from "@/data/types";
import { siteConfig, type SitePage } from "@/lib/site";
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

  return {
    title: page.path === "/" ? { absolute: segment } : segment,
    description: page.description,
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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
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
    {
      "@type": "ListItem",
      position: 2,
      name: page.heading,
      item: absoluteUrl(page.path),
    },
  ];
  if (pageNumber > 1) {
    elements.push({
      "@type": "ListItem",
      position: 3,
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
    url: absoluteUrl("/"),
    description: siteConfig.description,
  };
}

/** ItemList for category/utility grids. No Product/Offer.
 * `totalCount` sets numberOfItems to the true catalog total while
 * itemListElement stays capped at the faces passed in (â‰¤48).
 */
export function itemListJsonLd(
  page: SitePage,
  faces: Kaomoji[],
  totalCount?: number,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.heading,
    numberOfItems: totalCount ?? faces.length,
    itemListElement: faces.map((face, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: face.face,
      description: face.name,
    })),
  };
}