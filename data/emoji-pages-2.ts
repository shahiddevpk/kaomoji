/**
 * Emoji cluster, phase 2 (2026-11-15), built from Semrush (Keyword Magic, US)
 * research: smiley face emoji, cat emoji, funny emoji, cute emoji and general
 * text symbols copy and paste. Each page owns one intent; multi-emoji sets stay
 * on /emoji-combos. Registered in lib/site.ts and rendered by CollectionView.
 */
import type { CollectionEntry, CollectionSection } from "@/data/collections";
import type { SitePage } from "@/lib/site";

const e = (v: string, m: string): CollectionEntry => ({ v, m });
const g = (v: string): CollectionEntry => ({ v });

export type Emoji2Key =
  | "smiley-face-emoji"
  | "cat-emoji"
  | "funny-emoji"
  | "cute-emoji"
  | "symbols-copy-paste";

export const emojiCollections2: Record<Emoji2Key, CollectionSection[]> = {
  "smiley-face-emoji": [
    {
      id: "classic",
      heading: "Classic smileys",
      intro:
        "The faces people mean when they search for a smiley. The differences are small but real: eyes, mouth shape, and blush change how warm or serious the smile feels.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🙂", "Slightly smiling face: polite, calm, sometimes mildly sarcastic"),
        e("😀", "Grinning face: open happiness"),
        e("😃", "Grinning with big eyes: excited, enthusiastic"),
        e("😄", "Grinning with smiling eyes: genuinely delighted"),
        e("😁", "Beaming face: a big toothy, proud grin"),
        e("😊", "Smiling with smiling eyes: warm, sincere, a little shy"),
        e("☺️", "Smiling face: soft, content, relaxed"),
        e("😇", "Smiling with halo: innocent, or pretending to be"),
        e("😌", "Relieved face: calm, content, peaceful"),
        e("🥰", "Smiling with hearts: feeling loved and grateful"),
      ],
    },
    {
      id: "playful",
      heading: "Playful and silly smileys",
      intro: "Smileys with a joke, a tongue, or a wink. These soften a message and signal that you are teasing.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😉", "Winking face: joking, teasing, light flirting"),
        e("😜", "Winking with tongue: playful, silly"),
        e("😝", "Squinting with tongue: goofy, cheeky"),
        e("😛", "Tongue out: playful, a little cheeky"),
        e("🤪", "Zany face: wild, crazy, or very silly"),
        e("😏", "Smirking face: smug, sly, suggestive"),
        e("🙃", "Upside-down face: sarcasm or irony"),
        e("😎", "Smiling with sunglasses: cool and confident"),
      ],
    },
    {
      id: "text",
      heading: "Text smiley faces (no emoji needed)",
      intro:
        "Classic keyboard smileys made from letters and punctuation. They look the same on every device and work in usernames and old forms that reject emoji.",
      layout: "table",
      column: "Smiley",
      items: [
        e(":)", "Basic smile"),
        e(":-)", "Smile with a nose, the original 1982 style"),
        e(":D", "Big open grin"),
        e(";)", "Wink"),
        e(":P", "Tongue out"),
        e("^_^", "Happy eyes, the Japanese style"),
        e("(◕‿◕)", "Round-eyed smile, kawaii"),
        e("(*^▽^*)", "Joyful smile with a blush"),
      ],
    },
  ],

  "cat-emoji": [
    {
      id: "faces",
      heading: "Cat face emoji",
      intro:
        "The cat faces cover every mood. The grinning and smiling cats are cheerful, the heart-eyes cat is smitten, and the weary cat is dramatic exhaustion.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🐱", "Cat face: a plain, cute cat, the default"),
        e("😺", "Grinning cat: happy, open smile"),
        e("😸", "Grinning cat with smiling eyes: delighted"),
        e("😹", "Cat with tears of joy: laughing hard"),
        e("😻", "Smiling cat with heart eyes: adoring something"),
        e("😼", "Cat with wry smile: smug, mischievous"),
        e("😽", "Kissing cat: affectionate"),
        e("🙀", "Weary cat: shocked, horrified, or overwhelmed"),
        e("😿", "Crying cat: sad"),
        e("😾", "Pouting cat: grumpy, annoyed"),
      ],
    },
    {
      id: "cats",
      heading: "Cats and big cats",
      intro: "Whole-body cats and the wild cat family, handy for pet photos, jokes, and animal-lover bios.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🐈", "Cat: a full-body housecat"),
        e("🐈‍⬛", "Black cat: Halloween, luck jokes, or just a black cat"),
        e("🐾", "Paw prints: pets, cat lovers, tracks"),
        e("🦁", "Lion: bold, proud, or a big cat"),
        e("🐯", "Tiger face: fierce, strong"),
        e("🐅", "Tiger: a full-body tiger"),
        e("🐆", "Leopard: spotted, wild, fast"),
        e("🧶", "Yarn: knitting, or what cats play with"),
      ],
    },
    {
      id: "text",
      heading: "Cat emoticons made from text",
      intro:
        "Copy and paste cat emoticons that look identical everywhere. For hundreds more, see the cat kaomoji page.",
      layout: "grid",
      items: [
        g("(=^･ω･^=)"),
        g("(=^･^=)"),
        g("=^..^="),
        g("(^･ω･^ )"),
        g("ฅ^•ﻌ•^ฅ"),
        g("(=｀ω´=)"),
        g("(=ＴェＴ=)"),
        g("≽^•⩊•^≼"),
        g("ミ●﹏☉ミ"),
        g("(=^‥^=)"),
        g("/ᐠ｡ꞈ｡ᐟ\\"),
        g("(^._.^)ﾉ"),
      ],
    },
  ],

  "funny-emoji": [
    {
      id: "laughing",
      heading: "Laughing and joking emoji",
      intro: "The emoji people use when something is actually funny. Pick by how hard you are laughing.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😂", "Tears of joy: laughing hard, the classic"),
        e("🤣", "Rolling on the floor: extremely funny"),
        e("😆", "Grinning squinting: laughing out loud"),
        e("😹", "Cat with tears of joy: laughing, cat edition"),
        e("💀", "Skull: 'I am dead', so funny it killed me"),
        e("😭", "Loudly crying: often means laughing too hard"),
        e("🤭", "Face with hand over mouth: giggling, a little naughty"),
        e("🫠", "Melting face: embarrassed, or dissolving into laughter"),
      ],
    },
    {
      id: "meme",
      heading: "Meme and ironic emoji",
      intro:
        "Emoji that mean something different on the internet than on the keyboard. Context matters: these are tone markers, not literal pictures.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🗿", "Moai: deadpan, unbothered, a meme reaction"),
        e("🤡", "Clown: calling something or someone foolish"),
        e("🧐", "Face with monocle: suspicious, examining closely"),
        e("😐", "Neutral face: unimpressed, deadpan"),
        e("🙄", "Rolling eyes: annoyed, dismissive"),
        e("😬", "Grimacing: awkward, cringe, nervous"),
        e("🥴", "Woozy face: confused, silly, or tipsy"),
        e("🤌", "Pinched fingers: the Italian 'what do you want', or 'chef kiss'"),
      ],
    },
    {
      id: "weird",
      heading: "Weird and silly emoji",
      intro: "The strange corner of the emoji keyboard. Good for jokes, reactions, and confusing your group chat.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🤪", "Zany face: wild and chaotic"),
        e("🥸", "Disguised face: a bad disguise, or pretending"),
        e("🫨", "Shaking face: shocked, vibrating with nerves"),
        e("🧌", "Troll: an internet troll, or a grumpy monster"),
        e("🫥", "Dotted line face: invisible, wanting to disappear"),
        e("🐸", "Frog: meme frog, or sipping tea"),
        e("🦆", "Duck: silly, quack humor"),
      ],
    },
  ],

  "cute-emoji": [
    {
      id: "faces",
      heading: "Cute face emoji",
      intro:
        "Soft, sweet faces for compliments, apologies, and wholesome reactions. They are the most-copied of the set.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🥺", "Pleading face: puppy eyes, asking nicely"),
        e("🥹", "Face holding back tears: touched, grateful"),
        e("😊", "Smiling with smiling eyes: warm and sweet"),
        e("🥰", "Smiling with hearts: loved and adoring"),
        e("😳", "Flushed face: blushing, embarrassed"),
        e("☺️", "Smiling face: gentle contentment"),
        e("😚", "Kissing with closed eyes: sweet affection"),
        e("🤗", "Hugging face: a warm hug"),
      ],
    },
    {
      id: "animals",
      heading: "Cute animal and nature emoji",
      intro: "Animals and little things that read as cute at a glance.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🐰", "Rabbit face: soft, gentle"),
        e("🐻", "Bear face: cuddly"),
        e("🐱", "Cat face: sweet and playful"),
        e("🐶", "Dog face: loyal, friendly"),
        e("🐼", "Panda: cute and calm"),
        e("🦊", "Fox: clever and cute"),
        e("🐥", "Baby chick: tiny and sweet"),
        e("🐣", "Hatching chick: new, adorable"),
        e("🌸", "Cherry blossom: soft, springtime, gentle"),
        e("🧸", "Teddy bear: comfort and childhood"),
      ],
    },
    {
      id: "pastel",
      heading: "Pastel decorations",
      intro:
        "Soft colors and small shapes for aesthetic bios and captions. Use two or three, not twenty.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🎀", "Ribbon: girly, cute, gift"),
        e("🍓", "Strawberry: sweet, soft aesthetic"),
        e("☁️", "Cloud: dreamy, calm"),
        e("🌈", "Rainbow: joy, pride, positivity"),
        e("🫧", "Bubbles: light, floaty"),
        e("🪽", "Wing: angelic, soft"),
        e("💗", "Growing pink heart: gentle, sweet love"),
      ],
    },
  ],

  "symbols-copy-paste": [
    {
      id: "hearts",
      heading: "Heart symbols",
      intro:
        "Text hearts, not emoji. They take the color of the surrounding text and work in usernames, bios, and documents.",
      layout: "grid",
      items: [g("♡"), g("♥"), g("❤"), g("❥"), g("❣"), g("❦"), g("❧"), g("☙"), g("ღ")],
    },
    {
      id: "stars",
      heading: "Star and sparkle symbols",
      intro: "Solid, outline, and four-pointed stars. Great as decoration at the ends of a name or line.",
      layout: "grid",
      items: [g("★"), g("☆"), g("✦"), g("✧"), g("✩"), g("✪"), g("✫"), g("✬"), g("✯"), g("⋆"), g("✶"), g("✷")],
    },
    {
      id: "arrows",
      heading: "Arrow symbols",
      intro: "Arrows for lists, directions, and styled text. They work in most fonts.",
      layout: "grid",
      items: [g("→"), g("←"), g("↑"), g("↓"), g("↔"), g("⇒"), g("⇐"), g("➜"), g("➤"), g("➔"), g("↳"), g("↩")],
    },
    {
      id: "math",
      heading: "Math and copyright symbols",
      intro: "Everyday symbols that are awkward to type: copyright, trademark, degree, and common math signs.",
      layout: "table",
      column: "Symbol",
      items: [
        e("©", "Copyright"),
        e("®", "Registered trademark"),
        e("™", "Trademark"),
        e("°", "Degree (temperature or angle)"),
        e("±", "Plus or minus"),
        e("≈", "Approximately equal"),
        e("≠", "Not equal"),
        e("≤", "Less than or equal"),
        e("≥", "Greater than or equal"),
        e("∞", "Infinity"),
        e("√", "Square root"),
        e("π", "Pi"),
      ],
    },
    {
      id: "check",
      heading: "Checkmarks, bullets and dividers",
      intro: "Symbols for to-do lists, bullets, and clean separators.",
      layout: "grid",
      items: [g("✓"), g("✔"), g("✗"), g("✘"), g("☑"), g("☐"), g("•"), g("◦"), g("▪"), g("◆"), g("◇"), g("═══"), g("───"), g("• • •")],
    },
    {
      id: "music",
      heading: "Music, weather and misc symbols",
      intro: "Music notes, weather, and a few fun extras.",
      layout: "grid",
      items: [g("♪"), g("♫"), g("♬"), g("☀"), g("☁"), g("☂"), g("❄"), g("☃"), g("☾"), g("☮"), g("☯"), g("✿"), g("❀"), g("✈")],
    },
  ],
};

