const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
// extract angry + multiline page objects
for (const p of ["/angry-kaomoji","/angry-kaomoji/table-flip","/angry-kaomoji/fight","/angry-kaomoji/rage","/angry-kaomoji/pout","/angry-kaomoji/glare","/multiline-kaomoji"]) {
  const i=site.indexOf(`path: "${p}"`);
  if(i<0){console.log("MISSING",p);continue;}
  console.log("\n====",p);
  console.log(site.slice(i, i+900));
}
console.log("\n==== SitePage type");
console.log(site.slice(site.indexOf("export type SitePage"), site.indexOf("export const pages")));
console.log("\n==== category-view full");
console.log(fs.readFileSync("components/kaomoji/category-view.tsx","utf8"));
