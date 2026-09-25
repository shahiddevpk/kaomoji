import { siteConfig } from "@/lib/site";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Absolute public URL with trailing slash (apex canonical policy). */
export function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${siteConfig.url}/`;
  }
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${siteConfig.url}${normalized}`;
}

/** Path for Next metadata/canonicals: trailing slash except bare hub stays "/". */
export function canonicalPath(path: string): string {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}
