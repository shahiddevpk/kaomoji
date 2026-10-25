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
  | { type: "tip"; text: string }
  /** Ready-to-send messages with a Copy button (blog posts). */
  | { type: "messages"; items: { label: string; text: string }[] };

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
    titleSegment: "How to Type Kaomoji on iPhone, Android & PC",
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
    titleSegment: "What Is Kaomoji? Meaning, History & Emoji",
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
    titleSegment: "How to Read Kaomoji: Eyes, Mouths & Arms",
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
  {
    slug: "how-to-make-kaomoji",
    title: "How to Make Your Own Kaomoji: Build a Face Step by Step",
    shortTitle: "How to make kaomoji",
    titleSegment: "How to Make Your Own Kaomoji, Step by Step",
    description:
      "Build your own kaomoji from scratch: pick a frame, eyes, mouth, cheeks, and arms, then add props. Includes a parts table, worked examples, and common mistakes.",
    intro:
      "Every kaomoji is assembled from a handful of parts: a frame, two eyes, a mouth, and optional cheeks, arms, and props. Once you know the parts, you can make a face for any mood in under a minute. This guide walks through each part, shows which characters work best, and builds five faces from nothing.",
    face: "(๑•̀ㅂ•́)و✧",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/kaomoji-generator", "/cute-kaomoji", "/japanese-emoticons", "/text-faces"],
    sections: [
      {
        id: "anatomy",
        heading: "The five parts of a kaomoji",
        blocks: [
          {
            type: "p",
            text: "Read a kaomoji from the outside in. The frame is the head, the eyes carry most of the emotion, the mouth adjusts it, and arms or props say what the face is doing. You rarely need all five parts: ( ^^ ) is a complete face with just a frame and eyes.",
          },
          {
            type: "table",
            head: ["Part", "Job", "Characters to try"],
            rows: [
              ["Frame", "The outline of the head", "( )  ( )  ꒰ ꒱  ʕ ʔ  ᕦ ᕤ"],
              ["Eyes", "The main emotion", "^ ^  • •  ◕ ◕  ಠ ಠ  ╥ ╥  > <  ° °"],
              ["Mouth", "Softens or sharpens the mood", "_  ▽  ω  ‿  ᴗ  □  ﹏  ε"],
              ["Cheeks", "Blush, warmth, or embarrassment", "*  ✿  ⁄ ⁄  灬  ๑"],
              ["Arms and props", "Action: waving, hugging, flipping", "ノ  ヽ ﾉ  ╯  っ  و  ✧  ♡"],
            ],
          },
          {
            type: "tip",
            text: "Eyes do the heavy lifting. Swap only the eyes in (◕‿◕) and the mood changes completely: (╥‿╥) is a brave smile through tears, (ಠ‿ಠ) is a forced grin, (≧‿≦) is pure delight.",
          },
        ],
      },
      {
        id: "step-by-step",
        heading: "Build a face in five steps",
        blocks: [
          {
            type: "steps",
            items: [
              "Decide the feeling first, in one word: proud, sleepy, sneaky, shy.",
              "Pick the eyes that match it. Closed curves (^ ^) read happy, dots (• •) read calm, wide circles (° °) read surprised, and lines (− −) read tired or unimpressed.",
              "Add a mouth only if it adds something. A small ‿ or ᴗ keeps a face soft; □ opens it into a shout; ω makes it cute or smug.",
              "Wrap it in a frame. Round brackets ( ) are neutral, ꒰ ꒱ feel softer, and ʕ ʔ turn any face into a bear.",
              "Give it something to do. Put arms outside the frame (ノ, っ, ╯) and props past the arms (✧, ♪, ☕). Paste the result into the app you will use it in and check the spacing.",
            ],
          },
        ],
      },
      {
        id: "examples",
        heading: "Five faces built from scratch",
        blocks: [
          {
            type: "p",
            text: "Each face below started from a one-word feeling and was built with the steps above. Copy them as they are, or change one part and see how the mood shifts.",
          },
          {
            type: "faces",
            items: [
              { face: "(๑•̀ㅂ•́)و✧", name: "Determined", note: "Focused eyes •̀ •́, a firm mouth ㅂ, cheeks ๑, a fist و, and a sparkle for confidence." },
              { face: "(－_－) zzZ", name: "Sleepy", note: "Flat line eyes, a plain mouth, and zzZ as the prop. No arms needed." },
              { face: "(¬‿¬ )", name: "Sneaky", note: "Side-eye ¬ ¬ plus a small smile reads as up to something." },
              { face: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", name: "Shy", note: "Slashes ⁄ across the face are blush lines; ω keeps it cute." },
              { face: "ʕ•̀ω•́ʔ✧", name: "Proud bear", note: "A bear frame ʕ ʔ with determined eyes and a sparkle." },
            ],
          },
        ],
      },
      {
        id: "where-to-find-characters",
        heading: "Where to find the characters",
        blocks: [
          {
            type: "p",
            text: "Most kaomoji parts come from Japanese kana, the Greek and Cyrillic alphabets, box-drawing symbols, and Korean hangul, which is why few of them are on a standard keyboard. The quickest way to experiment is the [kaomoji generator](/kaomoji-generator/): pick eyes, a mouth, and arms from lists and copy the result. To borrow a single part, copy a face that already has it from a page like [cute kaomoji](/cute-kaomoji/) and delete everything else.",
          },
          {
            type: "p",
            text: "On a computer you can also search characters by name. On Windows, open the emoji panel with Windows key + . and use the Symbols tab; on Mac, press Control + Command + Space and type a name such as 'omega' or 'degree'.",
          },
        ],
      },
      {
        id: "mistakes",
        heading: "Common mistakes and how to fix them",
        blocks: [
          {
            type: "list",
            items: [
              "The face is lopsided: the two eyes come from different fonts or widths. Use a matched pair, such as ◕ ◕ or • •, rather than mixing a full-width and a half-width character.",
              "Too many parts: a face with cheeks, sparkles, arms, and three props is hard to read in a chat bubble. If a part does not change the meaning, remove it.",
              "Boxes appear on a friend's phone: rare characters are missing from some fonts. Test on another device, or swap in a common symbol.",
              "The face breaks in Discord or Reddit: underscores and asterisks are formatting characters there. See [using kaomoji in Discord](/guides/kaomoji-in-discord/) for the fix.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "How to make your own kaomoji",
      steps: [
        "Choose the feeling you want to show in one word.",
        "Pick eyes that match the feeling, such as ^ ^ for happy or ╥ ╥ for crying.",
        "Add a mouth if it helps, such as ‿ for a soft smile or □ for a shout.",
        "Wrap the eyes and mouth in a frame such as ( ) or ʕ ʔ.",
        "Add arms or props outside the frame, then test the face where you will use it.",
      ],
    },
    faqs: [
      {
        question: "Can I use a kaomoji I made myself anywhere?",
        answer:
          "Yes. Kaomoji are ordinary Unicode text, so a face you build works in any app that accepts text, just like a face you copy.",
      },
      {
        question: "What is the easiest kaomoji to make?",
        answer:
          "Start with ( ^^ ) or (•‿•): a frame and eyes, plus an optional mouth. Change the eyes to change the mood.",
      },
      {
        question: "Is there a tool that builds kaomoji for me?",
        answer:
          "Yes. The kaomoji generator on this site lets you choose eyes, a mouth, and arms from lists, previews the face live, and copies it in one tap.",
      },
    ],
  },
  {
    slug: "kaomoji-in-discord",
    title: "How to Use Kaomoji in Discord Without Breaking Them",
    shortTitle: "Kaomoji in Discord",
    titleSegment: "Kaomoji in Discord: Fix Broken Faces & Shrugs",
    description:
      "Why kaomoji break in Discord (missing arms, italics, auto-emoji) and how to fix them: escaping, inline code, display names, status, and server-friendly faces.",
    intro:
      "Discord reads some of the characters inside kaomoji as formatting. Underscores and asterisks turn into italics, a backslash vanishes, and :) can become an emoji. This guide explains exactly which faces break, why, and the two-second fixes that keep them intact in messages, nicknames, and your profile.",
    face: "¯\\_(ツ)_/¯",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/shrug-kaomoji", "/uwu-kaomoji", "/lenny-face", "/table-flip-kaomoji"],
    sections: [
      {
        id: "why-faces-break",
        heading: "Why kaomoji break in Discord",
        blocks: [
          {
            type: "p",
            text: "Discord uses Markdown, a set of shortcuts where certain characters change how text looks. Kaomoji use many of the same characters as decoration, so Discord sometimes formats the face instead of showing it. These are the characters to watch:",
          },
          {
            type: "table",
            head: ["Character", "What Discord does with it", "Faces it affects"],
            rows: [
              ["\\ (backslash)", "Hides the next character's formatting and disappears itself", "¯\\_(ツ)_/¯ loses its left arm"],
              ["_ (underscore)", "Two of them make the text between them italic", "Two faces like (^_^) in one message"],
              ["* (asterisk)", "Two of them make italic or bold text", "(*^▽^*) loses its cheeks"],
              ["~~", "Strikethrough", "Faces with wavy arms like ~(˘▾˘~)"],
              ["||", "Spoiler bar", "Faces drawn with || sides"],
              ["# or - at the start of a line", "Heading or list item when followed by a space", "Faces that begin with these symbols"],
            ],
          },
        ],
      },
      {
        id: "fix-shrug",
        heading: "Fix the shrug: the missing arm",
        blocks: [
          {
            type: "p",
            text: "When you paste ¯\\_(ツ)_/¯, Discord treats the backslash as an escape for the underscore, so the backslash disappears and the shrug loses its left arm. Add two more backslashes so one survives:",
          },
          {
            type: "faces",
            items: [
              { face: "¯\\\\\\_(ツ)_/¯", name: "Discord-safe shrug", note: "Paste this into Discord; it displays as the normal shrug with both arms." },
              { face: "¯\\_(ツ)_/¯", name: "Normal shrug", note: "Use this everywhere else: WhatsApp, iMessage, Instagram, and email." },
            ],
          },
          {
            type: "tip",
            text: "Discord also has a built-in /shrug command. Type /shrug, press Enter, and it posts the face with the arm intact. More variants are on the [shrug kaomoji](/shrug-kaomoji/) page.",
          },
        ],
      },
      {
        id: "fix-italics",
        heading: "Fix italics from underscores and asterisks",
        blocks: [
          {
            type: "p",
            text: "One face on its own is usually fine. Trouble starts when a message has two underscores or two asterisks, because Discord pairs them up. (*^▽^*) becomes (^▽^) in italics, and 'hi (^_^) bye (^_^)' italicizes everything between the two underscores. There are two fixes:",
          },
          {
            type: "steps",
            items: [
              "Escape the symbol: put a backslash before each * or _ in the face, as in (\\*^▽^\\*). The backslash is hidden and the asterisks show.",
              "Wrap the face in backticks: `(*^▽^*)` shows the face exactly as typed, in a code-style box with a monospace font. This is the most reliable fix for complex faces such as table flips.",
            ],
          },
        ],
      },
      {
        id: "auto-emoji",
        heading: "Stop :) turning into an emoji",
        blocks: [
          {
            type: "p",
            text: "Discord can convert Western emoticons such as :) and :( into emoji as you type. Kaomoji are not affected, but faces that contain those pairs can be. To keep text emoticons as text, open User Settings › Chat and turn off the option that converts emoticons in your messages to emoji.",
          },
        ],
      },
      {
        id: "names-and-status",
        heading: "Kaomoji in names, status, and About Me",
        blocks: [
          {
            type: "list",
            items: [
              "Username: Discord usernames only allow lowercase letters, numbers, periods, and underscores, so kaomoji cannot go there.",
              "Display name and server nickname: these accept Unicode, so a short face works. Keep it brief, because display names have a small character limit and long faces push your name off screen on mobile.",
              "Custom status and About Me: both accept kaomoji. Formatting rules apply to About Me, so use the same escaping tricks.",
              "Server and channel names: channel names are converted to lowercase with dashes, which mangles most faces. Put kaomoji in the channel topic instead.",
            ],
          },
          {
            type: "p",
            text: "Short faces work best in names: (•‿•), ʕ•ᴥ•ʔ, and UwU from the [uwu kaomoji](/uwu-kaomoji/) page are all compact and use widely supported characters.",
          },
        ],
      },
      {
        id: "reddit-and-others",
        heading: "The same fixes work on Reddit and Markdown apps",
        blocks: [
          {
            type: "p",
            text: "Reddit, GitHub, Slack, and many note apps use the same Markdown rules, so a shrug or (*^▽^*) breaks there for the same reason. Escaping with a backslash or wrapping the face in backticks fixes it in all of them. Apps without Markdown, such as WhatsApp, iMessage, and Instagram, show faces exactly as pasted.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my shrug lose an arm in Discord?",
        answer:
          "Discord treats the backslash in ¯\\_(ツ)_/¯ as a formatting escape and hides it. Type ¯\\\\\\_(ツ)_/¯ instead, or use the /shrug command.",
      },
      {
        question: "How do I stop kaomoji turning italic in Discord?",
        answer:
          "Put a backslash before each * or _ in the face, or wrap the whole face in backticks so Discord shows it as plain code text.",
      },
      {
        question: "Can I put a kaomoji in my Discord username?",
        answer:
          "No. Usernames only allow lowercase letters, numbers, periods, and underscores. Your display name, server nickname, status, and About Me can include kaomoji.",
      },
    ],
  },
  {
    slug: "kaomoji-etiquette",
    title: "Kaomoji Etiquette: When to Use Text Faces (and When Not To)",
    shortTitle: "Kaomoji etiquette",
    titleSegment: "Kaomoji Etiquette: When to Use Text Faces",
    description:
      "When kaomoji help and when they hurt: work chats, tone, faces that read as sarcastic, accessibility for screen-reader users, and how many faces is too many.",
    intro:
      "A well-placed kaomoji softens a message, shows warmth, and saves a paragraph of explanation. The wrong one can read as sarcastic, childish, or confusing. This guide covers where kaomoji fit, which faces carry hidden meanings, and how to use them so everyone, including people using screen readers, gets your message.",
    face: "(｡•̀ᴗ-)✧",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/happy-kaomoji", "/thank-you-kaomoji", "/sorry-kaomoji", "/bowing-kaomoji"],
    sections: [
      {
        id: "what-they-do",
        heading: "What a kaomoji adds to a message",
        blocks: [
          {
            type: "p",
            text: "Text loses tone of voice. 'Can you check this?' can read as friendly or impatient depending on the reader's mood. A small face at the end tells them how you meant it: 'Can you check this? (•‿•)' is clearly relaxed. That is the main job of a kaomoji: to carry the tone that plain text drops.",
          },
          {
            type: "p",
            text: "Kaomoji also suit moments that need more nuance than a single emoji. A [bowing face](/bowing-kaomoji/) like m(_ _)m says a sincere thank-you or apology in a way 🙏 does not, and a nervous (^_^;) admits a small mistake with a smile.",
          },
        ],
      },
      {
        id: "context",
        heading: "Where kaomoji fit, and where they do not",
        blocks: [
          {
            type: "table",
            head: ["Setting", "Good fit?", "Notes"],
            rows: [
              ["Friends and group chats", "Yes", "Anything goes. Match the energy of the chat."],
              ["Partner or crush", "Yes", "Soft faces, hugs, and hearts land well; save dramatic ones for jokes."],
              ["Team chat at work", "Usually", "Small, friendly faces such as (•‿•) or m(_ _)m. Skip flips and Lenny faces."],
              ["Email to a client or manager", "Rarely", "Only if they use them first. Words carry tone better here."],
              ["Bad news or complaints", "No", "A cheerful face can read as dismissive. Say it plainly."],
              ["Legal, medical, or financial messages", "No", "Clarity matters more than warmth."],
            ],
          },
          {
            type: "tip",
            text: "Mirror the other person. If a colleague signs off with a face, a face back is friendly. If they write in full formal sentences, keep yours formal too.",
          },
        ],
      },
      {
        id: "hidden-meanings",
        heading: "Faces that can be misread",
        blocks: [
          {
            type: "p",
            text: "Some popular faces carry a second meaning that the sender may not intend. Before you send one of these to someone new, think about how it could land:",
          },
          {
            type: "faces",
            items: [
              { face: "( ͡° ͜ʖ ͡°)", name: "Lenny face", note: "Often read as suggestive or creepy. Fine among friends who use it; avoid at work." },
              { face: "(╯°□°)╯︵ ┻━┻", name: "Table flip", note: "Playful frustration to some, real anger to others. Avoid when someone is already upset." },
              { face: "ಠ_ಠ", name: "Look of disapproval", note: "Reads as judging the reader. Use it about a situation, not a person." },
              { face: "(￣ー￣)", name: "Smug", note: "Can feel like gloating after a disagreement." },
              { face: "¯\\_(ツ)_/¯", name: "Shrug", note: "Friendly 'who knows' in casual chat; can look dismissive in reply to a real question." },
            ],
          },
        ],
      },
      {
        id: "accessibility",
        heading: "Kaomoji and screen readers",
        blocks: [
          {
            type: "p",
            text: "People who use screen readers hear kaomoji read aloud symbol by symbol. A table flip can come out as a long string of 'left parenthesis, box drawings, degree sign' and so on, which takes time and hides the meaning. A few habits keep messages accessible:",
          },
          {
            type: "list",
            items: [
              "Put the face at the end of the sentence, never in place of words, so the message makes sense without it.",
              "Use one face per message rather than several in a row.",
              "Prefer short faces for important messages; (•‿•) is quicker to hear than a long, decorated one.",
              "In social posts, consider adding the meaning in words, such as 'happy dance (ﾉ◕ヮ◕)ﾉ'.",
            ],
          },
        ],
      },
      {
        id: "cultural",
        heading: "A little cultural background",
        blocks: [
          {
            type: "p",
            text: "Kaomoji come from Japanese internet culture, where they are used widely by adults, including in casual work chat. In English-speaking workplaces they are newer and can read as playful or young, so they suit internal chat better than formal writing. If you write to Japanese contacts, faces like m(_ _)m (a bow) and (^_^;) (a polite, slightly embarrassed smile) are familiar and courteous. The guide to [what kaomoji are](/guides/what-is-kaomoji/) covers the history in more depth.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is it unprofessional to use kaomoji at work?",
        answer:
          "In team chat, a small friendly face is usually fine and can make requests sound warmer. In formal emails, to clients, or with bad news, words are the safer choice.",
      },
      {
        question: "Which kaomoji are safe for any audience?",
        answer:
          "Simple smiles such as (•‿•) and (^_^), thank-you faces, and bowing faces like m(_ _)m are friendly and hard to misread.",
      },
      {
        question: "How do screen readers handle kaomoji?",
        answer:
          "They usually read each symbol by name, which can be long and confusing. Keep the face at the end of the sentence and make sure the words carry the meaning on their own.",
      },
    ],
  },
  {
    slug: "kaomoji-for-bios-and-usernames",
    title: "Kaomoji for Bios and Usernames: Instagram, TikTok, X & Discord",
    shortTitle: "Kaomoji for bios",
    titleSegment: "Kaomoji for Bios and Usernames on Social Media",
    description:
      "Where kaomoji are allowed on Instagram, TikTok, X, and Discord profiles, how they count toward character limits, and short faces that look good in a bio.",
    intro:
      "A small kaomoji in your bio or display name gives your profile personality in a few characters. Each platform has different rules about where symbols are allowed and how they count toward the character limit. This guide explains those rules and suggests compact faces that read well at profile size.",
    face: "꒰ᐢ. .ᐢ꒱",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/cute-kaomoji", "/cute-symbols", "/emoji-combos", "/bear-kaomoji"],
    sections: [
      {
        id: "where-allowed",
        heading: "Where kaomoji are allowed on each platform",
        blocks: [
          {
            type: "p",
            text: "Almost every platform splits your identity into a username (the @handle, used in links) and a display name or bio (free text). Handles only allow a few character types, so kaomoji go in the display name and the bio. Limits change from time to time, so check the counter in the app as you type.",
          },
          {
            type: "table",
            head: ["Platform", "Handle (@)", "Display name", "Bio"],
            rows: [
              ["Instagram", "Letters, numbers, periods, underscores only", "Kaomoji allowed", "Kaomoji allowed, 150 characters"],
              ["TikTok", "Letters, numbers, periods, underscores only", "Kaomoji allowed", "Kaomoji allowed, 80 characters"],
              ["X (Twitter)", "Letters, numbers, underscores only", "Kaomoji allowed", "Kaomoji allowed, 160 characters"],
              ["Discord", "Lowercase letters, numbers, periods, underscores only", "Kaomoji allowed", "About Me allows kaomoji"],
            ],
          },
        ],
      },
      {
        id: "character-counts",
        heading: "Why a face can use more characters than it looks",
        blocks: [
          {
            type: "p",
            text: "Platforms count characters in different ways. A simple face like (•‿•) usually counts as five characters, but some symbols are stored as two or more units: emoji, many rare symbols, and the combining marks that give the [Lenny face](/lenny-face/) its eyebrows. On a bio with an 80-character limit, a long decorated face can use a large share of the space.",
          },
          {
            type: "tip",
            text: "Paste the face into the bio field before writing the rest. The character counter shows exactly how much it costs on that platform.",
          },
        ],
      },
      {
        id: "short-faces",
        heading: "Short faces that look good in a bio",
        blocks: [
          {
            type: "p",
            text: "At profile size, simple faces with common symbols read best. These all stay compact and display on almost every phone:",
          },
          {
            type: "faces",
            items: [
              { face: "(•‿•)", name: "Simple smile", note: "Friendly and tiny. Works in any display name." },
              { face: "ʕ•ᴥ•ʔ", name: "Bear", note: "A classic mascot face; more on the bear kaomoji page." },
              { face: "꒰ᐢ. .ᐢ꒱", name: "Bunny peek", note: "Soft, aesthetic, and popular in cute bios." },
              { face: "(｡•̀ᴗ-)✧", name: "Wink", note: "Confident and playful for creator profiles." },
              { face: "(˘ω˘)", name: "Content", note: "Calm and cozy; suits art and study accounts." },
              { face: "₍ᐢ•ﻌ•ᐢ₎", name: "Cat", note: "Cute animal face with widely supported symbols." },
            ],
          },
        ],
      },
      {
        id: "bio-tips",
        heading: "Tips for a clean profile",
        blocks: [
          {
            type: "list",
            items: [
              "Use one face as a signature rather than several. It becomes recognizable and leaves room for words.",
              "Pair the face with symbols from [cute symbols](/cute-symbols/), such as ✧ or ♡, to frame your bio lines.",
              "Check your profile on another phone. If a character shows as a box, swap it for a simpler one.",
              "Keep important words in plain text. Search and screen readers read words, not faces.",
              "For emoji-only decoration, borrow a set from the [emoji combos](/emoji-combos/) page.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I put a kaomoji in my Instagram username?",
        answer:
          "No. Instagram usernames only allow letters, numbers, periods, and underscores. Put the kaomoji in your Name field or your bio instead.",
      },
      {
        question: "Why does my kaomoji use so many characters in my bio?",
        answer:
          "Some symbols, emoji, and combining marks count as two or more characters. Paste the face into the bio first to see its real cost on the counter.",
      },
      {
        question: "Will my bio kaomoji look the same on every phone?",
        answer:
          "Simple faces built from common symbols look almost the same everywhere. Rare characters can display as boxes on older devices, so test on a second phone.",
      },
    ],
  },
  {
    slug: "porter-robinson-kaomoji",
    title: "Porter Robinson Kaomoji: Copy 【=◈︿◈=】 & Worlds / Nurture Sparkles",
    shortTitle: "Porter Robinson kaomoji",
    titleSegment: "Porter Robinson Kaomoji 【=◈︿◈=】 Copy & Paste",
    description:
      "Copy the Porter Robinson kaomoji 【=◈︿◈=】 from the Worlds era and its fan-made variants, plus Nurture-style sparkle dividers and SMILE! :D faces.",
    intro:
      "Ask any Porter Robinson fan for his kaomoji and you will get the same answer: 【=◈︿◈=】. The diamond-eyed face is tied to the Worlds era that began in 2014, and fans still use it in bios, Discord names, and even tattoos. Below are the main versions to copy in one tap, how each symbol works, and the sparkle text fans pair with his later albums.",
    face: "【=◈︿◈=】",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/sparkle-kaomoji", "/star-kaomoji", "/border-kaomoji", "/cute-kaomoji"],
    sections: [
      {
        id: "copy-worlds",
        heading: "Copy the Porter Robinson Worlds kaomoji and variants",
        blocks: [
          {
            type: "p",
            text: "The classic face uses heavy lenticular brackets on the outside, equals signs for cheeks, diamond eyes, and a small arched mouth. Fans also swap the mouth and eyes to match different songs and moods:",
          },
          {
            type: "faces",
            items: [
              { face: "【=◈︿◈=】", name: "Original Worlds kaomoji", note: "The face fans know from the Worlds era." },
              { face: "【=◈◡◈=】", name: "Happy Worlds face", note: "Smiling mouth version used in fan bios and encore chats." },
              { face: "【=◈ω◈=】", name: "Cat-mouth Worlds face", note: "Playful kawaii variation with the ω mouth." },
              { face: "【=◈_◈=】", name: "Calm Worlds face", note: "Flat, robot-like neutral expression." },
              { face: "【=✧︿✧=】", name: "Star-eyed Worlds face", note: "Swaps the diamonds for four-point ✧ sparkles." },
              { face: "✧･ﾟ: *【=◈︿◈=】*:･ﾟ✧", name: "Sparkle-framed Worlds", note: "Ready for Discord About Me or Twitter/X bios." },
            ],
          },
          {
            type: "tip",
            text: "Typing 【=◈︿◈=】 on a regular keyboard is a pain because it mixes CJK brackets, geometric diamonds, and a rare arch character. Copy it once and save it to your phone's text replacement under a shortcut like prface.",
          },
        ],
      },
      {
        id: "anatomy",
        heading: "What each symbol in 【=◈︿◈=】 means",
        blocks: [
          {
            type: "p",
            text: "Unlike standard round-bracket kaomoji, the Worlds face is built like a little screen or helmet. Its five distinct characters come from four different corners of Unicode:",
          },
          {
            type: "table",
            head: ["Character", "Unicode name", "Role in the face"],
            rows: [
              ["【 】", "Black lenticular brackets (U+3010 / U+3011)", "Frames the head like a screen or visor"],
              ["=", "Equals sign", "Acts as digital blush marks or cheek wires on both sides"],
              ["◈", "White diamond containing black small diamond (U+25C8)", "Glowing, emotional eyes"],
              ["︿", "Presentation form for vertical left angle bracket (U+FE3F)", "Trembling, bittersweet mouth"],
            ],
          },
          {
            type: "p",
            text: "Because ︿ is a wide, low arch rather than a sharp ^, the expression reads as quietly overwhelmed rather than angry, which suits the nostalgic, bittersweet tone of tracks like Sad Machine and Goodbye to a World.",
          },
        ],
      },
      {
        id: "eras",
        heading: "From Worlds to Nurture and SMILE! :D",
        blocks: [
          {
            type: "p",
            text: "These are not official logos, just the text styles fans tend to use for each album era:",
          },
          {
            type: "faces",
            items: [
              { face: "✧･ﾟ: *✧･ﾟ:*", name: "Sparkle trail", note: "Glitter line fans pair with Nurture-era nature and sky lyrics." },
              { face: "˚₊‧꒰ა ☆ ໒꒱ ‧₊˚", name: "Sky & star wing frame", note: "A soft frame for a favorite lyric, such as a line from Look at the Sky." },
              { face: "°•. ✿ .•°", name: "Blossom divider", note: "Floral line that matches the green, outdoorsy feel of Nurture." },
              { face: ":D", name: "SMILE! :D emoticon", note: "The classic sideways grin from the 2024 album title." },
            ],
          },
          {
            type: "p",
            text: "For more glittery text lines to pair with lyrics, browse [sparkle kaomoji](/sparkle-kaomoji/), [star kaomoji](/star-kaomoji/), and [kaomoji borders and dividers](/border-kaomoji/). Thinking about getting the Worlds face inked? Read our [kaomoji tattoo ideas](/guides/kaomoji-tattoo-ideas/) guide first.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Porter Robinson kaomoji?",
        answer:
          "【=◈︿◈=】 is the kaomoji fans link to Porter Robinson's 2014 album Worlds. It uses lenticular brackets 【 】, equals signs for cheeks, ◈ diamond eyes, and a ︿ arch for the mouth.",
      },
      {
        question: "Is the 【=◈︿◈=】 face crying or smiling?",
        answer:
          "It is an emotional, bittersweet face — overwhelmed rather than purely sad. Fans also use 【=◈◡◈=】 when they want an unmistakably smiling version.",
      },
      {
        question: "Why does the mouth in 【=◈︿◈=】 look different from a normal ^ caret?",
        answer:
          "It uses ︿ (U+FE3F, a presentation form of the angle bracket) instead of the ASCII caret ^. It is wider and flatter than ^, so it reads as a soft arched mouth.",
      },
      {
        question: "Can I get 【=◈︿◈=】 as a tattoo?",
        answer:
          "Yes, it is a popular fan tattoo because its geometric lines are bold and symmetrical. See our kaomoji tattoo ideas guide for sizing tips so the small diamond inside ◈ does not blur over time.",
      },
    ],
  },
  {
    slug: "kaomoji-font-and-display",
    title: "Kaomoji Font & Display Guide: Why Faces Look Different on Phone & PC",
    shortTitle: "Kaomoji font & display",
    titleSegment: "Kaomoji Font & Display Guide (iPhone, Android & PC)",
    description:
      "Is there a kaomoji font? Why faces change shape on iPhone, Android, Windows, and Discord, which fonts cover rare symbols, and how to fix empty boxes.",
    intro:
      "You copy a face that looked cute in a screenshot, paste it, and it turns into uneven lines or empty boxes. The natural guess is that you need a special kaomoji font. You don't: kaomoji are ordinary Unicode characters, drawn by whatever font your phone or app already uses. This guide explains why faces shift between devices and how to keep yours looking clean.",
    face: "(◕‿◕)",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/text-faces", "/art-kaomoji", "/kaomoji-copy-paste", "/japanese-emoticons"],
    sections: [
      {
        id: "how-fonts-work",
        heading: "How phones and computers render a kaomoji",
        blocks: [
          {
            type: "p",
            text: "A single kaomoji like ヽ(・∀・)ﾉ mixes characters from several alphabets at once: Latin parentheses, Japanese katakana (ヽ, ・, ﾉ), and a mathematical logic symbol (∀). Because no single Western font contains every character in Unicode, your operating system uses font fallback — pulling each symbol from a backup font when the main font does not have it.",
          },
          {
            type: "table",
            head: ["Platform", "Default UI font", "Fallback font for kaomoji glyphs", "How faces look"],
            rows: [
              ["iPhone & iPad (iOS)", "San Francisco", "Hiragino Sans / Apple Symbols", "Round, balanced, and wide Japanese spacing"],
              ["Android", "Roboto / Google Sans", "Noto Sans CJK / Noto Sans Symbols", "Very high symbol coverage; slightly narrower brackets"],
              ["Windows 10 & 11", "Segoe UI", "Yu Gothic UI / Meiryo / Segoe UI Symbol", "Crisp on desktop; some Georgian/Kannada eyes look thinner"],
              ["macOS", "SF Pro", "Hiragino Kaku Gothic", "Matches iPhone spacing closely"],
              ["Discord", "gg sans", "System CJK & symbol fallbacks", "Great single-line support; multiline art needs code blocks"],
            ],
          },
        ],
      },
      {
        id: "safe-swaps",
        heading: "Rare characters that break vs universal swaps",
        blocks: [
          {
            type: "p",
            text: "When a device lacks a fallback font for an obscure script (such as Tibetan, Vai, or Canadian Aboriginal syllabics), it draws a blank rectangle called 'tofu' (□ or [ ? ]). If you are putting a face in a public bio or game profile, these widely supported faces stay readable on almost every screen:",
          },
          {
            type: "faces",
            items: [
              { face: "(◕‿◕)", name: "Universal cute smile", note: "Geometric circles and standard undertie; works on iOS, Android, and PC." },
              { face: "(＾▽＾)", name: "Full-width Japanese grin", note: "Standard CJK symbols built into every phone and computer." },
              { face: "ʕ•ᴥ•ʔ", name: "Teddy bear", note: "IPA phonetic letters that render cleanly across all modern OS fonts." },
              { face: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", name: "Fraction-slash blush", note: "Uses standard fraction slashes and Greek omega." },
              { face: "¯\\_(ツ)_/¯", name: "Classic shrug", note: "Macron, backslashes, and katakana ツ; shows up on practically every device." },
              { face: "(^_^)", name: "Pure ASCII smile", note: "Nothing but keyboard punctuation, so it works even in strict game chats like Roblox." },
            ],
          },
        ],
      },
      {
        id: "multiline-alignment",
        heading: "Why multiline kaomoji art shifts out of alignment",
        blocks: [
          {
            type: "p",
            text: "Most chat apps use proportional fonts, where an 'i' or a space is much narrower than a 'W' or a Japanese character. When you paste a three-row bunny from [kaomoji art](/art-kaomoji/), a proportional font can compress the spaces on row one so the ears slide to the left of the head.",
          },
          {
            type: "list",
            items: [
              "Keep the full-width spaces (　) that come with the Copy button on this site — they are the same width as Japanese characters and do not collapse.",
              "In Discord or Slack, wrap multiline drawings in triple backticks (```) to render them in a fixed-width monospace font.",
              "For single-line inputs like game names, use [Roblox kaomoji](/roblox-kaomoji/) or [classic emoticons](/emoticons/) instead of multi-row art.",
              "Test your bio on both an iPhone and an Android screen if you use long [kaomoji borders](/border-kaomoji/).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What font do kaomoji use?",
        answer:
          "Kaomoji do not use a single special font. They use your app's default text font (such as San Francisco on iPhone, Roboto on Android, or gg sans on Discord) combined with system fallback fonts like Hiragino Sans and Noto Sans CJK.",
      },
      {
        question: "Why do some kaomoji show up as empty boxes [ ? ]?",
        answer:
          "An empty box (called tofu) means the font on that device does not have a drawing for that specific Unicode character. Swap the face for one built from common Japanese or geometric symbols.",
      },
      {
        question: "Which font is best for making kaomoji art on PC?",
        answer:
          "MS PGothic (the traditional Japanese Shift_JIS art font), Noto Sans CJK JP, or any monospace font inside a Discord code block keeps multi-line drawings aligned.",
      },
      {
        question: "Do copy-and-paste fancy font generators work with kaomoji?",
        answer:
          "Yes, mathematical bold or script Unicode letters can be placed next to a kaomoji, though screen readers struggle with fancy font letters. Keeping your words in normal text and adding a kaomoji at the end is cleaner and more accessible.",
      },
    ],
  },
  {
    slug: "kaomoji-tattoo-ideas",
    title: "Kaomoji Tattoo Ideas: Minimal Text Faces That Age Well on Skin",
    shortTitle: "Kaomoji tattoo ideas",
    titleSegment: "Kaomoji Tattoo Ideas ( ; ; ) Minimal Designs & Tips",
    description:
      "Kaomoji tattoo ideas to show your artist: minimal crying faces ( ; ; ), Porter Robinson 【=◈︿◈=】, tiny cats, plus sizing and placement tips so fine lines last.",
    intro:
      "Small text-face tattoos have become a favorite fine-line style — from the minimal crying face ( ; ; ) and Porter Robinson's 【=◈︿◈=】 to tiny cats and shrugs on a wrist or ankle. Because tattoo ink spreads slightly under the skin as it heals and ages, not every kaomoji that looks crisp on a phone screen makes a good tattoo. Here are the designs that translate best to ink and how to prepare them for your artist.",
    face: "( ; ; )",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/sad-kaomoji", "/cute-kaomoji", "/cat-kaomoji", "/shrug-kaomoji"],
    sections: [
      {
        id: "best-designs",
        heading: "Kaomoji that make the cleanest fine-line tattoos",
        blocks: [
          {
            type: "p",
            text: "Faces that tattoo well usually have five to nine distinct strokes with open space between each symbol. Copy any of these to bring to your appointment as a reference:",
          },
          {
            type: "faces",
            items: [
              { face: "( ; ; )", name: "Minimal crying face", note: "Clean dots and commas with wide spacing; a classic fine-line wrist tattoo." },
              { face: "【=◈︿◈=】", name: "Porter Robinson Worlds face", note: "Bold geometric symmetry; ask your artist to leave clear skin inside the ◈ diamonds." },
              { face: "(◕‿◕)", name: "Soft smile", note: "Simple three-part face inside parentheses; timeless and friendly." },
              { face: "ʕ•ᴥ•ʔ", name: "Tiny teddy bear", note: "Five clean shapes that read immediately even at 1 inch wide." },
              { face: "ฅ^•ﻌ•^ฅ", name: "Cat paws & ears", note: "Playful silhouette for cat lovers; space the ฅ paw strokes slightly wider for skin." },
              { face: "¯\\_(ツ)_/¯", name: "Classic shrug", note: "Iconic internet tattoo; keep the katakana ツ strokes separated so they do not merge." },
              { face: "(T_T)", name: "Straight-line tears", note: "Straight lines and open space, so it holds its shape well as the ink settles." },
              { face: "(>_<)", name: "Wince / oops", note: "Four straight angle strokes and an underscore; very little to blur together." },
            ],
          },
        ],
      },
      {
        id: "sizing-and-placement",
        heading: "Placement and sizing so tiny symbols do not blur together",
        blocks: [
          {
            type: "p",
            text: "Over the years, every tattoo line spreads a little as the ink settles in the skin. If two tiny marks (like the dots inside a semicolon ; or the slashes in a blush //) are inked less than two millimeters apart, they can fuse into a single blob. Where you put the tattoo matters just as much as how big it is:",
          },
          {
            type: "table",
            head: ["Placement", "Recommended width", "How well fine lines hold"],
            rows: [
              ["Inner forearm or wrist", "1.2 to 2 inches (3–5 cm)", "Excellent; smooth skin keeps brackets and dots sharp"],
              ["Above the ankle", "1.5 to 2.5 inches (4–6 cm)", "Very good; great spot for horizontal faces like ¯\\_(ツ)_/¯"],
              ["Upper inner arm", "1.2 to 2 inches (3–5 cm)", "Low sun exposure helps thin lines stay crisp"],
              ["Behind the ear or collarbone", "1 to 1.5 inches (2.5–4 cm)", "Stick to 5-character faces like ( ; ; ) or (•‿•)"],
              ["Side of finger or palm", "Not recommended for detailed kaomoji", "High friction causes rapid fading and line spread"],
            ],
          },
          {
            type: "tip",
            text: "Avoid cramming multi-line ASCII art or dense combining-mark faces (like Zalgo or heavy Lenny eyebrows) into a micro tattoo. Simpler strokes always age better on skin.",
          },
        ],
      },
      {
        id: "artist-prep",
        heading: "How to hand the reference to your tattoo artist",
        blocks: [
          {
            type: "list",
            items: [
              "Copy the literal text string from this site AND take a high-resolution screenshot on your phone so the artist sees the exact font proportions you like.",
              "Tell your artist whether you want a monoline typewriter look (even line weight everywhere) or a calligraphy/brush look (tapered parentheses).",
              "Let the artist widen the gaps between eyes, cheeks, and brackets by 15–20% on the stencil — what looks slightly spaced out on stencil paper heals at the right proportion on skin.",
              "Check the stencil in a mirror with your arm or leg relaxed in its natural resting posture before the needle starts.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the most popular kaomoji tattoo?",
        answer:
          "The ones you see most often are the minimal crying face ( ; ; ), the Porter Robinson Worlds face 【=◈︿◈=】, the classic shrug ¯\\_(ツ)_/¯, and small cat or bear faces like ฅ^•ﻌ•^ฅ and ʕ•ᴥ•ʔ. Their shapes are recognizable and uncluttered, which is what you want in ink.",
      },
      {
        question: "How small can a kaomoji tattoo be?",
        answer:
          "For a simple five-character face like (•‿•) or ( ; ; ), about 1 inch (2.5 cm) wide is the safe minimum so the eyes and mouth do not blur together as the ink ages. Wider faces with arms or brackets look better at 1.5 to 2 inches.",
      },
      {
        question: "Should my artist trace a computer font directly?",
        answer:
          "Use the font as a starting point, but let your artist redraw it with uniform single-needle line weights and slightly wider spacing between tiny dots and slashes so it heals cleanly.",
      },
      {
        question: "Do finger kaomoji tattoos last?",
        answer:
          "Finger tattoos tend to fade and blur faster than most spots because of friction and constant hand washing. If you still want one, stick to an ultra-simple face like :) or :3 and ask your artist about touch-ups.",
      },
    ],
  },
  {
    slug: "kaomoji-soft-copy",
    title: "Soft Kaomoji Copy and Paste: Pastel, Coquette & Cozy Bio Faces",
    shortTitle: "Soft kaomoji copy",
    titleSegment: "Soft Kaomoji Copy and Paste (˶ᵔ ᵕ ᵔ˶) Pastel Faces",
    description:
      "Soft kaomoji copy and paste guide: gentle pastel faces (˶ᵔ ᵕ ᵔ˶), bunny ears ꒰ᐢ. .ᐢ꒱, angel wings, and soft bio dividers for Instagram, TikTok, and Discord.",
    intro:
      "Soft kaomoji are the quiet side of Japanese text faces: rounded cheeks, sleepy eyes, tiny bunny ears, and thin ribbon dividers that suit pastel, coquette, and cozy profiles. Every face and combo below copies in one tap, and the table at the end shows which symbols go with which look.",
    face: "(˶ᵔ ᵕ ᵔ˶)",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/cute-kaomoji", "/shy-kaomoji", "/border-kaomoji", "/sparkle-kaomoji"],
    sections: [
      {
        id: "soft-faces",
        heading: "Most-loved soft kaomoji to copy",
        blocks: [
          {
            type: "p",
            text: "Soft faces trade sharp angles and loud exclamation marks for curved brackets, tiny dot eyes, and subtle blush marks (˶ or ⁄). Tap any card to copy the face:",
          },
          {
            type: "faces",
            items: [
              { face: "(˶ᵔ ᵕ ᵔ˶)", name: "Soft blushing smile", note: "Curved ᵔ eyes and ˶ blush marks; a go-to cozy bio face." },
              { face: "꒰ᐢ. .ᐢ꒱", name: "Soft bunny peek", note: "Rounded ꒰ ꒱ brackets and tiny dot eyes." },
              { face: "૮ ˶ᵔ ᵕ ᵔ˶ ა", name: "Floppy-ear puppy", note: "Droopy ૮ ა ears with a warm, gentle grin." },
              { face: "(◕‿◕✿)", name: "Flower hairpin smile", note: "Classic pastel face with a blossom tucked on the side." },
              { face: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", name: "Shy soft blush", note: "Flustered, bashful expression for crushes and thank-yous." },
              { face: "(っ˘ω˘ς )", name: "Cozy hug", note: "Closed eyes and curled hands; great for sleepy or comfort posts." },
              { face: "ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚", name: "Angel wing fairy", note: "Floating hearts and wings for dreamy captions." },
              { face: "( ˶ˆᗜˆ˵ )", name: "Warm happy cheeks", note: "Soft, rounded grin that fits any friendly message." },
            ],
          },
        ],
      },
      {
        id: "soft-dividers",
        heading: "Soft frames and dividers to pair with your face",
        blocks: [
          {
            type: "p",
            text: "A soft bio usually pairs one face with a thin ribbon or star divider from [kaomoji borders](/border-kaomoji/) or [cute symbols](/cute-symbols/). Copy any of these ready-made headers:",
          },
          {
            type: "faces",
            items: [
              { face: "────── ୨୧ ──────", name: "Coquette ribbon bar", note: "Clean line with a central ୨୧ bow." },
              { face: "˚₊‧꒰ა ♡ ໒꒱ ‧₊˚", name: "Angel wing heart frame", note: "Frames a short name or status word." },
              { face: "✧･ﾟ: *✧･ﾟ:*", name: "Soft sparkle trail", note: "Light glitter accent for the start or end of a line." },
              { face: "─── ⋆⋅☆⋅⋆ ───", name: "Dainty star divider", note: "Short enough to stay on one line on mobile." },
            ],
          },
        ],
      },
      {
        id: "styles",
        heading: "Matching the face to your profile aesthetic",
        blocks: [
          {
            type: "table",
            head: ["Aesthetic style", "Signature symbols", "Example combination"],
            rows: [
              ["Coquette & ballet", "୨୧, ʚɞ, ♡, 🎀", "୨୧ (˶ᵔ ᵕ ᵔ˶) ୨୧"],
              ["Pastel kawaii", "꒰ ꒱, ✿, ⋆, ˚", "꒰ᐢ. .ᐢ꒱ ⋆｡°✩"],
              ["Cottagecore & nature", "❀, 🍄, 🌿, ʕ•ᴥ•ʔ", "°•. ✿ ʕ•ᴥ•ʔ ✿ .•°"],
              ["Dreamy night & lo-fi", "☾, ☁︎, ✧, (˘ω˘)", "⋆｡ﾟ☁︎ (˘ω˘) ☾ ﾟ｡⋆"],
            ],
          },
          {
            type: "tip",
            text: "Keep your bio uncluttered: one divider line and one soft face reads much more 'soft aesthetic' than five crowded lines of symbols. Browse [cute kaomoji](/cute-kaomoji/) and [shy kaomoji](/shy-kaomoji/) when you want to rotate your face for a new season.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What makes a kaomoji look soft?",
        answer:
          "Curved eyes, small blush marks, and rounded brackets instead of sharp angles and wide-open mouths. (˶ᵔ ᵕ ᵔ˶) and ꒰ᐢ. .ᐢ꒱ are typical, often paired with a thin divider like ────── ୨୧ ────── in a bio.",
      },
      {
        question: "What are the round brackets ꒰ ꒱ used in soft kaomoji?",
        answer:
          "꒰ and ꒱ are Yi radicals, characters from the script used to write the Yi languages of southwest China. Their curved shape looks like fluffy cheeks, so people use them instead of plain ( ) parentheses to give faces a softer outline.",
      },
      {
        question: "Do soft kaomoji work on both iPhone and Android?",
        answer:
          "Yes. All of the faces in this guide use standard Unicode characters supported by modern iOS and Android fonts.",
      },
      {
        question: "Where can I find more soft blushing faces?",
        answer:
          "Our cute kaomoji and shy kaomoji pages have hundreds of blushing, flower, and heart-cheek faces sorted by style.",
      },
    ],
  },
];

/** Rough reading time at 200 words per minute (guides and blog posts). */
export function readingMinutes(sections: GuideSection[]): number {
  const text = sections
    .flatMap((section) => section.blocks)
    .map((block) => {
      switch (block.type) {
        case "p":
        case "tip":
          return block.text;
        case "table":
          return block.rows.flat().join(" ");
        case "faces":
          return block.items.map((face) => face.note).join(" ");
        case "messages":
          return block.items.map((item) => item.text).join(" ");
        default:
          return block.items.join(" ");
      }
    })
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

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
