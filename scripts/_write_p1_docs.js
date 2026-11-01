const fs = require("fs");
const packs = require("./_faq_packs.js");
const heart = packs.p1Store.heart;
const shy = packs.p1Store.shy;
const md = `# P1 FAQ packs (stored only — no routes yet)

Heart and shy landings are deferred. Do **not** create \`/heart-kaomoji\` or \`/shy-kaomoji\` until IA review.

## Heart (P1)

### Definition

${heart.definition}

### FAQs

${heart.faqs.map((f) => `**Q:** ${f.question}\n\n**A:** ${f.answer}`).join("\n\n")}

## Shy (P1)

### Definition

${shy.definition}

### FAQs

${shy.faqs.map((f) => `**Q:** ${f.question}\n\n**A:** ${f.answer}`).join("\n\n")}

## Site note (angry family)

Rage and glare are **not** separate URLs. They stay filter/related discovery on \`/angry-kaomoji\`. Table flip, fight, and pout keep their own pages.
`;
fs.writeFileSync("docs/P1-HEART-SHY-FAQ-PACKS.md", md, "utf8");
console.log("p1 docs ok", md.length);