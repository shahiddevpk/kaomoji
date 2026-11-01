const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

w("components/kaomoji/subcategory-nav.tsx", `"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  childPages,
  getPage,
  siblingPages,
  type SitePage,
} from "@/lib/site";

/**
 * Mood chips under angry (and similar parents): All + siblings.
 * Mirrors competitor mood-group labels without thin duplicate pages.
 */
export function SubcategoryNav({ page }: { page: SitePage }) {
  const pathname = usePathname().replace(/\\/$/, "") || "/";
  const parentPath = page.parentPath ?? (childPages(page.path).length ? page.path : null);
  if (!parentPath) return null;

  const parent = getPage(parentPath);
  const children = childPages(parentPath);
  if (children.length === 0) return null;

  const items: { path: string; label: string }[] = [
    { path: parent.path, label: \`All \${parent.label.toLowerCase()}\` },
    ...children.map((child) => ({ path: child.path, label: child.label })),
  ];

  return (
    <nav aria-label="Subcategories" className="mt-4">
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={
                  active
                    ? "inline-flex min-h-11 items-center rounded-full border border-primary bg-primary px-4 type-button font-semibold text-accent-foreground"
                    : "inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 type-button text-foreground transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                }
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
`);

// ---------- breadcrumbs with parentPath ----------
w("components/kaomoji/breadcrumbs.tsx", `import Link from "next/link";
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
`);

console.log("nav+breadcrumbs done");