const faq = (question: string, answer: string) => ({ question, answer });

export const emojiPages2: SitePage[] = [
  {
    path: "/smiley-face-emoji",
    label: "Smiley face emoji",
    heading: "Smiley Face Emoji",
    titleSegment: "Smiley Face Emoji 🙂 Copy & Paste + Meanings",
    description:
      "Smiley face emoji copy and paste: 🙂 😀 😊 😁 😉 😎 and more, with what each smile means. Plus text smileys like :) and ^_^ that work anywhere.",
    intro:
      "Every smiley in one place, with what each smile says. Tap Copy, paste it into a chat or caption, and pick the right smile for the tone.",
    group: "browse",
    howToName: "How to copy and paste a smiley face emoji",
    howTo: [
      "Choose by tone: 😊 for warm, 😁 for big and excited, 🙂 for polite, 😉 for teasing.",
      "Tap Copy under the smiley. The meaning next to it tells you how it will read.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone. Use the text smileys at the bottom when emoji are not accepted.",
    ],
    definition:
      "A smiley is any round yellow face with a smile, from the plain 🙂 to the beaming 😁. The original smiley was a text face, :-), typed by Scott Fahlman in 1982, and emoji later turned it into a picture. Different smiles carry different warmth, so the choice matters more than people expect.",
    learnMore:
      "The most common mix-up is 🙂 versus 😊. The slight smile 🙂 is polite and neutral and can read as cold or sarcastic in a close chat, while 😊 has smiling eyes and reads as genuinely warm. If you want to sound friendly, pick 😊, 😄, or 🥰, and save 🙂 for formal messages or gentle irony.\n\nSmileys with tongues and winks (😜 😉 😏) mark a joke or a tease. Without one, a sarcastic sentence can be taken literally, so they do real work in tone. The sunglasses 😎 say cool and confident, and the halo 😇 says innocent or pretending to be.\n\nText smileys are older than emoji and still useful. :) and :D work on every device and in fields that reject pictures. For the Japanese style, which reads the face from the eyes instead of tilting the head, see [smile kaomoji](/smile-kaomoji/) and [happy kaomoji](/happy-kaomoji/), and for the full set of emoji grouped by mood use [emoji copy and paste](/emoji-copy-paste/).",
    faqs: [
      faq(
        "What is the difference between 🙂 and 😊?",
        "🙂 is a slight, polite smile that can read as neutral or sarcastic. 😊 has smiling eyes and rosy cheeks and reads as warm and sincere. For a friendly tone, 😊 is the safer choice.",
      ),
      faq(
        "How do I copy and paste a smiley face emoji?",
        "Tap Copy under the smiley you want and paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone. It is copied as text and works in most apps.",
      ),
      faq(
        "What does 🙃 mean?",
        "The upside-down face is used for sarcasm, irony, or playful silliness. It often means 'everything is fine' when it clearly is not.",
      ),
      faq(
        "How do I type a smiley face with the keyboard?",
        "Type a colon and a closing parenthesis for :), or add a dash for :-). Many phones and apps turn it into an emoji automatically. For Japanese-style smileys, copy ^_^ or (◕‿◕) from the text section.",
      ),
      faq(
        "Why do smiley faces look different on iPhone and Android?",
        "Each platform draws its own version of the Unicode smiley, so shapes and shading differ. The meaning is the same, though a few faces look noticeably friendlier or more serious on some systems.",
      ),
    ],
    related: ["/emoji-copy-paste", "/smile-kaomoji", "/happy-kaomoji", "/emoticons", "/funny-emoji", "/cute-emoji"],
  },

  {
    path: "/cat-emoji",
    label: "Cat emoji",
    heading: "Cat Emoji",
    titleSegment: "Cat Emoji 🐱 Copy and Paste + Cat Emoticons",
    description:
      "Cat emoji copy and paste: 🐱 😺 😸 😻 🙀 🐈‍⬛ and more, with meanings. Plus cat emoticons like (=^･ω･^=) made from text.",
    intro:
      "Every cat, from the plain 🐱 to the heart-eyed 😻, with what each one means. Tap Copy, then paste it into a message, caption, or bio.",
    group: "browse",
    howToName: "How to copy and paste a cat emoji",
    howTo: [
      "Choose a cat by mood: 😺 happy, 😻 smitten, 😹 laughing, 🙀 shocked, 😾 grumpy.",
      "Tap Copy under the emoji. For a cat that looks identical everywhere, use a text emoticon from the last section.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone.",
    ],
    definition:
      "These are a Unicode set of cat faces and bodies, including ten cat faces (the plain face plus grinning, heart-eyed, crying and pouting moods), the full-body cat, the black cat, and paw prints. Because they are a fixed set, the cat faces are often used in place of human faces to express a mood more cutely.",
    learnMore:
      "The cat faces map neatly onto the human smileys: 😺 is a grin, 😸 a delighted grin, 😹 tears of joy, 😻 heart eyes, 😼 a smirk, 😽 a kiss, 🙀 shock, 😿 crying, and 😾 pouting. That makes them handy when a regular smiley feels too plain, and they are a common choice for pet photos, cat-themed bios, and affectionate messages.\n\nThe black cat 🐈‍⬛ is a single emoji built from a cat and a black square joined together, so it may show as two symbols on very old devices. Paw prints 🐾 are the quick signal for any pet account.\n\nIf you prefer a cat made from text, it looks the same on every device. The last section has a set to copy, and the [cat kaomoji](/cat-kaomoji/) page has hundreds more, like (=^･ω･^=). For other animals use [animal kaomoji](/animal-kaomoji/), and for a wider set of emoji by mood see [emoji copy and paste](/emoji-copy-paste/).",
    faqs: [
      faq(
        "How do I copy and paste a cat emoji?",
        "Tap Copy under the cat you want and paste it with Ctrl+V, Cmd+V, or a long-press and Paste on a phone. It is copied as text and works in most apps.",
      ),
      faq(
        "What does 🙀 mean?",
        "The weary cat shows shock, horror, or being overwhelmed, with hands pressed to its cheeks. It is a dramatic reaction, like screaming in surprise.",
      ),
      faq(
        "What is the difference between 🐱 and 🐈?",
        "🐱 is a cat's face, the cute default for chats. 🐈 is a full-body cat, which looks more realistic and is common in pet posts.",
      ),
      faq(
        "How do I make a cat face with the keyboard?",
        "Type =^..^= or (=^･ω･^=) using regular and Japanese characters, or copy one from the cat emoticon section on this page. They work in bios and usernames.",
      ),
      faq(
        "Is there a black cat emoji?",
        "Yes. 🐈‍⬛ is the black cat, added in 2020. It is useful for Halloween and for anyone who owns a black cat.",
      ),
    ],
    related: ["/emoji-copy-paste", "/cat-kaomoji", "/animal-kaomoji", "/cute-emoji", "/emoji-combos", "/heart-emoji"],
  },

  {
    path: "/funny-emoji",
    label: "Funny emoji",
    heading: "Funny Emoji",
    titleSegment: "Funny Emoji 😂 Copy & Paste: Meme Emojis",
    description:
      "Funny emoji copy and paste: 😂 🤣 💀 🗿 🤡 and weird, meme emoji, with what each means. Pick the reaction that matches how hard you are laughing.",
    intro:
      "Funny, meme, and weird emoji to copy and paste, with the meaning of each so the joke lands. Tap Copy and paste it into any chat.",
    group: "browse",
    howToName: "How to copy and paste a funny emoji",
    howTo: [
      "Pick by how hard you are laughing: 😂 for funny, 🤣 for very funny, 💀 for 'I am dead'.",
      "Tap Copy. Check the meaning column for meme emoji like 🗿 and 🤡 so you do not misuse them.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone.",
    ],
    definition:
      "Funny emoji are the emoji used to react to a joke or to add humor, from laughing faces like 😂 to meme symbols like 🗿 and 💀. Many have meanings that grew out of internet culture, so the literal picture and the way it is used often differ.",
    learnMore:
      "Laughing emoji follow a ladder: 😆 is a chuckle, 😂 is a real laugh, and 🤣 is rolling on the floor. The skull 💀 has overtaken them for many younger users, meaning 'that killed me', and 😭 is often used for laughing so hard you cry rather than for sadness.\n\nMeme emoji are tone markers. 🗿 is deadpan and unbothered, 🤡 mocks foolishness, 🧐 means suspicious, and 🫠 melts with embarrassment. These meanings change by community, so when something matters, add a few words.\n\nIf you want funny faces made from text, the [giggling kaomoji](/giggling-kaomoji/) page has laughing and cackling faces, and [lenny face](/lenny-face/) is the classic ( ͡° ͜ʖ ͡°) joke. For hand-picked sets that combine several emoji into one joke, see [emoji combos](/emoji-combos/), and for the full mood-by-mood list use [emoji copy and paste](/emoji-copy-paste/).",
    faqs: [
      faq(
        "What does 💀 mean in text?",
        "In modern chat, 💀 means 'I am dead', so funny that it killed me. It is a laughing reaction, not a threat, and is often used instead of 😂.",
      ),
      faq(
        "What does 🗿 mean?",
        "The moai emoji is a deadpan, unbothered reaction. It is used for a straight-faced, stone-faced response to something awkward or cringe, and also as a meme in its own right.",
      ),
      faq(
        "What is the funniest emoji?",
        "😂 and 🤣 are the classic laughing emoji, and 💀 is the most common one for younger users. Which is funniest depends on the group you are talking to.",
      ),
      faq(
        "How do I copy and paste a funny emoji?",
        "Tap Copy under the emoji and paste it with Ctrl+V, Cmd+V, or a long-press and Paste on a phone.",
      ),
      faq(
        "Why is 😭 used when something is funny?",
        "It started as exaggerated crying and became a way to say 'I am crying with laughter' or 'this is too cute to handle'. Context decides which meaning is intended.",
      ),
    ],
    related: ["/emoji-copy-paste", "/giggling-kaomoji", "/lenny-face", "/emoji-combos", "/smiley-face-emoji", "/crying-emoji"],
  },

  {
    path: "/cute-emoji",
    label: "Cute emoji",
    heading: "Cute Emoji",
    titleSegment: "Cute Emoji 🥺 Copy & Paste for Chats",
    description:
      "Cute emoji copy and paste: 🥺 🥹 🥰 🐰 🎀 🌸 and more cute faces, animals, and pastel emoji. Tap Copy and paste into chats, captions, and bios.",
    intro:
      "Sweet faces, soft animals, and pastel shapes to copy and paste, each with a note on how it reads. Tap Copy and paste it anywhere.",
    group: "browse",
    howToName: "How to copy and paste a cute emoji",
    howTo: [
      "Pick a cute face for a message (🥺 🥹 🥰) or a pastel decoration (🎀 🌸 ☁️) for a bio.",
      "Tap Copy under the emoji and read the meaning so it fits your tone.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone. Two or three look sweet, while twenty look noisy.",
    ],
    definition:
      "These are the emoji people choose for sweetness, softness, and affection: pleading eyes, blushing faces, small animals, ribbons, and pastel shapes. They are most popular in chats between friends, captions, and bios with a soft aesthetic.",
    learnMore:
      "For faces, 🥺 asks nicely or admits something is adorable, 🥹 means touched, and 🥰 shows feeling loved. 😳 is a blush, and 🤗 offers a hug. Together they make most messages sound gentler.\n\nFor decoration, animals like 🐰, 🐻, and 🐼, plus pastel items like 🎀, 🌸, ☁️, and 🍓, set a soft, kawaii mood in a bio. Keep the set small and consistent in color for a clean look.\n\nIf you prefer cute faces made from text, the [cute kaomoji](/cute-kaomoji/) page has the largest set on the site, and [uwu kaomoji](/uwu-kaomoji/) covers the extra-soft style. For decorative lines and borders see [cute symbols](/cute-symbols/), and for hearts in every color use [heart emoji](/heart-emoji/).",
    faqs: [
      faq(
        "What are the cutest emoji?",
        "🥺, 🥹, 🥰, 🐰, 🧸, and 🌸 are among the most-used picks. The cutest in a given chat depends on the group, but these are safe, sweet choices.",
      ),
      faq(
        "How do I copy and paste cute emojis?",
        "Tap Copy under the emoji and paste it with Ctrl+V, Cmd+V, or a long-press and Paste on a phone.",
      ),
      faq(
        "What does 🥺 mean?",
        "The pleading face means asking for something with puppy eyes, such as a favor or forgiveness. It is also used when something is very cute or you feel vulnerable.",
      ),
      faq(
        "What cute emoji work for a bio?",
        "Soft pastel items such as 🎀, 🌸, ☁️, 🍓, and 🧸 look good in bios. Pick two or three in matching colors for a clean aesthetic.",
      ),
      faq(
        "Where can I find cute faces made from text?",
        "The cute kaomoji page has hundreds of cute text faces, and the uwu kaomoji page has the softest, most affectionate ones. Both are plain text that looks identical on every device.",
      ),
    ],
    related: ["/emoji-copy-paste", "/cute-kaomoji", "/uwu-kaomoji", "/cute-symbols", "/heart-emoji", "/cat-emoji"],
  },

  {
    path: "/symbols-copy-paste",
    label: "Symbols",
    heading: "Symbols Copy and Paste",
    titleSegment: "Symbols Copy and Paste ★ ♡ → © ✓",
    description:
      "Symbols copy and paste: hearts ♡, stars ★, arrows →, checkmarks ✓, math signs and © ™. Tap Copy and paste them into bios, documents, and usernames.",
    intro:
      "Symbols copy and paste made simple: hearts, stars, arrows, checkmarks, math signs, and copyright marks. Tap Copy and paste it where you need it.",
    group: "browse",
    howToName: "How to copy and paste a symbol",
    howTo: [
      "Find the symbol in its group: hearts, stars, arrows, math, checkmarks, or music.",
      "Tap Copy under the symbol. It is placed on your clipboard as text.",
      "Paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone.",
    ],
    definition:
      "Text symbols are characters from the Unicode standard that are not letters or numbers: hearts, stars, arrows, math signs, and marks like © and ™. Unlike emoji they are plain text, so they take the color and size of the font around them and work in usernames, bios, and documents.",
    learnMore:
      "Most symbols cannot be found on a standard keyboard, which is why symbols copy and paste is the fastest way to use them. The groups on this page cover what people look for most: decorative hearts and stars for bios, arrows and checkmarks for lists, and © ® ™ ° for documents.\n\nThe difference from emoji matters. A symbol such as ♡ is text that looks the same everywhere, while ❤️ is a picture that changes by platform. If an app rejects emoji in a username or display name, a symbol usually works.\n\nFor symbols that go with faces, see the [kaomoji library](/kaomoji-copy-paste/), which uses many of the same characters. For decorative lines, bows, and sparkles use [cute symbols](/cute-symbols/), and for full lines of dividers see [border kaomoji](/border-kaomoji/). If you want emoji instead of text, go to [emoji copy and paste](/emoji-copy-paste/).",
    faqs: [
      faq(
        "How do I copy and paste symbols?",
        "Tap Copy under the symbol you want, then paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone. Symbols are plain text, so they work in most apps.",
      ),
      faq(
        "What is the difference between a symbol and an emoji?",
        "A symbol is a plain text character that matches the font around it and looks identical on every device. An emoji is a small picture whose design changes between Apple, Google, and other platforms.",
      ),
      faq(
        "How do I type the copyright symbol ©?",
        "Copy it from the math and copyright section, or type it with Alt+0169 on Windows or Option+G on Mac.",
      ),
      faq(
        "Can I use symbols in a username?",
        "Often yes, but it depends on the app. Many allow symbols like ★ in a display name while limiting usernames to letters and numbers, so test it before committing.",
      ),
      faq(
        "Why does a symbol show as a box?",
        "The font on that device does not include the character. Try a more common symbol, such as ★ instead of a rare variant, or update the device's fonts.",
      ),
    ],
    related: ["/cute-symbols", "/emoji-copy-paste", "/star-emoji", "/heart-emoji", "/border-kaomoji", "/kaomoji-copy-paste"],
  },
];
