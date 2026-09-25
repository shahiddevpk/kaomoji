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
    default: "Kaomoji Copy and Paste | Text Faces | Paste Kaomoji",
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
    title: "Kaomoji Copy and Paste | Text Faces | Paste Kaomoji",
    description:
      "Copy cute Japanese kaomoji and text faces instantly. Browse happy, sad, cute, and cat faces â€” one tap to paste.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Paste Kaomoji â€” kaomoji copy and paste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaomoji Copy and Paste | Text Faces | Paste Kaomoji",
    description:
      "Copy cute Japanese kaomoji and text faces instantly. Browse happy, sad, cute, and cat faces â€” one tap to paste.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // TEMP GSC placeholder â€” swap via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION when you have the real code
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "pKmJ9xQ2vL7nR4tY8wA1bC5dE6fG0hI3jK",
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