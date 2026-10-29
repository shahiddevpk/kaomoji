"use client";

import Link from "@/components/link";
import { usePathname } from "next/navigation";
import { moodChipClass } from "@/lib/mood-colors";
import { cn } from "@/lib/utils";

/**
 * Mood chips under angry (and similar parents): All + siblings.
 * Mirrors competitor mood-group labels without thin duplicate pages.
 */
export function SubcategoryNav({
  items,
}: {
  /** All + sibling chips, built on the server by subcategoryNavItems(). */
  items: { path: string; label: string }[];
}) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  if (items.length === 0) return null;

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
                className={cn(
                  pill,
                  "border",
                  moodChipClass(active),
                  active && "font-semibold",
                  focus,
                )}
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