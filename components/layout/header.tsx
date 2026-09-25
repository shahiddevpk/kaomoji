"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_SEARCH_RESULTS_ID } from "@/components/kaomoji/search-constants";
import { SearchBox } from "@/components/kaomoji/search-box";
import { HeaderNav } from "@/components/layout/header-nav";
import { SiteLogoLink } from "@/components/layout/logo";
import { headerNav, pages } from "@/lib/site";

function ctaHref(pathname: string): string {
  const page = pages.find(
    (item) =>
      pathname === item.path ||
      (item.path !== "/" && pathname.startsWith(`${item.path}/`)),
  );
  if (page && page.group !== "trust") {
    return "#faces";
  }
  return "/#faces";
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  // Category chips only - Home is the logo; Copy-and-paste stays in the chip row.
  const links = headerNav().filter((page) => page.path !== "/");

  return (
    <header className="site-header sticky top-0 z-40">
      <div className={`relative mx-auto flex w-full max-w-6xl flex-col px-4 sm:gap-3 ${menuOpen ? "gap-1.5 py-2" : "gap-2 py-3"}`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <SiteLogoLink />

          <div className="min-w-0 flex-1">
            <SearchBox key={pathname} variant="header" />
          </div>

          <Link
            href={ctaHref(pathname)}
            className="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-4 type-button text-accent-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:inline-flex"
          >
            Copy a face
          </Link>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card px-3 type-button text-foreground transition-colors hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>

        <div
          id={menuId}
          className={menuOpen ? "block" : "hidden sm:block"}
        >
          <HeaderNav
            links={links}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>

        <div
          id={HEADER_SEARCH_RESULTS_ID}
          className="empty:hidden"
          aria-live="polite"
        />
      </div>
    </header>
  );
}

