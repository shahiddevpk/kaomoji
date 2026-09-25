import { siteConfig } from "@/lib/site";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Absolute public URL. Page paths get a trailing slash (apex canonical); asset paths do not. */
export function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${siteConfig.url}/`;
  }
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  // File assets (/og.png, /icon.svg) must not gain a trailing slash.
  if (/\.[a-zA-Z0-9]+$/.test(withSlash)) {
    return `${siteConfig.url}${withSlash}`;
  }
  const normalized = withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
  return `${siteConfig.url}${normalized}`;
}

/** Path for Next metadata/canonicals: trailing slash except bare hub stays "/". */
export function canonicalPath(path: string): string {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}