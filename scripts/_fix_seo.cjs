const fs = require("fs");
let seo = fs.readFileSync("lib/seo.ts", "utf8").replace(/\r\n/g, "\n");
if (seo.charCodeAt(0) === 0xfeff) seo = seo.slice(1);

const start = seo.indexOf("export function pageMetadata");
const end = seo.indexOf("export function breadcrumbJsonLd");
if (start < 0 || end < 0) throw new Error("markers missing");

const newPageMetadata = `export function pageMetadata(
  page: SitePage,
  options?: { pageNumber?: number },
): Metadata {
  const pageNumber = options?.pageNumber ?? 1;
  const baseSegment = documentTitleSegment(page);
  const segment =
    pageNumber > 1 ? \`\${baseSegment} - page \${pageNumber}\` : baseSegment;
  const fullTitle =
    page.path === "/" ? segment : \`\${segment} | \${siteConfig.siteName}\`;
  const pathForCanonical =
    pageNumber > 1 ? \`\${page.path}/page/\${pageNumber}\` : page.path;
  const canonical = canonicalPath(pathForCanonical);

  // Pagination page 2+ is noindex,follow to protect head-term SERPs.
  // Valuable unique intent pages stay indexable unless page.robots overrides.
  const robots =
    pageNumber > 1
      ? { index: false, follow: true }
      : page.robots
        ? {
            index: page.robots.index ?? true,
            follow: page.robots.follow ?? true,
          }
        : undefined;

  return {
    title: page.path === "/" ? { absolute: segment } : segment,
    description: page.description,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonical,
      siteName: siteConfig.siteName,
      type: "website",
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
    },
  };
}

`;

seo = seo.slice(0, start) + newPageMetadata + seo.slice(end);

// ensure getPage import for breadcrumbs
if (!seo.includes("getPage")) {
  seo = seo.replace(
    'import { siteConfig, type SitePage } from "@/lib/site";',
    'import { getPage, siteConfig, type SitePage } from "@/lib/site";'
  );
  seo = seo.replace(
    /import \{([^}]+)\} from "@\/lib\/site";/,
    (all, inner) => (inner.includes("getPage") ? all : `import { getPage, ${inner.trim()} } from "@/lib/site";`)
  );
}

fs.writeFileSync("lib/seo.ts", seo, "utf8");
console.log("robots now", seo.includes("index: false, follow: true"));
