/**
 * Guides added 2026-11-15 from Semrush keyword research: emoji kitchen,
 * baka meaning, emoji meanings. Spread into `guides` in lib/guides.ts.
 */
import type { Guide } from "@/lib/guides";

export const guides2: Guide[] = [
  {
    slug: "emoji-kitchen",
    title: "Emoji Kitchen: How to Mix Two Emoji Into One Sticker",
    shortTitle: "Emoji Kitchen",
    titleSegment: "Emoji Kitchen: How to Mix Emoji on Android",
    description:
      "How to use Emoji Kitchen to mix two emoji into one sticker, where it works, why some pairs fail, and what to do when you want a text version instead.",
    intro:
      "Emoji Kitchen lets you pick two emoji and get one new sticker that blends them. It is a feature of Google's keyboard, so there is nothing to download except the keyboard itself. This guide shows how to use it, why some pairs do nothing, and how to share the result.",
    face: "(๑•̀ㅂ•́)و✧",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/emoji-combos", "/emoji-copy-paste", "/funny-emoji", "/cute-emoji"],
    sections: [
      {
        id: "what-it-is",
        heading: "What Emoji Kitchen does",
        blocks: [
          {
            type: "p",
            text: "It takes two emoji and draws one picture that mixes them. A cat and a heart might become a cat with heart eyes, and a skull and a smile might become a laughing skull. The results are stickers, not new emoji, so they are sent as small images.",
          },
          {
            type: "p",
            text: "Only some pairs are supported. The mixes are drawn by hand, so a brand-new emoji often has to wait for artwork before it can be combined with others.",
          },
        ],
      },
      {
        id: "how-to",
        heading: "How to use it",
        blocks: [
          {
            type: "steps",
            items: [
              "Install Gboard from the Play Store on Android (iPhone support varies), then add it in your keyboard settings.",
              "Open any chat and switch to the Gboard emoji panel.",
              "Tap one emoji, then look at the suggestions bar. If a mix exists, stickers appear there.",
              "Tap a second emoji to see more mixes, or tap a sticker to send it.",
            ],
          },
          {
            type: "tip",
            text: "If you see no stickers, the pair is not supported. Try the same emoji with a different partner, such as a face with a heart, an animal, or a food.",
          },
        ],
      },
      {
        id: "problems",
        heading: "Why it does not work for some people",
        blocks: [
          {
            type: "list",
            items: [
              "The app you are typing in does not accept images. Stickers work best in messaging apps.",
              "Your keyboard is out of date. Update Gboard and try again.",
              "The pair you picked has no artwork yet.",
              "Sticker suggestions are turned off in the keyboard's emoji settings.",
            ],
          },
        ],
      },
      {
        id: "text-version",
        heading: "When you want something you can copy and paste",
        blocks: [
          {
            type: "p",
            text: "A sticker is a picture, so you cannot paste it into a username or bio. If you want a mix you can copy as text, use a set of emoji written side by side. Our [emoji combos](/emoji-combos/) page has ready-made sets, and the [emoji copy and paste](/emoji-copy-paste/) page has single emoji with meanings.",
          },
          {
            type: "p",
            text: "Text faces are another option. They are built from characters, look the same on every device, and can be pasted anywhere. Start with the [kaomoji copy and paste](/kaomoji-copy-paste/) library.",
          },
        ],
      },
    ],
    howTo: {
      name: "How to use Emoji Kitchen",
      steps: [
        "Install and enable Gboard.",
        "Open the emoji panel in any chat.",
        "Tap two emoji to see mixed stickers in the suggestions bar.",
        "Tap a sticker to send it.",
      ],
    },
    faqs: [
      { question: "Is Emoji Kitchen free?", answer: "Yes. It is part of the free Gboard keyboard." },
      {
        question: "Can I use Emoji Kitchen on iPhone?",
        answer: "It can work if you add Gboard as a keyboard, but availability varies by app and version. Stickers are sent as images, so check that the app you are using accepts them.",
      },
      {
        question: "Why does my emoji pair show nothing?",
        answer: "That pair has no mix yet. Only supported pairs make stickers, so try a different partner.",
      },
      {
        question: "Can I copy an Emoji Kitchen sticker as text?",
        answer: "No. It is an image, not a character. For text you can paste into a bio, use emoji combos or kaomoji instead.",
      },
    ],
  },
  {
    slug: "baka-meaning",
    title: "Baka Meaning: What This Japanese Word Really Says",
    shortTitle: "Baka meaning",
    titleSegment: "Baka Meaning in Japanese + Kaomoji to Copy",
    description:
      "What baka means in Japanese, how rude it really is, how it is used in anime, and baka kaomoji like (｀Δ´)! that you can copy and paste.",
    intro:
      "Baka (馬鹿) is a Japanese word that means fool or idiot. It can be a joke between friends or a real insult, depending on the tone and who says it. This guide explains how to read it, how it differs from similar words, and which faces go with it.",
    face: "(｀Δ´)！",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/pout-kaomoji", "/angry-kaomoji", "/japanese-emoticons", "/uwu-kaomoji"],
    sections: [
      {
        id: "meaning",
        heading: "What the word means",
        blocks: [
          {
            type: "p",
            text: "The word is written 馬鹿 in kanji, or ばか and バカ in kana. It means fool, idiot, or silly, and it can also describe an idea, as in \"a silly plan\". It is very common, but it is not polite.",
          },
          {
            type: "table",
            head: ["Word", "Meaning", "How strong it is"],
            rows: [
              ["baka", "Fool, idiot", "Mild between friends, rude from strangers"],
              ["aho", "Fool, idiot (Kansai area)", "Often lighter than the standard word in Osaka"],
              ["bakayaro", "You fool", "Strong, an angry insult"],
              ["bakkari", "Only, nothing but", "Not an insult, only a similar sound"],
            ],
          },
        ],
      },
      {
        id: "anime",
        heading: "How it is used in anime",
        blocks: [
          {
            type: "p",
            text: "In anime, a shy character often hides affection behind annoyance. The \"tsundere\" type shouts \"baka!\" and then blushes. Fans copy the line in chats, usually as a joke and not as a real insult.",
          },
          {
            type: "p",
            text: "Many people first learn the word from anime. If you use it in real life, say it softly and only with people who know you well.",
          },
        ],
      },
      {
        id: "faces",
        heading: "Faces to copy and paste",
        blocks: [
          {
            type: "faces",
            items: [
              { face: "(｀Δ´)！", name: "Angry shout", note: "A sharp, annoyed shout." },
              { face: "(｡•́︿•̀｡)", name: "Hurt and annoyed", note: "Annoyed but a bit sad." },
              { face: "(〃>▽<〃)", name: "Blushing tease", note: "The tsundere face: annoyed and embarrassed." },
              { face: "(￣^￣)", name: "Huffy sulk", note: "A small sulk with arms crossed." },
              { face: "(◞‸◟ )", name: "Sorry face", note: "Used after you tease too much." },
            ],
          },
          {
            type: "p",
            text: "More faces with the same mood are on the [pout kaomoji](/pout-kaomoji/) and [angry kaomoji](/angry-kaomoji/) pages, and the [Japanese emoticons](/japanese-emoticons/) page shows how the style started.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is it a bad word?",
        answer: "It is rude from a stranger, but mild between friends. Tone matters more than the word.",
      },
      {
        question: "What is the difference between baka and aho?",
        answer: "Both mean fool. The first is common across Japan, and aho is the usual word in the Kansai area, where it sounds lighter.",
      },
      {
        question: "What does it mean in anime?",
        answer: "It usually means fool, said by an annoyed or shy character. Fans use it as a playful tease.",
      },
      {
        question: "Can I use it as a joke?",
        answer: "Yes, with friends who know the word and your tone. With strangers or at work, avoid it.",
      },
    ],
  },
  {
    slug: "emoji-meanings",
    title: "Emoji Meanings: 20 Emoji People Often Misread",
    shortTitle: "Emoji meanings",
    titleSegment: "Emoji Meanings: 20 Emoji Often Misread",
    description:
      "Plain-English emoji meanings for 20 emoji that people often misread, from 🙂 and 👍 to 😭 and 💀, and why the same emoji can mean different things.",
    intro:
      "The picture on an emoji does not always match how people use it. A smile can sound cold, a thumbs up can sound rude, and a crying face can mean laughter. Below are twenty emoji that cause the most mix-ups, with the meaning most people take from each.",
    face: "(・・?)",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/emoji-copy-paste", "/crying-emoji", "/heart-emoji", "/star-emoji"],
    sections: [
      {
        id: "table",
        heading: "Twenty emoji and what they usually mean",
        blocks: [
          { type: "p", text: "Use this emoji meaning list as a quick check before you send a message that could be misread." },
          {
            type: "table",
            head: ["Emoji", "Picture", "How people read it"],
            rows: [
              ["🙂", "Slight smile", "Polite, or mildly sarcastic"],
              ["🙃", "Upside-down face", "Irony or a joke"],
              ["👍", "Thumbs up", "Okay, though it can feel short at work"],
              ["😭", "Loud crying", "Sadness, or laughing very hard"],
              ["💀", "Skull", "\"That killed me\", so very funny"],
              ["😅", "Smile with sweat", "Relief or an awkward moment"],
              ["🥺", "Pleading face", "Asking nicely, or finding something cute"],
              ["😊", "Smiling eyes", "Warm and sincere"],
              ["🤝", "Handshake", "Agreement or a deal"],
              ["🙏", "Folded hands", "Thanks or please, not always prayer"],
              ["🔥", "Fire", "Great, impressive"],
              ["✨", "Sparkles", "Emphasis, something new or clean"],
              ["😏", "Smirk", "Smug or flirty"],
              ["🫠", "Melting face", "Embarrassed or overwhelmed"],
              ["🗿", "Moai", "Deadpan, unbothered"],
              ["🤡", "Clown", "Calling something foolish"],
              ["💯", "Hundred", "Fully agree"],
              ["🥲", "Smile with a tear", "Bittersweet or relieved"],
              ["😬", "Grimace", "Awkward or nervous"],
              ["🤔", "Thinking", "Doubt or deep thought"],
            ],
          },
        ],
      },
      {
        id: "why",
        heading: "Why one emoji meaning can change",
        blocks: [
          {
            type: "list",
            items: [
              "Age: younger users often read 💀 and 😭 as laughter, while older users read them literally.",
              "Culture: gestures like 👍 and 🙏 change meaning across countries.",
              "Platform: each company draws its own version, so a smile can look warmer on one phone than another.",
              "Group habits: friend groups invent their own meanings over time.",
            ],
          },
          { type: "tip", text: "When the message matters, add a few words. Emoji set the tone, but words carry the meaning." },
        ],
      },
      {
        id: "more",
        heading: "Where to find more",
        blocks: [
          {
            type: "p",
            text: "Single emoji grouped by mood are on [emoji copy and paste](/emoji-copy-paste/). For deeper detail, see the [heart emoji](/heart-emoji/), [crying emoji](/crying-emoji/), and [star emoji](/star-emoji/) pages. If you prefer faces made from text, which look the same everywhere, try [kaomoji copy and paste](/kaomoji-copy-paste/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why does 🙂 sometimes feel rude?",
        answer: "A slight smile is polite, but without smiling eyes it can read as cold or sarcastic. Use 😊 when you want to sound warm.",
      },
      {
        question: "Does 💀 mean someone is upset?",
        answer: "Usually not. Most people use it to say something was so funny it killed them.",
      },
      {
        question: "How can I check an emoji meaning?",
        answer: "Look at how the person uses it in the same chat, and check a list such as the table above. When in doubt, add words.",
      },
    ],
  },
];
