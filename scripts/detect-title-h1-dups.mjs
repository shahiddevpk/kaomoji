/**
 * detect-title-h1-dups.mjs
 * Flag duplicate titleSegment / heading / description among page-1 SitePages.
 * Usage: node scripts/detect-title-h1-dups.mjs
 * Manual review only - does not auto-fix or delete.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "lib", "site.ts"), "utf8");
const blocks = [
  ...src.matchAll(
    /\{\s*path:\s*"([^"]+)"[\s\S]*?heading:\s*"([^"]*)"[\s\S]*?titleSegment:\s*"([^"]*)"[\s\S]*?description:\s*((?:siteConfig\.description)|"([^"]*)")/g,
  ),
];

function dups(values) {
  const m = new Map();
  for (const [pathKey, val] of values) {
    if (!m.has(val)) m.set(val, []);
    m.get(val).push(pathKey);
  }
  return [...m.entries()].filter(([, paths]) => paths.length > 1);
}

const rows = blocks.map((b) => ({
  path: b[1],
  heading: b[2],
  title: b[3],
  description: b[4] === "siteConfig.description" ? "(siteConfig.description)" : b[5],
}));

console.log("pages parsed:", rows.length);
for (const key of ["title", "heading", "description"]) {
  const field = key === "title" ? "title" : key;
  const found = dups(rows.map((r) => [r.path, r[field]]));
  console.log(`\nDuplicate ${key}:`, found.length ? "" : "none");
  for (const [val, paths] of found) {
    console.log(" ", JSON.stringify(val), "->", paths.join(", "));
  }
}
console.log("\nManual review recommended before adding any new indexable route.");