const fs = require("fs");
const cv = fs.readFileSync("components/kaomoji/category-view.tsx", "utf8");
console.log("--- CategoryView imports/structure ---");
console.log(cv.split(/\n/).slice(0, 80).join("\n"));
console.log("\n--- SubcategoryNav / chip / tag mentions ---");
for (const re of ["SubcategoryNav", "chip", "tag", "FaqSection", "LearnSection", "faqJsonLd", "showEducation", "safePage"]) {
  console.log(re, (cv.match(new RegExp(re, "g")) || []).length);
}
console.log("\n--- filter toolbar ---");
const tb = fs.readFileSync("components/kaomoji/category-faces-toolbar.tsx", "utf8");
console.log(tb.slice(0, 1500));
console.log("\n--- paginated route ---");
console.log(fs.readFileSync("lib/paginated-category-route.tsx", "utf8").slice(0, 2000));
console.log("\n--- cute page entry faqs? ---");
const site = fs.readFileSync("lib/site.ts", "utf8");
const i = site.indexOf('path: "/cute-kaomoji"');
console.log(site.slice(i, i + 2000));
console.log("\n--- data tags sample heart/love/shy/blush ---");
const items = fs.readFileSync("data/items.json", "utf8");
for (const t of ["heart", "love", "kiss", "hug", "shy", "blush", "embarrassed"]) {
  const re = new RegExp('"' + t + '"', "gi");
  const n = (items.match(re) || []).length;
  console.log(t, n);
}