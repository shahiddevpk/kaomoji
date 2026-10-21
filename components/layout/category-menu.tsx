"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_GROUPS, TOOLS_GROUP } from "@/lib/nav-groups";
import type { NavPage } from "@/lib/site";
import { cn } from "@/lib/utils";

const GROUPS = [...CATEGORY_GROUPS, TOOLS_GROUP];

/** Short chip label (e.g. "Cute") — the group heading supplies context. */
function labelFor(path: string, pages: NavPage[]): string | null {
  return pages.find((p) => p.path === path)?.label ?? null;
}

/**
 * "All categories" panel: every browse page grouped by intent, so nothing
 * hides behind the header's horizontal strip. Rendered only while open —
 * the footer carries the same links for crawlers on every page.
 */
export function CategoryMenu({
  id,
  navPages,
  onNavigate,
}: {
  id: string;
  navPages: NavPage[];
  onNavigate: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      id={id}
      aria-label="All categories"
      className="category-menu absolute inset-x-0 top-full z-20 overflow-y-auto overscroll-contain border-b border-border bg-card shadow-[var(--shadow-md)]"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-x-6 gap-y-5 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <section
            key={group.heading}
            aria-label={group.heading}
            className={cn(group.paths.length > 8 && "sm:row-span-2")}
          >
            <p className="type-label text-foreground">{group.heading}</p>
            <ul className="mt-1 grid grid-cols-2 gap-x-3">
              {group.paths.map((path) => {
                const label = labelFor(path, navPages);
                if (!label) return null;
                const active =
                  pathname === path || pathname.startsWith(`${path}/`);
                return (
                  <li key={path}>
                    <Link
                      href={`${path}/`}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-10 items-center text-sm transition-colors hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                        active ? "font-medium text-primary" : "text-muted",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        <p className="sm:col-span-2 lg:col-span-4">
          <Link
            href="/guides/"
            onClick={onNavigate}
            className="inline-flex min-h-10 items-center text-sm font-medium text-link hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Kaomoji guides: how to type, read &amp; use text faces →
          </Link>
        </p>
      </div>
    </nav>
  );
}
