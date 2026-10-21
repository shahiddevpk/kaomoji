/**
 * Curated copy-paste collections that are not kaomoji faces:
 * keyboard emoticons (with meanings), cute text symbols, and emoji combos.
 * Each collection is owned by exactly one URL (see lib/site.ts).
 */
export type CollectionEntry = {
  /** The text that gets copied. */
  v: string;
  /** Short meaning / label shown under the item. */
  m?: string;
};

export type CollectionSection = {
  id: string;
  heading: string;
  intro: string;
  /** "table" shows a meaning column (emoticons); "grid" shows copy cards. */
  layout: "grid" | "table";
  items: CollectionEntry[];
};

export type CollectionKey = "emoticons" | "cute-symbols" | "emoji-combos";

const e = (v: string, m?: string): CollectionEntry => ({ v, m });

export const collections: Record<CollectionKey, CollectionSection[]> = {
  emoticons: [
    {
      id: "smiley",
      heading: "Smiley face emoticons",
      intro:
        "The original sideways smileys. Read them by tilting your head to the left: the colon is the eyes and the bracket is the mouth.",
      layout: "table",
      items: [
        e(":)", "Classic smile — friendly, happy, or 'just kidding'"),
        e(":-)", "Smile with a nose — the 1982 original form"),
        e("=)", "Soft smile with wider eyes"),
        e(":]", "Square smile — a calmer, polite grin"),
        e(":}", "Wobbly smile — shy or slightly awkward"),
        e("(:", "Upside-down smile, read right to left"),
        e(":-]", "Polite smile with a nose"),
        e("c:", "Big cheerful grin"),
        e("C:", "Very wide, beaming grin"),
        e(":3", "Cute cat-mouth smile"),
        e("=3", "Cute smile with wide eyes"),
        e(":>", "Smug, pleased little smile"),
        e("^^", "Eastern-style happy closed eyes"),
        e("^_^", "Happy face with closed, smiling eyes"),
        e("^.^", "Small happy face"),
        e("^-^", "Content, relaxed happy face"),
        e("n_n", "Happy squint"),
        e("(^_^)", "Happy face in brackets"),
      ],
    },
    {
      id: "laughing",
      heading: "Laughing emoticons",
      intro:
        "Capital letters do the heavy lifting here: D is an open laughing mouth and X is a pair of squeezed-shut eyes.",
      layout: "table",
      items: [
        e(":D", "Big open-mouth grin or laugh"),
        e(":-D", "Laughing with a nose"),
        e("=D", "Wide-eyed laugh"),
        e("XD", "Laughing so hard the eyes squeeze shut"),
        e("xD", "Lighter version of XD"),
        e("X-D", "XD with a nose"),
        e("8D", "Laughing with wide or glasses eyes"),
        e(":'D", "Laughing so hard you cry"),
        e("^o^", "Cheerful laugh with closed eyes"),
        e("^O^", "Loud happy laugh"),
        e("(^▽^)", "Bright eastern laugh"),
        e("lol :D", "Laughing out loud with a grin"),
      ],
    },
    {
      id: "wink",
      heading: "Winking and playful emoticons",
      intro:
        "A semicolon replaces one eye to make a wink. P is a tongue sticking out — teasing, silly, or joking.",
      layout: "table",
      items: [
        e(";)", "Wink — joking, flirting, or sharing a secret"),
        e(";-)", "Wink with a nose"),
        e(";D", "Winking grin"),
        e(";]", "Sly wink"),
        e(":P", "Tongue out — teasing or silly"),
        e(":p", "Lighter tongue out"),
        e(":-P", "Tongue out with a nose"),
        e("XP", "Tongue out with squeezed eyes — 'yuck' or goofy"),
        e(";P", "Winking tongue out"),
        e("=P", "Wide-eyed tongue out"),
        e(":b", "Tongue out to the side"),
        e("^_~", "Eastern wink"),
        e("^_-", "Eastern wink, other eye"),
      ],
    },
    {
      id: "sad",
      heading: "Sad and crying emoticons",
      intro:
        "Turn the mouth around and the mood flips. An apostrophe before the bracket is a tear running down the cheek.",
      layout: "table",
      items: [
        e(":(", "Sad or disappointed"),
        e(":-(", "Sad with a nose"),
        e("=(", "Sad with wide eyes"),
        e(":[", "Glum, upset frown"),
        e(":'(", "Crying — a tear on the cheek"),
        e(":,(", "Crying, tear variant"),
        e("D:", "Horrified or dismayed (read right to left)"),
        e("D':", "Crying in horror"),
        e(":c", "Pouty, very sad face"),
        e(":C", "Deeply sad frown"),
        e("):", "Sad face, read right to left"),
        e("T_T", "Streaming tears (eastern)"),
        e("T.T", "Small crying face"),
        e(";_;", "Teary, about to cry"),
        e("QQ", "Crying eyes — gamer slang"),
        e("v_v", "Downcast, sorry, or ashamed"),
        e("u_u", "Disappointed with eyes closed"),
        e("</3", "Broken heart"),
      ],
    },
    {
      id: "angry",
      heading: "Angry and annoyed emoticons",
      intro:
        "Angry emoticons add eyebrows with > or show a flat, unimpressed mouth with | or /.",
      layout: "table",
      items: [
        e(">:(", "Angry frown with furrowed brows"),
        e(">:-(", "Angry with a nose"),
        e(">:[", "Mad and stern"),
        e(">_<", "Frustrated, squeezed eyes"),
        e(">.<", "Annoyed or embarrassed wince"),
        e("-_-", "Unimpressed, annoyed, or tired"),
        e("-.-", "Mildly annoyed"),
        e("¬_¬", "Side-eye, suspicious"),
        e(":/", "Skeptical, unsure, or let down"),
        e(":-/", "Skeptical with a nose"),
        e(":\\", "Uneasy, other direction"),
        e(":|", "Straight face — no reaction"),
        e(":-|", "Deadpan with a nose"),
        e(">:)", "Evil grin — mischief"),
        e("ಠ_ಠ", "Look of disapproval"),
      ],
    },
    {
      id: "surprised",
      heading: "Surprised and shocked emoticons",
      intro: "Round letters become open mouths and wide eyes.",
      layout: "table",
      items: [
        e(":O", "Shocked, open mouth"),
        e(":o", "Mildly surprised"),
        e(":-O", "Surprised with a nose"),
        e("=O", "Wide-eyed shock"),
        e("8O", "Huge eyes, stunned"),
        e("O_O", "Staring in disbelief"),
        e("o_O", "Confused double take"),
        e("O.o", "Puzzled, one eye wider"),
        e("0_0", "Blank stare of shock"),
        e("°o°", "Amazed"),
        e(":-0", "Gasping"),
      ],
    },
    {
      id: "love",
      heading: "Love and affection emoticons",
      intro: "The <3 heart is the most famous keyboard symbol of all — tilt it sideways to see the shape.",
      layout: "table",
      items: [
        e("<3", "Heart — love or appreciation"),
        e("<33", "Extra love"),
        e("<333", "Lots of love"),
        e(":*", "Kiss"),
        e(":-*", "Kiss with a nose"),
        e(";*", "Winking kiss"),
        e("=*", "Wide-eyed kiss"),
        e("xoxo", "Hugs and kisses"),
        e(":-3", "Cute, affectionate"),
        e("^3^", "Blowing a kiss (eastern)"),
        e("(づ｡◕‿‿◕｡)づ", "Hug (kaomoji style)"),
        e("{}", "Hug — arms around someone"),
        e("(( ))", "Big hug"),
      ],
    },
    {
      id: "misc",
      heading: "Cool, silly, and character emoticons",
      intro:
        "Beyond faces: glasses, hats, people, and gestures built from plain keyboard keys.",
      layout: "table",
      items: [
        e("B)", "Cool — wearing sunglasses"),
        e("B-)", "Cool with a nose"),
        e("8)", "Wearing glasses"),
        e("8-)", "Nerdy glasses"),
        e("O:)", "Angel — innocent"),
        e("0:-)", "Angel with a halo"),
        e("}:)", "Little devil"),
        e(":-X", "Lips sealed — keeping a secret"),
        e(":X", "Can't say anything"),
        e(":-#", "Braces, or 'my lips are sealed'"),
        e(":$", "Embarrassed, blushing"),
        e("%)", "Dizzy or confused"),
        e("@_@", "Dizzy, overwhelmed"),
        e("*_*", "Starstruck"),
        e("$_$", "Thinking about money"),
        e("=^.^=", "Cat face"),
        e("<:3 )~", "Mouse"),
        e("<*)))-{", "Fish"),
        e("@>-->--", "Rose"),
        e("\\o/", "Cheering with both arms up"),
        e("o/", "Waving hello"),
        e("\\o", "Waving, other hand"),
        e("*\\0/*", "Cheerleader"),
        e("<(^_^)>", "Arms out, happy"),
        e("~(^_^)~", "Dancing"),
        e("(>'-')>", "Kirby dance"),
        e("¯\\_(ツ)_/¯", "Shrug — 'I don't know' or 'whatever'"),
        e("( ͡° ͜ʖ ͡°)", "Lenny face — sly or suggestive"),
        e("(╯°□°)╯︵ ┻━┻", "Table flip — rage"),
        e("┬─┬ノ( º _ ºノ)", "Putting the table back — calm down"),
      ],
    },
  ],

  "cute-symbols": [
    {
      id: "hearts",
      heading: "Heart symbols",
      intro: "Text hearts that keep their shape everywhere — no colored emoji needed.",
      layout: "grid",
      items: [
        "♡", "♥", "❤", "❥", "❣", "❦", "❧", "ღ", "۵", "დ", "ʚ♡ɞ", "♡゙", "໒꒱", "꒰♡꒱",
        "⸜♡⸝", "₊˚♡", "♡⃛", "❤︎", "ᥫ᭡", "𓆩♡𓆪", "♡︎", "ᡣ𐭩", "⁺‧₊˚ ♡ ˚₊‧⁺", "-ˋˏ ♡ ˎˊ-",
      ].map((v) => e(v)),
    },
    {
      id: "stars",
      heading: "Star and sparkle symbols",
      intro: "Stars, twinkles, and glitter marks for bios, captions, and usernames.",
      layout: "grid",
      items: [
        "☆", "★", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⋆", "⭑", "⭒", "✶",
        "✷", "✸", "✹", "❋", "✺", "⁂", "꙳", "⊹", "˚", "｡", "ﾟ", "₊", "⋆｡°✩", "✧˖°", "⋆⭒˚｡⋆",
        "˚₊‧꒰ა ☆ ໒꒱ ‧₊˚", "✩°｡⋆⸜", ".☘︎ ݁˖", "✮⋆˙", "⋆.˚",
      ].map((v) => e(v)),
    },
    {
      id: "flowers",
      heading: "Flower and nature symbols",
      intro: "Text flowers, leaves, and petals that match the soft kawaii aesthetic.",
      layout: "grid",
      items: [
        "✿", "❀", "❁", "✾", "❃", "❋", "✽", "✻", "❊", "⚘", "❦", "☘", "♧", "♣", "⸙", "𖧷",
        "𖡼", "𖤣", "𖥧", "ꕥ", "ꕤ", "𐙚", "𓍯", "𓋼", "✿ˎˊ˗", "❀⊱", "⋆✿⋆", "⊹˚.⋆❀",
      ].map((v) => e(v)),
    },
    {
      id: "bows",
      heading: "Bow, ribbon, and coquette symbols",
      intro: "The coquette look: bows, ribbons, and lace-style marks built from text.",
      layout: "grid",
      items: [
        "ʚɞ", "୨୧", "ᰔ", "𐙚", "꒰ა", "໒꒱", "ʚїɞ", "⋆˙⟡", "୨ৎ", "ᥫ᭡", "ʚ ɞ", "꒰ ꒱", "୨ ୧",
        "⊹ ࣪ ˖", "𓂃", "ˏˋ°•*⁀➷", "⋆｡‧˚ʚ🍓ɞ˚‧｡⋆", "ꕀ", "𓂃 ོ", "‿︵‿︵",
      ].map((v) => e(v)),
    },
    {
      id: "moon",
      heading: "Moon, weather, and sky symbols",
      intro: "Moons, clouds, suns, and snow — handy for night, dreamy, or seasonal captions.",
      layout: "grid",
      items: [
        "☾", "☽", "☼", "☀", "☁", "☂", "☃", "❄", "❅", "❆", "⛆", "☄", "✺", "⸝⸝", "⊹ ࣪ ˖",
        "☾⋆｡°", "⋆｡‧˚☁︎", "˚ ༘ ೀ⋆｡˚", "𖤓", "☁︎", "☂︎", "⛅︎",
      ].map((v) => e(v)),
    },
    {
      id: "brackets",
      heading: "Cute brackets and frames",
      intro: "Wrap a name, word, or kaomoji in a soft frame. Copy the pair and type inside it.",
      layout: "grid",
      items: [
        "꒰ ꒱", "【 】", "『 』", "「 」", "《 》", "〈 〉", "⦅ ⦆", "〔 〕", "〖 〗", "❨ ❩", "❪ ❫",
        "❬ ❭", "❮ ❯", "❰ ❱", "⟬ ⟭", "( ˘ ³˘)", "⌜ ⌟", "⌞ ⌝", "꒰ა ໒꒱", "₍ ₎", "⁽ ⁾", "⋆ ˚｡⋆",
      ].map((v) => e(v)),
    },
    {
      id: "dividers",
      heading: "Dividers and borders",
      intro:
        "Line breaks for bios, Discord server rules, and captions. Paste one between sections of text.",
      layout: "grid",
      items: [
        "‿︵‿︵‿︵‿︵",
        "︶꒦꒷♡꒷꒦︶",
        "⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆",
        "·.·.·.·.·.·.·.·",
        "°•. ✿ .•°",
        "━━━━━━━━━━━━",
        "─── ⋆⋅☆⋅⋆ ───",
        "꒷꒦︶꒷꒦︶꒷꒦",
        "✧･ﾟ: *✧･ﾟ:*",
        "༺ ༻",
        "⊹˚₊‧───────‧₊˚⊹",
        "┊ ┊ ┊ ┊",
        "ˏˋ°•*⁀➷",
        "•───────•°•❀•°•───────•",
        "⋆ ˚｡⋆୨୧˚ ˚୨୧⋆｡˚ ⋆",
        "╭┈┈┈┈╯ ╰┈┈┈➤",
        "▬▬▬▬▬▬▬▬▬",
        "꒰ঌ ────── ໒꒱",
      ].map((v) => e(v)),
    },
    {
      id: "arrows",
      heading: "Arrows, pointers, and bullets",
      intro: "Small marks to start a list line or point at a link in your bio.",
      layout: "grid",
      items: [
        "➳", "➵", "➶", "➷", "➸", "➹", "➺", "⇢", "↬", "↳", "↪", "⤷", "➜", "➤", "➥", "☞",
        "✎", "✐", "✉", "⌕", "⟡", "⋄", "◇", "◆", "•", "◦", "∘", "⊹", "‣", "⁃", "⇝", "ᐅ",
      ].map((v) => e(v)),
    },
    {
      id: "faces",
      heading: "Tiny kawaii faces and creatures",
      intro: "Mini faces and animals that fit inside a username or the end of a sentence.",
      layout: "grid",
      items: [
        "ᵔᴥᵔ", "ᵔᴗᵔ", "◕‿◕", "˘ᵕ˘", "ᐡ ᐧ ﻌ ᐧ ᐡ", "ᓚᘏᗢ", "ฅ^•ﻌ•^ฅ", "₍ᐢ. .ᐢ₎", "૮ ˶ᵔ ᵕ ᵔ˶ ა",
        "ʕ•ᴥ•ʔ", "(˶ᵔ ᵕ ᵔ˶)", "(っ˘ڡ˘ς)", "⸜(｡˃ ᵕ ˂ )⸝", "₍^. .^₎⟆", "/ᐠ｡ꞈ｡ᐟ\\", "ᘏ⑅ᘏ",
        "(๑>◡<๑)", "( ˶ˆᗜˆ˵ )", "⊂(・ω・*⊂)", "(ᵕ—ᴗ—)",
      ].map((v) => e(v)),
    },
    {
      id: "misc",
      heading: "Other cute text symbols",
      intro: "Music notes, cards, checkmarks, and other handy signs that render on almost every phone.",
      layout: "grid",
      items: [
        "♪", "♫", "♬", "♩", "♭", "☕︎", "✓", "✔", "✗", "✘", "☑", "☒", "♔", "♕", "♚", "♛",
        "☯", "☮", "♾", "⚡︎", "⌘", "⏾", "⌛︎", "☏", "✂", "✈", "⚐", "⚑", "♨", "☺", "☻", "ツ",
      ].map((v) => e(v)),
    },
  ],

  "emoji-combos": [
    {
      id: "aesthetic",
      heading: "Aesthetic emoji combos",
      intro: "Soft, coordinated sets for bios, captions, and highlight covers.",
      layout: "grid",
      items: [
        e("🤍🕊️☁️", "Clean white"),
        e("🌙✨🌌", "Night sky"),
        e("🍂☕📖", "Cozy autumn"),
        e("🎀🩰🦢", "Ballet coquette"),
        e("🌿🪴🤍", "Plant mom"),
        e("🖤🕷️🥀", "Dark aesthetic"),
        e("🫧🩵🐚", "Ocean blue"),
        e("🌸🍡🎐", "Japanese spring"),
        e("🕯️📜🪶", "Dark academia"),
        e("🍓🥛🎀", "Strawberry milk"),
        e("🌻🌼☀️", "Sunny yellow"),
        e("💿🎧🌃", "Lo-fi night"),
        e("🪩🍸✨", "Party glam"),
        e("🐚🌊🫧", "Mermaidcore"),
        e("🍄🌿🐌", "Cottagecore"),
        e("💜🔮🌙", "Mystic purple"),
      ],
    },
    {
      id: "cute",
      heading: "Cute and kawaii emoji combos",
      intro: "Pink, pastel, and soft-animal combos with a kawaii feel.",
      layout: "grid",
      items: [
        e("🎀✨", "Ribbon sparkle"),
        e("🐰💕", "Bunny love"),
        e("🍓🎀💘", "Strawberry crush"),
        e("🧸🍼🤍", "Teddy bear"),
        e("🐱🍙💤", "Sleepy kitty"),
        e("🌷🐇🧺", "Spring bunny"),
        e("🍰🍓☕", "Cake date"),
        e("🐣🌼💛", "Baby chick"),
        e("🦄🌈💖", "Unicorn dream"),
        e("🐻‍❄️🫧🩵", "Polar bear"),
        e("🍭🍬🎠", "Candy land"),
        e("🐼🎋🍡", "Panda snack"),
        e("💗🫶🏻💗", "Heart hands"),
        e("🌸🐾💗", "Paw blossom"),
      ],
    },
    {
      id: "love",
      heading: "Love and couple emoji combos",
      intro: "Romantic sets for partners, crushes, and anniversaries.",
      layout: "grid",
      items: [
        e("💞👩‍❤️‍👨💞", "Couple"),
        e("🥰💌🌹", "Love letter"),
        e("👉👈🥺", "Shy crush"),
        e("💍✨🥂", "Engaged"),
        e("😘💋💕", "Kisses"),
        e("🫶💗🫶", "Heart hands"),
        e("🌹🍷🕯️", "Date night"),
        e("💑🏡❤️", "Home together"),
        e("😍💘🔥", "Hot crush"),
        e("🤍🖤", "Black and white love"),
        e("💔🥀😢", "Heartbreak"),
        e("🧸💝🍫", "Valentine gift"),
      ],
    },
    {
      id: "funny",
      heading: "Funny and meme emoji combos",
      intro: "Reaction combos that say what words cannot.",
      layout: "grid",
      items: [
        e("👁️👄👁️", "Blank stare"),
        e("💀💀💀", "Dying of laughter"),
        e("🤡🎪", "Clown show"),
        e("😐😑😐", "Slow blink"),
        e("🫠🔥", "Melting from heat"),
        e("👀🍿", "Watching the drama"),
        e("🧍‍♀️", "Awkward standing"),
        e("🤌✨", "Chef's kiss"),
        e("🐸☕", "None of my business"),
        e("😭🙏", "Begging"),
        e("📉😩", "Things going badly"),
        e("🧠💨", "Empty brain"),
        e("🚩🚩🚩", "Red flags"),
        e("🗿", "Stone-faced"),
      ],
    },
    {
      id: "birthday",
      heading: "Birthday emoji combos",
      intro: "Party sets for birthday wishes, cards, and group chats.",
      layout: "grid",
      items: [
        e("🎂🎉🎁", "Classic birthday"),
        e("🥳🎈🎊", "Party time"),
        e("🍰🕯️✨", "Make a wish"),
        e("🎁🎀💝", "Gift wrap"),
        e("🎉🥂🍾", "Cheers"),
        e("🧁🎈💖", "Cute cupcake"),
        e("👑🎂🎉", "Birthday queen or king"),
        e("🎶🎂🎶", "Birthday song"),
      ],
    },
    {
      id: "holidays",
      heading: "Christmas, Halloween, and holiday combos",
      intro: "Seasonal sets for the big US holidays.",
      layout: "grid",
      items: [
        e("🎄🎅🎁", "Christmas morning"),
        e("❄️☃️🧣", "Winter"),
        e("🍪🥛🎅", "Cookies for Santa"),
        e("🦌🛷✨", "Sleigh ride"),
        e("🎃👻🍬", "Trick or treat"),
        e("🦇🌕🕸️", "Spooky night"),
        e("🧙‍♀️🔮🕯️", "Witchy"),
        e("🦃🥧🍂", "Thanksgiving"),
        e("🎆🥂🕛", "New Year's Eve"),
        e("🇺🇸🎆🌭", "Fourth of July"),
        e("🐣🌷🥚", "Easter"),
        e("☘️🍀🌈", "St. Patrick's Day"),
      ],
    },
    {
      id: "seasons",
      heading: "Summer, spring, and seasonal combos",
      intro: "Weather and season sets for travel posts and captions.",
      layout: "grid",
      items: [
        e("🏖️🌴☀️", "Beach day"),
        e("🍉🩴🌊", "Summer"),
        e("🌸🌷🦋", "Spring bloom"),
        e("🍁🍂🥧", "Fall"),
        e("☔🌧️☕", "Rainy day"),
        e("🏔️❄️🎿", "Ski trip"),
        e("🌅🚗🎶", "Road trip"),
        e("🏕️🔥🌲", "Camping"),
      ],
    },
    {
      id: "food",
      heading: "Food and drink emoji combos",
      intro: "Snack and meal sets for foodie captions.",
      layout: "grid",
      items: [
        e("☕🥐📰", "Coffee morning"),
        e("🍕🍿🎬", "Movie night"),
        e("🍜🥢🔥", "Ramen time"),
        e("🍣🍱🍵", "Sushi date"),
        e("🧋🍡✨", "Boba run"),
        e("🍔🍟🥤", "Fast food"),
        e("🥑🍳🥓", "Brunch"),
        e("🍷🧀🍇", "Wine and cheese"),
        e("🍦🍓🌞", "Ice cream day"),
        e("🍩☕💗", "Donut date"),
      ],
    },
    {
      id: "vibes",
      heading: "Mood, study, and gaming combos",
      intro: "Everyday status sets for work, school, workouts, and games.",
      layout: "grid",
      items: [
        e("📚✏️☕", "Study session"),
        e("💻☕🎧", "Work from home"),
        e("🎮🕹️🔥", "Gaming"),
        e("💪🏋️‍♀️🥤", "Gym day"),
        e("😴🛌💤", "Nap time"),
        e("✈️🌍📸", "Travel"),
        e("🎧🎶💫", "Music mood"),
        e("🧘‍♀️🕯️🌿", "Self care"),
        e("🐶🦴❤️", "Dog lover"),
        e("🐱🧶💤", "Cat lover"),
        e("⚽🏆🔥", "Game day"),
        e("💸💅✨", "Treat yourself"),
      ],
    },
    {
      id: "kaomoji-mix",
      heading: "Emoji + kaomoji mixes",
      intro: "Text faces paired with emoji — the signature look of a kaomoji user.",
      layout: "grid",
      items: [
        e("(˶ᵔ ᵕ ᵔ˶)🎀", "Soft bow"),
        e("ʕ•ᴥ•ʔ🍯", "Honey bear"),
        e("(っ˘ڡ˘ς)🍜", "Slurping ramen"),
        e("ฅ^•ﻌ•^ฅ🐾", "Kitty paws"),
        e("(◕‿◕)🌸", "Blossom smile"),
        e("(づ｡◕‿‿◕｡)づ💕", "Big hug"),
        e("(╯°□°)╯︵ 🍕", "Pizza flip"),
        e("₍ᐢ. .ᐢ₎🥕", "Bunny snack"),
        e("(｡•̀ᴗ-)✧🎉", "Party wink"),
        e("(ᵕ—ᴗ—)💤", "Sleepy"),
      ],
    },
  ],
};

export function countCollection(key: CollectionKey): number {
  return collections[key].reduce((n, s) => n + s.items.length, 0);
}

/** Case-insensitive match on the item text, its meaning, or its section heading. */
export function searchCollection(
  key: CollectionKey,
  query: string,
): { id: string; face: string; name: string }[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: { id: string; face: string; name: string }[] = [];
  for (const section of collections[key]) {
    const headingHit = section.heading.toLowerCase().includes(q);
    section.items.forEach((item, i) => {
      if (
        headingHit ||
        item.v.toLowerCase().includes(q) ||
        (item.m?.toLowerCase().includes(q) ?? false)
      ) {
        hits.push({ id: `${key}-${section.id}-${i}`, face: item.v, name: item.m ?? item.v });
      }
    });
  }
  return hits;
}
