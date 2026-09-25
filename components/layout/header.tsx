"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBox, HEADER_SEARCH_RESULTS_ID } from "@/components/kaomoji/search-box";
import { HeaderNav } from "@/components/layout/header-nav";
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

/** Desktop CTA only — omit from DOM under sm so SR/mobile never see a duplicate. */
function useDesktopCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const apply = () => setShow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return show;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const showCopyCta = useDesktopCta();
  // Category chips only — Home is the logo; Copy lives in the desktop CTA.
  const links = headerNav().filter(
    (page) => page.path !== "/" && page.path !== "/kaomoji-copy-paste",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            aria-label="Paste Kaomoji home"
            className="inline-flex min-h-11 shrink-0 items-center text-lg font-semibold tracking-tight text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            <span className="sm:hidden">PK</span>
            <span className="hidden sm:inline">Paste Kaomoji</span>
          </Link>

          <div className="min-w-0 flex-1">
            <SearchBox key={pathname} variant="header" />
          </div>

          {showCopyCta ? (
            <Link
              href={ctaHref(pathname)}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-4 type-button text-accent-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Copy a face
            </Link>
          ) : null}

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

        <div id={HEADER_SEARCH_RESULTS_ID} />
      </div>
    </header>
  );
}