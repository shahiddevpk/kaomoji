const fs = require("fs");
const path = "components/kaomoji/category-view.tsx";
let src = fs.readFileSync(path, "utf8");

if (!src.includes('from "@/components/kaomoji/faq-section"')) {
  src = src.replace(
    'import { RecentlyCopied } from "@/components/kaomoji/recently-copied";',
    'import { RecentlyCopied } from "@/components/kaomoji/recently-copied";\r\n' +
      'import { LearnSection } from "@/components/kaomoji/learn-section";\r\n' +
      'import { FaqSection } from "@/components/kaomoji/faq-section";',
  );
}

if (!src.includes("<LearnSection")) {
  const howToEnd = src.indexOf("<RecentlyCopied />");
  if (howToEnd < 0) throw new Error("RecentlyCopied not found");
  const insertLearn =
    `{showEducation ? (\r\n` +
    `        <LearnSection\r\n` +
    `          heading={learnHeadingFor(page.path, page.label)}\r\n` +
    `          definition={page.definition}\r\n` +
    `          learnMore={page.learnMore}\r\n` +
    `        />\r\n` +
    `      ) : null}\r\n\r\n      `;
  src = src.slice(0, howToEnd) + insertLearn + src.slice(howToEnd);
}

if (!src.includes("<FaqSection")) {
  const relatedMarker =
    '{related.length > 0 ? (\r\n        <section className="mt-10" aria-labelledby="related-heading">';
  const altRelated =
    '{related.length > 0 ? (\n        <section className="mt-10" aria-labelledby="related-heading">';
  let idx = src.indexOf(relatedMarker);
  let marker = relatedMarker;
  if (idx < 0) {
    idx = src.indexOf(altRelated);
    marker = altRelated;
  }
  if (idx < 0) {
    // softer search
    idx = src.indexOf('aria-labelledby="related-heading"');
    if (idx < 0) throw new Error("related heading not found");
    // find start of {related.length
    const start = src.lastIndexOf("{related.length", idx);
    const insertFaq = `{showEducation ? <FaqSection faqs={page.faqs} /> : null}\r\n\r\n      `;
    src = src.slice(0, start) + insertFaq + src.slice(start);
  } else {
    const insertFaq = `{showEducation ? <FaqSection faqs={page.faqs} /> : null}\r\n\r\n      `;
    src = src.slice(0, idx) + insertFaq + src.slice(idx);
  }
}

fs.writeFileSync(path, src, "utf8");
console.log({
  FaqSection: src.includes("<FaqSection"),
  LearnSection: src.includes("<LearnSection"),
  importFaq: src.includes("faq-section"),
  importLearn: src.includes("learn-section"),
});