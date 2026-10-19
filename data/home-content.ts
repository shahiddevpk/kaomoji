/** Hand-written home page education blocks (meanings + device guide). */

export type FaceMeaning = {
  id: string;
  face: string;
  name: string;
  meaning: string;
  anatomy: string;
};

export const FACE_MEANINGS: FaceMeaning[] = [
  {
    id: "meaning-happy",
    face: "(＾▽＾)",
    name: "Happy",
    meaning: "Pure joy or a big friendly grin.",
    anatomy: "＾ ＾ are smiling, closed eyes; ▽ is a wide-open laughing mouth.",
  },
  {
    id: "meaning-cute",
    face: "(◕‿◕✿)",
    name: "Cute",
    meaning: "Sweet, soft, and kawaii — a gentle smile.",
    anatomy: "◕ are big shiny eyes, ‿ is a small smile, and ✿ is a flower hair clip.",
  },
  {
    id: "meaning-sad",
    face: "(╥﹏╥)",
    name: "Crying",
    meaning: "Sad, hurt, or trying not to cry.",
    anatomy: "╥ are eyes with tears streaming down; ﹏ is a wobbly mouth.",
  },
  {
    id: "meaning-tableflip",
    face: "(╯°□°)╯︵ ┻━┻",
    name: "Table flip",
    meaning: "Rage, frustration, or 'I give up' — usually as a joke.",
    anatomy: "╯ ╯ are raised arms, °□° is a shocked shouting face, ︵ is motion, ┻━┻ is the flipped table.",
  },
  {
    id: "meaning-shrug",
    face: "¯\\_(ツ)_/¯",
    name: "Shrug",
    meaning: "I don't know, whatever, or oh well.",
    anatomy: "¯ are hands, \\_ and _/ are arms, and ツ (katakana 'tsu') is the smiling face.",
  },
  {
    id: "meaning-lenny",
    face: "( ͡° ͜ʖ ͡°)",
    name: "Lenny face",
    meaning: "A sly, mischievous, or suggestive grin.",
    anatomy: "° are eyes with combining ͡ eyebrows; ͜ʖ is the nose and smirk.",
  },
  {
    id: "meaning-disapproval",
    face: "ಠ_ಠ",
    name: "Look of disapproval",
    meaning: "Judging, unimpressed, or 'really?'.",
    anatomy: "ಠ is a letter from the Kannada script used as a glaring eye; _ is a flat mouth.",
  },
  {
    id: "meaning-hug",
    face: "(づ｡◕‿‿◕｡)づ",
    name: "Hug",
    meaning: "Sending a warm hug or comfort.",
    anatomy: "づ are arms reaching forward, ｡ are blushing cheeks, ◕‿‿◕ is a happy face.",
  },
  {
    id: "meaning-cat",
    face: "(=^･ω･^=)",
    name: "Cat",
    meaning: "A cute cat — playful, curious, or just 'nya'.",
    anatomy: "^ ^ are ears, = = are whiskers, and ω is a little cat mouth.",
  },
  {
    id: "meaning-bear",
    face: "ʕ•ᴥ•ʔ",
    name: "Bear",
    meaning: "A friendly little bear — cozy and cute.",
    anatomy: "ʕ ʔ are round bear ears, • are eyes, and ᴥ is the snout.",
  },
  {
    id: "meaning-flex",
    face: "ᕦ(ò_óˇ)ᕤ",
    name: "Flexing",
    meaning: "Feeling strong, determined, or ready.",
    anatomy: "ᕦ ᕤ are flexed arms; ò_ó is a focused, determined face.",
  },
  {
    id: "meaning-sparkle",
    face: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    name: "Sparkle",
    meaning: "Excitement, magic, or celebrating something.",
    anatomy: "ﾉ is a raised arm throwing *:･ﾟ✧ glitter; ◕ヮ◕ is an excited face.",
  },
];

export type DeviceGuide = { device: string; steps: string };

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    device: "Windows 10 & 11",
    steps:
      "Press Win + . (period) or Win + ; to open the emoji panel, then click the ;-) kaomoji tab. It holds a short built-in list — copy from this site for the full library.",
  },
  {
    device: "Mac",
    steps:
      "Press Control + Command + Space for the character viewer, or save your favorite face in System Settings › Keyboard › Text Replacements so a short word like 'shrug' expands to ¯\\_(ツ)_/¯.",
  },
  {
    device: "iPhone & iPad",
    steps:
      "Copy a face here and long-press to paste. To reuse it, add a Text Replacement in Settings › General › Keyboard. Adding the Japanese Kana keyboard also gives you a ^_^ kaomoji list.",
  },
  {
    device: "Android",
    steps:
      "Copy a face and long-press Paste. In Gboard, open the emoji key and tap the :-) tab for emoticons, or save faces to the clipboard or personal dictionary for one-tap reuse.",
  },
];
