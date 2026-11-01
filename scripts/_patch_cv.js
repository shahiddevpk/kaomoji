const fs = require("fs");
const path = "components/kaomoji/category-view.tsx";
let src = fs.readFileSync(path, "utf8");

if (!src.includes("FaqSection")) {
  src = src.replace(
    'import { RecentlyCopied } from "@/components/kaomoji/recently-copied";\n',
    'import { RecentlyCopied } from "@/components/kaomoji/recently-copied";\n' +
      'import { LearnSection } from "@/components/kaomoji/learn-section";\n' +
      'import { FaqSection } from "@/components/kaomoji/faq-section";\n',
  );
  src = src.replace(
    'import { breadcrumbJsonLd } from "@/lib/seo";',
    'import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";',
  );
}

// Helper for mood-specific learn H2
if (!src.includes("learnHeadingFor")) {
  src = src.replace(
    "export function CategoryView({",
    `function learnHeadingFor(pagePath: string, label: string): string {
  switch (pagePath) {
    case "/japanese-emoticons":
      return "What are Japanese emoticons?";
    case "/kaomoji-copy-paste":
      return "What is kaomoji copy and paste?";
    case "/angry-kaomoji":
      return "About angry kaomoji";
    case "/cute-kaomoji":
      return "About cute kaomoji";
    case "/multiline-kaomoji":
      return "About multiline kaomoji";
    case "/kaomoji-generator":
      return "About the kaomoji generator";
    default:
      return \`About \${label.toLowerCase()} faces\`;
  }
}

export function CategoryView({`,
  );
}

// Emit FAQ JSON-LD alongside breadcrumbs when faqs exist and page 1
if (!src.includes("faqSchema")) {
  src = src.replace(
    "  const renderPagination = showPaging",
    `  const showEducation = safePage === 1;
  const faqSchema =
    showEducation && page.faqs && page.faqs.length > 0
      ? faqJsonLd(page.faqs)
      : null;

  const renderPagination = showPaging`,
  );

  src = src.replace(
    "      <JsonLd data={breadcrumbJsonLd(page, { pageNumber: safePage })} />\n",
    "      <JsonLd data={breadcrumbJsonLd(page, { pageNumber: safePage })} />\n" +
      "      {faqSchema ? <JsonLd data={faqSchema} /> : null}\n",
  );
}

// Insert Learn + FAQ after how-to / before RecentlyCopied (education after how-to, before grid is also ok;
// task said after how-to / before or after related — prefer after how-to copy section near end too.
// Spec: after how-to / before or after related. Putting after "How to copy" and before related pages
// keeps conversion (grid) first. Also definition can sit after howTo block.
if (!src.includes("<LearnSection")) {
  // After howTo section, before RecentlyCopied — short definition early is fine for JP/copy-paste/angry
  src = src.replace(
    `      ) : null}

      <RecentlyCopied />`,
    `      ) : null}

      {showEducation ? (
        <LearnSection
          heading={learnHeadingFor(page.path, page.label)}
          definition={page.definition}
          learnMore={page.learnMore}
        />
      ) : null}

      <RecentlyCopied />`,
  );

  // FAQs after how-to-copy, before related pages (education second)
  src = src.replace(
    `      </section>

      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">`,
    `      </section>

      {showEducation ? <FaqSection faqs={page.faqs} /> : null}

      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">`,
  );
}

fs.writeFileSync(path, src, "utf8");
console.log("category-view patched", src.includes("FaqSection"), src.includes("faqSchema"));