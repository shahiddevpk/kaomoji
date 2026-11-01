const fs = require("fs");
const cv = fs.readFileSync("components/kaomoji/category-view.tsx", "utf8");
console.log("showEducation", /showEducation\s*=\s*safePage\s*===\s*1/.test(cv) || /const showEducation = safePage === 1/.test(cv));
console.log("Faq gated", /showEducation[\s\S]{0,40}FaqSection/.test(cv));
console.log("Learn gated", /showEducation[\s\S]{0,40}LearnSection/.test(cv));
console.log("faqJsonLd gated", /showEducation[\s\S]{0,80}faqJsonLd/.test(cv) || /faqSchema/.test(cv));

const site = fs.readFileSync("lib/site.ts", "utf8");
function countFaqs(path) {
  const i = site.indexOf('path: "' + path + '"');
  if (i < 0) return 0;
  let s = i; while (s > 0 && site[s] !== "{") s--;
  let depth = 0, inStr = null, end = -1;
  for (let j = s; j < site.length; j++) {
    const c = site[j];
    if (inStr) { if (c === "\\") { j++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) { end = j; break; } }
  }
  const obj = site.slice(s, end + 1);
  return {
    faqs: (obj.match(/question:/g) || []).length,
    def: /definition:/.test(obj),
    learn: /learnMore:/.test(obj),
    howTo: /howTo:/.test(obj),
    tags: (/tags:\s*\[([^\]]+)\]/.exec(obj) || [])[1],
  };
}
for (const p of ["/", "/heart-kaomoji", "/shy-kaomoji", "/angry-kaomoji", "/cute-kaomoji", "/about"]) {
  console.log(p, countFaqs(p));
}
console.log("tsc was 0");