/**
 * Google AdSense setup — the ONE place to switch ads on.
 *
 * While ADSENSE_PUBLISHER_ID is the placeholder, nothing AdSense-related is
 * served: /ads.txt is a 404, there is no google-adsense-account meta tag, no
 * AdSense script, no ad unit, and the privacy / about pages keep their no-ads
 * wording. Put the real ID here (AdSense → Account → Account information,
 * "pub-" + 16 digits) and all of it switches on in the next deploy.
 *
 * Consent (EEA, UK, Switzerland): Google's certified CMP is the "European
 * regulations" message in AdSense → Privacy & messaging. It is served by the
 * AdSense script itself; make sure pastekaomoji.com is included in that message
 * when the real ID goes in.
 */

/** AdSense → Account → Account information (pastekaomoji.com). */
export const ADSENSE_PUBLISHER_ID: string = "pub-1493183147218727";

/**
 * Optional: ad unit slot ID for the footer unit (AdSense → Ads → By ad unit),
 * set after approval. Empty = no manual unit (Auto ads can still be switched on
 * from the AdSense dashboard without a code change).
 */
export const ADSENSE_FOOTER_SLOT = "";

/** Google's certification authority ID for ads.txt (the same for every publisher). */
const GOOGLE_ADS_TXT_CERT_ID = "f08c47fec0942fa0";

/** True once ADSENSE_PUBLISHER_ID holds a real publisher ID. */
export function isAdSenseEnabled(): boolean {
  return (
    /^pub-\d{16}$/.test(ADSENSE_PUBLISHER_ID) &&
    ADSENSE_PUBLISHER_ID !== "pub-0000000000000000"
  );
}

/** "ca-pub-…" form used by the AdSense script and the site meta tag. */
export const ADSENSE_CLIENT_ID = `ca-${ADSENSE_PUBLISHER_ID}`;

export function adsTxtBody(): string {
  return `google.com, ${ADSENSE_PUBLISHER_ID}, DIRECT, ${GOOGLE_ADS_TXT_CERT_ID}\n`;
}
