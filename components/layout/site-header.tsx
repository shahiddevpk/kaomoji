"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
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

/**
 * Fixed top chrome: nav stays visible on scroll; spacer reserves height so
 * main content never slides under the bar (including when search results open).
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const links = headerNav().filter((page) => page.path !== "/");

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const sync = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--site-header-offset", `${h}px`);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, [menuOpen, pathname]);

  return (
    <>
      <header ref={headerRef} className="site-header" role="banner">
        <div
          className={`relative mx-auto flex w-full max-w-6xl flex-col px-4 sm:gap-3 ${menuOpen ? "gap-1.5 py-2" : "gap-2 py-3"}`}
        >
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
              aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            className="relative z-0 bg-card empty:hidden"
            aria-live="polite"
          />
        </div>
      </header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
