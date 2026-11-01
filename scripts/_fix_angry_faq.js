const fs = require("fs");
const packs = require("./_faq_packs.js");
// Fix angry FAQ #2 to exact SERP verbatim (site note belongs in docs, not answer).
packs["/angry-kaomoji"].faqs[1].answer =
  "Each pose is a different intent. A desk flip is a gag, a fight face is sparring energy, rage is high volume, pout is sulky, and glare is quiet judgment.";

let src = fs.readFileSync("lib/site.ts", "utf8");
const old =
  "On this site, table flip, fight, and pout each keep their own pages; rage and glare stay discoverable from the angry hub via tags and search.";
if (src.includes(old)) {
  // Replace the extended answer string inside site.ts
  src = src.replace(
    /"Each pose is a different intent\. A desk flip is a gag, a fight face is sparring energy, rage is high volume, pout is sulky, and glare is quiet judgment\. On this site, table flip, fight, and pout each keep their own pages; rage and glare stay discoverable from the angry hub via tags and search\."/,
    JSON.stringify(packs["/angry-kaomoji"].faqs[1].answer),
  );
  fs.writeFileSync("lib/site.ts", src, "utf8");
  console.log("angry FAQ #2 restored to SERP verbatim");
} else {
  console.log("extended sentence not found; checking current answer...");
  const m = src.match(/Why split angry[\s\S]{0,400}?answer: ("(?:\\.|[^"\\])*")/);
  console.log(m ? m[1].slice(0, 200) : "no match");
}

// Also refresh packs file on disk for consistency
fs.writeFileSync(
  "scripts/_faq_packs.js",
  fs.readFileSync("scripts/_faq_packs.js", "utf8").replace(
    /Each pose is a different intent\. A desk flip is a gag, a fight face is sparring energy, rage is high volume, pout is sulky, and glare is quiet judgment\. On this site, table flip, fight, and pout each keep their own pages; rage and glare stay discoverable from the angry hub via tags and search\./,
    "Each pose is a different intent. A desk flip is a gag, a fight face is sparring energy, rage is high volume, pout is sulky, and glare is quiet judgment.",
  ),
  "utf8",
);