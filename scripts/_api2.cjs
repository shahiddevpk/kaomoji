const fs=require("fs");
console.log(fs.readFileSync("components/kaomoji/copy-button.tsx","utf8").slice(0,500));
console.log("---seo exports---", [...fs.readFileSync("lib/seo.ts","utf8").matchAll(/export function (\w+)/g)].map(m=>m[1]));
console.log("---site related---", /export function relatedPages/.test(fs.readFileSync("lib/site.ts","utf8")));
console.log("---robots in seo---", fs.readFileSync("lib/seo.ts","utf8").includes("robots"));
// search box
let sb=fs.readFileSync("components/kaomoji/search-box.tsx","utf8");
console.log("sb tags", sb.includes("tags"));
