const fs = require("fs");
let site = fs.readFileSync("lib/site.ts", "utf8");
const lines = site.split(/\n/);
console.log("616:", lines[615]);
console.log("614-620:");
for (let n = 613; n <= 620; n++) console.log(n + 1, lines[n]);

// Replace the broken question line(s) with a clean one
site = site.replace(
  /question:\s*"Why browse a heart category instead of searching[\s\S]*?",/,
  'question: "Why browse a heart category instead of searching \\"love\\"?",',
);
fs.writeFileSync("lib/site.ts", site, "utf8");
const lines2 = site.split(/\n/);
console.log("after 614-620:");
for (let n = 613; n <= 620; n++) console.log(n + 1, lines2[n]);