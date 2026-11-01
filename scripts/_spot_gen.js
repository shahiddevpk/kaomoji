const fs = require("fs");
const s = fs.readFileSync("lib/site.ts", "utf8");
const i = s.indexOf('path: "/kaomoji-generator"');
console.log(s.slice(i, i + 1200));
console.log("---HOME DEF---");
const h = s.indexOf('path: "/"');
console.log(s.slice(h, h + 800));