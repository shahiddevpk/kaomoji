/* Type-only stand-ins for the Next.js metadata types the data layer still uses. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Metadata = Record<string, any> & {
  title?: string | { absolute?: string; default?: string; template?: string };
  description?: string;
  robots?: { index?: boolean; follow?: boolean; [k: string]: unknown };
  alternates?: { canonical?: string };
  pagination?: { previous?: string; next?: string };
  openGraph?: Record<string, unknown>;
  twitter?: Record<string, unknown>;
  keywords?: string | string[];
};
export namespace MetadataRoute {
  export type Sitemap = Array<{ url: string; lastModified?: string | Date; changeFrequency?: string; priority?: number }>;
}
