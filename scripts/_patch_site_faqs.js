/**
 * Patch lib/site.ts: extend SitePage + inject definition/learnMore/faqs
 * and generator SERP fields. Preserves existing UTF-8 face glyphs.
 */
const fs = require("fs");
const packs = require("./_faq_packs.js");

const sitePath = "lib/site.ts";
let src = fs.readFileSync(sitePath, "utf8");

if (!src.includes("faqs?:")) {
  const typeNeedle = "  /** Short how-to / explainer bullets under the grid intro (unique per page). */\n  howTo?: string[];\n  related: string[];";
  const typeReplacement =
    "  /** Short how-to / explainer bullets under the grid intro (unique per page). */\n" +
    "  howTo?: string[];\n" +
    "  /** Optional FAQ pairs for FAQPage JSON-LD + on-page FAQ section (page 1 only). */\n" +
    "  faqs?: { question: string; answer: string }[];\n" +
    "  /** Short unique \"what is…\" block when set. */\n" +
    "  definition?: string;\n" +
    "  /** Extra educational paragraph(s); multiline with \\n\\n. */\n" +
    "  learnMore?: string;\n" +
    "  related: string[];";
  if (!src.includes(typeNeedle)) {
    console.error("SitePage type needle not found");
    process.exit(1);
  }
  src = src.replace(typeNeedle, typeReplacement);
  console.log("extended SitePage type");
} else {
  console.log("SitePage already has faqs?");
}

function indentBlock(obj, indent) {
  const sp = " ".repeat(indent);
  const sp2 = " ".repeat(indent + 2);
  const sp4 = " ".repeat(indent + 4);
  let out = "";
  if (obj.definition != null) {
    out += `${sp}definition:\n${sp2}${JSON.stringify(obj.definition)},\n`;
  }
  if (obj.learnMore != null) {
    out += `${sp}learnMore:\n${sp2}${JSON.stringify(obj.learnMore)},\n`;
  }
  if (obj.faqs && obj.faqs.length) {
    out += `${sp}faqs: [\n`;
    for (const f of obj.faqs) {
      out += `${sp2}{\n`;
      out += `${sp4}question: ${JSON.stringify(f.question)},\n`;
      out += `${sp4}answer: ${JSON.stringify(f.answer)},\n`;
      out += `${sp2}},\n`;
    }
    out += `${sp}],\n`;
  }
  return out;
}

function findPageObjectStart(source, path) {
  const marker = `path: "${path}"`;
  const idx = source.indexOf(marker);
  if (idx < 0) return -1;
  // walk back to opening brace of this object
  let i = idx;
  while (i > 0 && source[i] !== "{") i--;
  return i;
}

function findMatchingBrace(source, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return i;
    } else if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      i++;
      while (i < source.length) {
        if (source[i] === "\\") {
          i += 2;
          continue;
        }
        if (source[i] === quote) break;
        i++;
      }
    }
  }
  return -1;
}

function upsertFieldInObject(objSrc, fieldName, valueLiteral) {
  // Remove existing field if present (simple top-level key match).
  const fieldRe = new RegExp(
    `\\n(    ${fieldName}:\\s*(?:\\n    )?[^]*?)(?=\\n    [a-zA-Z]|\\n  \\})`,
  );
  // More reliable: line-based scan for "    fieldName:"
  const lines = objSrc.split("\n");
  const startIdx = lines.findIndex((l) =>
    new RegExp(`^    ${fieldName}:`).test(l),
  );
  if (startIdx >= 0) {
    let endIdx = startIdx + 1;
    // If value starts on same line with a string that may continue... we handle
    // multiline strings and arrays by brace/bracket depth from the field line.
    let depthBrace = 0;
    let depthBracket = 0;
    let inStr = null;
    const consume = (chunk, startAt) => {
      for (let i = startAt; i < chunk.length; i++) {
        const c = chunk[i];
        if (inStr) {
          if (c === "\\") {
            i++;
            continue;
          }
          if (c === inStr) inStr = null;
          continue;
        }
        if (c === '"' || c === "'" || c === "`") {
          inStr = c;
          continue;
        }
        if (c === "{") depthBrace++;
        else if (c === "}") depthBrace--;
        else if (c === "[") depthBracket++;
        else if (c === "]") depthBracket--;
      }
    };
    consume(lines[startIdx], 0);
    while (
      endIdx < lines.length &&
      (depthBrace > 0 || depthBracket > 0 || inStr)
    ) {
      consume(lines[endIdx], 0);
      endIdx++;
    }
    // Also include a single-line field (depth already 0 after first line)
    // Field lines always end with comma typically.
    lines.splice(startIdx, endIdx - startIdx);
  }

  // Insert before related: line
  const relatedIdx = lines.findIndex((l) => /^    related:/.test(l));
  if (relatedIdx < 0) {
    throw new Error(`related: not found while upserting ${fieldName}`);
  }
  const insertLines = valueLiteral.trimEnd().split("\n");
  lines.splice(relatedIdx, 0, ...insertLines);
  return lines.join("\n");
}

