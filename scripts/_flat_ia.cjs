const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(path.join(process.cwd(), rel)), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

let site = fs.readFileSync("lib/site.ts", "utf8");
if (site.charCodeAt(0) === 0xfeff) site = site.slice(1);

const remap = {
  "/angry-kaomoji/table-flip": "/table-flip-kaomoji",
  "/angry-kaomoji/fight": "/fight-kaomoji",
  "/angry-kaomoji/rage": "/rage-kaomoji",
  "/angry-kaomoji/pout": "/pout-kaomoji",
  "/angry-kaomoji/glare": "/glare-kaomoji",
};

// Remap all path references in site.ts
for (const [from, to] of Object.entries(remap)) {
  const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  site = site.replace(re, to);
}

// Ensure parentPath still points to angry hub for flat children
// (already /angry-kaomoji after remap of nested only)

// Deepen intros to >=2 paragraphs for money URLs (use \n\n in string)
function setIntro(pagePath, intro) {
  const marker = `path: "${pagePath}"`;
  const idx = site.indexOf(marker);
  if (idx < 0) {
    console.log("missing", pagePath);
    return;
  }
  const introKey = site.indexOf("intro:", idx);
  const nextKey = site.indexOf("group:", introKey);
  if (introKey < 0 || nextKey < 0) return;
  const before = site.slice(0, introKey);
  const after = site.slice(nextKey);
  site = before + `intro:\n      ${JSON.stringify(intro)},\n    ` + after;
  console.log("intro", pagePath, intro.length);
}

setIntro(
  "/angry-kaomoji",
  "Scowls, growls, and mad faces when chat needs heat - tap Copy once and paste anywhere. This page owns the head term angry kaomoji: the full angry-tagged set ranked with popular faces first so the grid matches what people search for.\n\nTable flip, fight, rage, pout, and glare each keep their own flat pages and keywords. Use the chips below when you want a narrower mood; stay here when you want the broad angry shelf, similar to how mood boards group emotion faces without mixing every reaction into one unlabeled list."
);
setIntro(
  "/table-flip-kaomoji",
  "Flip-the-table faces for classic desk-flip reactions - one tap to copy. This page owns table flip kaomoji (including tableflip spelling in tags), nested in the angry mood family for discovery but indexed on its own flat URL so it does not compete with the angry parent.\n\nGrab a flip when words are not enough. For punches open fight kaomoji; for silent stares open glare; for full meltdown energy open rage. The parent angry page keeps the broader scowls and growls."
);
setIntro(
  "/fight-kaomoji",
  "Punching, hitting, and sparring poses for fight-mode chat - tap to copy. Fight kaomoji owns punch and hit tags so action faces stay distinct from a general angry scowl grid.\n\nUse this set when you want motion and impact. Table flips stay on table flip kaomoji, peak fury on rage, soft sulks on pout, and side-eye heat on glare. The angry parent remains the hub for the wider mad-face collection."
);
setIntro(
  "/rage-kaomoji",
  "Peak mad outburst and fury faces when a mild scowl is not enough - one tap to copy. Rage kaomoji owns rage and mad tags; synonyms like furious should land here via redirects, not as thin duplicate pages.\n\nKeep softer hmph energy on pout kaomoji and silent stares on glare. The angry parent holds the broad angry set, while this page stays the long-tail home for rage and mad face searches."
);
setIntro(
  "/pout-kaomoji",
  "Hmph, sulk, and mildly annoyed faces for soft pushback - tap to copy. Pout kaomoji owns pout, hmph, and annoyed tags. Annoyed is a supporting synonym on this page, not its own URL, so we avoid doorway thin pages.\n\nChoose pout when attitude should stay light. Full fury belongs on rage, hard scowls on the angry parent, and quiet side-eye on glare. Related chips keep the angry family easy to scan like a labeled mood shelf."
);
setIntro(
  "/glare-kaomoji",
  "Grr growls, gununu stares, and glaring side-eye when you want silent heat - tap to copy. Glare kaomoji owns glare, grr, and gununu so staring-down faces stay a distinct intent from flips or punches.\n\nUse fight for hits, table flip for desk flips, and rage for meltdown energy. The angry parent remains the hub; this flat page is the long-tail owner for glare searches without nesting under angry in the URL."
);
setIntro(
  "/multiline-kaomoji",
  "Stacked multi-line kaomoji and ASCII art faces that keep every line break when you copy. Cards use whitespace pre-wrap so the preview matches what lands on your clipboard - made for bios, notes, and chats that allow wraps.\n\nThis browse page gathers multi-line and newline faces in one place, apart from one-line cute or Japanese sets. If you only need a single-line emoticon, use those mood pages or the generator to build a custom face."
);
setIntro(
  "/kaomoji-generator",
  "Build a custom kaomoji in your browser: pick left arm, eyes, mouth, right arm, and optional extras, then copy or randomize. No signup, no heavy libraries - a light make-kaomoji tool that works offline once the page is loaded.\n\nUse the live preview to tune the face, hit Copy for the clipboard, or Randomize for a surprise combo. When you want curated moods instead of a builder, jump to angry, cute, text faces, or multiline pages."
);

fs.writeFileSync("lib/site.ts", site, "utf8");
console.log("site remapped to flat IA");

// Verify paths
const paths = [...site.matchAll(/path: "([^"]+)"/g)].map((m) => m[1]);
console.log(paths.filter((p) => /angry|flip|fight|rage|pout|glare|multi|generator/.test(p)).join("\n"));
