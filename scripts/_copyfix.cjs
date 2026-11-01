const fs = require("fs");
let site = fs.readFileSync("lib/site.ts", "utf8");

const replacements = [
  [
    'Browse angry, or open table flip, fight, rage, pout, and glare.',
    'Browse angry, or open table flip, fight, and pout. Rage and glare stay as tags here.',
  ],
  [
    'For punches open fight kaomoji; for silent stares open glare; for full meltdown energy open rage. The parent angry page keeps the broader scowls and growls.',
    'For punches open fight kaomoji; for soft sulks open pout. Rage and glare faces stay on the angry hub via tags. The parent angry page keeps the broader scowls and growls.',
  ],
  [
    'Table flips stay on table flip kaomoji, peak fury on rage, soft sulks on pout, and side-eye heat on glare. The angry parent remains the hub for the wider mad-face collection.',
    'Table flips stay on table flip kaomoji and soft sulks on pout. Peak fury and glare-style stares stay searchable on the angry hub. The angry parent remains home for the wider mad-face collection.',
  ],
  [
    'Choose pout when attitude should stay light. Full fury belongs on rage, hard scowls on the angry parent, and quiet side-eye on glare. Related chips keep the angry family easy to scan like a labeled mood shelf.',
    'Choose pout when attitude should stay light. Hard scowls and hotter rage or glare faces stay on the angry parent via tags. Related chips keep the shipped angry family easy to scan like a labeled mood shelf.',
  ],
];
let n = 0;
for (const [a, b] of replacements) {
  if (site.includes(a)) {
    site = site.split(a).join(b);
    n++;
  }
}
fs.writeFileSync("lib/site.ts", site, "utf8");
console.log("copy fixes", n);

// Fix subcategory-nav unused import siblingPages if any
let nav = fs.readFileSync("components/kaomoji/subcategory-nav.tsx", "utf8");
nav = nav.replace(/,\s*siblingPages/, "");
nav = nav.replace(/siblingPages,\s*/, "");
fs.writeFileSync("components/kaomoji/subcategory-nav.tsx", nav, "utf8");

// Ensure tiles include money pages without parentPath children clutter
let tiles = fs.readFileSync("components/kaomoji/category-tiles.tsx", "utf8");
console.log(
  "tiles angry",
  tiles.includes("/angry-kaomoji"),
  "filter parent",
  tiles.includes("parentPath"),
  "generator",
  tiles.includes("/kaomoji-generator"),
  "multiline",
  tiles.includes("/multiline-kaomoji")
);

// Ensure generator page symbols
console.log("gen page\n", fs.readFileSync("app/kaomoji-generator/page.tsx", "utf8").slice(0, 400));