for (const [pagePath, pack] of Object.entries(packs)) {
  if (pagePath === "p1Store") continue;
  const openIdx = findPageObjectStart(src, pagePath);
  if (openIdx < 0) {
    console.error("page not found", pagePath);
    process.exit(1);
  }
  const closeIdx = findMatchingBrace(src, openIdx);
  if (closeIdx < 0) {
    console.error("brace mismatch", pagePath);
    process.exit(1);
  }
  let obj = src.slice(openIdx, closeIdx + 1);

  // Generator SERP field overrides
  if (pack.heading) {
    obj = obj.replace(
      /heading: "[^"]*",/,
      `heading: ${JSON.stringify(pack.heading)},`,
    );
  }
  if (pack.titleSegment) {
    obj = obj.replace(
      /titleSegment: "[^"]*",/,
      `titleSegment: ${JSON.stringify(pack.titleSegment)},`,
    );
  }
  if (pack.description) {
    // description may be multi-line template or single string - match carefully
    obj = obj.replace(
      /description:\s*(?:"(?:\\.|[^"\\])*"|siteConfig\.description),/,
      `description:\n      ${JSON.stringify(pack.description)},`,
    );
  }
  if (pack.intro) {
    // Replace intro string (may contain \n\n escapes inside quotes)
    obj = obj.replace(
      /intro:\s*"(?:\\.|[^"\\])*",/,
      `intro:\n      ${JSON.stringify(pack.intro)},`,
    );
  }

  // Strip existing injected fields then re-add
  for (const field of ["definition", "learnMore", "faqs"]) {
    if (new RegExp(`^    ${field}:`, "m").test(obj)) {
      // remove via upsert helper with empty then we add fresh
      const lines = obj.split("\n");
      const startIdx = lines.findIndex((l) =>
        new RegExp(`^    ${field}:`).test(l),
      );
      if (startIdx >= 0) {
        let depthBrace = 0;
        let depthBracket = 0;
        let inStr = null;
        const consume = (chunk) => {
          for (let i = 0; i < chunk.length; i++) {
            const c = chunk[i];
            if (inStr) {
              if (c === "\\") {
                i++;
                continue;
              }
              if (c === inStr) inStr = null;
              continue;
            }
            if (c === '"' || c === "'" || c === "`") {
              inStr = c;
              continue;
            }
            if (c === "{") depthBrace++;
            else if (c === "}") depthBrace--;
            else if (c === "[") depthBracket++;
            else if (c === "]") depthBracket--;
          }
        };
        let endIdx = startIdx + 1;
        consume(lines[startIdx]);
        while (
          endIdx < lines.length &&
          (depthBrace > 0 || depthBracket > 0 || inStr)
        ) {
          consume(lines[endIdx]);
          endIdx++;
        }
        lines.splice(startIdx, endIdx - startIdx);
        obj = lines.join("\n");
      }
    }
  }

  const block = indentBlock(pack, 4);
  if (block) {
    const relatedIdx = obj.indexOf("\n    related:");
    if (relatedIdx < 0) {
      console.error("related not found in", pagePath);
      process.exit(1);
    }
    obj = obj.slice(0, relatedIdx + 1) + block + obj.slice(relatedIdx + 1);
  }

  src = src.slice(0, openIdx) + obj + src.slice(closeIdx + 1);
  console.log(
    "patched",
    pagePath,
    "faqs=",
    (pack.faqs && pack.faqs.length) || 0,
    "def=",
    !!pack.definition,
    "learn=",
    !!pack.learnMore,
  );
}

fs.writeFileSync(sitePath, src, "utf8");
console.log("wrote", sitePath, "bytes", Buffer.byteLength(src, "utf8"));