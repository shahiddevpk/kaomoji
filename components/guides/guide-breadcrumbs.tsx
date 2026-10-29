import Link from "@/components/link";

const linkClass =
  "inline-flex min-h-11 items-center text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

/** Home / Guides / [current] — mirrors guideBreadcrumbJsonLd. */
export function GuideBreadcrumbs({ current }: { current?: string }) {
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
              <Link href="/guides/" className={linkClass}>
                Guides
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="min-w-0 max-w-full truncate text-foreground sm:max-w-md">
              {current}
            </li>
          </>
        ) : (
          <li aria-current="page" className="text-foreground">
            Guides
          </li>
        )}
      </ol>
    </nav>
  );
}
