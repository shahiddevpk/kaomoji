import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CopyProvider } from "@/components/kaomoji/copy-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/layout/json-ld";
import { websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const revalidate = 86400;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  // optional: if late, keep fallback forever so LCP text is not font-blocked.
  display: "optional",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  // Faces use mono but are not LCP text; keep preload off critical path.
  preload: false,
});

export const metadata: Metadata = {
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
  },
  // GSC: meta verification.google + public/google991fcccf4c181387.html
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "google991fcccf4c181387",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={websiteJsonLd()} />
        <CopyProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </CopyProvider>
      </body>
    </html>
  );
}