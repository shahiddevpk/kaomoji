const fs = require("fs");
const raw = JSON.parse(fs.readFileSync("data/items.json", "utf8"));
function norm(f) {
  return String(f)
    .replaceAll("\\n", "\n")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&");
}
const hasTag = (item, tags) =>
  (item.tags || []).some((t) => tags.includes(String(t).toLowerCase()));

const angry = raw.filter((i) => hasTag(i, ["angry"]));
const tableflip = raw.filter((i) => hasTag(i, ["tableflip", "table flip"]));
const fight = raw.filter((i) => hasTag(i, ["fight", "punch", "hit"]));
const rage = raw.filter((i) => hasTag(i, ["rage", "mad"]));
const pout = raw.filter((i) => hasTag(i, ["pout", "hmph", "annoyed"]));
const glare = raw.filter((i) => hasTag(i, ["glare", "grr", "gununu"]));
const multilineTag = raw.filter((i) => hasTag(i, ["multi-line", "multiline"]));
const newline = raw.filter((i) => norm(i.face).includes("\n"));
const multilineUnion = new Set([
  ...multilineTag.map((i) => i.id),
  ...newline.map((i) => i.id),
]);

function overlap(a, b) {
  const bIds = new Set(b.map((i) => i.id));
  const shared = a.filter((i) => bIds.has(i.id));
  // exclusive ranking: of child's set, what % also in angry
  const pct = a.length ? (shared.length / a.length) * 100 : 100;
  // also: of child, how many NOT in angry (distinct)
  const distinct = a.length - shared.length;
  return { child: a.length, shared: shared.length, distinct, pct: Math.round(pct * 10) / 10 };
}

console.log("angry", angry.length);
console.log("tableflip", tableflip.length, overlap(tableflip, angry));
console.log("fight", fight.length, overlap(fight, angry));
console.log("rage", rage.length, overlap(rage, angry));
console.log("pout", pout.length, overlap(pout, angry));
console.log("glare", glare.length, overlap(glare, angry));
console.log("multiline tag", multilineTag.length, "newline", newline.length, "union", multilineUnion.size);

// sample newline
const s = newline[0];
if (s) console.log("newline sample", s.id, JSON.stringify(norm(s.face).slice(0, 80)));

// Gate: overlap with angry <= ~40% to ship
const RAGE_MAX = 40;
const POUT_MAX = 40; // "distinct sulk pool clears bar" - use same exclusive overlap bar
console.log("\nGATE rage ship?", overlap(rage, angry).pct <= RAGE_MAX, "overlap%", overlap(rage, angry).pct);
console.log("GATE pout ship?", overlap(pout, angry).pct <= POUT_MAX, "overlap%", overlap(pout, angry).pct);

// Also check: if we require distinct count meaningful
console.log("rage distinct from angry", overlap(rage, angry).distinct);
console.log("pout distinct from angry", overlap(pout, angry).distinct);
