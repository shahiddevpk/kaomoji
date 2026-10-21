import { adsTxtBody, isAdSenseEnabled } from "@/lib/ads";

export const dynamic = "force-static";

/** Authorized Digital Sellers file — a 404 until the real publisher ID is set in lib/ads.ts. */
export function GET() {
  if (!isAdSenseEnabled()) {
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(adsTxtBody(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
