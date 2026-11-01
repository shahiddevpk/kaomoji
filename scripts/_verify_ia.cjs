const fs = require("fs");
const site = fs.readFileSync("lib/site.ts", "utf8");
// Find broken related arrays (double commas, empty slots)
const issues = [];
if (site.includes(",,") || site.includes(", ,")) issues.push("double comma");
if (site.includes('[,"') || site.includes(",]")) issues.push("edge comma weird");
// Extract money page blocks
for (const p of [
  "/angry-kaomoji",
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
  "/multiline-kaomoji",
  "/kaomoji-generator",
]) {
  const i = site.indexOf(`path: "${p}"`);
  if (i < 0) {
    issues.push("MISSING " + p);
    continue;
  }
  const chunk = site.slice(i, i + 1200);
  const tags = (chunk.match(/tags: \[([^\]]*)\]/) || [])[1];
  const parent = (chunk.match(/parentPath: "([^"]+)"/) || [])[1];
  const related = (chunk.match(/related: \[([\s\S]*?)\]/) || [])[1];
  const intro = (chunk.match(/intro:\s*\n\s*"([\s\S]*?)",\s*\n\s*group:/) || [])[1] || "";
  const paras = intro.split(/\\n\\n/).filter(Boolean).length;
  console.log(
    p,
    "tags=",
    tags || "-",
    "parent=",
    parent || "-",
    "relatedN=",
    related ? (related.match(/"/g) || []).length / 2 : 0,
    "introParas~",
    paras || intro.length
  );
}
console.log("issues", issues);

// Check japanese path exists for multiline related
console.log(
  "jp path",
  site.includes('path: "/japanese-emoticons"') || site.includes('path: "/japanese-emoticons"')
);
const jp = [...site.matchAll(/path: "(\/japan[^"]*)"/g)].map((m) => m[1]);
console.log("jp paths", jp);

// Verify app routes exist
for (const p of [
  "app/angry-kaomoji/page.tsx",
  "app/table-flip-kaomoji/page.tsx",
  "app/fight-kaomoji/page.tsx",
  "app/pout-kaomoji/page.tsx",
  "app/multiline-kaomoji/page.tsx",
  "app/kaomoji-generator/page.tsx",
  "app/rage-kaomoji/page.tsx",
  "app/glare-kaomoji/page.tsx",
]) {
  console.log(p, fs.existsSync(p) ? "YES" : "no");
}
