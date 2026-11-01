const fs = require("fs");
let s = fs.readFileSync("lib/site.ts", "utf8");
if (s.charCodeAt(0) === 0xFEFF) s = s.slice(1);

// Fix sad glyph ╞ -> ╥
s = s.split("\u255E\uFE4F\u255E").join("\u2566\uFE4F\u2566");

// Shorten edge titles so final (seg + " | Paste Kaomoji") stays <= 58
const titleFixes = [
  ['titleSegment: "Fight Kaomoji (\u0E07 \u2022\u0300_\u2022\u0301)\u0E07 Copy and Paste"',
   'titleSegment: "Fight Kaomoji (\u0E07 \u2022\u0300_\u2022\u0301)\u0E07"'],
  ['titleSegment: "Japanese Emoticons (^_^) Copy and Paste"',
   'titleSegment: "Japanese Emoticons (^_^)"'],
  ['titleSegment: "Kaomoji Copy and Paste (\u25D5\u203F\u25D5) | Fast Faces"',
   'titleSegment: "Kaomoji Copy Paste (\u25D5\u203F\u25D5)"'],
  ['titleSegment: "Cat Kaomoji (=\u005E\uFF65\u03C9\uFF65\u005E=) Copy and Paste"',
   'titleSegment: "Cat Kaomoji (=\u005E\uFF65\u03C9\uFF65\u005E=)"'],
];
// Cat may already use =^･ω･^= without escapes in file
const more = [
  [/titleSegment: "Cat Kaomoji \([^=]*=\^[^\)]+\) Copy and Paste"/,
   'titleSegment: "Cat Kaomoji (=^\uFF65\u03C9\uFF65^=)"'],
  [/titleSegment: "Crying Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Crying Kaomoji (\u0CA5\uFE4F\u0CA5)"'],
  [/titleSegment: "Angry Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Angry Kaomoji (\u256C\u0CA0\u76CA\u0CA0)"'],
  [/titleSegment: "Rage Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Rage Kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE"'],
  [/titleSegment: "Cute Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Cute Kaomoji (\u25D5\u203F\u25D5)"'],
  [/titleSegment: "Happy Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Happy Kaomoji (\uFF3E\u25BD\uFF3E)"'],
  [/titleSegment: "Sad Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Sad Kaomoji (\u2566\uFE4F\u2566)"'],
  [/titleSegment: "Pout Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Pout Kaomoji (\uFFE3\u30D8\uFFE3)"'],
  [/titleSegment: "Glare Kaomoji \([^\"]+\) Copy and Paste"/,
   'titleSegment: "Glare Kaomoji (\uFF40\u03B5\u00B4)"'],
  [/titleSegment: "Text Faces [^\"]+ Copy and Paste"/,
   'titleSegment: "Text Faces \u00AF\\_(\u30C4)_/\u00AF"'],
  [/titleSegment: "Multiline Kaomoji \/ ASCII Art Faces"/,
   'titleSegment: "Multiline Kaomoji / ASCII Art"'],
];

for (const [from, to] of titleFixes) {
  if (s.includes(from)) s = s.split(from).join(to);
}
for (const [re, to] of more) {
  s = s.replace(re, to);
}

// Ensure robots type exists
if (!s.includes("robots?:")) {
  s = s.replace(
    "  parentPath?: string;\n  related: string[];",
    "  parentPath?: string;\n  /** Optional robots override; omit => index,follow. Page 2+ forced noindex in pageMetadata. */\n  robots?: { index?: boolean; follow?: boolean };\n  related: string[];"
  );
}

fs.writeFileSync("lib/site.ts", s, "utf8");

// Report lengths
const re = /titleSegment: "([^"]+)"/g;
let m;
while ((m = re.exec(s))) {
  const seg = m[1];
  const final = seg.includes("Paste Kaomoji") ? seg : seg + " | Paste Kaomoji";
  const mark = [...final].length > 60 ? " OVER" : "";
  console.log([...final].length + mark, JSON.stringify(final));
}