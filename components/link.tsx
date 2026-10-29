import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * next/link with prefetch off by default. Pages carry ~90 internal links, and
 * viewport prefetching fetched each one's full payload on every view (CDN
 * requests, ISR reads, origin transfer). Navigation still works on click and
 * crawlers still see a plain <a href>. Pass prefetch explicitly to opt back in.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
