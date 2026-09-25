import Link from "next/link";
import { getPage, type SitePage } from "@/lib/site";
import { categoryPageHref } from "@/lib/category-pagination";

export function Breadcrumbs({
  page,
  pageNumber = 1,
}: {
  page: SitePage;
  pageNumber?: number;
}) {
  if (page.path === "/") return null;

  const parent = page.parentPath ? getPage(page.parentPath) : null;

  return (
    <nav aria-label="Breadcrumb" className="type-meta">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="inline-flex min-h-11 min-w-11 items-center text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        {parent ? (
          <>
            <li>
              <Link
                href={parent.path}
                className="inline-flex min-h-11 items-center text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                {parent.heading}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
          </>
        ) : null}
        {pageNumber > 1 ? (
          <>
            <li>
              <Link
                href={categoryPageHref(page.path, 1)}
                className="inline-flex min-h-11 items-center text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                {page.heading}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              Page {pageNumber}
            </li>
          </>
        ) : (
          <li aria-current="page" className="text-foreground">
            {page.heading}
          </li>
        )}
      </ol>
    </nav>
  );
}
