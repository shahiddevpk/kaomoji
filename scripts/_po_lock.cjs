const fs = require("fs");
const path = require("path");

function rmrf(p) {
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log("RM", p);
  }
}

// ---- Remove rage + glare routes ----
rmrf("app/rage-kaomoji");
rmrf("app/glare-kaomoji");
rmrf("app/angry-kaomoji/table-flip");
rmrf("app/angry-kaomoji/fight");
rmrf("app/angry-kaomoji/rage");
rmrf("app/angry-kaomoji/pout");
rmrf("app/angry-kaomoji/glare");

// ---- Rewrite site.ts money pages for angry family ----
let site = fs.readFileSync("lib/site.ts", "utf8");
if (site.charCodeAt(0) === 0xfeff) site = site.slice(1);

// Remove rage-kaomoji and glare-kaomoji page objects entirely
function removePageObject(src, pagePath) {
  const marker = `path: "${pagePath}"`;
  const idx = src.indexOf(marker);
  if (idx < 0) {
    console.log("already absent", pagePath);
    return src;
  }
  // find object start
  let start = src.lastIndexOf("{", idx);
  // find matching closing }, for this object - scan braces
  let depth = 0;
  let end = start;
  for (let i = start; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  // include trailing comma/newline
  let after = end;
  while (after < src.length && /[\s,]/.test(src[after])) after++;
  console.log("remove page", pagePath);
  return src.slice(0, start) + src.slice(after);
}

site = removePageObject(site, "/rage-kaomoji");
site = removePageObject(site, "/glare-kaomoji");

// Fix any remaining references to removed paths in related arrays
site = site.replace(/"?\/rage-kaomoji"?,?\s*/g, "");
site = site.replace(/"?\/glare-kaomoji"?,?\s*/g, "");
site = site.replace(/"?\/angry-kaomoji\/rage"?,?\s*/g, "");
site = site.replace(/"?\/angry-kaomoji\/glare"?,?\s*/g, "");

// Clean related arrays: angry should list table-flip, fight, pout, generator (+ sad/happy)
function setRelated(pagePath, related) {
  const marker = `path: "${pagePath}"`;
  const idx = site.indexOf(marker);
  if (idx < 0) {
    console.log("missing for related", pagePath);
    return;
  }
  const relIdx = site.indexOf("related:", idx);
  const relEnd = site.indexOf("]", relIdx);
  if (relIdx < 0 || relEnd < 0) return;
  const lit = related.map((r) => `      "${r}",`).join("\n");
  site = site.slice(0, relIdx) + `related: [\n${lit}\n    ]` + site.slice(relEnd + 1);
  console.log("related", pagePath, related.length);
}

setRelated("/angry-kaomoji", [
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
  "/kaomoji-generator",
  "/sad-kaomoji",
  "/happy-kaomoji",
]);
setRelated("/table-flip-kaomoji", [
  "/angry-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
  "/kaomoji-generator",
]);
setRelated("/fight-kaomoji", [
  "/angry-kaomoji",
  "/table-flip-kaomoji",
  "/pout-kaomoji",
  "/kaomoji-generator",
]);
setRelated("/pout-kaomoji", [
  "/angry-kaomoji",
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/kaomoji-generator",
]);
setRelated("/multiline-kaomoji", [
  "/japanese-emoticons",
  "/text-faces",
  "/cute-kaomoji",
  "/kaomoji-generator",
]);
setRelated("/kaomoji-generator", [
  "/angry-kaomoji",
  "/cute-kaomoji",
  "/text-faces",
  "/multiline-kaomoji",
]);

// Update angry intro to mention rage/glare as in-grid search (no separate pages)
const angryIntro =
  "Scowls, growls, and mad faces when chat needs heat - tap Copy once and paste anywhere. This page owns the head term angry kaomoji: the full angry-tagged set ranked with popular faces first so the grid matches angry searches.\\n\\nTable flip, fight, and pout each keep their own flat pages when the face pools stay distinct. Rage and glare faces stay discoverable here via tags and search rather than thin duplicate URLs. Use the chips below for the shipped sub-moods, or stay on this hub for the broad angry shelf.";

site = site.replace(
  /path: "\/angry-kaomoji"[\s\S]*?intro:\s*\n\s*"[^"]*",/,
  (block) => {
    return block.replace(/intro:\s*\n\s*"[^"]*",/, `intro:\n      "${angryIntro}",`);
  }
);

fs.writeFileSync("lib/site.ts", site, "utf8");
console.log("site updated");

// verify paths
const paths = [...site.matchAll(/path: "([^"]+)"/g)].map((m) => m[1]);
console.log(
  "money paths",
  paths.filter((p) =>
    /angry|flip|fight|rage|pout|glare|multi|generator/.test(p)
  )
);
