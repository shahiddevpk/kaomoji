const fs = require("fs");

function show(f) {
  console.log("\n########", f);
  if (!fs.existsSync(f)) return console.log("MISSING");
  console.log(fs.readFileSync(f,"utf8"));
}

// site type + helpers
const site = fs.readFileSync("lib/site.ts","utf8");
console.log("site length", site.length);
console.log(site.slice(0, 2500));
console.log("\n... helpers ...\n");
const helpIdx = site.indexOf("export function getPage");
console.log(site.slice(helpIdx > 0 ? helpIdx : site.indexOf("export function"), site.length));

show("data/index.ts");