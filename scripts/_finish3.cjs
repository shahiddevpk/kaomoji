const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

w("lib/paginated-category-route.tsx", `import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { CategoryView } from "@/components/kaomoji/category-view";
import {
  buildPageStaticParamsFromMeta,
  crawlablePageCountForMeta,
  parsePageParam,
  type PaginatedSlug,
  PAGINATED_SLUGS,
} from "@/lib/category-pagination";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

export function createPaginatedCategoryRoute(slug: PaginatedSlug) {
  const meta = PAGINATED_SLUGS[slug];
  if (!meta) {
    throw new Error(\`Unknown paginated slug: \${String(slug)}\`);
  }
  const page = getPage(meta.path);

  function generateStaticParams() {
    return buildPageStaticParamsFromMeta(meta);
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ n: string }>;
  }): Promise<Metadata> {
    const { n } = await params;
    const num = parsePageParam(n);
    if (num == null || num < 1) {
      return pageMetadata(page);
    }
    return pageMetadata(page, { pageNumber: num });
  }

  async function Page({ params }: { params: Promise<{ n: string }> }) {
    const { n } = await params;
    const num = parsePageParam(n);
    if (num == null) notFound();
    if (num === 1) redirect(\`\${meta.path}/\`);
    const totalPages = crawlablePageCountForMeta(meta);
    if (num > totalPages) notFound();
    return <CategoryView page={page} pageNumber={num} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
`);

// Patch seo.ts for robots + parent breadcrumb
let seo = fs.readFileSync("lib/seo.ts", "utf8");
if (seo.charCodeAt(0) === 0xfeff) seo = seo.slice(1);

if (!seo.includes("robots:")) {
  seo = seo.replace(
    `  return {
    title: page.path === "/" ? { absolute: segment } : segment,
    description: page.description,
    alternates: {
      canonical,
    },`,
    `  const robots =
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
    },`
  );
  console.log("seo robots patched");
}

if (!seo.includes("parentPath") && seo.includes("breadcrumbJsonLd")) {
  seo = seo.replace(
    `export function breadcrumbJsonLd(
  page: SitePage,
  options?: { pageNumber?: number },
) {
  const pageNumber = options?.pageNumber ?? 1;
  const elements: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: page.heading,
      item: absoluteUrl(page.path),
    },
  ];
  if (pageNumber > 1) {
    elements.push({
      "@type": "ListItem",
      position: 3,
      name: \`Page \${pageNumber}\`,
      item: absoluteUrl(\`\${page.path}/page/\${pageNumber}\`),
    });
  }`,
    `export function breadcrumbJsonLd(
  page: SitePage,
  options?: { pageNumber?: number },
) {
  const pageNumber = options?.pageNumber ?? 1;
  const elements: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];
  let position = 2;
  if (page.parentPath) {
    const { getPage } = require("@/lib/site") as typeof import("@/lib/site");
    const parent = getPage(page.parentPath);
    elements.push({
      "@type": "ListItem",
      position,
      name: parent.heading,
      item: absoluteUrl(parent.path),
    });
    position += 1;
  }
  elements.push({
    "@type": "ListItem",
    position,
    name: page.heading,
    item: absoluteUrl(page.path),
  });
  position += 1;
  if (pageNumber > 1) {
    elements.push({
      "@type": "ListItem",
      position,
      name: \`Page \${pageNumber}\`,
      item: absoluteUrl(\`\${page.path}/page/\${pageNumber}\`),
    });
  }`
  );
  // Better: use static import - fix require hack
  if (!seo.includes('getPage')) {
    seo = seo.replace(
      'import { siteConfig, type SitePage } from "@/lib/site";',
      'import { getPage, siteConfig, type SitePage } from "@/lib/site";'
    );
  }
  seo = seo.replace(
    'const { getPage } = require("@/lib/site") as typeof import("@/lib/site");\n    const parent = getPage(page.parentPath);',
    "const parent = getPage(page.parentPath);"
  );
  console.log("seo breadcrumb parent patched");
}

// Ensure getPage imported
if (seo.includes("getPage(page.parentPath)") && !seo.includes("getPage,")) {
  seo = seo.replace(
    /import \{([^}]+)\} from "@\/lib\/site";/,
    (all, inner) => {
      if (inner.includes("getPage")) return all;
      return `import { getPage, ${inner.trim()} } from "@/lib/site";`;
    }
  );
}

fs.writeFileSync("lib/seo.ts", seo, "utf8");
console.log("seo saved");
