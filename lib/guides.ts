/**
 * Long-form guides for informational queries the browse pages do not own
 * ("how to type kaomoji on iPhone", "kaomoji history", "how to read kaomoji").
 * Rule: one guide per question; never target a head term a category page owns.
 * Paragraph text supports [label](/path/) links only.
 */

export type GuideFace = { face: string; name: string; note: string };

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "faces"; items: GuideFace[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "tip"; text: string };

export type GuideSection = { id: string; heading: string; blocks: GuideBlock[] };

export type Guide = {
  slug: string;
  /** Visible H1 and Article headline. */
  title: string;
  /** Nav/footer anchor text. */
  shortTitle: string;
  /** Document title before `| Paste Kaomoji`. */
  titleSegment: string;
  description: string;
  /** Card blurb and lead paragraph. */
  intro: string;
  /** Decorative face for the index card. */
  face: string;
  published: string;
  updated: string;
  /** Category pages this guide sends readers to (they link back). */
  related: string[];
  sections: GuideSection[];
  /** HowTo JSON-LD for task guides. */
  howTo?: { name: string; steps: string[] };
  faqs?: { question: string; answer: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-type-kaomoji",
    title: "How to Type Kaomoji on iPhone, Android, Windows & Mac",
    shortTitle: "How to type kaomoji",
    titleSegment: "How to Type Kaomoji on iPhone, Android, Windows & Mac",
    description:
      "Step-by-step ways to type kaomoji on every device: the hidden iPhone ^_^ keyboard, Gboard emoticons, the Windows kaomoji panel, and Mac text replacements.",
    intro:
      "Every phone and computer can type kaomoji without an app — the tools are just hidden. This guide walks through the built-in kaomoji lists on each device, how to turn your favorite face into a two-letter shortcut, and how to fix faces that break when you paste them.",
    face: "(＾▽＾)⌨",
    published: "2026-10-20",
    updated: "2026-10-20",
    related: ["/kaomoji-copy-paste", "/shrug-kaomoji", "/lenny-face", "/japanese-emoticons"],
    sections: [
      {
        id: "fastest-way",
        heading: "The fastest way: copy and paste",
        blocks: [
          {
            type: "p",
            text: "Kaomoji are ordinary Unicode text, so the quickest method on any device is to copy a face and paste it. Open a page such as [kaomoji copy and paste](/kaomoji-copy-paste/), tap Copy, then long-press (phone) or press Ctrl + V / Command + V (computer) wherever you are typing. No app, keyboard, or font is required.",
          },
          {
            type: "p",
            text: "Built-in device lists are handy when you are offline or want a face without leaving the chat. They only hold a few dozen faces, though, so most people use both: the keyboard for everyday faces and a library for anything specific, like a [table flip](/table-flip-kaomoji/) or a [bear](/bear-kaomoji/).",
          },
        ],
      },
      {
        id: "iphone",
        heading: "iPhone and iPad: the hidden ^_^ keyboard",
        blocks: [
          {
            type: "p",
            text: "iOS ships with a kaomoji list inside the Japanese Kana keyboard. You do not need to read Japanese to use it.",
          },
          {
            type: "steps",
            items: [
              "Open Settings › General › Keyboard › Keyboards.",
              "Tap Add New Keyboard, choose Japanese, then select Kana and tap Done.",
              "In any app, tap the globe key until the Kana keyboard appears.",
              "Tap the ^_^ key. A row of kaomoji appears above the keys; tap the arrow on the right to expand the full list.",
              "Tap a face to insert it, then switch back to your normal keyboard with the globe key.",
            ],
          },
          {
            type: "tip",
            text: "Make a shortcut for faces you use daily: Settings › General › Keyboard › Text Replacement › +. Paste the face as the Phrase and type a short word as the Shortcut, such as 'shrug'. Typing that word now suggests the full face.",
          },
        ],
      },
      {
        id: "android",
        heading: "Android: Gboard and Samsung Keyboard",
        blocks: [
          {
            type: "p",
            text: "Gboard, the default keyboard on most Android phones, includes an emoticon tab next to emoji, stickers, and GIFs.",
          },
          {
            type: "steps",
            items: [
              "Tap the smiley (emoji) key on Gboard. On some phones, long-press the comma key first.",
              "Along the bottom bar, tap the :-) tab to open emoticons and kaomoji.",
              "Scroll the list and tap a face to insert it.",
            ],
          },
          {
            type: "p",
            text: "Samsung Keyboard has a similar emoticon section inside its emoji panel. On either keyboard, you can save a face as a shortcut: in Gboard go to Settings › Dictionary › Personal dictionary, add the face as the word, and give it a shortcut. The Gboard clipboard can also pin copied faces so they stay one tap away.",
          },
        ],
      },
      {
        id: "windows",
        heading: "Windows 10 and 11: the kaomoji panel",
        blocks: [
          {
            type: "p",
            text: "Windows has a kaomoji tab built into its emoji panel, and it works in almost every app, including browsers, Word, Discord, and Notepad.",
          },
          {
            type: "steps",
            items: [
              "Click where you want to type.",
              "Press Windows key + . (period) or Windows key + ; (semicolon).",
              "Select the ;-) kaomoji tab at the top of the panel.",
              "Pick a group (such as Happy or Greeting) and click a face to insert it.",
            ],
          },
          {
            type: "p",
            text: "The panel remembers recently used faces, so your favorites float to the top. For faces it does not include, paste from the library or turn on clipboard history with Windows key + V to keep several faces ready.",
          },
        ],
      },
      {
        id: "mac",
        heading: "Mac: text replacements and Japanese input",
        blocks: [
          {
            type: "p",
            text: "macOS has no kaomoji tab in its Character Viewer (Control + Command + Space), but text replacements do the job well and sync to your iPhone through iCloud.",
          },
          {
            type: "steps",
            items: [
              "Open System Settings › Keyboard and click Text Replacements.",
              "Click +, type a shortcut such as 'tableflip', and paste (╯°□°)╯︵ ┻━┻ as the replacement.",
              "Type the shortcut in any app and press Space to expand it.",
            ],
          },
          {
            type: "p",
            text: "If you add the Japanese – Romaji input source, typing 'kao' and pressing Space usually offers a few faces among the conversion candidates — a quick option for simple smiles.",
          },
        ],
      },
      {
        id: "comparison",
        heading: "Built-in kaomoji by device",
        blocks: [
          {
            type: "table",
            head: ["Device", "Built-in list", "How to open", "Custom shortcuts"],
            rows: [
              ["iPhone / iPad", "Yes (Kana keyboard)", "Globe key › ^_^", "Text Replacement"],
              ["Android (Gboard)", "Yes", "Emoji key › :-) tab", "Personal dictionary"],
              ["Windows 10 / 11", "Yes", "Win + . › ;-) tab", "Clipboard history (Win + V)"],
              ["Mac", "No dedicated tab", "Japanese input: type 'kao'", "Text Replacements"],
            ],
          },
        ],
      },
      {
        id: "faces-to-save",
        heading: "Good faces to save as shortcuts",
        blocks: [
          {
            type: "p",
            text: "These are long or awkward to type by hand, so they make the best shortcuts. Tap Copy, then paste each one into your text replacement settings.",
          },
          {
            type: "faces",
            items: [
              { face: "¯\\_(ツ)_/¯", name: "Shrug", note: "Shortcut idea: shrug" },
              { face: "(╯°□°)╯︵ ┻━┻", name: "Table flip", note: "Shortcut idea: flip" },
              { face: "( ͡° ͜ʖ ͡°)", name: "Lenny face", note: "Shortcut idea: lenny" },
              { face: "ʕ•ᴥ•ʔ", name: "Bear", note: "Shortcut idea: bear" },
              { face: "(っ˘ω˘ς )", name: "Hug", note: "Shortcut idea: hugs" },
              { face: "(◕‿◕✿)", name: "Cute smile", note: "Shortcut idea: cute" },
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        heading: "Fixing faces that break when you paste",
        blocks: [
          {
            type: "list",
            items: [
              "Missing arm on the shrug in Discord or Reddit: both apps treat \\ as a formatting character. Type ¯\\\\\\_(ツ)_/¯ (three backslashes) or wrap the face in backticks. The [shrug page](/shrug-kaomoji/) has ready-made safe versions.",
              "Boxes or question marks: the app's font lacks a character. Pick a simpler face, or one built from common symbols like ( ^ω^ ).",
              "Lenny face looks lopsided: its mouth uses combining marks that some fonts place differently. Try another variant on the [Lenny face page](/lenny-face/).",
              "Phone turns :) into an emoji: that is auto-replacement for Western emoticons. Kaomoji are not affected, or you can turn off emoji replacement in keyboard settings.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "How to type kaomoji on iPhone",
      steps: [
        "Open Settings › General › Keyboard › Keyboards.",
        "Tap Add New Keyboard, choose Japanese, then Kana.",
        "In any app, switch to the Kana keyboard with the globe key.",
        "Tap the ^_^ key and choose a face from the list.",
      ],
    },
    faqs: [
      {
        question: "Do I need an app to type kaomoji?",
        answer:
          "No. iPhone, Android, and Windows all include a kaomoji list in their standard keyboards, and every device can paste kaomoji copied from a website.",
      },
      {
        question: "What is the keyboard shortcut for kaomoji on Windows?",
        answer:
          "Press Windows key + . (period) or Windows key + ; to open the emoji panel, then choose the ;-) tab for kaomoji.",
      },
      {
        question: "Will kaomoji I type on my phone show up correctly for my friends?",
        answer:
          "Almost always. Kaomoji are Unicode text, so they display on any modern device. Rare symbols can look slightly different depending on the font.",
      },
    ],
  },
  {
    slug: "what-is-kaomoji",
    title: "What Is Kaomoji? Meaning, History & How It Differs From Emoji",
    shortTitle: "What is kaomoji?",
    titleSegment: "What Is Kaomoji? Meaning, History & Kaomoji vs Emoji",
    description:
      "Kaomoji (顔文字) are Japanese text faces like (◕‿◕). Learn what the word means, where kaomoji came from, and how they differ from emoticons and emoji.",
    intro:
      "Kaomoji are faces built from text characters — (◕‿◕), (╥﹏╥), ¯\\_(ツ)_/¯ — that you read upright instead of tilting your head. Here is what the word means, how they grew out of 1980s Japanese computer networks, and why people still use them in a world full of emoji.",
    face: "(・ω・)?",
    published: "2026-10-20",
    updated: "2026-10-20",
    related: ["/japanese-emoticons", "/emoticons", "/text-faces", "/cute-kaomoji"],
    sections: [
      {
        id: "meaning",
        heading: "What the word kaomoji means",
        blocks: [
          {
            type: "p",
            text: "Kaomoji (顔文字) is a Japanese compound: kao (顔) means face and moji (文字) means character or letter. So a kaomoji is literally a \"face made of characters.\" In English they are also called [Japanese emoticons](/japanese-emoticons/), text faces, or verticons.",
          },
          {
            type: "p",
            text: "The plural is usually also kaomoji, the way Japanese nouns work, though you will see \"kaomojis\" in casual English. Both are understood.",
          },
        ],
      },
      {
        id: "upright",
        heading: "The big idea: faces you read upright",
        blocks: [
          {
            type: "p",
            text: "Western [emoticons](/emoticons/) like :-) and ;) are sideways: you tilt your head left to see the face. Kaomoji are horizontal and read straight on, with eyes, mouth, and face outline in their natural places. That small change has a big effect — because the face is upright, the eyes can carry the emotion.",
          },
          {
            type: "table",
            head: ["Feeling", "Western emoticon", "Kaomoji"],
            rows: [
              ["Happy", ":-)", "(^_^)"],
              ["Sad", ":-(", "(╥﹏╥)"],
              ["Surprised", ":-O", "(ﾟoﾟ;)"],
              ["Wink", ";-)", "(^_~)"],
              ["Embarrassed", ":-$", "(〃▽〃)"],
            ],
          },
          {
            type: "p",
            text: "Notice that Western emoticons mostly change the mouth, while kaomoji change the eyes. This matches a well-known cultural difference in how expressions are read: in Japan, people tend to look to the eyes for emotion, while many Western readers focus on the mouth.",
          },
        ],
      },
      {
        id: "history",
        heading: "A short history of kaomoji",
        blocks: [
          {
            type: "list",
            items: [
              "1982: Computer scientist Scott Fahlman proposes :-) and :-( on a Carnegie Mellon message board to mark jokes — the sideways emoticon is born.",
              "1986: The upright (^_^) face appears on ASCII NET, an early Japanese online network. It is widely credited as one of the first kaomoji.",
              "Late 1980s–1990s: Japanese PC networks and mobile phones support thousands of full-width characters, including katakana and symbols, so faces become far more detailed than ASCII allows.",
              "1999: Shigetaka Kurita designs the first widely used emoji set for NTT Docomo phones. Emoji are pictures; kaomoji stay text.",
              "2000s: Forums like 2channel spread complex faces such as (╯°□°)╯︵ ┻━┻ and ヽ(´ー｀)ノ, and anime fandoms carry them worldwide.",
              "2010s–today: Unicode support on every phone lets kaomoji travel anywhere text does — Discord, TikTok bios, game chats, and code comments.",
            ],
          },
        ],
      },
      {
        id: "vs-emoji",
        heading: "Kaomoji vs emoticons vs emoji",
        blocks: [
          {
            type: "table",
            head: ["", "Emoticon", "Kaomoji", "Emoji"],
            rows: [
              ["Example", ":-)", "(◕‿◕)", "😊"],
              ["Made of", "Basic keyboard symbols", "Unicode text characters", "Pictures in a Unicode font"],
              ["Reading direction", "Sideways", "Upright", "Upright"],
              ["Looks the same everywhere", "Yes", "Mostly (font-dependent)", "No — each platform draws its own"],
              ["Range of expression", "Small", "Huge — combine any parts", "Fixed list, updated yearly"],
            ],
          },
          {
            type: "p",
            text: "The key advantage of kaomoji is that they are open-ended. Emoji come from a fixed list approved by the Unicode Consortium, but anyone can invent a new kaomoji by swapping eyes, mouths, or arms. That is why libraries hold thousands of them — see the [text faces](/text-faces/) collection — and why you can build your own with the [kaomoji generator](/kaomoji-generator/).",
          },
        ],
      },
      {
        id: "classics",
        heading: "Classic kaomoji to know",
        blocks: [
          {
            type: "faces",
            items: [
              { face: "(^_^)", name: "Classic smile", note: "One of the earliest kaomoji; calm and friendly." },
              { face: "(◕‿◕)", name: "Bright smile", note: "Big round eyes make it read as cheerful and cute." },
              { face: "(╥﹏╥)", name: "Crying", note: "Streams of tears run down from the eyes." },
              { face: "(╯°□°)╯︵ ┻━┻", name: "Table flip", note: "Frustration so strong the table goes flying." },
              { face: "¯\\_(ツ)_/¯", name: "Shrug", note: "\"Who knows?\" The face is the katakana ツ (tsu)." },
              { face: "m(_ _)m", name: "Deep bow", note: "Hands on the floor, head down: a sincere apology or thanks." },
            ],
          },
        ],
      },
      {
        id: "why-use",
        heading: "Why people still use kaomoji",
        blocks: [
          {
            type: "list",
            items: [
              "They carry more nuance: (｡•́︿•̀｡) is a softer kind of sad than 😢.",
              "They look the same across devices, while one emoji can look different on iPhone, Android, and Windows.",
              "They work in places emoji do not, like plain-text usernames, terminals, and some game chats.",
              "They have personality: bears, cats, dancing arms, and sparkles are easy to combine.",
            ],
          },
          {
            type: "p",
            text: "Want to start using them? Browse by mood — [cute kaomoji](/cute-kaomoji/) is the most popular place to begin — or read our guide on [how to type kaomoji](/guides/how-to-type-kaomoji/) on your phone or computer.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do you pronounce kaomoji?",
        answer: "Kah-oh-moh-jee, with four even syllables: ka-o-mo-ji.",
      },
      {
        question: "Are kaomoji only used in Japan?",
        answer:
          "No. They started in Japan but are now used worldwide, especially on Discord, in gaming and anime communities, and in social media bios.",
      },
      {
        question: "Is ¯\\_(ツ)_/¯ a kaomoji?",
        answer:
          "Yes. The shrug is one of the best-known kaomoji. Its face uses the Japanese katakana character ツ (tsu).",
      },
    ],
  },
  {
    slug: "how-to-read-kaomoji",
    title: "How to Read Kaomoji: Eyes, Mouths, Arms & Extras Explained",
    shortTitle: "How to read kaomoji",
    titleSegment: "How to Read Kaomoji — Eyes, Mouths, Arms & Symbols Explained",
    description:
      "Learn to read any kaomoji by its parts: what different eyes, mouths, arms, cheeks, and extra symbols mean, with copyable examples for each.",
    intro:
      "Every kaomoji is built from the same few parts: a face outline, eyes, a mouth, and optional arms, cheeks, and effects. Once you know what each part signals, you can read faces you have never seen and pick the right one for any message.",
    face: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    published: "2026-10-20",
    updated: "2026-10-20",
    related: ["/text-faces", "/japanese-emoticons", "/shy-kaomoji", "/crying-kaomoji"],
    sections: [
      {
        id: "anatomy",
        heading: "The anatomy of a kaomoji",
        blocks: [
          {
            type: "p",
            text: "Take (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧. Reading left to right: ﾉ is a raised arm, ( is the left side of the face, ◕ is an eye, ヮ is an open, happy mouth, the second ◕ is the other eye, ) closes the face, ﾉ is the other arm, and *:･ﾟ✧ is a burst of sparkles. Put together: someone throwing their arms up and scattering glitter in delight.",
          },
          {
            type: "table",
            head: ["Part", "Job", "Examples"],
            rows: [
              ["Outline", "Frames the face; shape hints at the mood", "( )  （ ）  ʕ ʔ  ｛ ｝"],
              ["Eyes", "Carry most of the emotion", "^ ^  ◕ ◕  T T  ಠ ಠ"],
              ["Mouth", "Adds tone or intensity", "‿  ▽  ω  □  ﹏"],
              ["Arms", "Show action or gesture", "ヽ ノ  ╯ ╯  ┐ ┌  m m"],
              ["Extras", "Blush, sweat, tears, sparkles, objects", "〃  ;  ✧  ♡  ┻━┻"],
            ],
          },
        ],
      },
      {
        id: "eyes",
        heading: "Eyes: where the emotion lives",
        blocks: [
          {
            type: "p",
            text: "In kaomoji, the eyes do most of the work. Changing only the eyes can flip a face from joy to tears.",
          },
          {
            type: "faces",
            items: [
              { face: "(^_^)", name: "^ ^ eyes", note: "Closed, smiling eyes: calm happiness." },
              { face: "(◕‿◕)", name: "◕ ◕ eyes", note: "Big, shining eyes: bright, cute, eager." },
              { face: "(T_T)", name: "T T eyes", note: "Tears streaming down: crying." },
              { face: "(ಠ_ಠ)", name: "ಠ ಠ eyes", note: "A hard stare: disapproval." },
              { face: "(>_<)", name: "> < eyes", note: "Squeezed shut: frustration or pain." },
              { face: "(¬_¬)", name: "¬ ¬ eyes", note: "Side-eye: suspicion or annoyance." },
            ],
          },
        ],
      },
      {
        id: "mouths",
        heading: "Mouths: tone and intensity",
        blocks: [
          {
            type: "list",
            items: [
              "‿ — a gentle curve: soft, sweet smile.",
              "▽ — open and wide: laughing or excited.",
              "ω — a cat-like mouth: playful, smug, or cute. It is also the 'w' in [UwU](/uwu-kaomoji/).",
              "□ — a square, open mouth: shouting or shock.",
              "﹏ — wavy: wobbly, upset, about to cry.",
              "ᴥ — a little snout: animals, especially [bears](/bear-kaomoji/).",
            ],
          },
        ],
      },
      {
        id: "arms",
        heading: "Arms and hands: what the face is doing",
        blocks: [
          {
            type: "faces",
            items: [
              { face: "ヽ(°〇°)ﾉ", name: "Arms raised", note: "ヽ and ﾉ up high: excitement or alarm." },
              { face: "(╯°□°)╯", name: "Arms thrown", note: "╯ arms flinging something: anger." },
              { face: "┐(￣ヘ￣)┌", name: "Palms up", note: "┐ ┌ shrugging arms: 'whatever'." },
              { face: "(づ｡◕‿‿◕｡)づ", name: "Reaching out", note: "づ hands reach forward: a hug." },
              { face: "m(_ _)m", name: "Hands down", note: "m m hands on the floor: a bow." },
              { face: "(ง •̀_•́)ง", name: "Fists up", note: "ง fists ready: determination or a fight." },
            ],
          },
        ],
      },
      {
        id: "extras",
        heading: "Cheeks, sweat, and effects",
        blocks: [
          {
            type: "table",
            head: ["Symbol", "Meaning", "Example"],
            rows: [
              ["〃 or ⁄ ⁄", "Blushing cheeks", "(〃▽〃)"],
              [";", "A sweat drop: nervous or awkward", "(^_^;)"],
              ["✧ ･ﾟ", "Sparkles: delight or magic", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"],
              ["♡", "Love or affection", "(♡˙︶˙♡)"],
              ["💢 or #", "An anger vein", "(＃`Д´)"],
              ["zzZ", "Sleeping", "(－_－) zzZ"],
            ],
          },
          {
            type: "p",
            text: "Blushing cheeks are the signature of [shy kaomoji](/shy-kaomoji/), while tears and wavy mouths define [crying kaomoji](/crying-kaomoji/). Spotting one of these extras is often the fastest way to read a face.",
          },
        ],
      },
      {
        id: "practice",
        heading: "Practice: read these faces",
        blocks: [
          {
            type: "p",
            text: "Try reading each face before you look at the note. You now know every part they use.",
          },
          {
            type: "faces",
            items: [
              { face: "(｡•́︿•̀｡)", name: "Pleading", note: "Big watery eyes and a frown: 'please' or gentle sadness." },
              { face: "(￣ー￣)", name: "Smug", note: "Flat, half-closed eyes and a thin smile: 'I knew it.'" },
              { face: "(⊙_⊙)", name: "Stunned", note: "Wide circle eyes, flat mouth: shocked silence." },
              { face: "ヾ(＾∇＾)", name: "Waving", note: "ヾ is a hand waving: 'hi!' or 'bye!'" },
            ],
          },
          {
            type: "p",
            text: "Ready to make your own? Combine any eyes, mouth, and arms in the [kaomoji generator](/kaomoji-generator/), or browse thousands of finished [text faces](/text-faces/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why are the eyes so important in kaomoji?",
        answer:
          "Because kaomoji are upright, the eyes sit where you naturally look first. Most emotions are shown by changing the eyes, while the mouth adds tone.",
      },
      {
        question: "What does ω mean in a kaomoji?",
        answer:
          "ω is the Greek letter omega used as a cat-like mouth. It makes a face read as cute, playful, or a little smug, as in (・ω・) or UwU.",
      },
      {
        question: "What does the semicolon mean in (^_^;)?",
        answer:
          "The semicolon is a sweat drop on the side of the head, so the face is smiling nervously or awkwardly.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function guidePath(guide: Guide): string {
  return `/guides/${guide.slug}`;
}

/** Guides that point at a category page (shown on that page as related reading). */
export function guidesForPage(path: string): Guide[] {
  return guides.filter((guide) => guide.related.includes(path));
}
