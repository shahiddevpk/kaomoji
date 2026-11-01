const fs = require("fs");

function upsertPageFields(src, pagePath, fields) {
  const marker = "path: \"" + pagePath + "\"";
  const openIdx = src.indexOf(marker);
  if (openIdx < 0) throw new Error("missing " + pagePath);
  let i = openIdx;
  while (i > 0 && src[i] !== "{") i--;
  const start = i;
  let depth = 0, inStr = null, end = -1;
  for (let j = start; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (c === "\\") { j++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) { end = j; break; }
    }
  }
  if (end < 0) throw new Error("brace " + pagePath);
  let obj = src.slice(start, end + 1);

  for (const [key, value] of Object.entries(fields)) {
    const lines = obj.split("\n");
    const startLine = lines.findIndex((l) => new RegExp("^    " + key + ":").test(l));
    if (startLine >= 0) {
      let depthBrace = 0, depthBracket = 0, str = null;
      const consume = (chunk) => {
        for (let k = 0; k < chunk.length; k++) {
          const ch = chunk[k];
          if (str) {
            if (ch === "\\") { k++; continue; }
            if (ch === str) str = null;
            continue;
          }
          if (ch === '"' || ch === "'" || ch === "`") { str = ch; continue; }
          if (ch === "{") depthBrace++;
          else if (ch === "}") depthBrace--;
          else if (ch === "[") depthBracket++;
          else if (ch === "]") depthBracket--;
        }
      };
      let endLine = startLine + 1;
      consume(lines[startLine]);
      while (endLine < lines.length && (depthBrace > 0 || depthBracket > 0 || str)) {
        consume(lines[endLine]);
        endLine++;
      }
      lines.splice(startLine, endLine - startLine);
      obj = lines.join("\n");
    }
    const rel = obj.indexOf("\n    related:");
    if (rel < 0) throw new Error("no related in " + pagePath);
    let literal;
    if (typeof value === "string") {
      literal = "    " + key + ":\n      " + JSON.stringify(value) + ",\n";
    } else if (Array.isArray(value) && typeof value[0] === "string") {
      literal =
        "    " + key + ": [\n" +
        value.map((v) => "      " + JSON.stringify(v) + ",").join("\n") +
        "\n    ],\n";
    } else if (Array.isArray(value)) {
      literal = "    " + key + ": [\n";
      for (const item of value) {
        literal += "      {\n";
        literal += "        question: " + JSON.stringify(item.question) + ",\n";
        literal += "        answer: " + JSON.stringify(item.answer) + ",\n";
        literal += "      },\n";
      }
      literal += "    ],\n";
    } else {
      literal = "    " + key + ": " + JSON.stringify(value) + ",\n";
    }
    obj = obj.slice(0, rel + 1) + literal + obj.slice(rel + 1);
  }
  return src.slice(0, start) + obj + src.slice(end + 1);
}

let site = fs.readFileSync("lib/site.ts", "utf8");

site = upsertPageFields(site, "/heart-kaomoji", {
  heading: "Heart Kaomoji",
  titleSegment: "Heart Kaomoji Copy & Paste (\u2661\u203F\u2661)",
  description:
    "Heart kaomoji to copy for affection, crush energy, and warm thanks. Browse love-ready text faces, tap once, and paste into any chat.",
  intro:
    "This hub is for affection, not only soft-cute smiles. Grab heart-woven faces when you mean love, crush, or warm thanks, and use the love chip when you want that angle inside the same grid. Cute pages stay for gentle adorable vibes without a romantic read; shy pages cover bashful blush instead of full heart energy.",
  howTo: [
    "Open a heart face that matches the warmth you want (light thanks vs full swoon).",
    "Tap Copy so the full string lands on your clipboard.",
    "Paste into your chat, then add your own words around it if you need context.",
  ],
  definition:
    "Affection shows up as hearts woven into poses, not only a single heart glyph. Choose lighter mixes for friends and fuller swoons when the relationship already supports that tone.",
  faqs: [
    {
      question: "What are heart kaomoji for?",
      answer:
        "They add affection, crush energy, or warm thanks without sending a sticker pack. Use them for love notes, friend appreciation, or soft reactions.",
    },
    {
      question: "Heart kaomoji vs the \u2764\uFE0F emoji?",
      answer:
        "The emoji is one picture glyph. Heart kaomoji weave hearts into a full face or pose, so the reaction feels more expressive and still copies as text.",
    },
    {
      question: "Can these read as too romantic?",
      answer:
        "Some can. For friendship, choose lighter blush-and-heart mixes; save full swoon faces for partners or clearly playful threads.",
    },
    {
      question: "Why browse a heart category instead of searching \"love\"?",
      answer:
        "A dedicated grid groups affection poses together so you are not mixing romantic faces with random happy ones from a giant dump.",
    },
  ],
});

site = upsertPageFields(site, "/shy-kaomoji", {
  heading: "Shy Kaomoji",
  titleSegment: "Shy Kaomoji Copy & Paste (\u2044 \u2044\u2022\u2044\u03C9\u2044\u2022\u2044 \u2044)",
  description:
    "Shy kaomoji for bashful, awkward, and blushy moments. Copy soft nervous faces and paste them when a big smile feels too bold.",
  intro:
    "Shy faces are for hesitation and blush, not loud cute energy. Use this grid after compliments, nervous hellos, or gentle \"I'm flustered\" beats, and open the blush chip when you want that cue inside the set. Cute stays warmly adorable; heart stays affection-first. This page owns the quiet, bashful read.",
  howTo: [
    "Pick a face with blush, peeking eyes, or a tiny mouth that feels nervous, not shouty.",
    "Tap Copy and keep the page handy on mobile until you switch apps.",
    "Paste into the chat; if the face looks empty, try a simpler shy face from the same grid.",
  ],
  definition:
    "Expect bashful cues like sweat, peeking eyes, and small mouths. They signal nerves or blush more than pure happiness.",
  faqs: [
    {
      question: "When does a shy kaomoji fit better than a smile?",
      answer:
        "When you want soft, awkward, or bashful energy: after a compliment, a nervous hello, or a \"thanks, I'm blushing\" beat.",
    },
    {
      question: "What usually marks a shy face?",
      answer:
        "Covered eyes, sweat drops, tiny mouths, sideways glances, or blush markers. The mood is quiet, not loud celebration.",
    },
    {
      question: "Are shy faces only for romance?",
      answer:
        "No. They also work for social nerves, polite embarrassment, or gentle refusals that should not sound cold.",
    },
    {
      question: "How is shy different from cute on this site?",
      answer:
        "Cute aims for adorable warmth. Shy aims for hesitation and blush. Overlap exists, but the primary intent on shy pages is bashful, not just soft-pretty.",
    },
  ],
});

fs.writeFileSync("lib/site.ts", site, "utf8");
fs.writeFileSync(
  "docs/P1-HEART-SHY-FAQ-PACKS.md",
  "# Heart & shy packs (shipped as /heart-kaomoji/ and /shy-kaomoji/)\n\nLove / kiss / hug are tags under heart, not separate URLs.\nBlush / embarrassed are tags under shy, not separate URLs.\nDo not create /love-kaomoji/.\n\nSERP copy is wired in lib/site.ts. Redirects live in next.config.ts.\n",
  "utf8",
);
console.log("verbatim ok");