const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

// Update PAGINATED_SLUGS for flat paths
let pag = fs.readFileSync("lib/category-pagination.ts", "utf8");
// Replace nested angry entries with flat ones
pag = pag.replace(
  /"angry-kaomoji\/table-flip": \{\s*path: "[^"]+",\s*tags: \[[^\]]+\],?\s*\},?/,
  ""
);
pag = pag.replace(/"angry-kaomoji\/fight": \{[\s\S]*?\},/, "");
pag = pag.replace(/"angry-kaomoji\/rage": \{[\s\S]*?\},/, "");
pag = pag.replace(/"angry-kaomoji\/pout": \{[\s\S]*?\},/, "");
pag = pag.replace(/"angry-kaomoji\/glare": \{[\s\S]*?\},/, "");

if (!pag.includes('"table-flip-kaomoji"')) {
  pag = pag.replace(
    '"angry-kaomoji": { path: "/angry-kaomoji", tags: ["angry"] },',
    `"angry-kaomoji": { path: "/angry-kaomoji", tags: ["angry"] },
  "table-flip-kaomoji": {
    path: "/table-flip-kaomoji",
    tags: ["tableflip", "table flip"],
  },
  "fight-kaomoji": {
    path: "/fight-kaomoji",
    tags: ["fight", "punch", "hit"],
  },
  "rage-kaomoji": {
    path: "/rage-kaomoji",
    tags: ["rage", "mad"],
  },
  "pout-kaomoji": {
    path: "/pout-kaomoji",
    tags: ["pout", "hmph", "annoyed"],
  },
  "glare-kaomoji": {
    path: "/glare-kaomoji",
    tags: ["glare", "grr", "gununu"],
  },`
  );
}
fs.writeFileSync("lib/category-pagination.ts", pag, "utf8");
console.log("pagination flat");

// Helper to write category page + optional pagination
function writeCategoryRoutes(slug) {
  w(
    `app/${slug}/page.tsx`,
    `import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/${slug}");

export const metadata = pageMetadata(page);

export default function Page() {
  return <CategoryView page={page} />;
}
`
  );
  w(
    `app/${slug}/page/[n]/page.tsx`,
    `import { createPaginatedCategoryRoute } from "@/lib/paginated-category-route";

const route = createPaginatedCategoryRoute("${slug}");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
`
  );
}

for (const slug of [
  "angry-kaomoji",
  "table-flip-kaomoji",
  "fight-kaomoji",
  "rage-kaomoji",
  "pout-kaomoji",
  "glare-kaomoji",
  "multiline-kaomoji",
]) {
  writeCategoryRoutes(slug);
}

console.log("category routes written");
