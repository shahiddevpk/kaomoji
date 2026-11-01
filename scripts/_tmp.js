const fs = require("fs");
const s = fs.readFileSync("lib/site.ts", "utf8");
const re = /titleSegment: "([^"]+)"/g;
let m;
while ((m = re.exec(s))) {
  const seg = m[1];
  const final = seg.includes("Paste Kaomoji") ? seg : seg + " | Paste Kaomoji";
  console.log(JSON.stringify(seg), "seg=" + [...seg].length, "final=" + [...final].length);
}