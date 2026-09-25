"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { moodChipClass } from "@/lib/mood-colors";

/**
 * Category strip starts at the beginning (Cute/Happy visible).
 * Scroll arrows + edge fades improve discoverability; all links stay in the HTML.
 */
export function HeaderNav({
  links,
  onNavigate,
}: {
  links: Array<{ path: string; label: string }>;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateOverflow = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(max - el.scrollLeft > 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Always start at the beginning so Cute/Happy are visible.
    el.scrollLeft = 0;
    updateOverflow();
    const onScroll = () => updateOverflow();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => updateOverflow());
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [links, pathname, updateOverflow]);

  function scrollByDir(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(160, el.clientWidth * 0.55), behavior: "smooth" });
  }

  const arrowClass =
    "nav-scroll-arrow absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

  return (
    <nav aria-label="Categories" className="relative">
      <button
        type="button"
        aria-label="Scroll categories left"
        className={cn(arrowClass, "left-0", canLeft ? "opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => scrollByDir(-1)}
        tabIndex={canLeft ? 0 : -1}
      >
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll categories right"
        className={cn(arrowClass, "right-0", canRight ? "opacity-100" : "pointer-events-none opacity-0")}
        onClick={() => scrollByDir(1)}
        tabIndex={canRight ? 0 : -1}
      >
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={scrollerRef}
        className={cn(
          "-mx-4 flex justify-start gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0",
          "scroll-smooth [scrollbar-width:thin]",
        )}
      >
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
                moodChipClass(active),
                active && "font-medium text-accent-foreground",
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
