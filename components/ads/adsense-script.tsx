import { ADSENSE_CLIENT_ID, isAdSenseEnabled } from "@/lib/ads";

/**
 * Google's AdSense code snippet, server-rendered so it is in the HTML Google's
 * review crawler fetches (React hoists async scripts into <head>). `async`
 * keeps it off the render path. The script also shows Google's consent message
 * in the EEA, UK and Switzerland. Renders nothing until the publisher ID is set.
 */
export function AdSenseScript() {
  if (!isAdSenseEnabled()) return null;
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}
