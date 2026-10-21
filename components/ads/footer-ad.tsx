"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID, ADSENSE_FOOTER_SLOT, isAdSenseEnabled } from "@/lib/ads";

/**
 * Pages that never show a manual ad unit: trust pages and search have no
 * publisher content an ad could sit beside (AdSense "screens without publisher
 * content" policy).
 */
const AD_FREE_PATHS = ["/about/", "/contact/", "/privacy/", "/terms/", "/disclaimer/", "/search/"];

/**
 * One labelled ad unit after the page content and before the footer. It is kept
 * clear of the copy grids and of the footer navigation so taps cannot land on
 * it by accident. Renders nothing until ADSENSE_FOOTER_SLOT is set.
 */
export function FooterAd() {
  const pathname = usePathname() ?? "/";
  const pushed = useRef(false);
  const adFree = AD_FREE_PATHS.some((path) => pathname.startsWith(path));
  const active = isAdSenseEnabled() && ADSENSE_FOOTER_SLOT !== "" && !adFree;

  useEffect(() => {
    if (!active || pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // Ad blockers — fail silently.
    }
  }, [active]);

  if (!active) return null;

  return (
    <aside aria-label="Advertisement" className="mx-auto mt-16 w-full max-w-6xl px-4">
      <p className="type-meta text-center text-muted">Advertisement</p>
      <ins
        className="adsbygoogle mt-2"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={ADSENSE_FOOTER_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
