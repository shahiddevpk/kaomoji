const fs = require("fs");

let trust = fs.readFileSync("components/layout/trust-view.tsx", "utf8");
if (!trust.includes("FaqSection")) {
  trust = trust.replace(
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\r\n',
    'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\r\n' +
      'import { FaqSection } from "@/components/kaomoji/faq-section";\r\n' +
      'import { LearnSection } from "@/components/kaomoji/learn-section";\r\n',
  );
  if (!trust.includes("faq-section")) {
    trust = trust.replace(
      'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\n',
      'import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\n' +
        'import { FaqSection } from "@/components/kaomoji/faq-section";\n' +
        'import { LearnSection } from "@/components/kaomoji/learn-section";\n',
    );
  }
  trust = trust.replace(
    'import { breadcrumbJsonLd } from "@/lib/seo";',
    'import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";',
  );
  trust = trust.replace(
    "  const related = relatedPages(page);\n",
    "  const related = relatedPages(page);\n" +
      "  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;\n",
  );
  trust = trust.replace(
    "  const related = relatedPages(page);\r\n",
    "  const related = relatedPages(page);\r\n" +
      "  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;\r\n",
  );
  trust = trust.replace(
    '<JsonLd data={breadcrumbJsonLd(page)} />',
    '<JsonLd data={breadcrumbJsonLd(page)} />\n' +
      "      {faqSchema ? <JsonLd data={faqSchema} /> : null}",
  );
  // After intro paragraph, before children div
  trust = trust.replace(
    '<p className="mt-3 type-body text-muted">{page.intro}</p>\n' +
      '      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>',
    '<p className="mt-3 type-body text-muted">{page.intro}</p>\n' +
      "      <LearnSection\n" +
      '        heading="About Paste Kaomoji"\n' +
      "        definition={page.definition}\n" +
      "        learnMore={page.learnMore}\n" +
      "      />\n" +
      '      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>\n' +
      "      <FaqSection faqs={page.faqs} />",
  );
  // CRLF variant
  trust = trust.replace(
    '<p className="mt-3 type-body text-muted">{page.intro}</p>\r\n' +
      '      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>',
    '<p className="mt-3 type-body text-muted">{page.intro}</p>\r\n' +
      "      <LearnSection\r\n" +
      '        heading="About Paste Kaomoji"\r\n' +
      "        definition={page.definition}\r\n" +
      "        learnMore={page.learnMore}\r\n" +
      "      />\r\n" +
      '      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>\r\n' +
      "      <FaqSection faqs={page.faqs} />",
  );
  fs.writeFileSync("components/layout/trust-view.tsx", trust, "utf8");
}
console.log({
  faq: trust.includes("FaqSection"),
  learn: trust.includes("LearnSection"),
  schema: trust.includes("faqSchema"),
});

let about = fs.readFileSync("app/about/page.tsx", "utf8");
// Keep existing about body; definition/faqs come from site.ts via TrustView.
// Optionally lightly enrich first paragraph if still thin — leave as-is to avoid duplicating home FAQs.
console.log("about unchanged beyond TrustView wire", about.length);