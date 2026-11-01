const fs = require("fs");
console.log("=== data/index.ts ===");
console.log(fs.readFileSync("data/index.ts","utf8"));