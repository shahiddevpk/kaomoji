const fs = require("fs");
let src = fs.readFileSync("lib/site.ts", "utf8");
const badTitle = "Kaomoji Generator to Make Faces (\u00B4\u2200\u0060)";
const goodTitle = "Kaomoji Generator to Make Faces (\u00B4\u2200\uFF40)";
if (src.includes(badTitle)) {
  src = src.replace(badTitle, goodTitle);
  console.log("fixed titleSegment glyph to fullwidth grave");
} else if (src.includes(goodTitle)) {
  console.log("titleSegment already correct");
} else {
  // try JSON form
  src = src.replace(
    /titleSegment: "Kaomoji Generator to Make Faces \([^"]+\)"/,
    `titleSegment: ${JSON.stringify(goodTitle)}`,
  );
  console.log("replaced titleSegment via regex");
}

const newIntro =
  "Make or remix a custom kaomoji in your browser: pick arms, eyes, mouth, and optional extras, preview live, then copy. This page is for building and remixing faces, not browsing a ready-made grid. When you want curated lists instead of a builder, use the category links in the header.";

src = src.replace(
  /intro:\s*\n\s*"Make or remix a custom kaomoji[\s\S]*?",\n(\s*)group: "browse",\n(\s*)inHeader: true,\n(\s*)howTo:/,
  `intro:\n      ${JSON.stringify(newIntro)},\n$1group: "browse",\n$2inHeader: true,\n$3howTo:`,
);

fs.writeFileSync("lib/site.ts", src, "utf8");

// verify
const i = src.indexOf('path: "/kaomoji-generator"');
const chunk = src.slice(i, i + 700);
console.log(chunk);
console.log("title ok", chunk.includes("\uFF40") || chunk.includes("｀"));