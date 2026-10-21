import type { Metadata } from "next";
import { guidePath, type Guide } from "@/lib/guides";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, canonicalPath } from "@/lib/utils";

export const OG_IMAGE = {
  url: absoluteUrl("/og.png"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.siteName} — kaomoji library by mood`,
};

export const GUIDES_INDEX = {
  path: "/guides",
  heading: "Kaomoji Guides",
  titleSegment: "Kaomoji Guides: Type, Read & Use Text Faces",
  description:
    "Practical kaomoji guides: how to type kaomoji on any device, what kaomoji mean and where they came from, and how to read eyes, mouths, and arms.",
  intro:
    "Short, practical guides that answer the questions people ask most about kaomoji. Each one links to faces you can copy right away.",
};

export function metadataFor(
  path: string,
  titleSegment: string,
  description: string,
  type: "website" | "article",
  dates?: { published: string; updated: string },
): Metadata {
  const canonical = canonicalPath(path);
  const fullTitle = `${titleSegment} | ${siteConfig.siteName}`;
  return {
    title: titleSegment,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      images: [OG_IMAGE],
      ...(type === "article" && dates
        ? { type: "article", publishedTime: dates.published, modifiedTime: dates.updated }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function guidesIndexMetadata(): Metadata {
  return metadataFor(GUIDES_INDEX.path, GUIDES_INDEX.titleSegment, GUIDES_INDEX.description, "website");
}

export function guideMetadata(guide: Guide): Metadata {
  return metadataFor(guidePath(guide), guide.titleSegment, guide.description, "article", {
    published: guide.published,
    updated: guide.updated,
  });
}

export function guideBreadcrumbJsonLd(guide?: Guide) {
  const items = [
    { name: "Home", item: absoluteUrl("/") },
    { name: GUIDES_INDEX.heading, item: absoluteUrl(GUIDES_INDEX.path) },
    ...(guide ? [{ name: guide.title, item: absoluteUrl(guidePath(guide)) }] : []),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      ...entry,
    })),
  };
}

export function guideArticleJsonLd(guide: Guide) {
  const org = { "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/") };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: OG_IMAGE.url,
    datePublished: guide.published,
    dateModified: guide.updated,
    author: org,
    publisher: { ...org, logo: { "@type": "ImageObject", url: absoluteUrl("/apple-touch-icon.png") } },
    mainEntityOfPage: absoluteUrl(guidePath(guide)),
  };
}

export function guideHowToJsonLd(guide: Guide) {
  if (!guide.howTo) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.howTo.name,
    step: guide.howTo.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}
