"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  childPages,
  getPage,
  type SitePage,
} from "@/lib/site";

/**
 * Mood chips under angry (and similar parents): All + siblings.
 * Mirrors competitor mood-group labels without thin duplicate pages.
 */
export function SubcategoryNav({ page }: { page: SitePage }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const parentPath = page.parentPath ?? (childPages(page.path).length ? page.path : null);
  if (!parentPath) return null;

  const parent = getPage(parentPath);
  const children = childPages(parentPath);
  if (children.length === 0) return null;

  const items: { path: string; label: string }[] = [
    { path: parent.path, label: `All ${parent.label.toLowerCase()}` },
    ...children.map((child) => ({ path: child.path, label: child.label })),
  ];

  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
  const pill =
    "inline-flex min-h-11 items-center rounded-full px-4 type-button transition-colors";

  return (
    <nav aria-label="Subcategories" className="mt-5">
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {items.map((item) => {
          const active = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={
                  active
                    ? `${pill} border border-primary bg-primary font-semibold text-accent-foreground ${focus}`
                    : `${pill} border border-border bg-card text-foreground hover:border-primary hover:bg-hover ${focus}`
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