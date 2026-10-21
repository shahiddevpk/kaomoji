"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_SEARCH_RESULTS_ID } from "@/components/kaomoji/search-constants";
import { SearchBox } from "@/components/kaomoji/search-box";
import { CategoryMenu } from "@/components/layout/category-menu";
import { HeaderNav } from "@/components/layout/header-nav";
import { SiteLogoLink } from "@/components/layout/logo";
import { POPULAR_PATHS } from "@/lib/nav-groups";
import type { NavPage } from "@/lib/site";

function ctaHref(pathname: string, pages: NavPage[]): string {
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
export function SiteHeader({
  seasonalPath,
  navPages,
}: {
  seasonalPath?: string;
  /** Slim page list from the server (labels, groups, tags; no page copy). */
  navPages: NavPage[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // Popular strip; in-season holiday (computed on the server) leads.
  const links = (seasonalPath ? [seasonalPath, ...POPULAR_PATHS] : POPULAR_PATHS).flatMap(
    (path) => navPages.find((page) => page.path === path) ?? [],
  );

  // Esc closes the categories panel and returns focus to its toggle.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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
  }, [pathname]);

  return (
    <>
      <header ref={headerRef} className="site-header" role="banner">
        <div
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:gap-3"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <SiteLogoLink />

            <div className="min-w-0 flex-1">
              <SearchBox key={pathname} variant="header" navPages={navPages} />
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 type-button text-foreground transition-colors hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? menuId : undefined}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 3.5h5v5h-5zM11.5 3.5h5v5h-5zM3.5 11.5h5v5h-5zM11.5 11.5h5v5h-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                )}
              </svg>
              <span className="sm:hidden">{menuOpen ? "Close" : "Menu"}</span>
              <span className="hidden sm:inline">All categories</span>
            </button>

            <Link
              href={ctaHref(pathname, navPages)}
              className="hidden min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-4 type-button text-accent-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:inline-flex"
            >
              Copy a face
            </Link>
          </div>

          <div className="hidden sm:block">
            <HeaderNav links={links} />
          </div>

          <div
            id={HEADER_SEARCH_RESULTS_ID}
            className="relative z-0 bg-card empty:hidden"
            aria-live="polite"
          />
          {menuOpen ? (
            <CategoryMenu
              id={menuId}
              navPages={navPages}
              onNavigate={() => setMenuOpen(false)}
            />
          ) : null}
        </div>
      </header>
      {menuOpen ? (
        <div
          className="category-menu-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="site-header-spacer" aria-hidden="true" />
    </>
  );
}
