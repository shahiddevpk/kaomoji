/**
 * Emoji copy-and-paste collections (phase 1 of the emoji cluster, 2026-11-04).
 * Every row carries a meaning so the pages teach, not just list. Merged into
 * `collections` in data/collections.ts; each key is owned by exactly one URL.
 */
import type { CollectionEntry, CollectionSection } from "@/data/collections";

const e = (v: string, m: string): CollectionEntry => ({ v, m });

export const emojiCollections: Record<
  "emoji-copy-paste" | "heart-emoji" | "crying-emoji" | "star-emoji",
  CollectionSection[]
> = {
  "emoji-copy-paste": [
    {
      id: "smileys",
      heading: "Smiling and laughing emoji",
      intro:
        "The everyday reactions. Most differences are about intensity: a plain smile is polite, tears of joy means you are really laughing, and a rolling-on-the-floor face means it was hilarious.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😀", "Grinning face: open, friendly happiness"),
        e("😊", "Smiling face with smiling eyes: warm, sincere, a little shy"),
        e("🙂", "Slight smile: polite, neutral, sometimes mildly passive-aggressive"),
        e("😁", "Beaming face: big excited grin"),
        e("😂", "Tears of joy: laughing hard"),
        e("🤣", "Rolling on the floor laughing: it was extremely funny"),
        e("😅", "Grinning with sweat: relieved, or an awkward 'oops'"),
        e("😉", "Winking face: joking, teasing, light flirting"),
        e("😎", "Sunglasses: cool, confident, relaxed"),
        e("🤩", "Star-struck: amazed, excited, impressed"),
        e("🥳", "Partying face: celebration, birthday, good news"),
        e("🤔", "Thinking face: pondering, doubtful, 'hmm'"),
        e("🙃", "Upside-down face: sarcasm, irony, or playful silliness"),
        e("😴", "Sleeping face: tired, bored, or going to bed"),
      ],
    },
    {
      id: "love",
      heading: "Hearts and affection",
      intro:
        "Hearts are the most copied emoji family. The color changes the tone, so the full set, with a meaning for every color, is on the heart emoji page.",
      layout: "table",
      column: "Emoji",
      items: [
        e("❤️", "Red heart: love, romance, strong affection"),
        e("💕", "Two hearts: sweet, playful affection"),
        e("💖", "Sparkling heart: excited, gushing love"),
        e("💔", "Broken heart: heartbreak, disappointment, loss"),
        e("😍", "Heart eyes: adoring, loving something"),
        e("🥰", "Smiling face with hearts: feeling loved and grateful"),
        e("😘", "Face blowing a kiss: affectionate goodbye or flirting"),
        e("🫶", "Heart hands: warm support and appreciation"),
      ],
    },
    {
      id: "sad",
      heading: "Sad and crying emoji",
      intro:
        "From a single tear to full sobbing. Note that 😭 is also used ironically to mean laughing so hard you are crying, so context matters. More faces are on the crying emoji page.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😢", "Crying face: a single tear, sad or touched"),
        e("😭", "Loudly crying: sobbing, or overwhelmed by something funny or cute"),
        e("🥺", "Pleading face: begging, vulnerable, or very cute"),
        e("😞", "Disappointed face: let down, discouraged"),
        e("😔", "Pensive face: quiet, thoughtful sadness"),
        e("🥲", "Smiling face with tear: bittersweet, or hiding sadness"),
        e("😩", "Weary face: exhausted, fed up, dramatic"),
      ],
    },
    {
      id: "stars",
      heading: "Stars and sparkles",
      intro:
        "Used for praise, ratings, magic, and bios. The star emoji page also has plain star symbols (★ ☆ ✦) that are not emoji and paste cleanly into usernames.",
      layout: "table",
      column: "Emoji",
      items: [
        e("⭐", "Star: favorite, rating, excellent"),
        e("🌟", "Glowing star: shining, standout, special"),
        e("✨", "Sparkles: magic, new, clean, or 'emphasis'"),
        e("💫", "Dizzy star: stars swirling, dazed, or whimsical"),
        e("🌠", "Shooting star: wishes and dreams"),
      ],
    },
    {
      id: "reactions",
      heading: "Reaction and gesture emoji",
      intro:
        "Quick replies that need no words. Several have different meanings by culture, so check your audience before relying on a gesture in a formal setting.",
      layout: "table",
      column: "Emoji",
      items: [
        e("👍", "Thumbs up: yes, okay, approved (can feel curt in some chats)"),
        e("👏", "Clapping hands: applause, congratulations"),
        e("🙏", "Folded hands: please, thank you, or a prayer"),
        e("🔥", "Fire: great, impressive, or 'hot'"),
        e("💯", "Hundred points: totally agree, perfect"),
        e("🎉", "Party popper: celebration, congratulations"),
        e("👀", "Eyes: watching, curious, 'look at this'"),
        e("🤝", "Handshake: agreement or deal"),
      ],
    },
  ],

  "heart-emoji": [
    {
      id: "classic",
      heading: "Red and classic heart emoji",
      intro:
        "The default way to say love. The red heart reads as romantic by default, so use a different color or a heart-eyes face when you mean friendship or support.",
      layout: "table",
      column: "Emoji",
      items: [
        e("❤️", "Red heart: love, romance, deep affection"),
        e("♥️", "Heart suit: the card symbol, often shown flatter than ❤️"),
        e("❣️", "Heart exclamation: emphasis with love, 'I really mean it'"),
        e("💟", "Heart decoration: a decorative, formal-looking heart"),
        e("💌", "Love letter: a heartfelt message or a crush note"),
      ],
    },
    {
      id: "colors",
      heading: "Heart colors and what they mean",
      intro:
        "Color meanings are conventions, not rules, and they vary by group. This is how each is most commonly read in chat and on social media.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🧡", "Orange heart: warmth, friendship, energy"),
        e("💛", "Yellow heart: happiness, friendship, platonic love"),
        e("💚", "Green heart: growth, nature, health, sometimes jealousy"),
        e("💙", "Blue heart: trust, calm, loyalty"),
        e("💜", "Purple heart: compassion, creativity, fandom"),
        e("🖤", "Black heart: dark humor, sorrow, or an edgy aesthetic"),
        e("🤍", "White heart: pure, peaceful, clean aesthetic, remembrance"),
        e("🤎", "Brown heart: earthy, cozy, comforting"),
        e("🩷", "Pink heart: soft, gentle, sweet affection"),
        e("🩵", "Light blue heart: peaceful, gentle, refreshing"),
        e("🩶", "Grey heart: neutral, subdued, or a quiet kind of care"),
      ],
    },
    {
      id: "multi",
      heading: "Sparkling, beating, and multiple hearts",
      intro:
        "Extra hearts, motion, and sparkle make the feeling louder. Pick one by how enthusiastic you want to sound.",
      layout: "table",
      column: "Emoji",
      items: [
        e("💕", "Two hearts: sweet and playful affection"),
        e("💞", "Revolving hearts: hearts circling, a deep bond"),
        e("💓", "Beating heart: excitement, a racing pulse, nerves"),
        e("💗", "Growing heart: affection that is getting stronger"),
        e("💖", "Sparkling heart: gushing, extra-happy love"),
        e("💘", "Heart with arrow: falling in love, a crush"),
        e("💝", "Heart with ribbon: a gift, a heartfelt present"),
      ],
    },
    {
      id: "feelings",
      heading: "Broken, healing, and symbolic hearts",
      intro:
        "Hearts are also used for pain, recovery, and passion, not only affection.",
      layout: "table",
      column: "Emoji",
      items: [
        e("💔", "Broken heart: heartbreak, disappointment, a sad ending"),
        e("❤️‍🔥", "Heart on fire: passion, intense desire, burning devotion"),
        e("❤️‍🩹", "Mending heart: healing after hurt, recovery"),
        e("🫀", "Anatomical heart: the organ itself, health or 'from the heart'"),
        e("🫶", "Heart hands: support, warmth, 'sending love'"),
      ],
    },
    {
      id: "faces",
      heading: "Faces with hearts",
      intro:
        "Faces show the feeling behind the heart: adoration, being loved, or a kiss.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😍", "Heart eyes: adoring something or someone"),
        e("🥰", "Smiling face with hearts: feeling loved, grateful, sweet"),
        e("😘", "Blowing a kiss: affectionate sign-off or flirting"),
        e("😻", "Heart-eyes cat: adoring something cute"),
        e("🥹", "Face holding back tears: touched, moved, grateful"),
      ],
    },
    {
      id: "text",
      heading: "Heart symbols (text, not emoji)",
      intro:
        "These are plain text characters, not emoji pictures, so they look the same on every device and paste cleanly into usernames, bios, and documents. Copy and paste the Japanese heart symbol ♡ or any style below.",
      layout: "grid",
      items: [
        e("♡", "Outline heart"),
        e("♥", "Solid heart"),
        e("❤", "Heavy heart"),
        e("❥", "Rotated heavy heart"),
        e("❦", "Floral heart"),
        e("ღ", "Georgian letter used as a heart"),
                e("♡︎", "Text-style outline heart"),
      ],
    },
  ],

  "crying-emoji": [
    {
      id: "tears",
      heading: "Crying face emoji",
      intro:
        "The core set. The difference between them is mostly volume: one tear, streaming tears, or tears you are fighting.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😢", "Crying face: one tear, sad, hurt, or moved"),
        e("😭", "Loudly crying face: sobbing; also used ironically for laughing or being overwhelmed by cuteness"),
        e("🥹", "Face holding back tears: touched, proud, grateful"),
        e("🥲", "Smiling face with tear: bittersweet, relieved, or hiding sadness"),
        e("😥", "Sad but relieved: disappointed but coping"),
        e("😰", "Anxious face with sweat: worried, stressed, bracing for bad news"),
        e("😓", "Downcast face with sweat: tired, let down, hard-working but struggling"),
        e("😿", "Crying cat: sadness, with a cute twist"),
      ],
    },
    {
      id: "sad",
      heading: "Sad, disappointed, and tired emoji",
      intro:
        "For when you are low but not in tears: letdowns, exhaustion, and quiet sadness.",
      layout: "table",
      column: "Emoji",
      items: [
        e("😞", "Disappointed face: let down, discouraged"),
        e("😔", "Pensive face: quiet, thoughtful sadness"),
        e("😟", "Worried face: concerned, uneasy"),
        e("🙁", "Slightly frowning face: mild unhappiness"),
        e("☹️", "Frowning face: sad, unhappy"),
        e("😩", "Weary face: exhausted, dramatically fed up"),
        e("😫", "Tired face: at the end of your rope"),
        e("😪", "Sleepy face: drained, about to doze off"),
      ],
    },
    {
      id: "pleading",
      heading: "Pleading and vulnerable emoji",
      intro:
        "Sad-adjacent faces that ask for something: forgiveness, a favor, or comfort.",
      layout: "table",
      column: "Emoji",
      items: [
        e("🥺", "Pleading face: begging, vulnerable, puppy-dog eyes"),
        e("🫠", "Melting face: overwhelmed, embarrassed, 'I am done'"),
        e("🙏", "Folded hands: please, thank you, or hoping"),
        e("💔", "Broken heart: heartbreak"),
        e("🫂", "People hugging: comfort and support"),
      ],
    },
    {
      id: "combos",
      heading: "Crying emoji combos",
      intro:
        "Repeating or pairing emoji changes the tone from sad to dramatic or funny. Use sparingly.",
      layout: "grid",
      items: [
        e("😭😭😭", "Big dramatic crying, often playful"),
        e("😭🙏", "Crying and pleading: please, I am begging"),
        e("💔😢", "Heartbreak and tears"),
        e("🥹🤍", "Touched and grateful"),
        e("😢☔", "Gloomy, rainy-day sadness"),
        e("😞🌧️", "Down, with a rainy mood"),
      ],
    },
  ],

  "star-emoji": [
    {
      id: "emoji",
      heading: "Star emoji and their meanings",
      intro:
        "The emoji stars differ in glow and meaning: a plain star is a rating, a glowing star is a standout, and sparkles are decoration.",
      layout: "table",
      column: "Emoji",
      items: [
        e("⭐", "Star: favorite, rating, 'excellent'"),
        e("🌟", "Glowing star: shining, standout, special"),
        e("💫", "Dizzy star: stars swirling, dazed, whimsical"),
        e("✨", "Sparkles: magic, new, clean, emphasis"),
        e("🌠", "Shooting star: make a wish"),
        e("🤩", "Star-struck face: amazed, impressed, excited"),
        e("🌃", "Night with stars: a nighttime city under the sky"),
        e("🌌", "Milky Way: space, vastness, dreamy"),
      ],
    },
    {
      id: "symbols",
      heading: "Star symbols to copy and paste",
      intro:
        "These are text symbols, not emoji, so they stay the same color and size on every device and are safe for usernames, bios, and documents that reject pictures. For faces holding stars, see star kaomoji.",
      layout: "grid",
      items: [
        e("★", "Solid star"),
        e("☆", "Outline star"),
        e("✪", "Circled star"),
        e("✩", "Stress-outlined star"),
        e("✫", "Open-center black star"),
        e("✬", "Black-center star"),
        e("✭", "Outlined black star"),
        e("✮", "Heavy outlined star"),
        e("✯", "Pinwheel star"),
        e("✰", "Shadowed white star"),
        e("✦", "Four-pointed star"),
        e("✧", "Four-pointed outline star"),
        e("✶", "Six-pointed star"),
        e("✷", "Eight-pointed star"),
        e("⋆", "Small star operator"),
        e("⭒", "Small white star"),
      ],
    },
    {
      id: "strings",
      heading: "Star decorations and sparkle lines",
      intro:
        "Ready-made lines for bios, captions, and dividers. Paste one on its own line.",
      layout: "grid",
      items: [
        e("⋆｡°✩", "Soft star trail"),
        e("✧･ﾟ: *✧･ﾟ:*", "Classic sparkle line"),
        e("☆彡", "Star with a shooting-star tail"),
        e("✦•┈┈┈┈•✦", "Star divider"),
        e("⋆˚✿˖°", "Star and flower"),
        e("･ﾟ✧*:･ﾟ✧", "Fine sparkle"),
      ],
    },
    {
      id: "combos",
      heading: "Star emoji combos",
      intro:
        "Pairings that work in captions and bios: compliments, wishes, and calm night themes.",
      layout: "grid",
      items: [
        e("⭐✨", "Praise or a standout moment"),
        e("🌟💫", "Shining and whimsical"),
        e("✨🌙⭐", "Calm night sky"),
        e("🌠🙏", "Making a wish"),
        e("🤩⭐", "Amazed and impressed"),
        e("✨💖✨", "Sparkling affection"),
      ],
    },
  ],
};
