/**
 * Keyword-gap copy (SR Rankytools gap vs emojicombos.com, 2026-11-04; includes
 * missing keywords with 400+ monthly US searches).
 *
 * Rule for every entry: it must answer a real question a searcher has, with
 * specifics they can act on (how to type it, what it means, when to use it).
 * Word-order variants ("kaomoji sad" vs "sad kaomoji") are folded into one
 * substantive answer instead of getting their own thin FAQ. No new URLs: one
 * intent owner per page stays intact (docs/INTENT-PAGE-MAP.md). Merged into
 * `pages` at the bottom of lib/site.ts.
 */

export type GapCopy = {
  faqs?: { question: string; answer: string }[];
  learnMore?: string;
};

export const gapCopy: Record<string, GapCopy> = {
  "/japanese-emoticons": {
    learnMore:
      "People look for these faces under many names: emoticons Japanese style, Japan emoticons, JP emoticons, Japanese face emoji, or emote Japan. They all mean kaomoji (顔文字, literally \"face characters\"): upright faces built from punctuation, kana, and symbols rather than a picture. Because they are plain text, every one of them works as Japanese emoji copy and paste in a chat, a bio, or a comment box, and looks the same on iPhone, Android, Windows, and Mac.\n\nThe style differs from the Western :) in one way that matters when you choose a face: Japanese emoticons put the emotion in the eyes (^_^ is happy, T_T is crying, ¬_¬ is unimpressed) instead of the mouth, which is why the same mouth can carry very different moods.",
    faqs: [
      {
        question: "How do I copy and paste Japanese emoticons?",
        answer:
          "Tap Copy under any face on this page, then paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone. The whole string is copied, brackets and kana included, so you never have to retype tricky characters. If a rare glyph shows as an empty box in your app, choose a simpler face from the same grid.",
      },
      {
        question: "Is a Japanese face emoji the same as a Japanese emoticon?",
        answer:
          "In everyday search, mostly yes, but they are different things. A face emoji is a small picture whose look changes by phone brand. A Japanese emoticon (kaomoji) is text such as (^_^) or (´・ω・`), so it looks identical everywhere and can be pasted into usernames, bios, and documents where pictures are not allowed.",
      },
      {
        question: "How do I get a Japanese emoji keyboard or Japanese keyboard emoticons on my phone?",
        answer:
          "On iPhone, add the Japanese (Kana) keyboard in Settings, then tap the ^_^ key to open its emoticon list. On Android, the Gboard emoji panel has an emoticon tab, and on Windows you can press Win + period and open the kaomoji tab. If you would rather not install anything, copy and paste Japanese symbols and faces from this page instead.",
      },
      {
        question: "Which Japanese emoticons show sadness?",
        answer:
          "Faces with downturned mouths, tears, or drooping eyes, such as (T_T) and (；＿；), read as sad. Browse the quiet, downcast ones on the sad kaomoji page and the teary ones on the crying kaomoji page.",
      },
    ],
  },

  "/kaomoji-copy-paste": {
    faqs: [
      {
        question: "What does kaomoji mean?",
        answer:
          "Kaomoji (顔文字) is Japanese for \"face characters\". They are emoticons you read upright, with the eyes in the middle, such as (^_^), rather than Western :) which you read by tilting your head. The plural is also written kaomojis, and the faces are made from ordinary Unicode symbols, which is why a kaomoji symbol copies exactly as shown.",
      },
      {
        question: "How do I add kaomoji to my keyboard?",
        answer:
          "On iPhone, add the Japanese (Kana) keyboard and tap the ^_^ key. On Android, open the Gboard emoji panel and choose the emoticon tab. On Windows 10 and 11, press Win + period and open the kaomoji tab. None of these have as many faces as this site, so many people keep this page open and copy kaomoji faces from it instead.",
      },
      {
        question: "Why do some kaomoji show as boxes or look different in my app?",
        answer:
          "Rare characters depend on the app's font. If a face breaks, the text itself is unchanged: paste it somewhere else, or pick a simpler face built from common brackets and punctuation, which display in nearly every app.",
      },
    ],
  },

  "/cute-kaomoji": {
    faqs: [
      {
        question: "What makes a kaomoji cute or kawaii?",
        answer:
          "Cute kaomoji (also searched as kawaii kaomoji or kawaii faces) use big round or sparkly eyes, a small mouth, blushing cheeks, and soft accents like hearts, stars, or ribbons. Tap Copy on any face here and paste it into Discord, Instagram, a text, or a bio. For romantic versions go to the heart kaomoji page; for animal ears and paws, the cat and bunny pages.",
      },
    ],
  },

  "/heart-kaomoji": {
    learnMore:
      "Heart faces come in four builds, which are the same groups used on this page: heart eyes (♡ω♡), a heart being sent or tossed, hands holding a heart, and big stand-alone hearts. A Japanese heart symbol is simply ♡ or ♥ placed inside or beside the face, and \"kawaii hearts\" usually means the outlined ♡ rather than the solid ♥. Everything here pastes as ordinary text. If you want the picture version instead, the [heart emoji](/heart-emoji/) page lists every heart color with its meaning.",
    faqs: [
      {
        question: "How do I copy and paste a heart symbol or a heart face?",
        answer:
          "Tap Copy under any face with ♡ or ♥ and paste it where you want it. If you only want a heart with no face, use the 'Big heart kaomoji' group on this page and copy the lone symbol. Hearts are standard Unicode, so they work in bios, usernames, and captions on nearly every app.",
      },
      {
        question: "What is the difference between a heart kaomoji and an in-love kaomoji?",
        answer:
          "A heart kaomoji can carry any warm mood, including a thank-you or a hug for a friend. In-love kaomoji, such as the heart-eyed faces on the love kaomoji page, signal a crush or romance specifically, so pick the heart face that matches how close you are to the person.",
      },
    ],
  },

  "/love-kaomoji": {
    faqs: [
      {
        question: "Which kaomoji show someone in love?",
        answer:
          "Look for heart eyes (♡ω♡) or a blushing face with a heart beside it, and a kaomoji love heart trailing after the face for extra warmth. Use them for crushes, anniversaries, and goodnight texts to a partner. For friendly warmth with no romance, the heart kaomoji page has gentler faces.",
      },
    ],
  },

  "/happy-kaomoji": {
    faqs: [
      {
        question: "Which happy kaomoji should I use, and what about 'happy kamoji'?",
        answer:
          "'Kamoji' and 'koamoji' are common misspellings of kaomoji, and every smiling face here works whichever way you searched. Pick (＾▽＾) style faces for general cheer, a wide open-mouth grin for big excitement or a toothy teeth kaomoji for a cheeky smile, and a small closed-eye smile for calm contentment.",
      },
    ],
  },

  "/star-kaomoji": {
    learnMore:
      "If you want the emoji versions of these stars, such as ⭐, 🌟, and ✨ with their meanings, plus plain star symbols like ★ and ☆, see the [star emoji](/star-emoji/) page.",
    faqs: [
      {
        question: "How do I use star kaomoji, and can I copy and paste the star symbol alone?",
        answer:
          "Pick a face with a ★ or ✦, tap Copy, and paste it into a chat, bio, or username; stars look good at both ends of a name. To copy and paste only the star symbol, copy it from a face and delete the rest, or use the cute symbols page, which lists stars on their own.",
      },
    ],
  },

  "/sparkle-kaomoji": {
    faqs: [
      {
        question: "What are sparkle kaomoji, and is there an angel kaomoji?",
        answer:
          "Sparkle kaomoji (also searched as kaomoji sparkles) wrap a face in ✧, ✦, or ･ﾟ stars to show excitement, magic, or a compliment. Angel faces work the same way: a halo and soft sparkles around an innocent face, so browse this grid for sparkly faces and copy the one that fits.",
      },
    ],
  },

  "/uwu-kaomoji": {
    faqs: [
      {
        question: "What does the u w u face mean and how do I type it?",
        answer:
          "UwU (also written u w u) is an affectionate, soft, slightly shy face: the u's are closed happy eyes and the w is a small smile. Use it when you are touched, being sweet, or teasing gently. Type the letters or copy and paste UwU from this page; the plain-text version is identical in any app.",
      },
      {
        question: "Where can I find UwU symbols like (ᵘʷᵘ)?",
        answer:
          "UwU symbols, the superscript and bracketed variations such as (ᵘʷᵘ) and (◡ ω ◡), are in the grid here. They use characters that are hard to type, so use the Copy button to paste them exactly.",
      },
    ],
  },

  "/lenny-face": {
    faqs: [
      {
        question: "How do I copy and paste the Lenny face correctly?",
        answer:
          "Tap Copy under ( ͡° ͜ʖ ͡°) at the top, or choose another Lenny face to copy from the variations below. Use the button instead of retyping: the Lenny face includes invisible combining marks above the eyes that are easy to lose when typing, which is why it often looks broken when someone rebuilds it by hand.",
      },
    ],
  },

  "/flower-kaomoji": {
    faqs: [
      {
        question: "What is a flower kaomoji, and is there a flower-in-hair style?",
        answer:
          "A kaomoji flower is a face holding, wearing, or surrounded by a flower, such as (◕‿◕✿), and it signals a soft, springtime, or shy-sweet mood. Faces with a ✿ beside the head read as a flower in hair. Scroll the grid, then tap Copy on the one you like.",
      },
    ],
  },

  "/bunny-kaomoji": {
    faqs: [
      {
        question: "Are rabbit kaomoji and bunny kaomoji the same, and where can I copy bunny ears?",
        answer:
          "Yes: rabbit and bunny kaomoji are two names for the same long-eared faces, and this page lists them all. Bunny ears copy and paste from any face in the grid: tap Copy and paste it anywhere you can type. Use them for playful, soft, or Easter-themed messages.",
      },
      {
        question: "Can I use bunny kaomoji in Roblox?",
        answer:
          "Usually yes in chat, since they are plain text. Roblox filters some symbols in usernames and display names, so test a face in chat first. The Roblox kaomoji page lists faces chosen for game chat.",
      },
    ],
  },

  "/dog-kaomoji": {
    faqs: [
      {
        question: "What does a kaomoji dog look like, and how do I copy and paste dog faces?",
        answer:
          "Dog faces use floppy ears and a snout, for example U・ᴥ・U, with puppy versions that add big eyes and a wagging tail. Tap Copy under any face to paste it. For usernames, choose a short face built from common symbols, since some apps reject rare characters.",
      },
    ],
  },

  "/bowing-kaomoji": {
    faqs: [
      {
        question: "What does a bowing emoticon mean?",
        answer:
          "A bowing emoticon such as m(_ _)m or orz shows a person bowing or kneeling, and it expresses thanks, an apology, or respect. Use m(_ _)m for a polite thank-you or sorry, and orz when you want to show defeat or humble embarrassment. Bowing emoji text of this kind pastes anywhere.",
      },
    ],
  },

  "/angry-kaomoji": {
    faqs: [
      {
        question: "Which kaomoji show that someone is mad?",
        answer:
          "Mad kaomoji use slanted eyebrows, clenched or jagged mouths, and flame or vein-mark accents, and the intensity ranges from a mild annoyed face to full rage. Copy a small, tight one for irritation and a larger flaming one for real anger. Table-flip and pout faces cover the playful versions.",
      },
    ],
  },

  "/confused-kaomoji": {
    faqs: [
      {
        question: "Which confused text faces can I copy and paste?",
        answer:
          "Confused faces use crooked eyes and a flat or wavy mouth, often with a question mark or sweat drop, such as faces with ？ beside them. Add a question to your message when you do not understand something, and use the sweat-drop version for an awkward 'um...' moment.",
      },
    ],
  },

  "/thank-you-kaomoji": {
    faqs: [
      {
        question: "How do I say thank you kawaii style?",
        answer:
          "Pair a bow or a smile with a small heart or sparkle: a closed-eye smile with ♡ reads as warm and sincere, and a bowing face like m(_ _)m reads as formal. Copy one into your message after the words, not instead of them.",
      },
    ],
  },

  "/sorry-kaomoji": {
    faqs: [
      {
        question: "Which sorry emoticon should I use, and which kaomoji plead?",
        answer:
          "For a polite apology use a bowing face like m(_ _)m. For a sincere, teary one use a face with watery eyes such as (；д；). Plead kaomoji use big eyes and clasped hands to ask for forgiveness or a favor; choose a light one for a small slip and a plain bow when the apology is serious.",
      },
    ],
  },

  "/smug-kaomoji": {
    faqs: [
      {
        question: "Which kaomoji work for a smug 'heh' moment?",
        answer:
          "Smug faces have a lopsided grin and half-lidded eyes, as in (¬‿¬). Add 'heh' after it for a playful, self-satisfied tone when you win a debate, get a compliment, or tease a friend.",
      },
    ],
  },

  "/sad-kaomoji": {
    faqs: [
      {
        question: "What is the difference between sad faces and crying faces?",
        answer:
          "Sad kaomoji (also searched as kaomoji sad or sad Japanese emoticons) are quiet: drooping eyes, a small frown, a sigh. Crying kaomoji add tears. Choose a sad face for disappointment and a crying face for real tears; both are one tap to copy, and the crying page has the teary ones.",
      },
    ],
  },

  "/crying-kaomoji": {
    learnMore:
      "Prefer a picture emoji? The [crying emoji](/crying-emoji/) page explains 😭, 😢, 🥹, and 🥲, including why 😭 is often used for laughing.",
    faqs: [
      {
        question: "Which crying kaomoji fit different kinds of tears?",
        answer:
          "Kaomoji crying faces range from a single tear to streaming eyes. Use a soft teary face for moved or touched, a streaming (T_T) style for sadness, and a happy-cry face with a smile for joyful tears. For sadness without tears, use the sad kaomoji page.",
      },
    ],
  },

  "/kiss-kaomoji": {
    faqs: [
      {
        question: "Which kaomoji kiss should I send?",
        answer:
          "A kaomoji kiss pairs a puckered mouth or a trailing heart with a closed-eye face. Use a small cheek-kiss face for friends and a heart-eyed one for a partner. For other romantic options see the love and valentine kaomoji pages.",
      },
    ],
  },

  "/sleepy-kaomoji": {
    faqs: [
      {
        question: "Which sleep kaomoji should I use for goodnight messages?",
        answer:
          "Closed-eye faces with 'zzz' trailing after them mean asleep, and half-closed eyes with a yawn mean tired. Paste one at the end of a goodnight text, or use the sleepy face when you are tired but still replying.",
      },
    ],
  },

  "/wink-kaomoji": {
    faqs: [
      {
        question: "When should I use a winking kaomoji?",
        answer:
          "A winking face (also searched as wink kaomoji) shows a joke, a hint, or light flirting: use it after a playful line so it reads as friendly rather than serious. Copy any from the grid, and choose the tongue-out or heart version for extra playfulness.",
      },
    ],
  },

  "/shy-kaomoji": {
    faqs: [
      {
        question: "What are blush kaomoji, and when should I use them?",
        answer:
          "Blush kaomoji (also searched as blushing kaomoji) add cheek lines or hatch marks such as /// so the face reads as embarrassed, flattered, or flustered. Use one after a compliment or an awkward confession; the heart version fits a crush.",
      },
    ],
  },

  "/winter-kaomoji": {
    faqs: [
      {
        question: "Is there a snowman kaomoji?",
        answer:
          "Yes. Snowman kaomoji use a round body and a ☃ symbol, and they pair with snowflakes and scarves for winter greetings. Find them in the winter grid and tap Copy.",
      },
    ],
  },

  "/birthday-kaomoji": {
    faqs: [
      {
        question: "Where do I find party kaomoji for celebrations?",
        answer:
          "This page has party kaomoji for birthdays: cheering faces, confetti, cake, and balloons. Paste one after your greeting, and pick a larger confetti face for a close friend and a simple cheering one for a coworker.",
      },
    ],
  },

  "/emoji-combos": {
    learnMore:
      "Looking for a single emoji and its meaning rather than a set? Start with [emoji copy and paste](/emoji-copy-paste/), or go straight to [heart emoji](/heart-emoji/), [crying emoji](/crying-emoji/), or [star emoji](/star-emoji/).",
    faqs: [
      {
        question: "What are emojis combined, and how do I use cute emoji combos?",
        answer:
          "Emojis combined means several emoji joined in a row to express a mood or a tiny scene, such as sparkles plus a heart for a sweet compliment. Copy a combo from this page and paste it into a bio, caption, or message; keep it to one combo per message so it still reads clearly.",
      },
    ],
  },

  "/cute-symbols": {
    faqs: [
      {
        question: "How do I copy and paste symbols, hearts, and stars?",
        answer:
          "Tap Copy on any symbol or decorated line, then paste it anywhere you can type. Copy paste symbols such as stars, hearts, and arrows work in bios, usernames, and captions on most apps, but some platforms strip rare ones, so test a name before you commit to it.",
      },
    ],
  },

  "/text-faces": {
    faqs: [
      {
        question: "What is a smiley face in text, and how is it different from kaomoji?",
        answer:
          "A text smiley face is built from keyboard characters, like :) or (^_^), instead of a picture emoji. Western ones are read sideways and Japanese kaomoji are read upright, but both are plain text, so they display the same on any device.",
      },
    ],
  },
};
