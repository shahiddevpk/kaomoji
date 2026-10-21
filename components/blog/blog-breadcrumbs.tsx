import Link from "next/link";

const linkClass =
  "inline-flex min-h-11 items-center text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

/** Home / Blog / [current] — mirrors blogBreadcrumbJsonLd. */
export function BlogBreadcrumbs({ current }: { current?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="type-meta">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        {current ? (
          <>
            <li>
              <Link href="/blog/" className={linkClass}>
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              {current}
            </li>
          </>
        ) : (
          <li aria-current="page" className="text-foreground">
            Blog
          </li>
        )}
      </ol>
    </nav>
  );
}
