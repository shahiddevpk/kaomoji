const fs = require("fs");
let src = fs.readFileSync("app/kaomoji-generator/page.tsx", "utf8");

if (!src.includes("FaqSection")) {
  src = src.replace(
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\n',
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\n' +
      'import { FaqSection } from "@/components/kaomoji/faq-section";\n' +
      'import { LearnSection } from "@/components/kaomoji/learn-section";\n',
  );
  src = src.replace(
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\r\n',
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\r\n' +
      'import { FaqSection } from "@/components/kaomoji/faq-section";\r\n' +
      'import { LearnSection } from "@/components/kaomoji/learn-section";\r\n',
  );
  src = src.replace(
    'import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";',
    'import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";',
  );
}

if (!src.includes("faqSchema")) {
  src = src.replace(
    "  const related = relatedPages(page);\n",
    "  const related = relatedPages(page);\n" +
      "  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;\n",
  );
  src = src.replace(
    "  const related = relatedPages(page);\r\n",
    "  const related = relatedPages(page);\r\n" +
      "  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;\r\n",
  );
  src = src.replace(
    "<JsonLd data={breadcrumbJsonLd(page)} />",
    "<JsonLd data={breadcrumbJsonLd(page)} />\n      {faqSchema ? <JsonLd data={faqSchema} /> : null}",
  );
}

if (!src.includes("<LearnSection")) {
  // Insert after KaomojiGenerator, before related
  const marker = "<KaomojiGenerator />";
  const idx = src.indexOf(marker);
  if (idx < 0) throw new Error("KaomojiGenerator not found");
  const insert =
    marker +
    "\n\n      <LearnSection\n" +
    '        heading="About the kaomoji generator"\n' +
    "        definition={page.definition}\n" +
    "        learnMore={page.learnMore}\n" +
    "      />\n" +
    "      <FaqSection faqs={page.faqs} />";
  src = src.slice(0, idx) + insert + src.slice(idx + marker.length);
}

fs.writeFileSync("app/kaomoji-generator/page.tsx", src, "utf8");
console.log({
  faq: src.includes("<FaqSection"),
  learn: src.includes("<LearnSection"),
  schema: src.includes("faqSchema"),
});
console.log(src);