import type { Metadata } from "next";
import { rootMetadata } from "@/lib/root-metadata";
import { siteConfig } from "@/lib/site";

export type HeadTag = { tag: "meta" | "link"; attrs: Record<string, string> };

function abs(u: string): string {
  return new URL(u, siteConfig.url).toString();
}

function robotsContent(r: Metadata["robots"]): string | undefined {
  if (!r) return undefined;
  const parts = [r.index === false ? "noindex" : "index", r.follow === false ? "nofollow" : "follow"];
  for (const [k, v] of Object.entries(r)) {
    if (k === "index" || k === "follow" || k === "googleBot" || v == null) continue;
    parts.push(typeof v === "boolean" ? (v ? k : "") : `${k}:${v}`);
  }
  return parts.filter(Boolean).join(", ");
}

/** Next.js-style metadata merge (shallow per key, like App Router) rendered to tags. */
export function buildHead(page: Metadata = {}) {
  const root = rootMetadata as Metadata;
  const m: Metadata = { ...root, ...page };
  const tmpl = (root.title as { template?: string })?.template ?? "%s";
  const t = page.title ?? root.title;
  const title =
    typeof t === "string"
      ? page.title ? tmpl.replace("%s", t) : t
      : t?.absolute ?? (t?.default as string) ?? siteConfig.siteName;

  const tags: HeadTag[] = [];
  const meta = (attrs: Record<string, string | undefined>) => {
    const clean = Object.fromEntries(Object.entries(attrs).filter(([, v]) => v != null && v !== "")) as Record<string, string>;
    if (clean.content !== undefined) tags.push({ tag: "meta", attrs: clean });
  };
  const link = (attrs: Record<string, string>) => tags.push({ tag: "link", attrs });

  meta({ name: "description", content: m.description });
  meta({ name: "application-name", content: m.applicationName });
  for (const a of (m.authors ?? []) as Array<{ name: string; url?: string }>) {
    meta({ name: "author", content: a.name });
    if (a.url) link({ rel: "author", href: a.url });
  }
  meta({ name: "creator", content: m.creator });
  if (m.keywords) meta({ name: "keywords", content: Array.isArray(m.keywords) ? m.keywords.join(",") : m.keywords });
  meta({ name: "robots", content: robotsContent(m.robots) });
  const gb = (m.robots as { googleBot?: Metadata["robots"] })?.googleBot;
  if (gb) meta({ name: "googlebot", content: robotsContent(gb) });
  if (m.alternates?.canonical) link({ rel: "canonical", href: abs(m.alternates.canonical) });
  const v = m.verification as { google?: string } | undefined;
  if (v?.google) meta({ name: "google-site-verification", content: v.google });
  for (const [k, val] of Object.entries((m.other ?? {}) as Record<string, string>)) meta({ name: k, content: val });

  const og = (m.openGraph ?? {}) as Record<string, unknown>;
  const ogKeys: Array<[string, string]> = [["title", "og:title"], ["description", "og:description"], ["url", "og:url"], ["siteName", "og:site_name"], ["locale", "og:locale"], ["type", "og:type"], ["publishedTime", "article:published_time"], ["modifiedTime", "article:modified_time"]];
  for (const [k, p] of ogKeys) if (og[k] != null) meta({ property: p, content: p === "og:url" ? abs(String(og[k])) : String(og[k]) });
  for (const img of (og.images ?? []) as Array<string | { url: string; width?: number; height?: number; alt?: string }>) {
    const i = typeof img === "string" ? { url: img } : img;
    meta({ property: "og:image", content: abs(i.url) });
    if (i.width) meta({ property: "og:image:width", content: String(i.width) });
    if (i.height) meta({ property: "og:image:height", content: String(i.height) });
    if (i.alt) meta({ property: "og:image:alt", content: i.alt });
  }
  const tw = (m.twitter ?? {}) as Record<string, unknown>;
  for (const k of ["card", "title", "description", "site", "creator"]) if (tw[k] != null) meta({ name: `twitter:${k}`, content: String(tw[k]) });
  for (const img of (tw.images ?? []) as Array<string | { url: string }>) meta({ name: "twitter:image", content: abs(typeof img === "string" ? img : img.url) });

  const icons = (m.icons ?? {}) as { icon?: Array<Record<string, string>>; apple?: Array<Record<string, string>> };
  for (const i of icons.icon ?? []) link({ rel: "icon", href: i.url, ...(i.type ? { type: i.type } : {}), ...(i.sizes ? { sizes: i.sizes } : {}) });
  for (const i of icons.apple ?? []) link({ rel: "apple-touch-icon", href: i.url, ...(i.sizes ? { sizes: i.sizes } : {}) });

  return { title, tags };
}
