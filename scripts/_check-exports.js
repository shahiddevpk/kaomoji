const fs = require("fs");
const s = fs.readFileSync("data/index.ts","utf8");
for (const line of s.split(/\n/)) {
  if (line.startsWith("export ")) console.log(line.slice(0,120));
}
console.log("---pag---");
const p = fs.readFileSync("lib/category-pagination.ts","utf8");
console.log(p.slice(0,800));