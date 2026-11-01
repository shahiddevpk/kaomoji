const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
const paths=[...site.matchAll(/path: "([^"]+)"/g)].map(m=>m[1]);
console.log(paths.join("\n"));
console.log("---exists---");
for (const p of [
  "app/angry-kaomoji/page.tsx",
  "app/table-flip-kaomoji/page.tsx",
  "app/fight-kaomoji/page.tsx",
  "app/rage-kaomoji/page.tsx",
  "app/pout-kaomoji/page.tsx",
  "app/glare-kaomoji/page.tsx",
  "app/multiline-kaomoji/page.tsx",
  "app/kaomoji-generator/page.tsx",
  "components/kaomoji/subcategory-nav.tsx",
  "components/kaomoji/generator.tsx",
]) console.log(p, fs.existsSync(p));
console.log("---pag slugs---");
const pag=fs.readFileSync("lib/category-pagination.ts","utf8");
console.log([...pag.matchAll(/"[a-z0-9\-\/]+": \{ path:/g)].map(m=>m[0]));
