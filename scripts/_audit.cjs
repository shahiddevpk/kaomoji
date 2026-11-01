const fs = require("fs");

const checks = [
  "data/index.ts",
  "lib/site.ts",
  "lib/category-pagination.ts",
  "lib/paginated-category-route.tsx",
  "lib/seo.ts",
  "lib/search/actions.ts",
  "lib/search/index-engine.ts",
  "components/kaomoji/category-view.tsx",
  "components/kaomoji/breadcrumbs.tsx",
  "components/kaomoji/category-tiles.tsx",
  "components/kaomoji/subcategory-nav.tsx",
  "app/angry-kaomoji/page.tsx",
  "app/multiline-kaomoji/page.tsx",
  "next.config.ts",
  "app/sitemap.ts",
];
for (const f of checks) {
  const exists = fs.existsSync(f);
  let note = exists ? fs.statSync(f).size + "b" : "MISSING";
  console.log(String(note).padEnd(16), f);
}

const idx = fs.readFileSync("data/index.ts","utf8");
console.log("\nExports:");
for (const line of idx.split(/\n/)) {
  if (line.startsWith("export ")) console.log(" ", line.slice(0,110));
}
console.log("\nHas PAGE_GRID_LIMIT export?", /export const PAGE_GRID_LIMIT/.test(idx));
console.log("Uses PAGE_GRID_LIMIT?", /PAGE_GRID_LIMIT/.test(idx));
console.log("Has getByTags?", /export function getByTags/.test(idx));
console.log("Has getForPage?", /export function getForPage/.test(idx));
console.log("Has getForTagPage?", /export function getForTagPage/.test(idx));

// spot undefined idents used in index
const uses = ["PAGE_GRID_LIMIT", "PAGE_GRID_LIMIT", "catalog", "ITEM_LIST_LIMIT"];
for (const u of uses) {
  const re = new RegExp(u, "g");
  console.log(u, "count", (idx.match(re)||[]).length);
}

console.log("\n--- category-pagination head ---");
console.log(fs.readFileSync("lib/category-pagination.ts","utf8").slice(0,500));

console.log("\n--- site angry paths ---");
const site = fs.readFileSync("lib/site.ts","utf8");
for (const m of site.matchAll(/path: "(\/[^"]+)"/g)) console.log(m[1]);

console.log("\n--- category-view imports ---");
const cv = fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
console.log(cv.match(/import \{[\s\S]*?\} from "@\/data\/index"/)?.[0]?.slice(0,400));