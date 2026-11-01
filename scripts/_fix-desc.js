const fs = require("fs");
let s = fs.readFileSync("lib/site.ts", "utf8");
s = s.split("\u2566\uFE4F\u2566").join("\u2565\uFE4F\u2565");
s = s.replace(
  /titleSegment: "Rage Kaomoji \([^\"]+\) Copy and Paste"/,
  'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE"'
);
// descriptions: ensure no ellipsis and trim to ~140-155 for browse pages
const descMap = {
  "/cute-kaomoji": "Cute kaomoji (\u25D5\u203F\u25D5) copy and paste: soft kawaii blush, tiny hugs, and gentle charm. Soft aesthetic mood with one-tap copy, separate from happy cheers.",
  "/happy-kaomoji": "Happy kaomoji (\uFF3E\u25BD\uFF3E) copy and paste for cheers, waves, and big grins. Upbeat faces with one-tap copy, not soft kawaii blush.",
  "/cat-kaomoji": "Cat kaomoji (=\u005E\uFF65\u03C9\uFF65\u005E=) copy and paste (neko / catmoji): calm cats to excited ones. Large tap targets and instant clipboard toast.",
  "/sad-kaomoji": "Sad kaomoji (\u2565\uFE4F\u2565) copy and paste: quiet downcast eyes and soft frowns. Low-mood faces without tears; sobbing lives on the crying page.",
  "/crying-kaomoji": "Crying kaomoji (\u0CA5\uFE4F\u0CA5) copy and paste: cry, tears, and sobbing faces. Cry kaomoji searches land here, not on quiet sad.",
  "/angry-kaomoji": "Angry kaomoji (\u256C\u0CA0\u76CA\u0CA0) copy and paste: scowls, growls, and mad faces. Browse the angry set, or open table flip, fight, rage, pout, and glare.",
  "/angry-kaomoji/table-flip": "Table flip kaomoji (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B copy and paste: classic flip-the-table faces. Nested under angry, owned by the table-flip keyword.",
  "/angry-kaomoji/fight": "Fight kaomoji (\u0E07 \u2022\u0300_\u2022\u0301)\u0E07 copy and paste: punching, hitting, and sparring faces. Action heat that stays distinct from the general angry grid.",
  "/angry-kaomoji/rage": "Rage kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE copy and paste: mad outburst and fury faces. Peak heat, distinct from quiet pout or a hard glare.",
  "/angry-kaomoji/pout": "Pout kaomoji (\uFFE3\u30D8\uFFE3) copy and paste: hmph, sulk, and mildly annoyed faces. Soft pushback when full rage would be too much.",
  "/angry-kaomoji/glare": "Glare kaomoji (\uFF40\u03B5\u00B4) copy and paste: grr, gununu, and staring-down faces. Side-eye heat without flipping a table.",
  "/kaomoji-copy-paste": "Kaomoji copy and paste (\u25D5\u203F\u25D5) utility: popular faces first, one-tap clipboard, then moods. Explicit copy task, not the discovery hub.",
  "/japanese-emoticons": "Japanese emoticons (^_^) copy and paste (kaomoji): classic faces from punctuation and kana. Language-first set, not ASCII shrug lists.",
  "/text-faces": "Text faces \u00AF\\_(\u30C4)_/\u00AF copy and paste: shrug, Lenny, disapproval, and more. ASCII and unicode catalog, not Japanese kana construction.",
  "/multiline-kaomoji": "Multiline kaomoji and ASCII art faces copy and paste: stacked multi-line faces that keep line breaks with pre-wrap. Discover them in one place.",
};

// Replace description fields by finding path blocks - simpler: replace each known old description if we can find description after path
// Parse pages roughly and rewrite description strings that are browse pages
const pathRe = /path: "(\/[^"]*)",([\s\S]*?)related:/g;
s = s.replace(pathRe, (block, path, mid) => {
  const next = descMap[path];
  if (!next) return block;
  const updated = mid.replace(/description:\s*\n\s*"[^"]*",/, `description:\n      ${JSON.stringify(next)},`);
  return `path: "${path}",${updated}related:`;
});

fs.writeFileSync("lib/site.ts", s, "utf8");

// Report
const pages = [];
const blockRe = /\{\s*path: "([^"]+)",[\s\S]*?titleSegment: "([^"]+)",[\s\S]*?description:\s*\n\s*"([^"]*)",/g;
let m;
while ((m = blockRe.exec(s))) {
  const path = m[1], seg = m[2], desc = m[3];
  const final = seg.includes("Paste Kaomoji") ? seg : seg + " | Paste Kaomoji";
  pages.push({ path, titleLen: [...final].length, descLen: [...desc].length, title: final, desc });
}
for (const p of pages) {
  if (p.path === "/" || p.path.startsWith("/about") || p.path === "/contact" || p.path === "/privacy" || p.path === "/terms") continue;
  const tMark = p.titleLen > 60 ? " TITLE_OVER" : "";
  const dMark = p.descLen < 120 || p.descLen > 160 ? " DESC_LEN" : "";
  const ell = /\.\.\.|…/.test(p.title + p.desc) ? " ELLIPSIS" : "";
  console.log(p.path, "title="+p.titleLen+tMark, "desc="+p.descLen+dMark+ell);
}