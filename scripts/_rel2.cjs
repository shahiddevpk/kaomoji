const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
for (const p of ["/angry-kaomoji","/table-flip-kaomoji","/fight-kaomoji","/pout-kaomoji","/multiline-kaomoji","/kaomoji-generator"]) {
  const i=site.indexOf(`path: "${p}"`);
  // find next path: or end of object
  let depth=0, start=site.lastIndexOf("{", i), end=start;
  for (let j=start;j<site.length;j++) {
    if (site[j]==="{") depth++;
    else if (site[j]==="}") { depth--; if (depth===0) { end=j+1; break; } }
  }
  const obj=site.slice(start,end);
  console.log("\n====", p, "len", obj.length);
  const rel=obj.match(/related:\s*\[[\s\S]*?\]/);
  console.log(rel ? rel[0] : "NO RELATED");
  console.log("parentPath", (obj.match(/parentPath:\s*("[^"]*"|undefined|null)?/)||[])[0]);
  // syntax check howTo before related
  if (obj.includes("howTo:") && !obj.includes("related:")) console.log("WARNING no related after howTo");
}
