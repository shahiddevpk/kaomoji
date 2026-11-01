"use client";
import { island } from "@/lib/island";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID, ADSENSE_FOOTER_SLOT, isAdFreePath, isAdSenseEnabled } from "@/lib/ads";

/**
 * One labelled ad unit after the page content and before the footer. It is kept
 * clear of the copy grids and of the footer navigation so taps cannot land on
 * it by accident. Renders nothing until ADSENSE_FOOTER_SLOT is set.
 */
function FooterAd__impl() {
  const pathname = usePathname() ?? "/";
  const pushed = useRef(false);
  const adFree = isAdFreePath(pathname);
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
    <aside
      aria-label="Advertisement"
      className="mx-auto mt-16 w-full max-w-6xl px-4"
      // Reserve the slot height before AdSense fills it, so the footer does not
      // jump when the ad loads (CLS). 280px covers the common responsive units.
      style={{ minHeight: 304, contain: "layout" }}
    >
      <p className="type-meta text-center text-muted">Advertisement</p>
      <ins
        className="adsbygoogle mt-2"
        style={{ display: "block", minHeight: 280 }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={ADSENSE_FOOTER_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

export { FooterAd__impl };
export const FooterAd = island("ads/footer-ad#FooterAd", FooterAd__impl);
