const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
for (const p of ["/angry-kaomoji","/table-flip-kaomoji","/fight-kaomoji","/pout-kaomoji","/multiline-kaomoji","/kaomoji-generator"]) {
  const i=site.indexOf(`path: "${p}"`);
  console.log("\n====", p);
  console.log(site.slice(i, i+900));
}
