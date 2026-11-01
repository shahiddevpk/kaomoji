const fs = require("fs");
const path = require("path");

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
  if (exists && f.endsWith(".ts") || exists && f.endsWith(".tsx")) {
    const s = fs.readFileSync(f, "utf8");
    if (s.includes("angry-kaomoji")) note += " [has angry]";
    if (s.includes("getByTags") || s.includes("getByTags")) note += " [tags]";
    if (s.includes("PAGE_GRID_LIMIT") && !s.includes("export const PAGE_GRID_LIMIT")) note += " [PAGE_GRID_LIMIT ref?]";
    if (s.includes("PAGE_GRID_LIMIT")) note += " [PAGE_GRID_LIMIT]";
  }
  console.log(note.padEnd(40), f);
}

// Find broken refs in data/index.ts
const idx = fs.readFileSync("data/index.ts","utf8");
const exports = [...idx.matchAll(/^export (?:const|function|type|\{)[^\n]*/gm)].map(m=>m[0]);
console.log("\nExports:");
exports.forEach(e => console.log(" ", e.slice(0,100)));
const bad = [];
if (idx.includes("PAGE_GRID_LIMIT") && !idx.includes("export const PAGE_GRID_LIMIT")) bad.push("uses PAGE_GRID_LIMIT but exports PAGE_GRID_LIMIT?");
if (idx.includes("PAGE_GRID_LIMIT")) {
  console.log("\nPAGE_GRID_LIMIT mentions:", (idx.match(/PAGE_GRID_LIMIT/g)||[]).length);
  console.log("PAGE_GRID_LIMIT mentions:", (idx.match(/PAGE_GRID_LIMIT/g)||[]).length);
}
// What do consumers import?
const consumers = [
  "components/kaomoji/category-view.tsx",
  "lib/category-pagination.ts",
  "lib/paginated-category-route.tsx",
  "app/sitemap.ts",
  "lib/search/index-engine.ts",
  "lib/search/actions.ts",
];
console.log("\nConsumer imports from data:");
for (const f of consumers) {
  if (!fs.existsSync(f)) continue;
  const s = fs.readFileSync(f,"utf8");
  const im = s.match(/from "@\/data\/index"[^;]*|import \{[^}]+\} from "@\/data\/index"/gs);
  if (im) console.log(f, im[0].replace(/\s+/g," ").slice(0,200));
}