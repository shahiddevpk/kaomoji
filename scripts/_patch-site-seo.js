const fs = require("fs");
let s = fs.readFileSync("lib/site.ts", "utf8");
if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);

if (!s.includes("robots?:")) {
  s = s.replace(
    "  parentPath?: string;\n  related: string[];",
    "  parentPath?: string;\n  /** Optional robots override; omit for index,follow. Pagination n>=2 uses noindex in pageMetadata. */\n  robots?: { index?: boolean; follow?: boolean };\n  related: string[];"
  );
}

const replacements = [
  ['titleSegment: "Cute Kaomoji Copy and Paste | Soft Kawaii Faces"', 'titleSegment: "Cute Kaomoji (\u25D5\u203F\u25D5) Copy and Paste"'],
  ['description:\n      "Cute kaomoji copy and paste: soft kawaii blush, tiny hugs, and gentle charm. Aesthetic mood grid with one-tap copy - separate from happy cheers."', 'description:\n      "Cute kaomoji (\u25D5\u203F\u25D5) copy and paste: soft kawaii blush, tiny hugs, and gentle charm. One-tap copy - separate from happy cheers."'],
  ['titleSegment: "Happy Kaomoji Copy and Paste | Cheers and Grins"', 'titleSegment: "Happy Kaomoji (\uFF3E\u25BD\uFF3E) Copy and Paste"'],
  ['description:\n      "Happy kaomoji copy and paste for cheers, waves, and big grins. Upbeat faces with one-tap copy - not soft kawaii blush."', 'description:\n      "Happy kaomoji (\uFF3E\u25BD\uFF3E) copy and paste for cheers, waves, and big grins. One-tap copy - not soft kawaii blush."'],
  ['titleSegment: "Cat Kaomoji Copy and Paste | Neko Faces"', 'titleSegment: "Cat Kaomoji (=^\uFF65\u03C9\uFF65^=) Copy and Paste"'],
  ['description:\n      "Cat kaomoji copy and paste (neko / catmoji): content cats to excited ones. Large tap targets and instant clipboard toast."', 'description:\n      "Cat kaomoji (=^\uFF65\u03C9\uFF65^=) copy and paste (neko / catmoji): calm to excited cats. Large tap targets and instant clipboard toast."'],
  ['titleSegment: "Sad Kaomoji Copy and Paste | Quiet Frowns"', 'titleSegment: "Sad Kaomoji (\u255E\uFE4F\u255E) Copy and Paste"'],
  ['description:\n      "Sad kaomoji copy and paste: quiet downcast eyes and soft frowns. Low-mood faces without tears - sobbing lives on the crying page."', 'description:\n      "Sad kaomoji (\u255E\uFE4F\u255E) copy and paste: quiet downcast eyes and soft frowns. Low-mood without tears - sobbing lives on crying."'],
  ['titleSegment: "Crying Kaomoji Copy and Paste | Cry and Tears"', 'titleSegment: "Crying Kaomoji (\u0CA5\uFE4F\u0CA5) Copy and Paste"'],
  ['description:\n      "Crying kaomoji copy and paste: cry, tears, and sobbing faces. Cry kaomoji searches land here - not on quiet sad."', 'description:\n      "Crying kaomoji (\u0CA5\uFE4F\u0CA5) copy and paste: cry, tears, and sobbing faces. Cry searches land here - not on quiet sad."'],
  ['titleSegment: "Angry Kaomoji Copy and Paste | Mad Faces"', 'titleSegment: "Angry Kaomoji (\u256C\u0CA0\u76CA\u0CA0) Copy and Paste"'],
  ['description:\n      "Angry kaomoji copy and paste: scowls, growls, and mad faces. Browse the full angry set, or jump into table flip, fight, rage, pout, and glare."', 'description:\n      "Angry kaomoji (\u256C\u0CA0\u76CA\u0CA0) copy and paste: scowls, growls, and mad faces. Or jump into table flip, fight, rage, pout, and glare."'],
  ['titleSegment: "Table Flip Kaomoji Copy and Paste | Flip Tables"', 'titleSegment: "Table Flip Kaomoji (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B"'],
  ['description:\n      "Table flip kaomoji copy and paste: classic flip-the-table faces and rage flips. Related to angry moods, owned by the table-flip keyword."', 'description:\n      "Table flip kaomoji (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B copy and paste: classic flips. Related to angry, owned by the table-flip keyword."'],
  ['titleSegment: "Fight Kaomoji Copy and Paste | Punch and Hit"', 'titleSegment: "Fight Kaomoji (\u0E07 \u2022\u0300_\u2022\u0301)\u0E07 Copy and Paste"'],
  ['description:\n      "Fight kaomoji copy and paste: punching, hitting, and sparring faces. Action heat - not the general angry grid."', 'description:\n      "Fight kaomoji (\u0E07 \u2022\u0300_\u2022\u0301)\u0E07 copy and paste: punching, hitting, sparring. Action heat - not the general angry grid."'],
  ['titleSegment: "Rage Kaomoji Copy and Paste | Mad Outburst Faces"', 'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE Copy and Paste"'],
  ['description:\n      "Rage kaomoji copy and paste: mad outburst and fury faces. Peak heat - distinct from quiet pout or glare."', 'description:\n      "Rage kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE copy and paste: mad outburst and fury faces. Peak heat - distinct from pout or glare."'],
  ['titleSegment: "Pout Kaomoji Copy and Paste | Hmph and Annoyed"', 'titleSegment: "Pout Kaomoji (\uFFE3\u30D8\uFFE3) Copy and Paste"'],
  ['description:\n      "Pout kaomoji copy and paste: hmph, sulk, and mildly annoyed faces. Soft pushback - not full rage."', 'description:\n      "Pout kaomoji (\uFFE3\u30D8\uFFE3) copy and paste: hmph, sulk, and mildly annoyed faces. Soft pushback - not full rage."'],
  ['titleSegment: "Glare Kaomoji Copy and Paste | Grr and Gununu"', 'titleSegment: "Glare Kaomoji (\uFF40\u03B5\u00B4) Copy and Paste"'],
  ['description:\n      "Glare kaomoji copy and paste: grr, gununu, and staring-down faces. Side-eye heat without a table flip."', 'description:\n      "Glare kaomoji (\uFF40\u03B5\u00B4) copy and paste: grr, gununu, and staring-down faces. Side-eye heat without a table flip."'],
  ['titleSegment: "Kaomoji Copy and Paste | Fast Clipboard Faces"', 'titleSegment: "Kaomoji Copy and Paste (\u25D5\u203F\u25D5) | Fast Faces"'],
  ['description:\n      "Kaomoji copy and paste utility: popular faces first, one-tap clipboard, then moods. Explicit copy task - not the discovery hub."', 'description:\n      "Kaomoji copy and paste (\u25D5\u203F\u25D5) utility: popular faces first, one-tap clipboard, then moods. Explicit copy task - not the hub."'],
  ['titleSegment: "Japanese Emoticons Copy and Paste | Classic Kaomoji"', 'titleSegment: "Japanese Emoticons (^_^) Copy and Paste"'],
  ['description:\n      "Japanese emoticons copy and paste (kaomoji): classic faces from punctuation and kana. Language-first set - not ASCII shrug lists."', 'description:\n      "Japanese emoticons (^_^) copy and paste (kaomoji): classic faces from punctuation and kana. Not ASCII shrug lists."'],
  ['titleSegment: "Text Faces Copy and Paste | Shrug, Lenny and More"', 'titleSegment: "Text Faces \u00AF\\_(\u30C4)_/\u00AF Copy and Paste"'],
  ['description:\n      "Text faces copy and paste: shrug, Lenny, disapproval, and more. ASCII and unicode catalog - not Japanese kana construction."', 'description:\n      "Text faces \u00AF\\_(\u30C4)_/\u00AF copy and paste: shrug, Lenny, disapproval, and more. ASCII catalog - not Japanese kana."'],
  ['titleSegment: "Multiline Kaomoji Copy and Paste | ASCII Art Faces"', 'titleSegment: "Multiline Kaomoji / ASCII Art Faces"'],
  ['description:\n      "Multiline kaomoji and ASCII art faces copy and paste: stacked lines that stay readable with pre-wrap. Discover multi-line faces in one place."', 'description:\n      "Multiline kaomoji / ASCII art faces copy and paste: stacked multi-line faces that keep line breaks. Discover them in one place."'],
];

let ok = 0;
const miss = [];
for (const [from, to] of replacements) {
  if (s.includes(from)) { s = s.split(from).join(to); ok++; }
  else miss.push(from.slice(0, 80));
}
fs.writeFileSync("lib/site.ts", s, "utf8");
console.log("patched", ok, "missed", miss.length);
if (miss.length) console.log(JSON.stringify(miss, null, 2));