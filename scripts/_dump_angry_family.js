const fs = require("fs");
const site = fs.readFileSync("lib/site.ts", "utf8");
// dump from angry through pout
const start = site.indexOf('path: "/angry-kaomoji"');
const end = site.indexOf('path: "/kaomoji-copy-paste"');
console.log(site.slice(start, end));
console.log("\n==== TYPE ====");
console.log(site.slice(site.indexOf("export type SitePage"), site.indexOf("export const pages")));
console.log("\n==== SUBNAV ====");
console.log(fs.readFileSync("components/kaomoji/subcategory-nav.tsx", "utf8"));