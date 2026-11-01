import { ADSENSE_CLIENT_ID, isAdSenseEnabled } from "@/lib/ads";

const SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;

/**
 * AdSense, loaded after the page is usable. The `google-adsense-account` meta
 * keeps site ownership verifiable without the script in the critical path.
 * The ~225 KiB AdSense bundle starts on the first scroll/tap/key/mouse move,
 * or after 4s idle, so it no longer competes with first paint (LCP) on mobile.
 * Queued `adsbygoogle.push({})` calls run once the script arrives.
 */
export function AdSenseScript() {
  if (!isAdSenseEnabled()) return null;
  const loader = `(function(){var d=0,e=["scroll","pointerdown","keydown","mousemove","touchstart"];function l(){if(d)return;d=1;e.forEach(function(n){removeEventListener(n,l,{passive:!0})});var s=document.createElement("script");s.async=!0;s.crossOrigin="anonymous";s.src=${JSON.stringify(SRC)};document.head.appendChild(s)}e.forEach(function(n){addEventListener(n,l,{passive:!0,once:!0})});addEventListener("load",function(){setTimeout(function(){("requestIdleCallback" in window?requestIdleCallback:setTimeout)(l)},4000)})})();`;
  return (
    <>
      <meta name="google-adsense-account" content={ADSENSE_CLIENT_ID} />
      <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
      <script dangerouslySetInnerHTML={{ __html: loader }} />
    </>
  );
}
