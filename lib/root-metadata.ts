import type { Metadata } from "next";
import { ADSENSE_CLIENT_ID, isAdSenseEnabled } from "@/lib/ads";
import { siteConfig } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kaomoji Library — Browse by Mood | Paste Kaomoji",
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.siteName, url: siteConfig.url }],
  creator: siteConfig.siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: "Kaomoji Library — Browse by Mood | Paste Kaomoji",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Paste Kaomoji — kaomoji library by mood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaomoji Library — Browse by Mood | Paste Kaomoji",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // GSC: meta verification.google + public/google991fcccf4c181387.html
  verification: {
    google:
      import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "google991fcccf4c181387",
  },
  // AdSense site ownership — only once a real publisher ID is set in lib/ads.ts.
  ...(isAdSenseEnabled()
    ? { other: { "google-adsense-account": ADSENSE_CLIENT_ID } }
    : {}),
};

