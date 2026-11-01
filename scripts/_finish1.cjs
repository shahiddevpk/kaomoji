const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

// ---------- 1) Fix rage title + deepen angry/multiline copy + add generator page + howTo ----------
let site = fs.readFileSync("lib/site.ts", "utf8");
if (site.charCodeAt(0) === 0xfeff) site = site.slice(1);

if (!site.includes("howTo?:")) {
  site = site.replace(
    "  related: string[];\n};",
    "  /** Short how-to / explainer bullets under the grid intro (unique per page). */\n  howTo?: string[];\n  related: string[];\n};"
  );
}

site = site.replace(
  'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE Copy and Paste"',
  'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE"'
);
site = site.replace(
  /titleSegment: "Rage Kaomoji \([^"]+\) Copy and Paste"/,
  'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE"'
);

const howTos = {
  "/angry-kaomoji": [
    "Scan the angry grid for scowls and growls that match your chat tone.",
    "Tap Copy once - the face goes to your clipboard with any spacing intact.",
    "Need a narrower mood? Use the chips for table flip, fight, rage, pout, or glare.",
  ],
  "/angry-kaomoji/table-flip": [
    "Table flip faces are the classic flip-desk reaction, not every angry scowl.",
    "Copy the flip that matches your intensity, then paste into chat or a caption.",
    "For punches or silent stares, jump to fight or glare instead.",
  ],
  "/angry-kaomoji/fight": [
    "Fight faces lean into punches, hits, and sparring poses.",
    "Copy one action face when you want motion, not just a mad look.",
    "Keep full fury on rage and desk flips on table flip so each set stays clear.",
  ],
  "/angry-kaomoji/rage": [
    "Rage faces are peak outburst - bigger heat than a mild pout.",
    "Copy a fury face when a quiet glare is not enough.",
    "Softer sulks live on pout; the broad angry grid stays on the parent page.",
  ],
  "/angry-kaomoji/pout": [
    "Pout faces cover hmph, sulk, and mild annoyance - soft pushback.",
    "Copy a pout when you want attitude without full rage.",
    "Hard scowls stay on angry; silent stares stay on glare.",
  ],
  "/angry-kaomoji/glare": [
    "Glare faces are grr growls, gununu stares, and side-eye heat.",
    "Copy a glare when you want silent pressure, not a flip or a punch.",
    "Use fight for hits and rage for full meltdown energy.",
  ],
  "/multiline-kaomoji": [
    "Multiline faces stack across lines - the card keeps breaks with pre-wrap.",
    "Copy once to keep every line, then paste into a bio, note, or chat that allows wraps.",
    "If you only need a single-line cute or Japanese face, use those mood pages instead.",
  ],
};

// Inject howTo arrays into page objects that lack them
for (const [p, steps] of Object.entries(howTos)) {
  if (site.includes(`path: "${p}"`) && !site.includes(`path: "${p}"`) ) {}
  const marker = `path: "${p}"`;
  const idx = site.indexOf(marker);
  if (idx < 0) { console.log("missing page", p); continue; }
  // find related: after this path
  const relatedIdx = site.indexOf("related:", idx);
  const slice = site.slice(idx, relatedIdx);
  if (slice.includes("howTo:")) continue;
  const howToLiteral =
    "howTo: [\n" +
    steps.map((s) => `      ${JSON.stringify(s)},`).join("\n") +
    "\n    ],\n    ";
  site = site.slice(0, relatedIdx) + howToLiteral + site.slice(relatedIdx);
  console.log("howTo", p);
}

// Deepen intros that are thin (append one original sentence if short)
const introBoosts = {
  "/angry-kaomoji":
    " Angry moods here are organized like a clear emotion shelf: one parent grid for mad faces, then labeled chips for flips, fights, rage, pouts, and glares so you can grab the right heat fast.",
  "/multiline-kaomoji":
    " These ASCII-style stacks are filtered for multi-line art so the preview shows every row, the same way a labeled mood board groups complex faces apart from one-line emoticons.",
};

for (const [p, boost] of Object.entries(introBoosts)) {
  const re = new RegExp(
    `(path: "${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?intro:\\s*\\n\\s*")([^"]+)(")`
  );
  site = site.replace(re, (all, a, intro, c) => {
    if (intro.includes("emotion shelf") || intro.includes("ASCII-style stacks")) return all;
    return a + intro + boost + c;
  });
}

// Fix multiline related paths if wrong
site = site.replace(
  'related: ["/japanese-emoticons", "/text-faces", "/cute-kaomoji"]',
  'related: ["/japanese-emoticons", "/text-faces", "/cute-kaomoji", "/kaomoji-generator"]'
);
site = site.replace(
  /related: \["\/japanese-emoticons", "\/text-faces", "\/cute-kaomoji"\]/,
  'related: ["/japanese-emoticons", "/text-faces", "/cute-kaomoji", "/kaomoji-generator"]'
);
// try actual path names present in file
if (site.includes('path: "/japanese-emoticons"')) {
  site = site.replace(
    /path: "\/multiline-kaomoji"[\s\S]*?related: \[[^\]]+\]/,
    (block) => {
      if (block.includes("/kaomoji-generator")) return block;
      return block.replace(/related: \[[^\]]+\]/, 'related: ["/japanese-emoticons", "/text-faces", "/cute-kaomoji", "/kaomoji-generator"]');
    }
  );
}

// Add generator page if missing
if (!site.includes('path: "/kaomoji-generator"')) {
  const genPage = `
  {
    path: "/kaomoji-generator",
    label: "Generator",
    heading: "Kaomoji Generator - Make a Face",
    titleSegment: "Kaomoji Generator (\u25D5\u203F\u25D5)",
    description:
      "Kaomoji generator to make a custom face: pick arms, eyes, and mouth, preview live, then one-tap copy. No signup - build and paste in your browser.",
    intro:
      "Build your own kaomoji in the browser. Choose a left arm, eyes, mouth, right arm, and optional extras, watch the live preview, then copy or randomize. Made for the make-kaomoji intent - light, offline-friendly, and free of accounts.",
    group: "browse",
    inHeader: true,
    howTo: [
      "Pick left arm, eyes, mouth, and right arm from the curated sets.",
      "Add an optional extra if you want ears, blush, or sweat marks.",
      "Copy the preview, or hit Randomize for a quick surprise face.",
    ],
    related: ["/cute-kaomoji", "/angry-kaomoji", "/text-faces", "/multiline-kaomoji"],
  },`;
  // insert before about page
  const aboutIdx = site.indexOf('path: "/about"');
  if (aboutIdx > 0) {
    // find start of that object
    const start = site.lastIndexOf("{", aboutIdx);
    site = site.slice(0, start) + genPage + "\n  " + site.slice(start);
    console.log("added generator page");
  }
}

// Link generator from angry related lightly
site = site.replace(
  `path: "/angry-kaomoji",
    label: "Angry",`,
  `path: "/angry-kaomoji",
    label: "Angry",`
);
// ensure angry related includes generator
site = site.replace(
  /path: "\/angry-kaomoji"[\s\S]*?related: \[[^\]]+\]/,
  (block) => {
    if (block.includes("/kaomoji-generator")) return block;
    return block.replace(
      /related: \[/,
      'related: ["/kaomoji-generator", '
    );
  }
);

// Link from home-related? home related is empty - ok

fs.writeFileSync("lib/site.ts", site, "utf8");
console.log("site.ts updated");
