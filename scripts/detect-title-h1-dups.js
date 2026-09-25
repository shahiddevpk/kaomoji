/**
 * detect-title-h1-dups.js — stub uniqueness check for page-1 SitePages.
 * Usage: node scripts/detect-title-h1-dups.js
 * Manual review recommended — does not auto-fix or delete.
 */
const fs = require("fs");
const src = fs.readFileSync("D:/kaomoji/lib/site.ts", "utf8");
const blocks = [...src.matchAll(/\{\s*path:\s*"([^"]+)"[\s\S]*?heading:\s*"([^"]*)"[\s\S]*?titleSegment:\s*"([^"]*)"[\s\S]*?description:\s*"([^"]*)"/g)];
function dups(key) {
  const m = new Map();
  for (const b of blocks) {
    const val = key === "heading" ? b[2] : key === "title" ? b[3] : b[4];
    if (!m.has(val)) m.set(val, []);
    m.get(val).push(b[1]);
  }
  return [...m.entries()].filter(([, p]) => p.length > 1);
}
console.log("pages parsed:", blocks.length);
for (const key of ["title", "heading", "description"]) {
  const d = dups(key);
  console.log("\nDuplicate " + key + ":", d.length ? "" : "none");
  for (const [val, paths] of d) console.log(" ", JSON.stringify(val), "->", paths.join(", "));
}
console.log("\nManual review recommended before adding any new indexable route.");
