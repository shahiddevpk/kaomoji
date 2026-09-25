import type { Kaomoji } from "@/data/types";

function normTag(tag: string): string {
  return tag.toLowerCase().trim();
}

function tagsSet(item: Kaomoji): Set<string> {
  return new Set(item.tags.map(normTag));
}

function hasAnyTag(item: Kaomoji, wanted: string[]): boolean {
  const t = tagsSet(item);
  return wanted.some((w) => t.has(normTag(w)));
}

function primaryIs(item: Kaomoji, ...ids: string[]): boolean {
  const p = item.categories[0] ?? "";
  const set = new Set(ids.map(normTag));
  return set.has(normTag(p));
}

/** Hiragana, katakana, or common CJK — used for text-faces vs japanese split. */
export function faceHasJapaneseScript(face: string): boolean {
  return /[\u3040-\u30ff\u4e00-\u9fff\u3400-\u4dbf]/.test(face);
}

const ANIMAL_SPECIES_TAGS = [
  "cat",
  "neko",
  "nyanko",
  "catmoji",
  "dog",
  "puppy",
  "bunny",
  "rabbit",
  "pig",
];

const CRYING_FACE_MARKERS = ["ಥ", "༎ຶ", "；ω；", "´；ω；", "ｳｯ", "⊂(◉‿◉)"];

function faceLooksCrying(face: string): boolean {
  return CRYING_FACE_MARKERS.some((m) => face.includes(m));
}

function faceLooksCatShaped(face: string): boolean {
  if (face.includes("🐱") || face.includes("🐾")) return true;
  if (/=\^|\^=|ΦωΦ|•ω•\^|\^•ω•\^|=•ω•=/.test(face)) return true;
  return false;
}

function hasTableFlipGlyph(face: string): boolean {
  return /┻|┬|┴|⊥|‾/.test(face) || face.includes("┻━┻") || face.includes("┬─┬");
}

function passesBearTagPage(item: Kaomoji): boolean {
  if (primaryIs(item, "cat", "dog", "bunny", "pig", "crying", "happy")) {
    return false;
  }
  if (faceLooksCatShaped(item.face)) return false;
  if (item.face.includes("🐱") || item.face.includes("🐾")) return false;
  if (item.face.includes("(00)")) return false;
  if (/\/\(=・|x ・=\)\\/.test(item.face)) return false;

  const trimmed = item.face.trim();
  const teddy = /^[ʕʔ]/.test(trimmed) || /ʕ|ʔ/.test(item.face);
  if (/U・|∪◕|▽・|ᐡ|U｡|・ﻌ・/.test(item.face) && !teddy) return false;

  const name = item.name.toLowerCase();
  if (
    /\b(cat|dog|bunny|pig|neko|puppy|rabbit)\b/.test(name) &&
    !/\b(bear|kuma|teddy)\b/.test(name)
  ) {
    return false;
  }

  // Multi-species tag spam: only reject when the face is not teddy-shaped.
  if (
    hasAnyTag(item, ANIMAL_SPECIES_TAGS) &&
    !teddy &&
    !item.face.includes("ᴥ")
  ) {
    return false;
  }

  return true;
}

function passesSleepyTagPage(item: Kaomoji): boolean {
  if (hasAnyTag(item, ["sad", "crying", "cry", "sob", "angry", "rage"])) return false;
  if (primaryIs(item, "sad", "crying")) return false;
  if (faceLooksCrying(item.face)) return false;
  if (/(´；ω；|；ω；|ｳｯ|つд⊂)/.test(item.face)) return false;
  if (/(｡•́︿•̀｡)/.test(item.face)) return false;
  return true;
}

function faceLooksHappy(item: Kaomoji): boolean {
  const face = item.face;
  if (/‿|◕‿◕|✿◠‿|ʘ‿ʘ|ᕕ\( *ᐛ *\)|¯\\_\(ツ\)_\/¯/.test(face)) return true;
  if (/(｡◕‿‿◕｡)|\(◕‿◕✿\)|\(✿◠‿◠\)/.test(face)) return true;
  return false;
}

