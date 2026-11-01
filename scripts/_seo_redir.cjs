const fs = require("fs");

// ---- seo robots + ensure parent breadcrumb ----
let seo = fs.readFileSync("lib/seo.ts", "utf8");
if (seo.charCodeAt(0) === 0xfeff) seo = seo.slice(1);

if (!seo.includes("robots")) {
  // insert robots into pageMetadata return
  if (!seo.includes("const robots")) {
    seo = seo.replace(
      "const canonical = canonicalPath(pathForCanonical);\n\n  return {",
      `const canonical = canonicalPath(pathForCanonical);

  const robots =
    pageNumber > 1
      ? { index: false, follow: true }
      : page.robots
        ? {
            index: page.robots.index ?? true,
            follow: page.robots.follow ?? true,
          }
        : undefined;

  return {`
    );
    seo = seo.replace(
      "title: page.path === \"/\" ? { absolute: segment } : segment,\n    description: page.description,",
      `title: page.path === "/" ? { absolute: segment } : segment,
    description: page.description,
    ...(robots ? { robots } : {}),`
    );
  }
}

if (!seo.includes("getPage")) {
  seo = seo.replace(
    /import \{([^}]+)\} from "@\/lib\/site";/,
    (all, inner) => {
      if (inner.includes("getPage")) return all;
      return `import { getPage, ${inner.trim()} } from "@/lib/site";`;
    }
  );
}

// Fix breadcrumb to include parent if not already
if (!seo.includes("page.parentPath")) {
  const oldBreadcrumbStart = seo.indexOf("export function breadcrumbJsonLd");
  if (oldBreadcrumbStart >= 0) {
    // replace elements init through pageNumber>1 push with parent-aware version
    seo = seo.replace(
      /export function breadcrumbJsonLd\([\s\S]*?return \{\s*"@context": "https:\/\/schema\.org",\s*"@type": "BreadcrumbList",/,
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
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",`
    );
  }
}

fs.writeFileSync("lib/seo.ts", seo, "utf8");
console.log("seo robots?", seo.includes("robots"), "parentPath?", seo.includes("parentPath"));

// ---- next.config redirects ----
let cfg = fs.readFileSync("next.config.ts", "utf8");
if (cfg.charCodeAt(0) === 0xfeff) cfg = cfg.slice(1);

const newRedirects = `
      // Angry family: flat owners + nested/aliases -> flat (no dual indexable sets)
      { source: "/angry", destination: "/angry-kaomoji/", permanent: true },
      { source: "/angry/", destination: "/angry-kaomoji/", permanent: true },
      { source: "/angry-kaomojis", destination: "/angry-kaomoji/", permanent: true },
      { source: "/angry-kaomojis/", destination: "/angry-kaomoji/", permanent: true },
      { source: "/table-flip", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/table-flip/", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/tableflip", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/tableflip/", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/tableflip-kaomoji", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/tableflip-kaomoji/", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/fight", destination: "/fight-kaomoji/", permanent: true },
      { source: "/fight/", destination: "/fight-kaomoji/", permanent: true },
      { source: "/rage", destination: "/rage-kaomoji/", permanent: true },
      { source: "/rage/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/mad", destination: "/rage-kaomoji/", permanent: true },
      { source: "/mad/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/mad-kaomoji", destination: "/rage-kaomoji/", permanent: true },
      { source: "/mad-kaomoji/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/furious", destination: "/rage-kaomoji/", permanent: true },
      { source: "/furious/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/furious-kaomoji", destination: "/rage-kaomoji/", permanent: true },
      { source: "/furious-kaomoji/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/pout", destination: "/pout-kaomoji/", permanent: true },
      { source: "/pout/", destination: "/pout-kaomoji/", permanent: true },
      { source: "/annoyed", destination: "/pout-kaomoji/", permanent: true },
      { source: "/annoyed/", destination: "/pout-kaomoji/", permanent: true },
      { source: "/annoyed-kaomoji", destination: "/pout-kaomoji/", permanent: true },
      { source: "/annoyed-kaomoji/", destination: "/pout-kaomoji/", permanent: true },
      { source: "/glare", destination: "/glare-kaomoji/", permanent: true },
      { source: "/glare/", destination: "/glare-kaomoji/", permanent: true },
      // Nested angry children (legacy) -> flat owners
      { source: "/angry-kaomoji/table-flip", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/table-flip/", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/fight", destination: "/fight-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/fight/", destination: "/fight-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/rage", destination: "/rage-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/rage/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/pout", destination: "/pout-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/pout/", destination: "/pout-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/glare", destination: "/glare-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/glare/", destination: "/glare-kaomoji/", permanent: true },
      // Multiline + generator aliases
      { source: "/multiline", destination: "/multiline-kaomoji/", permanent: true },
      { source: "/multiline/", destination: "/multiline-kaomoji/", permanent: true },
      { source: "/multi-line-kaomoji", destination: "/multiline-kaomoji/", permanent: true },
      { source: "/multi-line-kaomoji/", destination: "/multiline-kaomoji/", permanent: true },
      { source: "/generator", destination: "/kaomoji-generator/", permanent: true },
      { source: "/generator/", destination: "/kaomoji-generator/", permanent: true },
      { source: "/make-kaomoji", destination: "/kaomoji-generator/", permanent: true },
      { source: "/make-kaomoji/", destination: "/kaomoji-generator/", permanent: true },
      // Pagination page/1 -> bare
      { source: "/angry-kaomoji/page/1", destination: "/angry-kaomoji/", permanent: true },
      { source: "/angry-kaomoji/page/1/", destination: "/angry-kaomoji/", permanent: true },
      { source: "/table-flip-kaomoji/page/1", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/table-flip-kaomoji/page/1/", destination: "/table-flip-kaomoji/", permanent: true },
      { source: "/fight-kaomoji/page/1", destination: "/fight-kaomoji/", permanent: true },
      { source: "/fight-kaomoji/page/1/", destination: "/fight-kaomoji/", permanent: true },
      { source: "/rage-kaomoji/page/1", destination: "/rage-kaomoji/", permanent: true },
      { source: "/rage-kaomoji/page/1/", destination: "/rage-kaomoji/", permanent: true },
      { source: "/pout-kaomoji/page/1", destination: "/pout-kaomoji/", permanent: true },
      { source: "/pout-kaomoji/page/1/", destination: "/pout-kaomoji/", permanent: true },
      { source: "/glare-kaomoji/page/1", destination: "/glare-kaomoji/", permanent: true },
      { source: "/glare-kaomoji/page/1/", destination: "/glare-kaomoji/", permanent: true },
      { source: "/multiline-kaomoji/page/1", destination: "/multiline-kaomoji/", permanent: true },
      { source: "/multiline-kaomoji/page/1/", destination: "/multiline-kaomoji/", permanent: true },
`;

if (!cfg.includes("/table-flip-kaomoji/")) {
  // insert before closing of redirects array
  cfg = cfg.replace(
    /\{ source: "\/text-faces\/page\/1\/", destination: "\/text-faces\/", permanent: true \},/,
    `{ source: "/text-faces/page/1/", destination: "/text-faces/", permanent: true },
${newRedirects}`
  );
  if (!cfg.includes("/table-flip-kaomoji/")) {
    // fallback: before return closing
    cfg = cfg.replace(
      /(\n\s*\];\n\s*\},)/,
      `\n${newRedirects}$1`
    );
  }
  fs.writeFileSync("next.config.ts", cfg, "utf8");
  console.log("redirects added", cfg.includes("/table-flip-kaomoji/"));
} else {
  console.log("redirects already present");
}
