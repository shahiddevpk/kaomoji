const fs = require("fs");

// ---- sitemap: use crawlablePageCountForMeta ----
wSitemap();
function wSitemap() {
  const content = `import type { MetadataRoute } from "next";
import {
  crawlablePageCountForMeta,
  PAGINATED_SLUGS,
} from "@/lib/category-pagination";
import { pages, type SitePage } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

/** Modest sitemap priorities - one intent owner per URL. */
function sitemapPriority(page: SitePage): number {
  if (page.group === "hub") return 1;
  if (page.group === "trust") return 0.3;
  switch (page.path) {
    case "/kaomoji-copy-paste":
      return 0.9;
    case "/cute-kaomoji":
    case "/japanese-emoticons":
      return 0.85;
    case "/text-faces":
    case "/kaomoji-generator":
      return 0.8;
    case "/happy-kaomoji":
    case "/cat-kaomoji":
    case "/sad-kaomoji":
    case "/crying-kaomoji":
    case "/angry-kaomoji":
      return 0.75;
    case "/table-flip-kaomoji":
    case "/fight-kaomoji":
    case "/rage-kaomoji":
    case "/pout-kaomoji":
    case "/glare-kaomoji":
    case "/multiline-kaomoji":
      return 0.7;
    default:
      return 0.65;
  }
}

/** Page 2+ browse depth - listed but noindex via pageMetadata. */
const PAGINATION_SITEMAP_PRIORITY = 0.4;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: "2026-09-25",
    changeFrequency:
      page.group === "hub"
        ? "weekly"
        : page.group === "trust"
          ? "yearly"
          : "monthly",
    priority: sitemapPriority(page),
  }));

  const paginationEntries: MetadataRoute.Sitemap = [];
  for (const meta of Object.values(PAGINATED_SLUGS)) {
    const totalPages = crawlablePageCountForMeta(meta);
    for (let n = 2; n <= totalPages; n++) {
      paginationEntries.push({
        url: absoluteUrl(\`\${meta.path}/page/\${n}\`),
        lastModified: "2026-09-25",
        changeFrequency: "monthly",
        priority: PAGINATION_SITEMAP_PRIORITY,
      });
    }
  }

  return [...baseEntries, ...paginationEntries];
}
`;
  fs.writeFileSync("app/sitemap.ts", content.replace(/\r\n/g, "\n"), "utf8");
  console.log("sitemap written");
}

// ---- tiles ----
let tiles = fs.readFileSync("components/kaomoji/category-tiles.tsx", "utf8");
if (!tiles.includes("/angry-kaomoji")) {
  tiles = tiles.replace('"/crying-kaomoji",', '"/crying-kaomoji",\n  "/angry-kaomoji",');
}
if (!tiles.includes("/kaomoji-generator")) {
  tiles = tiles.replace('"/text-faces",', '"/text-faces",\n  "/multiline-kaomoji",\n  "/kaomoji-generator",');
}
if (!tiles.includes("!page.parentPath")) {
  tiles = tiles.replace(
    'const browse = pagesByGroup("browse");',
    'const browse = pagesByGroup("browse").filter((page) => !page.parentPath);'
  );
}
// Flat angry children should appear as top-level browse tiles? PO says flat URLs.
// They have parentPath set for chips/breadcrumbs - filtered out of tiles by parentPath.
// Only angry parent + multiline + generator in tiles - good for avoid thin tile spam.
// But PO flat URLs might want children discoverable - chips on parent handle that.
fs.writeFileSync("components/kaomoji/category-tiles.tsx", tiles, "utf8");
console.log("tiles", tiles.includes("/angry-kaomoji"), tiles.includes("parentPath"));

// ---- category-view: pre-line intros ----
let cv = fs.readFileSync("components/kaomoji/category-view.tsx", "utf8");
cv = cv.replace(
  'className="mt-3 max-w-2xl type-body text-muted"',
  'className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted"'
);
fs.writeFileSync("components/kaomoji/category-view.tsx", cv, "utf8");

// ---- subcategory-nav: verify imports ----
let nav = fs.readFileSync("components/kaomoji/subcategory-nav.tsx", "utf8");
console.log("nav childPages", nav.includes("childPages"), "getPage", nav.includes("getPage"));

// ---- ensure related arrays on flat children include parent + >=2 siblings ----
let site = fs.readFileSync("lib/site.ts", "utf8");
const relatedCheck = [
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/rage-kaomoji",
  "/pout-kaomoji",
  "/glare-kaomoji",
];
for (const p of relatedCheck) {
  const i = site.indexOf(`path: "${p}"`);
  const block = site.slice(i, site.indexOf("},", i + 50) + 2);
  const rel = block.match(/related: \[([\s\S]*?)\]/);
  const count = rel ? (rel[1].match(/"/g) || []).length / 2 : 0;
  const hasParent = rel && rel[1].includes("/angry-kaomoji");
  console.log("related", p, "count~", count, "parent", hasParent);
}

// Remove empty nested angry child folders if they exist as leftover
for (const nest of ["table-flip", "fight", "rage", "pout", "glare"]) {
  const dir = `app/angry-kaomoji/${nest}`;
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log("removed nested", dir);
  }
}

console.log("done batch");
