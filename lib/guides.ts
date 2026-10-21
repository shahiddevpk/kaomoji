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
