/**
 * Emoji cluster, phase 1 (2026-11-04): a hub plus three pages. Each page owns
 * one single-emoji intent; /emoji-combos keeps multi-emoji combinations, so the
 * two never compete. Registered in lib/site.ts (pages.push) and rendered by
 * CollectionView using data/emoji-collections.ts.
 */
import type { SitePage } from "@/lib/site";

export const emojiPages: SitePage[] = [
  {
    path: "/emoji-copy-paste",
    label: "Emoji",
    heading: "Emoji Copy and Paste",
    titleSegment: "Emoji Copy and Paste 😊 with Meanings",
    description:
      "Emoji copy and paste with meanings: smileys, hearts, crying faces, stars, and reaction emoji. Tap Copy, paste anywhere, and see what each emoji really means.",
    intro:
      "Popular emoji to copy and paste, each with a plain-English meaning so you pick the one that says what you actually mean. Tap Copy, then paste it into a chat, caption, or bio.",
    group: "browse",
    howToName: "How to copy and paste emoji",
    howTo: [
      "Find the emoji by mood in the tables below, and read the meaning column before you send.",
      "Tap Copy. The emoji is placed on your clipboard as text, so it works in any app.",
      "Paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone.",
    ],
    definition:
      "Emoji are small pictures encoded as text characters (Unicode). Copying and pasting them is the fastest way to use one when it is not on your keyboard, and the same emoji can look different on Apple, Google, Samsung, and Microsoft devices even though the meaning stays the same.",
    learnMore:
      "Most people pick an emoji by sight, but meaning is where messages go wrong. 🙂 can read as polite or as passive-aggressive, 👍 can feel curt in a work chat, and 😭 is often used for laughing rather than crying. The tables on this page add a short meaning next to every emoji so you can match the tone you intend.\n\nFor deeper coverage of the three most searched families, use the [heart emoji](/heart-emoji/) page (every heart color and what it signals), the [crying emoji](/crying-emoji/) page (from a single tear to sobbing, plus pleading and tired faces), and the [star emoji](/star-emoji/) page (emoji stars plus plain star symbols). If you prefer faces made from text characters, the [kaomoji library](/kaomoji-copy-paste/) has more than 24,000, and multi-emoji sets for bios live on the [emoji combos](/emoji-combos/) page.\n\nEmoji are not the only way to decorate a message. Text symbols such as ★ and ♡ are not pictures, so they look identical everywhere and are accepted in usernames and fields that reject emoji.",
    faqs: [
      {
        question: "How do I copy and paste an emoji?",
        answer:
          "Tap the Copy button next to the emoji, then paste it where you want it: Ctrl+V on Windows, Cmd+V on Mac, or press and hold in a text field on a phone and choose Paste. The emoji is copied as text, so it works in messages, social posts, documents, and most forms.",
      },
      {
        question: "Why does an emoji look different on my friend's phone?",
        answer:
          "Unicode defines each emoji's name and general intent, but Apple, Google, Samsung, Microsoft, and others each draw their own version. The meaning is the same, while colors and small details change, which is why a joke emoji can look slightly different to the recipient.",
      },
      {
        question: "Why does an emoji show as an empty box?",
        answer:
          "The device or app does not have a font for that emoji, usually because it is newer than the software. Update the operating system or app, or use an older emoji with a similar meaning, such as a basic smiley instead of a very new face.",
      },
      {
        question: "What is the difference between an emoji and a kaomoji?",
        answer:
          "An emoji is a picture character that looks different on each platform. A kaomoji (顔文字) is a face drawn from text characters, like (^_^), so it looks identical everywhere and can be pasted into usernames and bios where pictures are not allowed.",
      },
      {
        question: "Can I use emoji in usernames and bios?",
        answer:
          "Most apps allow emoji in bios and display names, but some usernames accept only letters and numbers. If emoji are rejected, a text symbol like ★ or ♡ often works, and the cute symbols page has plenty to copy.",
      },
    ],
    related: [
      "/heart-emoji",
      "/crying-emoji",
      "/star-emoji",
      "/emoji-combos",
      "/cute-symbols",
      "/emoticons",
    ],
  },

  {
    path: "/heart-emoji",
    label: "Heart emoji",
    heading: "Heart Emoji",
    titleSegment: "Heart Emoji ❤️ Copy & Paste: Color Meanings",
    description:
      "Heart emoji copy and paste: red, yellow, blue, black, white, pink and more. See what each heart color means, plus sparkling, broken, and text hearts.",
    intro:
      "Every heart emoji in one place, with what each color means so you do not send romance when you meant friendship. Tap Copy, then paste it into a message, caption, or bio.",
    group: "browse",
    howToName: "How to copy and paste a heart emoji",
    howTo: [
      "Choose the heart by feeling: red for romance, yellow for friendship, a sparkling heart for gushing, and a broken heart for sadness.",
      "Tap Copy under the heart you want. Text heart symbols (♡ ♥) at the bottom are not emoji and paste cleanly into usernames.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone. Use one or two hearts per message so it reads clearly.",
    ],
    definition:
      "The heart emoji family is a set of Unicode characters that express affection, support, and mood. The red heart (❤️) is the default for love, and the other colors and variants shift the tone toward friendship, calm, humor, or heartbreak.",
    learnMore:
      "A heart sent to the wrong person at the wrong color is one of the most common emoji mix-ups. As a rule of thumb, red hearts and heart-eyes faces feel romantic, while yellow, orange, green, and blue hearts read as friendly or supportive. A black heart often signals dark humor or an edgy aesthetic, and a white heart is used for peace, purity, and sometimes remembrance. These meanings are conventions that vary by community, so when it matters, add a word.\n\nSparkling (💖), revolving (💞), and beating (💓) hearts make the feeling louder, while 💔 and the mending heart (❤️‍🩹) cover heartbreak and recovery. Faces with hearts, such as 😍 and 🥰, show who is feeling the love, and heart hands (🫶) say 'I support you' without implying romance.\n\nIf you want a heart that looks identical on every device, use a text heart symbol such as ♡, which is also the Japanese heart symbol common in kaomoji. Faces built from these symbols are on the [heart kaomoji](/heart-kaomoji/) and [love kaomoji](/love-kaomoji/) pages, and for decorative lines and borders see [cute symbols](/cute-symbols/). Kawaii heart copy and paste options are in the text-heart row below.",
    faqs: [
      {
        question: "What do the different heart emoji colors mean?",
        answer:
          "Red is love and romance; orange and yellow lean toward friendship and warmth; green suggests nature, health, or sometimes jealousy; blue is trust and calm; purple is compassion or fandom; black is dark humor or an edgy aesthetic; white is peaceful or pure; brown is cozy; and pink, light blue, and grey are softer, gentler tones. These are common conventions, not official rules.",
      },
      {
        question: "Which heart emoji is best for a friend?",
        answer:
          "Yellow 💛 and orange 🧡 hearts read as friendly rather than romantic, and heart hands 🫶 or a purple heart 💜 work well for support. Use a red heart only when you mean romance or deep love.",
      },
      {
        question: "What is the difference between ❤️ and ♥️?",
        answer:
          "❤️ is the standard red heart emoji, while ♥️ is the card-suit heart and is often drawn flatter and with less shading. Meaning is nearly the same in casual chat, but ❤️ is the one most apps are designed around.",
      },
      {
        question: "How do I copy a heart that is not an emoji?",
        answer:
          "Use a text heart symbol such as ♡, ♥, or ❥ from the bottom section. These are plain text, so they look the same on every device and work in usernames and fields that reject emoji.",
      },
      {
        question: "What do 💞 and 💕 mean?",
        answer:
          "💕 (two hearts) is sweet, playful affection, while 💞 (revolving hearts) suggests a deeper bond with hearts circling each other. Both are warm and cheerful rather than intense.",
      },
      {
        question: "Where can I find faces with hearts made from text?",
        answer:
          "The heart kaomoji page has hundreds of text faces with hearts for eyes, hearts being sent, and heart hands, and the love kaomoji page covers romance and crushes specifically.",
      },
    ],
    related: [
      "/emoji-copy-paste",
      "/heart-kaomoji",
      "/love-kaomoji",
      "/emoji-combos",
      "/cute-symbols",
      "/crying-emoji",
    ],
  },

  {
    path: "/crying-emoji",
    label: "Crying emoji",
    heading: "Crying Emoji",
    titleSegment: "Crying Emoji 😭 Copy and Paste & Meanings",
    description:
      "Crying emoji copy and paste: 😭 😢 🥹 🥲 and more sad, tired, and pleading faces. Learn what each one means, including why 😭 often means laughing.",
    intro:
      "Crying, sad, and pleading emoji to copy and paste, with the meaning of each so the tone lands. Tap Copy and paste it into any chat.",
    group: "browse",
    howToName: "How to copy and paste a crying emoji",
    howTo: [
      "Pick by intensity: 😢 for one tear, 😭 for sobbing or overwhelmed, and 🥹 if you are touched rather than sad.",
      "Tap Copy under the emoji. The meaning column helps you avoid sending real sadness when you meant a joke.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone. Repeating 😭 raises the drama, so use it for playful messages.",
    ],
    definition:
      "Crying emoji are a set of face emoji that show tears and sadness at different intensities. 😢 is a single tear, 😭 is loud sobbing, 🥹 is holding tears back out of emotion, and 🥲 is a smile with a tear. In modern chat, 😭 is also widely used to mean laughing hard or being overwhelmed by something cute.",
    learnMore:
      "Tears are not always sadness. The face holding back tears (🥹) means touched, proud, or grateful; the smiling face with a tear (🥲) means bittersweet or relieved; and the loudly crying face (😭) is often used ironically to react to something very funny or adorable. Reading the context around the emoji is more reliable than reading the emoji alone.\n\nWhen you do want to show sadness, match the intensity. A single-tear 😢 says you are hurt or sad, a pensive 😔 or disappointed 😞 says let down without tears, and a weary 😩 or tired 😫 says exhausted and fed up. The pleading face 🥺 asks for something, such as forgiveness or a favor.\n\nIf you prefer text faces, the [crying kaomoji](/crying-kaomoji/) page has hundreds of tearful faces like (T_T) and (；＿；), and the [sad kaomoji](/sad-kaomoji/) page has quieter downcast ones. For hearts to pair with a comforting message, see [heart emoji](/heart-emoji/). Both are plain text and display the same on every device.",
    faqs: [
      {
        question: "What does the 😭 emoji actually mean?",
        answer:
          "Literally, loud sobbing. In everyday chat it is just as often used for laughing so hard you are crying, or for being overwhelmed by something cute, so read the context before assuming someone is upset.",
      },
      {
        question: "What is the difference between 😢 and 😭?",
        answer:
          "😢 shows one tear and a quieter sadness, hurt, or being moved. 😭 shows streaming tears and loud crying, and it is a stronger or more dramatic reaction, sometimes used jokingly.",
      },
      {
        question: "What does 🥹 mean?",
        answer:
          "The face holding back tears means touched, proud, or grateful, as if you are about to cry from something sweet. It is a happy emotion in most uses.",
      },
      {
        question: "What does 🥲 mean?",
        answer:
          "The smiling face with a tear shows bittersweet feelings, relief, or smiling through sadness. It is often used when something is good but also a little painful.",
      },
      {
        question: "What does 🥺 mean?",
        answer:
          "The pleading face means asking for something with puppy-dog eyes: forgiveness, a favor, or comfort. It can also mean you are feeling vulnerable or find something very cute.",
      },
      {
        question: "Where can I find crying faces made from text?",
        answer:
          "The crying kaomoji page has faces like (T_T) and (；＿；) built from text characters, and the sad kaomoji page covers quieter sadness without tears.",
      },
    ],
    related: [
      "/emoji-copy-paste",
      "/crying-kaomoji",
      "/sad-kaomoji",
      "/heart-emoji",
      "/emoji-combos",
    ],
  },

  {
    path: "/star-emoji",
    label: "Star emoji",
    heading: "Star Emoji",
    titleSegment: "Star Emoji ⭐ Copy and Paste + Symbols ★ ☆",
    description:
      "Star emoji copy and paste: ⭐ 🌟 ✨ 💫 🌠 with meanings, plus text star symbols (★ ☆ ✦ ✯) and sparkle lines for bios, usernames, and ratings.",
    intro:
      "Star emoji, star symbols, and sparkle lines to copy and paste, with a note on when each one fits. Tap Copy and paste it into a bio, rating, or message.",
    group: "browse",
    howToName: "How to copy and paste a star emoji or star symbol",
    howTo: [
      "Choose emoji (⭐ 🌟 ✨) for chats and captions, or text symbols (★ ☆ ✦) for usernames and bios that reject emoji.",
      "Tap Copy under the star you want, then check the meaning to be sure it reads the way you intend.",
      "Paste it with Ctrl+V, Cmd+V, or a long-press on a phone. Stars look good at both ends of a name or a line.",
    ],
    definition:
      "Star emoji are Unicode characters for stars, sparkles, and shooting stars, used for ratings, praise, wishes, and decoration. Separate from emoji, there is a large set of star symbols (★ ☆ ✦ ✯) that are plain text, so they match the surrounding font and work in usernames.",
    learnMore:
      "The emoji stars carry different meanings. A plain ⭐ is a rating or favorite, 🌟 is a glowing, standout star, 💫 is a dizzy swirl of stars, 🌠 is a shooting star for wishes, and ✨ is sparkles that add a touch of magic or emphasis. The star-struck face 🤩 shows amazement.\n\nWhen emoji are not welcome, such as in a username, a display name, or a plain-text document, use a text star symbol. ★ and ☆ are the solid and outline stars, ✦ and ✧ are four-pointed sparkles, and ✯ and ✰ are decorative stars. They do not change color between platforms, which makes them a safer choice for consistent branding.\n\nStars also appear in faces. The [star kaomoji](/star-kaomoji/) page has faces with stars for eyes and star-themed reactions, and the [sparkle kaomoji](/sparkle-kaomoji/) page covers glittering, magical faces. For multi-emoji sets built around stars, see [emoji combos](/emoji-combos/), and for more decorative symbols see [cute symbols](/cute-symbols/).",
    faqs: [
      {
        question: "What is the difference between ⭐ and 🌟?",
        answer:
          "⭐ is a plain star used for ratings and favorites. 🌟 is a glowing star with rays and suggests something standout or special. Many people use ⭐ for scoring and 🌟 for praise.",
      },
      {
        question: "How do I copy and paste a star symbol?",
        answer:
          "Tap Copy under any star in the symbols section, such as ★ or ✦, and paste it where you want it. These are text characters, so they work in usernames, bios, and documents that do not accept emoji.",
      },
      {
        question: "What does ✨ mean?",
        answer:
          "The sparkles emoji means magic, something new or clean, or emphasis. It is also used decoratively around a word to make it feel special, and it is not strictly a star.",
      },
      {
        question: "What does 💫 mean?",
        answer:
          "The dizzy emoji shows stars swirling around, meaning dazed, amazed, or whimsical. Many people also use it as a prettier alternative to a plain sparkle.",
      },
      {
        question: "Can I use star symbols in a username?",
        answer:
          "Often yes, but it depends on the platform. Many apps allow ★ or ✦ in display names while restricting usernames to letters and numbers, so test the name before you commit to it.",
      },
      {
        question: "Where can I find faces with stars?",
        answer:
          "The star kaomoji page has faces with star eyes and star accents, and the sparkle kaomoji page has glittering faces. Both are plain text you can copy and paste.",
      },
    ],
    related: [
      "/emoji-copy-paste",
      "/star-kaomoji",
      "/sparkle-kaomoji",
      "/cute-symbols",
      "/emoji-combos",
    ],
  },
];
