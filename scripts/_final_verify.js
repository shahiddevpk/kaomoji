const fs = require("fs");
const site = fs.readFileSync("lib/site.ts", "utf8");
const paths = [...site.matchAll(/path: "([^"]+)"/g)].map((m) => m[1]);
console.log("has heart/shy", paths.includes("/heart-kaomoji"), paths.includes("/shy-kaomoji"));
console.log("has love page?", paths.includes("/love-kaomoji"));

function slicePage(p) {
  const i = site.indexOf('path: "' + p + '"');
  let s = i;
  while (s > 0 && site[s] !== "{") s--;
  let depth = 0, inStr = null, end = -1;
  for (let j = s; j < site.length; j++) {
    const c = site[j];
    if (inStr) { if (c === "\\") { j++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) { end = j; break; } }
  }
  return site.slice(s, end + 1);
}

for (const p of ["/heart-kaomoji", "/shy-kaomoji"]) {
  const obj = slicePage(p);
  const faqs = [...obj.matchAll(/question: "([^"]+)"/g)].map((m) => m[1]);
  const related = [...obj.matchAll(/"(\/[^"]+)"/g)].map((m) => m[1]).filter((x) => x !== p);
  console.log("\n==", p, "==");
  console.log("heading", /heading: "([^"]+)"/.exec(obj)?.[1]);
  console.log("titleSegment", /titleSegment: "([^"]+)"/.exec(obj)?.[1]);
  console.log("tags", /tags: \[([^\]]+)\]/.exec(obj)?.[1]);
  console.log("faqCount", faqs.length, faqs);
  console.log("related lines", obj.includes("related:"));
  // validate related targets exist
  const relBlock = /related:\s*\[([\s\S]*?)\]/.exec(obj)?.[1] || "";
  const rels = [...relBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  console.log("related", rels);
  for (const r of rels) {
    if (!paths.includes(r)) console.log("MISSING RELATED", r);
  }
}

// FAQ answer uniqueness
const answers = [...site.matchAll(/answer:\s*\n?\s*"((?:\\.|[^"\\])*)"/g)].map((m) => m[1]);
const map = new Map();
for (const a of answers) map.set(a, (map.get(a) || 0) + 1);
const dups = [...map.entries()].filter(([, n]) => n > 1);
console.log("\nFAQ answers", answers.length, "dups", dups.length);

const pag = fs.readFileSync("lib/category-pagination.ts", "utf8");
console.log("pag heart/shy", pag.includes("heart-kaomoji"), pag.includes("shy-kaomoji"));
console.log("routes", fs.existsSync("app/heart-kaomoji/page.tsx"), fs.existsSync("app/shy-kaomoji/page.tsx"),
  fs.existsSync("app/heart-kaomoji/page/[n]/page.tsx"), fs.existsSync("app/shy-kaomoji/page/[n]/page.tsx"));
const cfg = fs.readFileSync("next.config.ts", "utf8");
console.log("redirects love/blush", cfg.includes("/love-kaomoji"), cfg.includes("/blush-kaomoji"));
console.log("tiles", fs.readFileSync("components/kaomoji/category-tiles.tsx", "utf8").includes("/heart-kaomoji"));
console.log("cute related has heart", /path: "\/cute-kaomoji"[\s\S]{0,2500}?related: \[[^\]]*heart-kaomoji/.test(site));