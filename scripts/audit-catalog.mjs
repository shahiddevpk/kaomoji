import { kaomoji } from "../data/items.ts";
import {
  getByCategory,
  getByTags,
  countByTags,
  getPopular,
} from "../data/index.ts";
import {
  passesCategoryIntegrity,
  passesTagIntegrity,
  passesSearchScope,
} from "../data/category-integrity.ts";

const catalog = kaomoji;
const lines = [];
const log = (s) => lines.push(s);

log(`Total catalog: ${catalog.length}`);

const ids = new Map();
const faces = new Map();
let emptyFace = 0;
let emptyName = 0;
let noPrimary = 0;
let replacement = 0;

for (const item of catalog) {
  ids.set(item.id, (ids.get(item.id) ?? 0) + 1);
  const fn = item.face.trim();
  if (!fn) emptyFace += 1;
  if (!item.name?.trim()) emptyName += 1;
  if (!item.categories?.[0]) noPrimary += 1;
  if (fn.includes("\uFFFD")) replacement += 1;
  const list = faces.get(fn) ?? [];
  list.push(item.id);
  faces.set(fn, list);
}

const dupIds = [...ids.entries()].filter(([, c]) => c > 1);
const dupFaces = [...faces.entries()].filter(([, idList]) => idList.length > 1);

log(`Duplicate ids: ${dupIds.length}`);
if (dupIds.length) log(`  examples: ${dupIds.slice(0, 3).map(([id, c]) => `${id}(${c})`).join(", ")}`);
log(`Duplicate faces (exact): ${dupFaces.length}`);
log(`Empty face: ${emptyFace}, empty name: ${emptyName}, no primary: ${noPrimary}, U+FFFD: ${replacement}`);
log(`Popular flagged: ${getPopular().length}`);

const cats = ["cute", "happy", "cat", "sad", "crying", "japanese", "text-faces"];
for (const c of cats) {
  log(`category ${c}: ${getByCategory(c, { primaryOnly: true }).length} (integrity-pass)`);
}

for (const tags of [
  ["angry"],
  ["smug"],
  ["sleepy", "tired"],
  ["tableflip", "table flip"],
  ["heart"],
  ["bear"],
]) {
  log(`tags [${tags.join(", ")}]: ${countByTags(tags)}`);
}

const angryTagged = catalog.filter((i) =>
  i.tags.some((t) => t.toLowerCase() === "angry"),
);
const angryShown = new Set(getByTags(["angry"]).map((i) => i.id));
const angryHidden = angryTagged.filter((i) => !angryShown.has(i.id));
log(
  `angry-tagged: ${angryTagged.length}, browse pool: ${angryShown.size}, hidden: ${angryHidden.length}`,
);

const angryHappy = getByTags(["angry"]).filter((i) => i.categories[0] === "happy");
log(`angry browse happy-primary leak: ${angryHappy.length}`);

const angryCrying = getByTags(["angry"]).filter((i) => i.categories[0] === "crying");
log(`angry browse crying-primary on page: ${angryCrying.length}`);

for (const c of cats) {
  const all = catalog.filter((i) => i.categories[0] === c);
  const bad = all.filter((i) => !passesCategoryIntegrity(i, c));
  if (bad.length > 0) {
    log(`category ${c}: ${bad.length}/${all.length} fail integrity (excluded from grid)`);
  }
}

// Tag integrity spot checks
let tagFailAngry = 0;
for (const item of angryTagged) {
  if (!passesTagIntegrity(item, ["angry"])) tagFailAngry += 1;
}
log(`angry-tagged failing passesTagIntegrity: ${tagFailAngry}`);

const searchMismatch = angryTagged.filter(
  (i) => !passesSearchScope(i, { tags: ["angry"] }),
);
log(`angry-tagged failing search scope: ${searchMismatch.length}`);

// Orphan tags without category
const primarySet = new Set(cats);
const oddPrimary = new Set();
for (const item of catalog) {
  const p = item.categories[0];
  if (p && !primarySet.has(p)) oddPrimary.add(p);
}
log(`Other primary categories: ${[...oddPrimary].sort().join(", ") || "(none)"}`);

// Page 1 angry sob faces
const angryPage1 = getByTags(["angry"]).slice(0, 96);
const sobOnP1 = angryPage1.filter((f) => /´;ω;|シクシク|；ω；/.test(f.face));
log(`angry page-1 (96) sob-like faces: ${sobOnP1.length}`);

console.log(lines.join("\n"));