function passesSadCategory(item: Kaomoji): boolean {
  const blockTags = [
    "happy",
    "love",
    "heart",
    "angry",
    "rage",
    "fight",
    "tableflip",
    "table flip",
    "cat",
    "bear",
    "dog",
    "bunny",
    "crying",
    "cry",
    "sob",
    "smug",
    "excited",
    "hug",
    "kiss",
    "punch",
    "hit",
    "throw",
    "toss",
    "weapon",
    "gun",
    "shrug",
    "lenny",
  ];
  if (hasAnyTag(item, blockTags)) return false;
  if (primaryIs(item, "happy", "crying", "angry", "cat", "bear", "dog", "bunny")) {
    return false;
  }
  if (faceLooksCrying(item.face)) return false;
  if (faceLooksHappy(item)) return false;
  if (/╬|益ಠ|ﾉ┻━┻|┻━┻|ʘ言ʘ|♥‿♥|ᓚᘏᗢ/.test(item.face)) return false;
  return true;
}

function passesHappyCategory(item: Kaomoji): boolean {
  const blockTags = [
    "sad",
    "crying",
    "cry",
    "angry",
    "rage",
    "smug",
    "disapproval",
    "hostile",
    "fight",
    "tableflip",
    "table flip",
  ];
  if (hasAnyTag(item, blockTags)) return false;
  if (primaryIs(item, "sad", "crying", "angry", "smug")) return false;
  if (faceLooksCrying(item.face)) return false;
  if (/(\(¬_¬\)|\(￣ー￣\)|ಠﭛಠ)/.test(item.face)) return false;
  return true;
}

