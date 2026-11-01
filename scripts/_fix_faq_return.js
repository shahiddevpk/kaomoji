const fs = require("fs");
let seo = fs.readFileSync("lib/seo.ts", "utf8");
// Ensure faqJsonLd return type is Record when non-null
if (!seo.includes("Record<string, unknown> | null")) {
  seo = seo.replace(
    "export function faqJsonLd(faqs: { question: string; answer: string }[]) {",
    "export function faqJsonLd(\n  faqs: { question: string; answer: string }[],\n): Record<string, unknown> | null {",
  );
  fs.writeFileSync("lib/seo.ts", seo, "utf8");
  console.log("faqJsonLd return type updated");
} else {
  console.log("return type already set");
}