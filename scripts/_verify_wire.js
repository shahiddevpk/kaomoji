const fs = require("fs");
const files = [
  "components/kaomoji/learn-section.tsx",
  "components/kaomoji/faq-section.tsx",
  "components/kaomoji/category-view.tsx",
  "app/page.tsx",
  "app/kaomoji-generator/page.tsx",
  "components/layout/trust-view.tsx",
  "lib/seo.ts",
  "lib/site.ts",
];
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  console.log(f, "bytes", s.length, "faqs?", s.includes("faqs") || s.includes("FaqSection") || s.includes("faqJsonLd"));
}
// LearnSection prop name
const learn = fs.readFileSync("components/kaomoji/learn-section.tsx", "utf8");
console.log("LearnSection has heading prop", /heading:/.test(learn));
// Check generator uses heading=
const gen = fs.readFileSync("app/kaomoji-generator/page.tsx", "utf8");
console.log("gen LearnSection heading=", gen.includes('heading="About the kaomoji generator"'));
console.log("trust LearnSection heading=", fs.readFileSync("components/layout/trust-view.tsx","utf8").includes("heading="));