function passesCuteCategory(item: Kaomoji): boolean {
  const blockTags = [
    "tableflip",
    "table flip",
    "fight",
    "punch",
    "hit",
    "oraora",
    "throw",
    "toss",
    "angry",
    "rage",
    "weapon",
    "gun",
    "sleepy",
    "tired",
    "rolling",
    "catch",
    "receive",
  ];
  if (hasAnyTag(item, blockTags)) return false;
  if (hasTableFlipGlyph(item.face)) return false;
  if (/FIGHT|ᜊ\( *ಠ_ಠ *\)|╯ᜊ/.test(item.face)) return false;
  if (/ｺﾞﾛﾝ|('､3_ヽ)|\(:3｣∠\)/.test(item.face)) return false;
  return true;
}

function passesTextFacesCategory(item: Kaomoji): boolean {
  if (primaryIs(item, "japanese")) return false;
  if (hasAnyTag(item, ["dog", "puppy", "bunny", "rabbit", "cat", "neko", "bear"])) {
    return false;
  }
  if (hasAnyTag(item, ["fish", "ascii art", "multi-line", "multiline"])) {
    return false;
  }
  if (item.face.includes("\n") || item.face.includes("\r")) return false;
  if (faceHasJapaneseScript(item.face)) return false;
  if (/U・|∪◕|▽・|ᐡ|U｡|・ᴥ・|・ﻌ・/.test(item.face)) return false;
  if (/^[>~∼\\.]{4,}/m.test(item.face)) return false;
  return true;
}

function passesDogTagPage(item: Kaomoji): boolean {
  if (primaryIs(item, "cat", "bunny", "bear", "pig", "happy")) return false;
  if (
    hasAnyTag(item, [
      "cat",
      "neko",
      "nyanko",
      "catmoji",
      "bunny",
      "rabbit",
      "bear",
      "pig",
    ])
  ) {
    return false;
  }
  if (faceLooksCatShaped(item.face)) return false;
  if (item.face.includes("(00)") || item.face.includes("´(00)")) return false;
  const teddy =
    /^[ʕʔ]/.test(item.face.trim()) ||
    (/ʕ|ʔ/.test(item.face) && item.face.includes("ᴥ"));
  if (teddy && !hasAnyTag(item, ["dog", "puppy"])) return false;
  if (!hasAnyTag(item, ["dog", "puppy"])) return false;
  return true;
}

function passesHeartTagPage(item: Kaomoji): boolean {
  const blockTags = [
    "catch",
    "receive",
    "throw",
    "toss",
    "flip",
    "tableflip",
    "table flip",
    "fight",
    "punch",
    "hit",
    "oraora",
  ];
  if (hasAnyTag(item, blockTags)) return false;
  const face = item.face;
  if (/ｷｬｯﾁ|キャッチ|ﾉ ｷ|ヨﾕｳ/.test(face)) return false;
  const hasHeartGlyph = /[♡♥❤💕💗💞]/.test(face);
  const affectionTag = hasAnyTag(item, ["heart", "love", "kiss"]);
  if (hasAnyTag(item, ["hug"]) && !hasHeartGlyph && !affectionTag) return false;
  if (!hasHeartGlyph && !affectionTag && !hasAnyTag(item, ["hug", "kiss"])) {
    return false;
  }
  return true;
}

function passesTableFlipTagPage(item: Kaomoji): boolean {
  if (!hasAnyTag(item, ["tableflip", "table flip"]) && !hasTableFlipGlyph(item.face)) {
    return false;
  }
  if (!hasTableFlipGlyph(item.face)) return false;
  return true;
}

function faceLooksAngryMad(face: string): boolean {
  return /╬|ꐦ|💢|凸|益|ﾉ︵|┻━┻|怒|ｳｻﾞ|ぷい|ﾌﾟｲ|ʘ言ʘ|°Д°|ヽ\(.*Д|ง.*ง|ᕦ|ᕤ|ﾌﾟｲ|ﾌﾟｨ/.test(
    face,
  );
}

/** Angry hub + rage/glare tags: keep mad glyphs, drop crying/sob leaks. */
function passesAngryFamilyTagPage(item: Kaomoji, tags: string[]): boolean {
  const normalized = tags.map(normTag);
  const angryHub =
    normalized.length === 1 && normalized[0] === "angry";
  const rageGlareOnly =
    normalized.length === 1 &&
    (normalized[0] === "rage" || normalized[0] === "glare");
  if (!angryHub && !rageGlareOnly) return true;

  if (primaryIs(item, "happy", "crying")) return false;
  if (faceLooksCrying(item.face)) return false;
  if (
    hasAnyTag(item, [
      "sob",
      "sobbing",
      "buwaa",
      "cry",
      "crying",
      "oshii",
      "kuyashii",
      "regret",
    ])
  ) {
    return false;
  }
  if (primaryIs(item, "sad") && !faceLooksAngryMad(item.face)) return false;
  return true;
}

/** Hard exclusions for primary-category browse grids and scoped search pools. */
export function passesCategoryIntegrity(
  item: Kaomoji,
  categoryId: string,
): boolean {
  switch (categoryId) {
    case "sad":
      return passesSadCategory(item);
    case "happy":
      return passesHappyCategory(item);
    case "cute":
      return passesCuteCategory(item);
    case "text-faces":
      return passesTextFacesCategory(item);
    default:
      return true;
  }
}

function angryFamilyTags(tags: string[]): boolean {
  const normalized = tags.map(normTag);
  return normalized.some(
    (t) =>
      t === "angry" ||
      t === "tableflip" ||
      t === "table flip" ||
      t === "fight" ||
      t === "punch" ||
      t === "hit" ||
      t === "pout" ||
      t === "hmph" ||
      t === "annoyed" ||
      t === "rage" ||
      t === "glare",
  );
}

/** Scoped server search must match the same walls as browse grids. */
export function passesSearchScope(
  item: Kaomoji,
  scope: { category?: string; tags?: string[] },
): boolean {
  if (scope.category && !passesCategoryIntegrity(item, scope.category)) {
    return false;
  }
  if (scope.tags && scope.tags.length > 0) {
    if (!passesTagIntegrity(item, scope.tags)) return false;
    if (angryFamilyTags(scope.tags) && primaryIs(item, "happy")) return false;
  }
  return true;
}

/** Hard exclusions for tag-based browse pages. */
export function passesTagIntegrity(item: Kaomoji, tags: string[]): boolean {
  const normalized = tags.map(normTag);
  if (normalized.length === 1 && normalized[0] === "bear") {
    return passesBearTagPage(item);
  }
  if (normalized.some((t) => t === "sleepy" || t === "tired")) {
    return passesSleepyTagPage(item);
  }
  if (
    normalized.some((t) => t === "tableflip" || t === "table flip") &&
    normalized.every((t) => t === "tableflip" || t === "table flip")
  ) {
    return passesTableFlipTagPage(item);
  }
  if (normalized.some((t) => t === "dog" || t === "puppy")) {
    return passesDogTagPage(item);
  }
  if (
    normalized.some(
      (t) => t === "heart" || t === "love" || t === "kiss" || t === "hug",
    )
  ) {
    return passesHeartTagPage(item);
  }
  if (angryFamilyTags(tags)) {
    return passesAngryFamilyTagPage(item, tags);
  }
  return true;
}
