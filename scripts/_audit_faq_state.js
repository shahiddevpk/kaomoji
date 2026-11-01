const fs = require("fs");
const site = fs.readFileSync("lib/site.ts", "utf8");
const packs = require("./_faq_packs.js");

// Count faqs per path by naive parse of pages that have faqs:
const paths = [...site.matchAll(/path: "([^"]+)"/g)].map(m => m[1]);
const answers = [];
const summary = [];
for (const p of Object.keys(packs)) {
  if (p === "p1Store") continue;
  const pack = packs[p];
  summary.push({
    path: p,
    faqs: pack.faqs?.length || 0,
    def: !!pack.definition,
    learn: !!pack.learnMore,
  });
  for (const f of pack.faqs || []) answers.push({ path: p, a: f.answer });
}
// duplicate answers across categories
const byAns = new Map();
for (const {path,a} of answers) {
  if (!byAns.has(a)) byAns.set(a, []);
  byAns.get(a).push(path);
}
const dups = [...byAns.entries()].filter(([,ps]) => ps.length > 1);
console.log("SUMMARY", JSON.stringify(summary, null, 2));
console.log("DUP_ANSWERS", dups.length ? dups.map(([a,ps]) => ({a:a.slice(0,60), ps})) : "none");

// wire checks
for (const f of [
  "components/kaomoji/category-view.tsx",
  "app/page.tsx",
  "app/kaomoji-generator/page.tsx",
  "components/layout/trust-view.tsx",
  "lib/seo.ts",
]) {
  const s = fs.readFileSync(f,"utf8");
  console.log(f, {
    FaqSection: s.includes("FaqSection"),
    LearnSection: s.includes("LearnSection"),
    faqJsonLd: s.includes("faqJsonLd"),
    showEducation: s.includes("showEducation"),
  });
}

// category-view page1 guard
const cv = fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
console.log("page1_only_faq", /showEducation \? <FaqSection/.test(cv) || /showEducation \? \(\s*<FaqSection/.test(cv));
console.log("page1_only_learn", cv.includes("showEducation") && cv.includes("<LearnSection"));
console.log("showEducation_def", /showEducation = safePage === 1/.test(cv));