const fs=require("fs");
// tidy empty lines in PAGINATED_SLUGS
let pag=fs.readFileSync("lib/category-pagination.ts","utf8");
pag=pag.replace(/\},(\s*\n){2,}\s*"/g, '},\n  "');
pag=pag.replace(/"pout-kaomoji": \{\n    path:/, '"pout-kaomoji": {\n    path:');
fs.writeFileSync("lib/category-pagination.ts", pag, "utf8");

// title lengths for shipped pages
const site=fs.readFileSync("lib/site.ts","utf8");
const re=/path: "(\/[^"]+)"[\s\S]*?titleSegment: "([^"]+)"[\s\S]*?description:\s*\n\s*"([^"]*)"/g;
let m;
const want=["/angry-kaomoji","/table-flip-kaomoji","/fight-kaomoji","/pout-kaomoji","/multiline-kaomoji","/kaomoji-generator"];
while((m=re.exec(site))){
  if(!want.includes(m[1])) continue;
  const seg=m[2];
  const final=seg.includes("Paste Kaomoji")?seg:seg+" | Paste Kaomoji";
  console.log(m[1], "title="+[...final].length, "desc="+[...m[3]].length, JSON.stringify(final));
}
