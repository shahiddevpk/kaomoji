const fs = require("fs");
const s = fs.readFileSync("lib/site.ts", "utf8");
const m = s.match(/titleSegment: "Cute[^"]+"/);
console.log(m && m[0]);
console.log("len", s.length);
console.log("has faqs type", /faqs\?:/.test(s));
