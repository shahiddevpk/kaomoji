const fs=require("fs");
const paths=[
 "app/angry-kaomoji/page.tsx","app/table-flip-kaomoji/page.tsx","app/fight-kaomoji/page.tsx","app/pout-kaomoji/page.tsx","app/multiline-kaomoji/page.tsx","app/kaomoji-generator/page.tsx",
 "components/kaomoji/subcategory-nav.tsx","components/kaomoji/kaomoji-generator.tsx","lib/site.ts","lib/category-pagination.ts","lib/paginated-category-route.tsx","lib/seo.ts","lib/search/actions.ts","next.config.ts","app/sitemap.ts"
];
for(const p of paths) console.log((fs.existsSync(p)?"OK":"MISS"), p);
const site=fs.readFileSync("lib/site.ts","utf8");
console.log("has rage page?", /path: "\/rage-kaomoji"/.test(site));
console.log("has glare page?", /path: "\/glare-kaomoji"/.test(site));
console.log("seo noindex", fs.readFileSync("lib/seo.ts","utf8").includes("index: false, follow: true"));
console.log("pag keys", [...fs.readFileSync("lib/category-pagination.ts","utf8").matchAll(/"([a-z0-9\-]+)": \{ path:/g)].map(m=>m[1]).filter(k=>/angry|flip|fight|pout|rage|glare|multi/.test(k)));
