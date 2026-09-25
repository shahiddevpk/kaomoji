"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function HeaderNav({
  links,
  onNavigate,
}: {
  links: Array<{ path: string; label: string }>;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Categories"
      className="-mx-4 flex justify-center overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
    >
      <div className="inline-flex gap-2">
        {links.map((page) => {
          const active =
            pathname === page.path ||
            (page.path !== "/" && pathname.startsWith(`${page.path}/`));

          return (
            <Link
              key={page.path}
              href={page.path}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "inline-flex min-h-11 shrink-0 items-center rounded-full border px-3 type-button transition-colors",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
                active
                  ? "border-primary bg-primary font-medium text-accent-foreground"
                  : "border-border bg-secondary text-foreground hover:bg-hover",
              )}
            >
              {page.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}