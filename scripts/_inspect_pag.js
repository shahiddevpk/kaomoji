const fs = require("fs");
console.log("=== category-pagination ===");
console.log(fs.readFileSync("lib/category-pagination.ts", "utf8"));
console.log("\n=== angry page.tsx ===");
console.log(fs.readFileSync("app/angry-kaomoji/page.tsx", "utf8"));
console.log("\n=== sitemap snippet ===");
const sm = fs.readFileSync("app/sitemap.ts", "utf8");
console.log(sm.slice(0, 2500));
console.log("\n=== header ===");
const hdr = fs.readFileSync("components/layout/header-nav.tsx", "utf8");
console.log(hdr.slice(0, 1200));
console.log("\n=== site field names check ===");
const site = fs.readFileSync("lib/site.ts", "utf8");
console.log({
  heading: /heading:/.test(site),
  titleSegment: /titleSegment:/.test(site),
  inHeader: /inHeader:/.test(site),
  parentPath: /parentPath:/.test(site),
  learnMore: /learnMore:/.test(site),
  definition: /definition:/.test(site),
  howTo: /howTo:/.test(site),
  related: /related:/.test(site),
});
// find end of browse pages to know insert point (before about)
const about = site.indexOf('path: "/about"');
console.log("about idx", about);
console.log("before about:\n", site.slice(about - 800, about + 200));