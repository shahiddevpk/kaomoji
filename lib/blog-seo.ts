import type { Metadata } from "next";
import { BLOG_INDEX, postPath, type BlogPost } from "@/lib/blog";
import { metadataFor, OG_IMAGE } from "@/lib/guide-seo";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export function blogIndexMetadata(): Metadata {
  return metadataFor(BLOG_INDEX.path, BLOG_INDEX.titleSegment, BLOG_INDEX.description, "website");
}

export function postMetadata(post: BlogPost): Metadata {
  return metadataFor(postPath(post), post.titleSegment, post.description, "article", {
    published: post.published,
    updated: post.updated,
  });
}

export function blogBreadcrumbJsonLd(post?: BlogPost) {
  const items = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Blog", item: absoluteUrl(BLOG_INDEX.path) },
    ...(post ? [{ name: post.title, item: absoluteUrl(postPath(post)) }] : []),
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

export function postJsonLd(post: BlogPost) {
  const org = { "@type": "Organization", name: siteConfig.siteName, url: absoluteUrl("/") };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: OG_IMAGE.url,
    datePublished: post.published,
    dateModified: post.updated,
    author: org,
    publisher: { ...org, logo: { "@type": "ImageObject", url: absoluteUrl("/apple-touch-icon.png") } },
    mainEntityOfPage: absoluteUrl(postPath(post)),
  };
}

/** Blog index as an ItemList of posts (helps search engines read the listing). */
export function blogListJsonLd(items: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(postPath(post)),
      name: post.title,
    })),
  };
}
