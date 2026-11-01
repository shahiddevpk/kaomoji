import type { JSX } from "preact";
import { canonicalPath } from "@/lib/utils";

type Props = JSX.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  prefetch?: boolean;
  scroll?: boolean;
  replace?: boolean;
};

/** Normalize internal page hrefs to trailing slash (astro trailingSlash: always). */
function normalizeHref(href: string): string {
  if (!href) return href;
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//")
  ) {
    return href;
  }
  // Keep hash/query on internal paths: /cute-kaomoji#faces → /cute-kaomoji/#faces
  const hashIdx = href.indexOf("#");
  const queryIdx = href.indexOf("?");
  let path = href;
  let suffix = "";
  if (hashIdx >= 0) {
    path = href.slice(0, hashIdx);
    suffix = href.slice(hashIdx);
  } else if (queryIdx >= 0) {
    path = href.slice(0, queryIdx);
    suffix = href.slice(queryIdx);
  }
  if (!path || path === "/") return (path || "/") + suffix;
  // File assets must not gain a trailing slash.
  if (/\.[a-zA-Z0-9]+$/.test(path)) return path + suffix;
  return canonicalPath(path) + suffix;
}

/** Plain <a>: Astro ships static HTML, no client router. */
export default function Link({ prefetch: _p, scroll: _s, replace: _r, href, ...props }: Props) {
  return <a href={normalizeHref(href)} {...props} />;
}
