const fs = require("fs");

function dump(f, n=80) {
  console.log("\n====", f, "====");
  if (!fs.existsSync(f)) { console.log("MISSING"); return; }
  console.log(fs.readFileSync(f,"utf8").split(/\n/).slice(0,n).join("\n"));
}

dump("lib/category-pagination.ts", 120);
dump("lib/paginated-category-route.tsx", 80);
dump("lib/seo.ts", 100);
dump("lib/search/actions.ts", 80);
dump("components/kaomoji/category-view.tsx", 40);
dump("components/kaomoji/breadcrumbs.tsx", 80);
dump("components/kaomoji/category-tiles.tsx", 80);
dump("next.config.ts", 40);
dump("app/sitemap.ts", 80);

// Exact export names
const idx = fs.readFileSync("data/index.ts","utf8");
const names = [...idx.matchAll(/export (?:async )?function (\w+)|export const (\w+)|export type (\w+)/g)]
  .map(m => m[1]||m[2]||m[3]);
console.log("\nEXACT EXPORT NAMES:", names.join(", "));

const cv = fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
const imp = cv.match(/import \{([^}]+)\} from "@\/data\/index"/);
console.log("\ncategory-view imports:", imp?.[1].replace(/\s+/g," "));