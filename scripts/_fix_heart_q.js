const fs = require("fs");
let site = fs.readFileSync("lib/site.ts", "utf8");
const bad = site.match(/Why browse a heart category instead of searching[\s\S]{0,80}/);
console.log("before:", bad && bad[0]);
// Fix any broken question string for that FAQ
site = site.replace(
  /question:\s*"Why browse a heart category instead of searching(?:\\"|\\)*.*?"/,
  'question: "Why browse a heart category instead of searching \\"love\\"?"',
);
// Also handle if it was split across weird escape
if (site.includes('searching \\\\')) {
  site = site.replace(
    /question:\s*"Why browse a heart category instead of searching \\\\[^"]*"/,
    'question: "Why browse a heart category instead of searching \\"love\\"?"',
  );
}
fs.writeFileSync("lib/site.ts", site, "utf8");
const after = site.match(/Why browse a heart category instead of searching[\s\S]{0,60}/);
console.log("after:", after && after[0]);