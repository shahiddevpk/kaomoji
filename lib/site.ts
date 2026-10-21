import { cache } from "react";

// Lives in its own module so client code (lib/utils) can use it without
// bundling every page's copy from this file.
export { siteConfig } from "@/lib/site-config";

export type PageGroup = "hub" | "browse" | "trust";

export type SitePage = {
  path: string;
  label: string;
  /** Visible H1 - matches primary intent, not a shared template. */
  heading: string;
  /**
   * Document title segment before `| Paste Kaomoji`.
   * Hub uses a full absolute title (includes brand) instead.
   */
  titleSegment: string;
  description: string;
  intro: string;
  group: PageGroup;
  /** Category key for primary grid filter. Omitted pages show popular or full mix. */
  category?: string;
  /**
   * Tag filter (ANY match). Use instead of category for mood/tag browse pages.
   * A page uses either category or tags, not both.
   */
  tags?: string[];
  /** Parent browse path for nested subcategory IA (breadcrumbs + chips). */
  parentPath?: string;
  /** Optional robots override; omit for index,follow. Pagination n>=2 uses noindex in pageMetadata. */
  robots?: { index?: boolean; follow?: boolean };
  /** Short how-to / explainer bullets under the grid intro (unique per page). */
  howTo?: string[];
  /**
   * In-page "browse by type" sections (page 1 only). Each face lands in the
   * first group whose glyph it contains; the full grid stays below.
   */
  faceGroups?: { id: string; heading: string; glyphs: string[] }[];
  /** HowTo JSON-LD name override (non-kaomoji collection pages). */
  howToName?: string;
  /** Optional FAQ pairs for FAQPage JSON-LD + on-page FAQ section (page 1 only). */
  faqs?: { question: string; answer: string }[];
  /** Short unique "what is…" block when set. */
  definition?: string;
  /** Extra educational paragraph(s); multiline with \n\n. */
  learnMore?: string;
  related: string[];
};

export const pages: SitePage[] = [
  {
    path: "/",
    label: "Home",
    heading: "Kaomoji",
    titleSegment: "Kaomoji Copy and Paste — Japanese Text Faces | Paste Kaomoji",
    description:
      "Browse 24,000+ kaomoji by mood: cute (◕‿◕), happy (＾▽＾), cat, sad, Lenny face, shrug ¯\\_(ツ)_/¯, and more. One tap copies it into Discord, WhatsApp, or any chat.",
    intro:
      "Over 24,000 Japanese text faces sorted into 50+ moods and themes — from cute (◕‿◕✿) and crying (╥﹏╥) to the Lenny face and shrug. Tap any face to copy it, then paste it into chat, a caption, or your bio.",
    group: "hub",
    howTo: [
      "Browse the mood tiles — cute, happy, cat, sad, and more — or search by name to find the right faces.",
      "Tap Copy on any kaomoji. The full character string lands on your clipboard instantly.",
      "Switch to Discord, WhatsApp, Instagram, SMS, or any chat and paste with Ctrl+V, Cmd+V, or long-press Paste.",
    ],
    definition:
      "Kaomoji are Japanese-style text faces made from punctuation, symbols, and letters so feeling shows up in plain text. They travel as normal characters, so they work in chats and comments where picture stickers sometimes fail or look inconsistent.\n\nPaste Kaomoji groups them by mood and format so you can find a face fast, copy it in one tap, and drop it into Discord, WhatsApp, Slack, SMS, or a comment. Because they are editable text, you can type around them or tweak a character when you want a custom twist.",
    learnMore:
      "Most kaomoji are built from punctuation and Unicode symbols rather than a single picture glyph. Eyes usually carry the mood; arms, cheeks, and sweat marks add motion or tone. The result is a face that travels as editable text — you can type around it, tweak a character, or drop it into any field that accepts typing.\n\nCategories on this site exist so you can browse kaomoji faces by intent instead of scrolling one giant unsorted dump. Multiline faces need a font and chat field that preserve line breaks, or the stack can collapse into one messy row.\n\nHow to read a kaomoji: look at the eyes first. Wide circles (°o°) signal shock; happy crescents (＾▽＾) signal joy; downcast lines (╥﹏╥) signal sadness. Arms formed by characters like \\, /, ง, and ε= show whether a figure is waving, fighting, or running. Cheek marks and sweat drops add blush, nerves, or embarrassment. The pattern is consistent enough that a new face reads at a glance once you know the grammar.\n\nKaomoji vs emoji: emoji are single picture glyphs rendered by a font — they can look completely different on iPhone vs Android vs Windows. Kaomoji are assembled from ordinary punctuation and Unicode letters, so they look the same everywhere text appears. They are also editable: copy one and change a character to shift the mood, something you cannot do with a picture glyph.\n\nWhere kaomoji paste cleanly: Discord, WhatsApp, Instagram captions and bios, Twitter/X, TikTok bios, Slack, Telegram, SMS, and most email clients all handle single-line faces without issues. Multiline stacked art needs a field that preserves line breaks — notes apps and long bio fields usually work; tight single-line inputs collapse the stack into one messy row.\n\nKaomoji outside Japan: the format spread beyond Japan through early forum culture and later through Discord and Tumblr, where the expressive range — from a blush to a full table-flip gag — gave them staying power that emoji could not replace. A hand-assembled text face feels intentional in a way a single-tap sticker does not.\n\nCommon spellings: kaomoji (顔文字) is the standard romanization. Frequent alternate spellings include kaomojis, kamoji, kaomiji, kaimoji, koamoji, kaoemoji, and kaemoji — all point to the same family of Japanese-style text faces.",
    faqs: [
      {
        question: "What is a kaomoji?",
        answer: "A kaomoji is a text face built from keyboard characters, often read sideways or upright, that shows an emotion or reaction. Classic examples include happy (^_^), sad (T_T), and surprised (⊙_⊙).",
      },
      {
        question: "Is it kaomoji or kaomojis?",
        answer: "Both spellings are common in English. Kaomoji is the usual singular; kaomojis often means the category or a bunch of faces. They refer to the same text-face family on this site—one library, not separate pages for the plural.",
      },
      {
        question: "I searched kamoji, kaomojis, or another spelling—is that the same thing?",
        answer: "Yes. All of these are common alternate spellings: kamoji, kaomojis, kaomiji, kaimoji, koamoji, kaoemoji, kaemoji, and kao emoji. They all refer to the same Japanese-style text faces. Start from this hub or Kaomoji Copy and Paste instead of hunting typo-only URLs.",
      },
      {
        question: "What is the difference between kaomoji and emoji?",
        answer: "Emoji are picture characters from a font or OS (like 😀). Kaomoji are assembled from ordinary punctuation and letters. Kaomoji usually look the same across apps; emoji can change style by phone or platform.",
      },
      {
        question: "How do I copy and paste kaomoji?",
        answer: "Open a face on this site, tap Copy, then paste with your keyboard shortcut or long-press Paste in the app. On phones, leave the page open or keep the face in your clipboard until you switch to the chat.",
      },
      {
        question: "What do Japanese emoticons mean?",
        answer: "Most Japanese text faces map to a mood: eyes and mouth show joy, tears, anger, love, or shyness. Context matters. The same shape can read playful in a meme chat and sharp in a serious thread.",
      },
      {
        question: "Are text faces the same as kaomoji?",
        answer: "“Text faces” is the broad English label for any face made of characters. Kaomoji usually means the Japanese-rooted style (often with fuller eyes, cheeks, or arms). Many people use the words interchangeably when browsing copy-paste lists.",
      },
      {
        question: "Any tips for pasting kaomoji on mobile?",
        answer: "Copy from the site, switch to your chat app, then long-press the message field and choose Paste. If a multiline face breaks, paste into a note first to confirm every line copied, then send. Avoid apps that strip special Unicode if a face looks empty.",
      },
      {
        question: "Where can I find star kaomoji?",
        answer: "Open the Star Kaomoji page for ★ and ✦ text faces. For glitter and shine effects, try Sparkle Kaomoji instead. Both pages have one-tap copy.",
      },
      {
        question: "What kaomoji should I use for laughing or giggling?",
        answer: "Open Giggling Kaomoji for the full spectrum of laugh faces, from quiet giggles (≧▽≦) to burst laughs. Happy Kaomoji has cheers and smiles if you need something less specific.",
      },
    ],
    related: [],
  },
  {
    path: "/cute-kaomoji",
    label: "Cute",
    heading: "Cute Kaomoji",
    titleSegment: "Cute Kaomoji & Kawaii (◕‿◕)",
    description:
      "Cute kaomoji and kawaii faces (◕‿◕) to copy and paste: soft blushes, tiny hugs, gentle charm. 100+ adorable Japanese text faces for Discord, WhatsApp, and chat.",
    intro:
      "Soft kawaii smiles, blush, and tiny hugs ready to copy and paste in one tap. Cute owns the gentle aesthetic mood — cheers, waves, and big grins live on happy kaomoji so the two stay distinct.",
    group: "browse",
    category: "cute",
    faceGroups: [
      { id: "blush", heading: "Blushing cute kaomoji", glyphs: ["⁄", "///", "〃", "˶", "*´", "♡"] },
      { id: "flower", heading: "Flower & aesthetic cute kaomoji", glyphs: ["✿", "❀", "ꕤ", "🌸", "𐙚"] },
      { id: "animal", heading: "Cute animal kaomoji", glyphs: ["ʕ", "ฅ", "ᴥ", "ᐢ", "૮", "ω"] },
      { id: "sparkle", heading: "Sparkly cute kaomoji", glyphs: ["✧", "☆", "⋆", "✩", "˚"] },
    ],
    howTo: [
      "Scan for the softness level you want — blushing smile, tiny wave, or gentle kawaii pose.",
      "Tap Copy; the face pastes as editable plain text, no special app needed.",
      "Paste after a compliment, a sweet greeting, or any message that should feel warm.",
    ],
    definition:
      "This set favors soft eyes, blush, and gentle smiles meant to feel warm on sight. Use them when you want sweetness without a long written compliment.",
    learnMore:
      "Kawaii (可愛い) culture elevated cuteness from a visual style into a social language in 1970s Japan. Cute kaomoji follow the same logic as kawaii design: oversized eyes, miniaturized features, and soft round shapes trigger warmth instinctively. The faces work across language barriers because the visual cues — wide eyes, small mouth, gentle blush — are emotionally legible to almost any viewer without any cultural context.",
    faqs: [
      {
        question: "What makes a kaomoji “cute” instead of just happy?",
        answer: "Cute sets lean soft: round eyes, blush marks, tiny mouths, or shy sparkles. Happy can be big and loud; cute stays gentle and approachable.",
      },
      {
        question: "Are cute kaomoji okay for work chats?",
        answer: "Soft smiles and tiny waves usually read friendly. Skip overly flirty or baby-talk faces in formal threads, and match whatever tone your team already uses.",
      },
      {
        question: "How do I pick one cute face fast?",
        answer: "Scan for the eye style you like (big, sparkly, or half-closed), then copy the first face that fits the message length you need. Shorter faces paste cleaner in tight SMS fields.",
      },
      {
        question: "Do cute kaomoji work in usernames or bios?",
        answer: "Often yes, if the platform allows special characters. Test paste once. Some sites strip unusual symbols from display names.",
      },
      {
        question: "Is this the page for cute kaomoji copy and paste?",
        answer: "Yes. This URL owns the cute mood grid—soft kawaii faces with one-tap copy. Use Kaomoji Copy and Paste only when you want a general popular list without the cute filter.",
      },
    ],
    related: ["/happy-kaomoji", "/cat-kaomoji", "/heart-kaomoji", "/shy-kaomoji", "/kaomoji-copy-paste", "/uwu-kaomoji"],
  },
  {
    path: "/happy-kaomoji",
    label: "Happy",
    heading: "Happy Kaomoji",
    titleSegment: "Happy Kaomoji (＾▽＾)",
    description:
      "Happy kaomoji (＾▽＾) copy and paste for cheers, waves, and big grins. Upbeat faces with one-tap copy, not soft kawaii blush.",
    intro:
      "Cheers, waves, and easy grins for upbeat chat - tap to copy. Happy owns smiles-and-cheers; soft blush and kawaii affection stay on the cute page.",
    group: "browse",
    category: "happy",
    faceGroups: [
      { id: "cheer", heading: "Cheering kaomoji", glyphs: ["ヽ(", "\\(", "ﾉ)", "ノ)", "o(", "٩("] },
      { id: "laugh", heading: "Laughing kaomoji", glyphs: ["≧▽≦", "≧∇≦", "^o^", "^O^", "∀", "ﾜﾗ", "笑"] },
      { id: "sparkle", heading: "Happy kaomoji with sparkles", glyphs: ["✧", "☆", "★", "✨", "*:･ﾟ"] },
      { id: "smile", heading: "Smiling kaomoji", glyphs: ["◕‿◕", "^_^", "＾＾", "◠‿◠", "ᵔᴗᵔ", "^‿^"] },
    ],
    howTo: [
      "Scan for the energy level — calm grin, cheerful wave, or arms-up celebration cheer.",
      "Tap Copy once; the full character string goes to your clipboard.",
      "Paste into a congratulation, hello, or any message where positive energy should show.",
    ],
    definition:
      "Happy kaomoji lean cheerful and upbeat — big grins, cheers, and waves that signal genuine positive energy. They are louder than a quiet smile and warmer than a neutral face.",
    learnMore:
      "Eyes crinkled or wide open, mouths raised or open in laughter, arms sometimes extended — these faces carry the energy of good news or a warm hello. They sit between the soft gentleness of cute and the intensity of excited.",
    faqs: [
      {
        question: "How is happy different from cute on this site?",
        answer: "Happy owns cheers, waves, and big grins. Cute owns soft blush and gentle kawaii affection. Use happy when the vibe should feel upbeat and loud rather than soft.",
      },
      {
        question: "When should I pick a happy kaomoji?",
        answer: "Pick one for congratulations, hellos, or light celebration in chat. If you need shy blush or tiny hugs, the cute page fits better.",
      },
      {
        question: "Do happy faces work in group chats?",
        answer: "Yes. Short cheers and waves usually read clearly in busy threads. Prefer compact faces when the chat field is narrow.",
      },
      {
        question: "Can I use happy kaomoji on Discord and WhatsApp?",
        answer: "Yes. Happy faces use standard Unicode that pastes cleanly on Discord, WhatsApp, Instagram, and most chat apps. Tap Copy and paste — no special settings needed.",
      },
    ],
    related: ["/cute-kaomoji", "/cat-kaomoji", "/sad-kaomoji", "/angry-kaomoji", "/thumbs-up-kaomoji", "/dance-kaomoji"],
  },
  {
    path: "/cat-kaomoji",
    label: "Cat",
    heading: "Cat Kaomoji",
    titleSegment: "Cat Kaomoji (=^･ω･^=)",
    description:
      "Cat kaomoji (=^･ω･^=) copy and paste — neko and catmoji faces from calm to excited. Browse 100+ cat text faces and tap once to copy into any chat.",
    intro:
      "Neko faces from calm cats to excited ones - one tap to copy. Cat kaomoji stay on their own page so they are not mixed into the general cute grid.",
    group: "browse",
    category: "cat",
    faceGroups: [
      { id: "sleepy", heading: "Sleeping cat kaomoji", glyphs: ["zzZ", "zZ", "-ω-", "－ω－", "ᴗ", "˘ω˘", "(¦3", "ぐー"] },
      { id: "love", heading: "Cat kaomoji with hearts", glyphs: ["♡", "♥", "❤"] },
      { id: "grumpy", heading: "Grumpy & angry cat kaomoji", glyphs: ["｀ω´", "益", "╬", "`ω´", "ↀ", "💢"] },
      { id: "sad", heading: "Sad & crying cat kaomoji", glyphs: [";ω;", "；ω；", "╥", "T ω T", "TωT", "ಥ", ";", "；"] },
      { id: "happy", heading: "Happy cat kaomoji", glyphs: ["^ω^", "＾ω＾", "≧ω≦", "◕ω◕", "•ω•"] },
      { id: "paws", heading: "Cat paw kaomoji ฅ", glyphs: ["ฅ", "🐾"] },
    ],
    howTo: [
      "Look for the ear style and expression that fits — calm whiskers, startled eyes, or playful poses.",
      "Tap Copy to grab the neko face, including any ear or paw characters.",
      "Paste into your message; cat faces work as standalone reactions or alongside pet-related jokes.",
    ],
    definition:
      "Cat kaomoji (neko faces) use ear marks, whisker lines, and feline eye shapes to read as a cat at a glance. The classic =^･ω･^= keeps its ears in the = marks; variants shift the mood from calm to startled to sleepy without losing the whisker detail.",
    learnMore:
      "Neko is the Japanese word for cat, and neko kaomoji have been a fixture of Japanese internet culture since the early 2000s. They appear in usernames, reaction posts, and playful messages where a face with ears says more than a plain smile. Most ear and whisker characters are standard Unicode that paste cleanly on all modern devices.\n\nCat faces are built from three signals: ears, a cat mouth, and paws. Ears come from ^ marks, as in (=^･ω･^=), or from ᐢ and ₍ ₎ in newer styles like ₍ᐢ•ﻌ•ᐢ₎. ω is the classic cat mouth, ﻌ gives a tiny nose, and ฅ beside the face is a raised paw, so ฅ^•ﻌ•^ฅ is a cat reaching out. You can turn almost any face into a cat by adding ears or a paw. Cat lovers use them for pet photos and captions, but they are also a common way to say 'nya', ask for attention, or make a request sound cute rather than demanding.",
    faqs: [
      {
        question: "What are cat kaomoji (neko / catmoji)?",
        answer: "Cat kaomoji are text faces with whiskers, ears, or feline eyes. They stay on their own page so they are not mixed into the general cute grid.",
      },
      {
        question: "Are cat faces only for pet talk?",
        answer: "No. People also use them for playful moods, soft reactions, or usernames. Choose calm cats for gentle replies and excited ones for hype.",
      },
      {
        question: "Where should I go for non-cat cute faces?",
        answer: "Open cute kaomoji for blush and soft smiles without whiskers, or happy kaomoji for cheers and waves.",
      },
      {
        question: "Is this where cat kaomoji copy and paste lives?",
        answer: "Yes. Neko and catmoji faces copy here with one tap. The general Kaomoji Copy and Paste page is for mixed popular faces when you do not need whiskers only.",
      },
    ],
    related: ["/cute-kaomoji", "/bunny-kaomoji", "/dog-kaomoji", "/bear-kaomoji", "/kaomoji-copy-paste", "/fish-kaomoji", "/uwu-kaomoji"],
  },
  {
    path: "/sad-kaomoji",
    label: "Sad",
    heading: "Sad Kaomoji",
    titleSegment: "Sad Kaomoji (╥﹏╥)",
    description:
      "Sad kaomoji (╥﹏╥) copy and paste: quiet downcast eyes and soft frowns. Low-mood faces without tears; sobbing lives on the crying page.",
    intro:
      "Quiet downcast eyes and soft frowns when you want low-mood text without tears. For sobbing and tear streaks, open crying kaomoji so sad and crying stay different intents.",
    group: "browse",
    category: "sad",
    faceGroups: [
      { id: "downcast", heading: "Downcast & disappointed", glyphs: ["´_ゝ", "´-ω-", "_ _", "︿", "´･_･"] },
      { id: "lonely", heading: "Lonely & gloomy kaomoji", glyphs: ["...", "…", "・_・", "´・ω・`"] },
      { id: "teary", heading: "Teary sad kaomoji", glyphs: ["╥", ";_;", "；＿；", "╯︵╰", "T"] },
      { id: "hurt", heading: "Hurt & pouty sad kaomoji", glyphs: ["︿", "•́ ︿ •̀", "´•̥", "ᗒ"] },
    ],
    howTo: [
      "Choose the depth of the mood — a mild downcast look or a heavier frown.",
      "Tap Copy before switching apps; the full character string, including eye marks, goes to your clipboard.",
      "Paste as a standalone signal or before a short sentence about how you feel.",
    ],
    definition:
      "Sad kaomoji carry downcast eyes and soft frowns that show low mood without tears. Use them for quiet disappointment or a gentle 'I'm not okay' signal in chat.",
    learnMore:
      "The downward gaze and slumped mouth are the signature. Tears belong on the crying page — sad stays drier and more introspective. They work when you want the other person to notice without dramatizing.",
    faqs: [
      {
        question: "When should I use sad instead of crying kaomoji?",
        answer: "Use sad for quiet downcast eyes and soft frowns. Open crying kaomoji when you want tears, sobs, or weeping streaks.",
      },
      {
        question: "Can sad faces feel too heavy in casual chat?",
        answer: "They can in upbeat threads. Prefer a mild downcast face for light disappointment, and save deeper frowns for friends who expect that tone.",
      },
      {
        question: "Do sad kaomoji copy the same as other moods?",
        answer: "Yes. Tap Copy once and paste into chat. Spacing and symbols stay intact as plain text on most modern phones and desktops.",
      },
      {
        question: "What are some examples of sad kaomoji?",
        answer: "Common ones include (╥﹏╥), (；ω；), and (´；ω；`). The downward eyes and soft mouth carry the low-mood signal without tear marks — those belong on the crying page.",
      },
    ],
    related: ["/crying-kaomoji", "/sick-kaomoji", "/happy-kaomoji", "/cute-kaomoji", "/angry-kaomoji"],
  },
  {
    path: "/crying-kaomoji",
    label: "Crying",
    heading: "Crying Kaomoji",
    titleSegment: "Crying Kaomoji (ಥ﹏ಥ)",
    description:
      "Crying kaomoji (ಥ﹏ಥ) copy and paste: cry, tears, and sobbing faces. Cry searches land here; quiet downcast faces stay on sad.",
    intro:
      "Tears, sobs, and weeping faces for when a quiet frown is not enough - tap to copy. Cry and sob aliases share this page; quiet downcast faces stay on sad kaomoji.",
    group: "browse",
    category: "crying",
    faceGroups: [
      { id: "sobbing", heading: "Sobbing kaomoji", glyphs: ["Д", "｡ﾟ", "ﾟ｡", "ᗣ", "〒"] },
      { id: "tears", heading: "Streaming tears", glyphs: ["╥", "T_T", "T▽T", "TωT", "ToT"] },
      { id: "teary", heading: "Teary-eyed kaomoji", glyphs: ["˘̩", "̥", ";ω;", "；ω；", "ᵕ̣̣"] },
      { id: "happy-tears", heading: "Happy tears & crying laughing", glyphs: ["ಥ‿ಥ", "ಥ ‿ ಥ", "ｳﾚｼｲ", "嬉", "感動"] },
    ],
    howTo: [
      "Pick the cry intensity — a quiet single-tear face or a full sobbing spiral.",
      "Tap Copy to grab the whole character string including tear marks.",
      "Paste into chat; add a word or two if the face needs context to land right.",
    ],
    definition:
      "Crying kaomoji feature visible tear marks and sobbing expressions — the full-emotion end of the sad scale. They cover everything from a single quiet tear to an uncontrolled meltdown face.",
    learnMore:
      "Tear glyphs like ;_; and T_T are the classic shorthand. Most paste fine on all devices; a few rare tear marks may show as boxes on older systems. If that happens, pick a simpler crying face from the same grid.",
    faqs: [
      {
        question: "What belongs on crying kaomoji?",
        answer: "Cry, tear, and sobbing faces. Quiet downcast looks without tears stay on sad kaomoji so the two intents do not compete.",
      },
      {
        question: "Are cry searches meant for this page?",
        answer: "Yes. Cry and sob aliases share this page. If you only need a soft frown, switch to sad kaomoji instead.",
      },
      {
        question: "Will tear symbols show on every device?",
        answer: "Most common tear marks paste fine. If a rare symbol boxes out, grab a simpler crying face from the same grid.",
      },
      {
        question: "Can I use a crying kaomoji for laughing-so-hard-I-cried?",
        answer: "Yes. The crying aesthetic crosses into laughter in many chats. A sobbing face after a hilarious message reads as \"crying laughing\" in most contexts, similar to the 😂 emoji.",
      },
    ],
    related: ["/sad-kaomoji", "/happy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/angry-kaomoji",
    label: "Angry",
    heading: "Angry Kaomoji",
    titleSegment: "Angry Kaomoji (╬ಠ益ಠ)",
    description:
      "Angry kaomoji (╬ಠ益ಠ) copy and paste: scowls, growls, and mad faces. Browse angry, or open table flip, fight, and pout. Rage and glare stay as tags here.",
    intro:
      "Scowls, growls, and mad faces when chat needs heat - tap Copy once and paste anywhere. Browse the full angry-tagged grid with popular faces ranked first.\n\nTable flip, fight, and pout each have a focused page when you want a narrower mood. Rage and glare faces stay easy to find here via tags and search. Use the chips below for sub-moods, or stay on this hub for the broad angry shelf.",
    group: "browse",
    tags: ["angry"],
    faceGroups: [
      { id: "rage", heading: "Rage kaomoji", glyphs: ["╬", "益", "💢", "怒", "ꐦ"] },
      { id: "glare", heading: "Glaring kaomoji", glyphs: ["ಠ", "￣ヘ￣", "¬_¬", "◣_◢", "눈"] },
      { id: "fight", heading: "Ready to fight", glyphs: ["ง", "ᕦ", "ᕤ", "凸"] },
      { id: "shout", heading: "Shouting kaomoji", glyphs: ["Д", "ﾟДﾟ", "ﾛ", "ロ"] },
    ],
    howTo: [
      "Scan the angry grid for scowls and growls that match your chat tone.",
      "Tap Copy once - the face goes to your clipboard with any spacing intact.",
      "Need a narrower mood? Use the chips for table flip, fight, or pout — rage and glare faces stay on this grid via tags and search.",
    ],
    definition:
      "These faces lean into mad energy, from mild irritation to full meltdown jokes. Pick the intensity that matches the chat, not the loudest option by default.",
    learnMore:
      "Angry kaomoji concentrate the visual cues of frustration into a small character set. A sharp glare — ᵒ益ᵒ or ╬ಠ益ಠ — is built from a high-contrast pair of symbols that the eye reads as scowl before the viewer processes any individual character. The intensity scales from mild side-eye to full-volume rage by swapping one or two marks in the face, making these some of the most expressive kaomoji per character.",
    faqs: [
      {
        question: "When should I use an angry kaomoji?",
        answer: "Use one when you want mad, annoyed, or furious tone without typing a long rant. Mild glares fit soft pushback; table flips and rage faces fit jokes about being “done.”",
      },
      {
        question: "Why split angry into table flip, fight, rage, pout, and glare?",
        answer: "Each pose is a different intent. A desk flip is a gag, a fight face is sparring energy, rage is high volume, pout is sulky, and glare is quiet judgment.",
      },
      {
        question: "Will angry kaomoji look the same on every phone?",
        answer: "Most will, because they are plain characters. A few rare symbols may fall back to boxes on very old devices. If that happens, pick a simpler face from the same mood grid.",
      },
      {
        question: "Can angry faces come across as too harsh?",
        answer: "Yes in serious conversations. For light teasing, prefer pout or a mild mad face; save full rage and flips for friends who share that humor.",
      },
    ],
    related: [
      "/table-flip-kaomoji",
      "/fight-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
      "/sad-kaomoji",
      "/happy-kaomoji",
    ],
  },
  {
    path: "/table-flip-kaomoji",
    label: "Table flip",
    heading: "Table Flip Kaomoji",
    titleSegment: "Table Flip Kaomoji (╯°□°)╯︵ ┻━┻",
    description:
      "Table flip kaomoji (╯°□°)╯︵ ┻━┻ copy and paste: classic flip-the-table faces. Nested under angry, owned by the table-flip keyword.",
    intro:
      "Flip-the-table faces for classic desk-flip reactions - one tap to copy. This page is the home for table flip kaomoji (including tableflip spelling in tags), grouped under the angry mood family for easy discovery.\n\nGrab a flip when words are not enough. For punches open fight kaomoji; for soft sulks open pout. Rage and glare faces stay on the angry hub via tags. The parent angry page keeps the broader scowls and growls.",
    group: "browse",
    tags: ["tableflip", "table flip"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Table flip faces are the classic flip-desk reaction, not every angry scowl.",
      "Copy the flip that matches your intensity, then paste into chat or a caption.",
      "For punches or silent stares, jump to fight or glare instead.",
    ],
    definition:
      "Table flip kaomoji capture the desk-flip gag in text: a figure raising arms and sending a table airborne. The pose is comic, not threatening — it signals \"I am done\" or \"this is unbelievable\" in a way that defuses tension with humor.",
    learnMore:
      "The ┻━┻ table is one of the most recognized pieces of kaomoji typography outside Japan. It spread through 4chan and Reddit in the late 2000s and became a fixture of gaming culture, where flipping a virtual table was the natural response to a bad match or a frustrating loss. The (╯°□°)╯︵ prefix adds the actor, making it a complete scene in one line.",
    faqs: [
      {
        question: "What is a table flip kaomoji?",
        answer: "A classic desk-flip reaction face for when words are not enough. This page owns table flip and tableflip tags under the angry mood family.",
      },
      {
        question: "Should I use table flip or the angry hub?",
        answer: "Open table flip when you want the flip gag specifically. Stay on angry kaomoji for the broader scowls and growls, or jump to fight kaomoji for punches.",
      },
      {
        question: "What does (╯°□°)╯︵ ┻━┻ mean?",
        answer: "The ╯ arm raises in frustration, the ︵ arc shows the table flying through the air, and ┻━┻ is the upturned table itself. Together they mime someone flipping their desk mid-rant.",
      },
      {
        question: "Can table flip kaomoji be used as a joke?",
        answer: "Yes — that is the main use. The desk flip reads as comic exaggeration rather than real anger, so it works in friendly chats, gaming servers, and group threads where mild frustration is relatable.",
      },
    ],
    related: [
      "/angry-kaomoji",
      "/fight-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/fight-kaomoji",
    label: "Fight",
    heading: "Fight Kaomoji",
    titleSegment: "Fight Kaomoji (ง •̀_•́)ง",
    description:
      "Fight kaomoji (ง •̀_•́)ง copy and paste: punching, hitting, and sparring faces. Action heat that stays distinct from the general angry grid.",
    intro:
      "Punching, hitting, and sparring poses for fight-mode chat - tap to copy. Fight kaomoji owns punch and hit tags so action faces stay distinct from a general angry scowl grid.\n\nUse this set when you want motion and impact. Table flips stay on table flip kaomoji and soft sulks on pout. Peak fury and glare-style stares stay searchable on the angry hub. The angry parent remains home for the wider mad-face collection.",
    group: "browse",
    tags: ["fight", "punch", "hit"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Fight faces lean into punches, hits, and sparring poses.",
      "Copy one action face when you want motion, not just a mad look.",
      "Keep full fury on rage and desk flips on table flip so each set stays clear.",
    ],
    definition:
      "Fight kaomoji put a figure in motion: fists raised, a punch landing, or a sparring stance that signals action rather than just a scowl. The energy is kinetic — these read as \"bring it\" or \"I'm ready,\" not quiet seething.",
    learnMore:
      "Fight kaomoji lean on characters like ง, ᕦ, and ᕙ to build the raised-fist silhouette in plain text. These are among the most physically active kaomoji — where most faces express a static emotion, a fight pose implies the next action. The forward body lean and raised arms read as challenge even without knowing the specific Unicode values involved, making them instantly legible as action and not just mood.",
    faqs: [
      {
        question: "What makes fight kaomoji different from angry?",
        answer: "Fight faces lean into punches, hits, and sparring poses. Angry is the wider mad-face shelf; fight is action heat with its own punch and hit tags.",
      },
      {
        question: "When should I skip fight and open table flip instead?",
        answer: "Choose table flip for the desk-flip gag. Choose fight when you want motion and impact rather than a flipped table.",
      },
      {
        question: "Are fight kaomoji okay in casual chat?",
        answer: "In friendly or gaming contexts, yes — punching and sparring faces land as playful challenge energy. In unfamiliar or formal threads, a softer angry face is less likely to be misread.",
      },
      {
        question: "What do fight kaomoji typically look like?",
        answer: "Common patterns include raised fists, forward-leaning stances, and sharp eyes. Arms built from characters like ง and ᕦ give the impression of muscle flexing or swinging for impact.",
      },
    ],
    related: [
      "/angry-kaomoji",
      "/table-flip-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/pout-kaomoji",
    label: "Pout",
    heading: "Pout Kaomoji",
    titleSegment: "Pout Kaomoji (￣ヘ￣)",
    description:
      "Pout kaomoji (￣ヘ￣) copy and paste: hmph, sulk, and mildly annoyed faces. Soft pushback when full rage would be too much.",
    intro:
      "Hmph, sulk, and mildly annoyed faces for soft pushback - tap to copy. This page covers pout, hmph, and annoyed tags together so you do not need a separate annoyed page.\n\nChoose pout when attitude should stay light. Hard scowls and hotter rage or glare faces stay on the angry parent via tags. Related chips keep the angry family easy to scan like a labeled mood shelf.",
    group: "browse",
    tags: ["pout", "hmph", "annoyed"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Pout faces cover hmph, sulk, and mild annoyance - soft pushback.",
      "Copy a pout when you want attitude without full rage.",
      "Hard scowls stay on angry; silent stares stay on glare.",
    ],
    definition:
      "Pout kaomoji lean into the sulky, hmph register: crossed arms, tight mouths, or a side-eye that says \"I'm unimpressed\" without going loud. The mood is petulant rather than explosive — attitude with the volume turned low.",
    learnMore:
      "Pout kaomoji fill the emotional gap between happy and angry that most emoticon sets leave empty. The sulky face is petulant, not explosive — it signals displeasure at low volume so the receiver knows the sender is not genuinely upset. In Japanese internet culture the pout pose became a staple of playful banter, where showing attitude without heat is often the funnier and more socially precise move.",
    faqs: [
      {
        question: "What is a pout kaomoji for?",
        answer: "Hmph, sulk, and mildly annoyed faces for soft pushback. Use pout when attitude should stay light and full rage would be too much.",
      },
      {
        question: "How is pout different from rage on this site?",
        answer: "Pout keeps its own page for sulky soft pushback. Rage and glare stay on the angry hub via tags, so hard scowls stay with the parent angry set.",
      },
      {
        question: "When does a pout fit better than a scowl?",
        answer: "When you want attitude without heat. A pout signals mild displeasure or playful sulking; a scowl suggests real frustration. Pout lands lighter in friend chats and casual threads.",
      },
      {
        question: "Are pout kaomoji good for teasing or mock-annoyance?",
        answer: "Yes. The sulky face is a natural fit for playful arguments, pretend offense, or the classic \"I can't believe you\" reaction between friends who both know it's a joke.",
      },
    ],
    related: [
      "/angry-kaomoji",
      "/table-flip-kaomoji",
      "/fight-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/kaomoji-copy-paste",
    label: "Copy and paste",
    heading: "Kaomoji Copy and Paste",
    titleSegment: "Kaomoji Copy and Paste (◕‿◕)",
    description:
      "Kaomoji copy and paste: the most-used faces like ¯\\_(ツ)_/¯, (◕‿◕✿), and (╯°□°)╯︵ ┻━┻ on one fast page. One tap to copy, no account, phone or desktop.",
    intro:
      "Kaomoji copy and paste when you want a face fast: popular picks first, one tap to clipboard. For mood shelves — cute, happy, cat, star, and more — start on the home hub instead.",
    group: "browse",
    howTo: [
      "Scan the list — popular faces appear first, ranked by how often they are copied.",
      "Tap Copy once; the face string, including any spacing, goes to your clipboard.",
      "Paste into Discord, WhatsApp, Instagram, or any message field — no app or account needed.",
    ],
    definition:
      "This page is a copy-first utility: popular faces up front so you can grab one and paste without browsing every mood shelf first.",
    learnMore:
      "Use it when you already know you need a face fast. For discovery by emotion, start from home or a mood URL. One tap copies the string to your clipboard with spacing intact.",
    faqs: [
      {
        question: "How is Kaomoji Copy and Paste different from the home page?",
        answer: "Home is the discovery hub with category tiles and popular faces. This page is the explicit copy-and-paste utility when you only want a fast grab without browsing moods first.",
      },
      {
        question: "Do I need an account to copy faces?",
        answer: "No. Paste Kaomoji is free to use in the browser. Tap Copy once, then paste into your chat or caption. There is no signup wall on this library.",
      },
      {
        question: "Will copied kaomoji keep their spacing?",
        answer: "Yes for one-line faces. The copy action sends the exact characters shown, including spaces. Multiline stacks need a paste target that keeps line breaks.",
      },
      {
        question: "Can I copy kaomoji on both phone and desktop?",
        answer: "Yes. On desktop, tap Copy then Ctrl+V or Cmd+V. On phones, tap Copy, switch apps, then long-press and choose Paste. Keep the face in your clipboard until you paste.",
      },
      {
        question: "Does word order matter—kaomoji copy and paste vs copy and paste kaomoji?",
        answer: "No. Both phrases mean the same job: get a face on your clipboard fast. This page serves that intent whether you searched either wording.",
      },
      {
        question: "What about kaomojis copy and paste?",
        answer: "Same utility. Plural searches usually mean a list to grab from, not a different product. Use this grid for a fast mix, or open a mood page when you want only cute, happy, cat, or another theme.",
      },
      {
        question: "Where is cute kaomoji copy and paste?",
        answer: "Open the Cute Kaomoji page for kawaii and blush faces with the same one-tap copy. This page stays the general grab list when you do not need a specific mood filter.",
      },
    ],
    related: ["/cute-kaomoji", "/happy-kaomoji", "/japanese-emoticons", "/text-faces"],
  },
  {
    path: "/japanese-emoticons",
    label: "Japanese",
    heading: "Japanese Emoticons",
    titleSegment: "Japanese Emoticons & Kaomoji (^_^)",
    description:
      "Japanese emoticons (Japanese emoji text faces) to copy and paste: thousands of upright kaomoji like (^_^), (＾▽＾), and (´・ω・`) built from punctuation and kana.",
    intro:
      "Classic Japanese emoticon construction from punctuation, kana, and symbols - ready to copy. This page owns the language and kaomoji concept; ASCII shrugs and Lenny faces live on text faces.",
    group: "browse",
    category: "japanese",
    howTo: [
      "Look for the eye style that fits your mood — round, crescent, kana-accented, or bracket-framed.",
      "Tap Copy to grab the full character string including any kana, brackets, or arm characters.",
      "Paste into your message; if a rare glyph shows as a box, pick a simpler face from the same grid.",
    ],
    definition:
      "Japanese emoticons (kaomoji) are usually read upright, with eyes doing most of the emotional work. This page focuses on that classic construction rather than Western sideways smiles or single emoji pictographs.",
    learnMore:
      "Punctuation, kana, and symbols combine into faces that stay editable text. If a rare glyph shows as a box, your device font is missing that code point. Try a simpler face from the same grid; stacked multi-line art also appears on mood pages such as cute when it fits the category.",
    faqs: [
      {
        question: "What are Japanese emoticons?",
        answer: "Japanese emoticons are text faces built from punctuation and symbols, typically read the right way up. They are the same family many people call kaomoji, distinct from sideways Western smiles like :-).",
      },
      {
        question: "How should I read a Japanese emoticon?",
        answer: "Read it upright, the way you read a short line of chat. Eyes sit in the middle; arms or cheeks often sit on the sides. You do not need to tilt your head the way classic Western emoticons ask you to.",
      },
      {
        question: "Why do some Japanese faces need special fonts?",
        answer: "Some faces use less-common Unicode symbols. If your phone or browser font lacks those glyphs, you may see empty boxes. Pick a face built from more common punctuation, or paste into an app with broader Unicode coverage.",
      },
      {
        question: "Is this page the same as text faces?",
        answer: "No. This page owns classic Japanese-style construction. Shrug, Lenny, and other Western-leaning ASCII catalogs live on the text faces page so the two intents stay clear.",
      },
    ],
    related: ["/text-faces", "/cute-kaomoji", "/kaomoji-copy-paste"],
  },
  {
    path: "/text-faces",
    label: "Text faces",
    heading: "Text Faces",
    titleSegment: "Text Faces Copy and Paste ಠ_ಠ — Unicode Faces",
    description:
      "Text faces to copy and paste: disapproval ಠ_ಠ, unicode and ASCII character faces beyond classic Japanese kaomoji. Shrug and Lenny have their own full pages.",
    intro:
      "Unicode and ASCII faces such as disapproval ಠ_ಠ and compact character faces — one-tap copy. Looking for one famous face? The shrug ¯\\_(ツ)_/¯ and the Lenny face ( ͡° ͜ʖ ͡°) each have a dedicated page with every variation.",
    group: "browse",
    category: "text-faces",
    howTo: [
      "Scan for the Western-style expression you want — shrug, Lenny, disapproval, or a compact ASCII face.",
      "Tap Copy once to get the exact character string on your clipboard.",
      "Paste into chat or a bio; these faces use common characters that paste cleanly on all devices.",
    ],
    definition:
      "Text faces here mean Western-leaning ASCII and unicode expressions—shrug, Lenny, disapproval, and similar sideways or compact smiles—not classic upright japanese kaomoji built from kana.",
    learnMore:
      "The shrug face became a Western internet landmark in the 2010s through wide sharing on Reddit and Twitter. Unlike traditional kaomoji — which read upright and use Japanese punctuation — most text faces here are rotated 90 degrees or built from common keyboard characters on Western layouts. The ツ character at the center of the shrug is borrowed from Japanese katakana, making it a natural meeting point of both traditions.",
    faqs: [
      {
        question: "What counts as a text face here?",
        answer: "ASCII and unicode expressions such as shrug, Lenny, and disapproval. They are character faces, but this page leans Western-style catalogs rather than classic Japanese kaomoji construction.",
      },
      {
        question: "Where are the Lenny face and the shrug?",
        answer: "Both have dedicated pages with every variation: Lenny Face for ( ͡° ͜ʖ ͡°) and Shrug Kaomoji for ¯\\_(ツ)_/¯. A few also appear in this grid because they are text faces.",
      },
      {
        question: "When should I open Japanese emoticons instead?",
        answer: "Open Japanese emoticons when you want kana-and-punctuation kaomoji read upright. Stay here for shrug, Lenny, disapproval, and similar ASCII-leaning faces.",
      },
      {
        question: "How do I copy the shrug face ¯\\_(ツ)_/¯?",
        answer: "Tap Copy next to any shrug face on this page. The backslash in ¯\\_(ツ)_/¯ can break when typed manually — grabbing it from this grid keeps every character intact.",
      },
    ],
    related: ["/lenny-face", "/shrug-kaomoji", "/emoticons", "/japanese-emoticons", "/kaomoji-copy-paste"],
  },
  {
    path: "/kaomoji-generator",
    label: "Generator",
    heading: "Kaomoji Generator",
    titleSegment: "Kaomoji Generator — Make a Face (´∀｀)",
    description:
      "Free kaomoji generator: pick eyes, mouth, and arms, preview your custom face live, then copy it. Or browse mood categories for ready-made kaomoji lists.",
    intro:
      "Make or remix a custom kaomoji in your browser: pick arms, eyes, mouth, and optional extras, preview live, then copy. This page is for building and remixing faces, not browsing a ready-made grid. When you want curated lists instead of a builder, use the category links in the header.",
    group: "browse",
    howTo: [
      "Pick left arm, eyes, mouth, and right arm from the curated sets.",
      "Add an optional extra if you want ears, blush, or sweat marks.",
      "Copy the preview, or hit Randomize for a quick surprise face.",
    ],
    definition:
      "Parts and presets exist so you can invent a face instead of only browsing. Copy the string you like and keep a personal shortlist outside the tool if you reuse it often.",
    learnMore:
      "Kaomoji are built from three zones: the outer bracket pair sets the face shape, the eye characters carry the dominant mood, and the mouth in the center lands the expression. Arms and extras outside the brackets are optional but change the reading dramatically — the same neutral face becomes excited, bowing, or dancing with one appended character. Understanding these zones makes it faster to remix any existing face into something new.",
    faqs: [
      {
        question: "What does the kaomoji generator do?",
        answer: "It helps you build or remix a text face from parts (eyes, mouth, arms) or presets so you can make something that is not only from a static list.",
      },
      {
        question: "Is a generated face different from browsing categories?",
        answer: "Categories are ready-made grids for fast paste. The generator is for custom combinations when no listed face matches the exact vibe you want.",
      },
      {
        question: "Can I save faces I make?",
        answer: "Copy them into a notes app or pin them in your chat’s favorites if the app supports it. Treat the clipboard as temporary unless you store the string yourself.",
      },
      {
        question: "Will every generated combination look good?",
        answer: "Not always. Odd eye and mouth pairs can look broken. Tweak one part at a time, then copy when the face reads clearly at a glance.",
      },
      {
        question: "How do I make a kaomoji?",
        answer: "Pick eyes and a mouth that read clearly together, then add arms, blush, or sweat if you want motion. Use the builder above to preview live and copy, or browse mood categories when a ready-made face is enough.",
      },
      {
        question: "How do I type a kaomoji on my keyboard?",
        answer: "Type punctuation and symbols in order—parentheses, carets, and unicode marks are common. Copying from a grid is faster when a face uses rare characters your layout hides. On mobile, copy here then paste into chat.",
      },
    ],
    related: ["/angry-kaomoji", "/cute-kaomoji", "/text-faces"],
  },

  {
    path: "/heart-kaomoji",
    label: "Heart",
    heading: "Heart Kaomoji",
    titleSegment: "Heart & Love Kaomoji (♡‿♡)",
    description:
      "Heart and love kaomoji to copy for affection, crush energy, and warm thanks. Browse love-ready text faces, tap once, and paste into any chat.",
    intro:
      "This hub is for affection, not only soft-cute smiles. Grab heart-woven faces when you mean love, crush, or warm thanks, and use the love chip when you want that angle inside the same grid. Cute pages stay for gentle adorable vibes without a romantic read; shy pages cover bashful blush instead of full heart energy.",
    group: "browse",
    tags: ["heart", "love", "kiss", "hug"],
    faceGroups: [
      { id: "eyes", heading: "Heart-eyes kaomoji", glyphs: ["♡ω♡", "♥ω♥", "♡∀♡", "♡▽♡", "♥‿♥", "♡ᴗ♡", "♥_♥"] },
      { id: "sending", heading: "Sending a heart", glyphs: ["っ♡", "っ♥", "♡⃛", "♡ﾟ", "⌒♡", "～♡", "~♡"] },
      { id: "hands", heading: "Heart hands & holding hearts", glyphs: ["♡づ", "(♡", "♡)", "ʚ♡ɞ", "🫶"] },
      { id: "big", heading: "Big heart kaomoji ♥", glyphs: ["♥", "❤", "💕", "💗", "💞"] },
    ],
    howTo: [
      "Open a heart face that matches the warmth you want (light thanks vs full swoon).",
      "Tap Copy so the full string lands on your clipboard.",
      "Paste into your chat, then add your own words around it if you need context.",
    ],
    definition:
      "Affection shows up as hearts woven into poses, not only a single heart glyph. Choose lighter mixes for friends and fuller swoons when the relationship already supports that tone.",
    learnMore:
      "The ♡ heart glyph in kaomoji is borrowed from its original use as a decorative typography mark in Japanese print and then in digital culture. When placed in the eyes it shifts the entire reading of a face from neutral to devoted. Japanese internet culture developed dozens of heart-eye configurations — each placing ♡ at a slightly different position or paired with different mouth marks to calibrate the exact warmth level conveyed.",
    faqs: [
      {
        question: "What are heart kaomoji for?",
        answer:
          "They add affection, crush energy, or warm thanks without sending a sticker pack. Use them for love notes, friend appreciation, or soft reactions.",
      },
      {
        question: "What are love kaomoji?",
        answer:
          "Love kaomoji are affection-first text faces—often with hearts in the eyes, cheeks, or pose. This page groups them with heart kaomoji so you can copy romantic or warm faces without mixing them into a general happy grid.",
      },
      {
        question: "Heart kaomoji vs the ❤️ emoji?",
        answer:
          "The emoji is one picture glyph. Heart kaomoji weave hearts into a full face or pose, so the reaction feels more expressive and still copies as text.",
      },
      {
        question: "Can these read as too romantic?",
        answer:
          "Some can. For friendship, choose lighter blush-and-heart mixes; save full swoon faces for partners or clearly playful threads.",
      },
      {
        question: "Why browse a heart category instead of searching \"love\"?",
        answer:
          "A dedicated grid groups affection poses together so you are not mixing romantic faces with random happy ones from a giant dump.",
      },
    ],
    related: ["/shy-kaomoji", "/cute-kaomoji", "/happy-kaomoji", "/kaomoji-generator", "/hug-kaomoji", "/kiss-kaomoji"],
  },
  {
    path: "/shy-kaomoji",
    label: "Shy",
    heading: "Shy Kaomoji",
    titleSegment: "Shy Kaomoji (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    description:
      "Shy and blushing kaomoji (⁄ ⁄•⁄ω⁄•⁄ ⁄) to copy and paste — blush, bashful, and flustered faces for when a big smile feels too bold.",
    intro:
      "Shy faces are for hesitation and blush, not loud cute energy. Use this grid after compliments, nervous hellos, or gentle \"I'm flustered\" beats, and open the blush chip when you want that cue inside the set. Cute stays warmly adorable; heart stays affection-first. This page owns the quiet, bashful read.",
    group: "browse",
    tags: ["shy", "blush", "embarrassed"],
    howTo: [
      "Pick a face with blush, peeking eyes, or a tiny mouth that feels nervous, not shouty.",
      "Tap Copy and keep the page handy on mobile until you switch apps.",
      "Paste into the chat; if the face looks empty, try a simpler shy face from the same grid.",
    ],
    definition:
      "Expect bashful cues like sweat, peeking eyes, and small mouths. They signal nerves or blush more than pure happiness.",
    learnMore:
      "Shy kaomoji often feature the >//< squint, which compresses the eyes into a horizontal line and signals tension rather than happiness. The sweat drop mark, borrowed from manga where it appears outside a character's head to show embarrassment, crossed into kaomoji in the early 2000s. It adds context that a closed eye alone cannot — the difference between sleepy contentment and nervous self-consciousness in a single small mark.",
    faqs: [
      {
        question: "When does a shy kaomoji fit better than a smile?",
        answer:
          "When you want soft, awkward, or bashful energy: after a compliment, a nervous hello, or a \"thanks, I'm blushing\" beat.",
      },
      {
        question: "What usually marks a shy face?",
        answer:
          "Covered eyes, sweat drops, tiny mouths, sideways glances, or blush markers. The mood is quiet, not loud celebration.",
      },
      {
        question: "Are shy faces only for romance?",
        answer:
          "No. They also work for social nerves, polite embarrassment, or gentle refusals that should not sound cold.",
      },
      {
        question: "How is shy different from cute on this site?",
        answer:
          "Cute aims for adorable warmth. Shy aims for hesitation and blush. Overlap exists, but the primary intent on shy pages is bashful, not just soft-pretty.",
      },
    ],
    related: ["/heart-kaomoji", "/cute-kaomoji", "/happy-kaomoji", "/sad-kaomoji", "/bowing-kaomoji", "/nervous-kaomoji"],
  },
  {
    path: "/bunny-kaomoji",
    label: "Bunny",
    heading: "Bunny Kaomoji",
    titleSegment: "Bunny Kaomoji (•ㅅ•)",
    description:
      "Bunny kaomoji with rabbit ears and soft animal faces to copy. Tap once and paste cute rabbit text faces into any chat.",
    intro:
      "This page is for bunny and rabbit-style text faces, not a general cute dump. Use it when you want ear poses and animal softness; open the rabbit chip for that angle inside the same grid. Cute hubs stay human soft-smile vibes; bear and dog own their own animal looks.",
    group: "browse",
    tags: ["bunny", "rabbit"],
    howTo: [
      "Pick a bunny face with the ear style you like.",
      "Tap Copy so the full character string is on your clipboard.",
      "Paste into chat and add a short line if the face alone needs context.",
    ],
    definition:
      "These faces lean rabbit: ears, soft animal eyes, and gentle poses made for playful chats. Choose them when you want an animal read, not only a human cute smile.",
    learnMore:
      "Bunny kaomoji follow the same character logic as cat kaomoji but position the ear marks differently. Where cat ears sit inside the face brackets, rabbit ears are taller and built from characters that extend vertically above the head. The softness of the bunny face also draws from kawaii character design, where round soft features signal harmlessness and warmth — a combination that makes rabbit faces naturally suitable for affectionate chat moments.",
    faqs: [
      {
        question: "What counts as a bunny kaomoji?",
        answer:
          "Faces that read as a rabbit: ear marks, round soft eyes, or classic bunny mouth shapes built from text characters.",
      },
      {
        question: "Is rabbit different from bunny on this site?",
        answer:
          "No separate rabbit page. Rabbit is a chip on this bunny hub so one grid covers both wordings.",
      },
      {
        question: "How is bunny different from cute kaomoji?",
        answer:
          "Cute is mostly human soft smiles. Bunny is animal-shaped, with ears and rabbit cues as the main point.",
      },
      {
        question: "Will bunny faces paste on mobile?",
        answer:
          "Yes for most apps. If a rare symbol shows as a box, pick a simpler bunny from the same grid.",
      },
    ],
    related: [
      "/dog-kaomoji",
      "/bear-kaomoji",
      "/cat-kaomoji",
      "/cute-kaomoji",
    ],
  },
  {
    path: "/dog-kaomoji",
    label: "Dog",
    heading: "Dog Kaomoji",
    titleSegment: "Dog Kaomoji (U・x・U)",
    description:
      "Dog kaomoji and puppy-style text faces ready to copy. Browse loyal, playful pup looks and paste them into any chat.",
    intro:
      "Built for dog and puppy text faces, not generic happy or cute humans. Grab a pup when you want pet energy; use the puppy chip inside this hub instead of a thin extra URL. Bear and bunny cover other animals; happy pages stay for human grins.",
    group: "browse",
    tags: ["dog", "puppy"],
    howTo: [
      "Scan for floppy-ear or snout styles that read as a dog.",
      "Tap Copy to capture the full face.",
      "Paste into your message, then tweak surrounding words to match the tone.",
    ],
    definition:
      "Expect pup energy: soft ears, snout shapes, and loyal or playful poses. They are for animal charm, not a stand-in for happy or heart pages.",
    learnMore:
      "Dog kaomoji borrow the U and w characters for their rounded snout shapes, using the natural curve of those glyphs to suggest a muzzle without explicit nose marks. The loyalty association of dogs in Japanese popular culture made them a natural fit for affectionate or playful text expressions. Dog faces pair naturally with heart and happy content because the animal mood skews warmly positive and the visual cues read as friendly on sight.",
    faqs: [
      {
        question: "What makes a dog kaomoji different from a cute face?",
        answer:
          "Dog faces use pet cues like ears, snouts, or paw-like arms. Cute faces are usually human soft expressions without a clear animal shape.",
      },
      {
        question: "Where do puppy faces live?",
        answer:
          "On this dog page via the puppy chip. There is no separate puppy URL, so searchers still land on one strong dog hub.",
      },
      {
        question: "Are dog kaomoji only for pet talk?",
        answer:
          "No. People also send them for loyalty jokes, \"good boy\" teasing, or playful check-ins.",
      },
      {
        question: "Can I use these in usernames?",
        answer:
          "Often, if the platform allows special characters. Test paste once before saving a bio or display name.",
      },
    ],
    related: [
      "/bunny-kaomoji",
      "/bear-kaomoji",
      "/cat-kaomoji",
      "/cute-kaomoji",
    ],
  },
  {
    path: "/shocked-kaomoji",
    label: "Shocked",
    heading: "Shocked Kaomoji",
    titleSegment: "Shocked Kaomoji (°□°)",
    description:
      "Shocked kaomoji for wide-eyed surprise and sudden reactions. Copy stunned text faces and paste them when words feel too slow.",
    intro:
      "This hub owns shock and stun reactions: wide eyes, open mouths, and \"wait, what\" energy. Surprised sits as a chip here so you do not need a second thin page. Confused is for puzzled tilts; smug is knowing; cute and happy are warmer moods, not gasp faces.",
    group: "browse",
    tags: ["shocked", "surprised"],
    howTo: [
      "Choose a face whose eyes and mouth look stunned, not merely confused.",
      "Tap Copy before you switch apps on mobile.",
      "Paste into the chat right when the reaction lands.",
    ],
    definition:
      "Wide eyes and open mouths carry the shock. Pick intensity to match the moment, from mild stun to full cartoon gasp.",
    learnMore:
      "Shock kaomoji typically exaggerate the mouth opening — a wide O shape that signals a sudden intake of breath. The eye-widening cue borrows from manga panel conventions, where pupils shrink or eyes go circular to signal a jolt. Short one-line shocked faces read faster than complex multi-character ones in a busy chat thread.",
    faqs: [
      {
        question: "When should I send a shocked kaomoji?",
        answer:
          "Use one for sudden news, plot twists, or playful overreactions when a plain \"wow\" feels flat.",
      },
      {
        question: "Shocked vs surprised on Paste Kaomoji?",
        answer:
          "Same hub. Surprised is a chip on this shocked page so both wordings share one indexable grid.",
      },
      {
        question: "How is shocked different from confused?",
        answer:
          "Shocked is a jolt. Confused is uncertainty or a head-tilt \"I don't get it\" feel without the gasp.",
      },
      {
        question: "Do big shocked faces break in SMS?",
        answer:
          "Usually not. If spacing looks odd, pick a shorter one-line shocked face from the grid.",
      },
    ],
    related: ["/confused-kaomoji", "/scared-kaomoji", "/smug-kaomoji", "/sad-kaomoji", "/crying-kaomoji"],
  },
  {
    path: "/smug-kaomoji",
    label: "Smug",
    heading: "Smug Kaomoji",
    titleSegment: "Smug Kaomoji (￣ω￣)",
    description:
      "Smug kaomoji for knowing smiles and playful swagger. Copy confident text faces when you want a teasing \"told you so\" vibe.",
    intro:
      "Smug is confidence with a wink: closed or half-lidded eyes, satisfied mouths, and light teasing energy. It is not happy cheer, not cute softness, and not shy blush. Use this grid when you want swagger without tipping into angry or mean.",
    group: "browse",
    tags: ["smug"],
    howTo: [
      "Pick a face that looks satisfied or teasing, not loudly joyful.",
      "Tap Copy so every character comes along.",
      "Paste and add a short line if the tease needs a softener.",
    ],
    definition:
      "These lean into knowing smiles and light swagger. Use them for teasing confidence, not soft cute warmth or shy nerves.",
    learnMore:
      "Smug kaomoji emerged from the reaction-face tradition of Japanese forums where a single expressive character could end a debate better than a paragraph. The narrow lidded eye — often a dash or a squint — signals self-satisfaction in a way that round open eyes never could. Reading the room matters: a smug face lands as teasing between friends and lands sharp in unfamiliar threads.\n\nSmug faces are built from half-closed eyes and a small sideways smile. ￣ー￣ uses flat bars as lidded eyes, ¬‿¬ uses side-eye marks, and adding ┐ ┌ arms as in ┐(￣ー￣)┌ turns smugness into a 'told you so' shrug. Good moments for a smug face: winning a friendly bet, guessing a plot twist, beating a friend's game score, or being right about the restaurant. Pair it with a short line like 'called it' so the meaning is clear. Avoid smug faces after a real argument or when someone has made a mistake at work, where they feel like gloating rather than teasing.",
    faqs: [
      {
        question: "What does a smug kaomoji signal?",
        answer:
          "Playful superiority or \"I knew it\" energy. In friendly chats it reads as teasing; in tense threads it can feel sharp, so match the room.",
      },
      {
        question: "Smug vs happy kaomoji?",
        answer:
          "Happy is open and bright. Smug is cooler and self-satisfied, often with narrower eyes or a smirk shape.",
      },
      {
        question: "Can smug faces seem rude?",
        answer:
          "They can. Soften with words, or switch to cute/happy if the chat is sensitive.",
      },
      {
        question: "Are these good for memes and replies?",
        answer:
          "Yes. Short smug faces work well as one-tap reactions under a winning take or lucky outcome.",
      },
    ],
    related: ["/confused-kaomoji", "/happy-kaomoji", "/sleepy-kaomoji", "/shy-kaomoji", "/wink-kaomoji", "/lenny-face"],
  },
  {
    path: "/sleepy-kaomoji",
    label: "Sleepy",
    heading: "Sleepy Kaomoji",
    titleSegment: "Sleepy Kaomoji (￣ρ￣)",
    description:
      "Sleepy kaomoji for tired eyes, yawns, and dozy chats. Copy drowsy text faces and paste them when you are running on empty.",
    intro:
      "Sleepy covers drowsy, yawning, and half-asleep faces. Tired is a chip on this page, not its own URL. This is low-energy mood, not sad, not shy blush, and not cute bounce. Reach for it when you mean \"I'm fading,\" not \"I'm adorable.\"",
    group: "browse",
    tags: ["sleepy", "tired"],
    howTo: [
      "Choose a face with closed or heavy eyes, z's, or a yawn mouth.",
      "Tap Copy while the string is still selected.",
      "Paste into your goodnight or \"brb sleeping\" message.",
    ],
    definition:
      "Heavy lids, yawns, and quiet doze poses define this set. Send them for low energy and rest, not for cute or affectionate moods.",
    learnMore:
      "Sleepy kaomoji use a simple visual trick: the eyes close from a wide-open position to a droop or a flat line, signaling fatigue through reduced alertness. Z characters reinforce the yawn signal in English-language chat. Drooped mouths and narrowed eyes carry the same meaning in the original Japanese faces where Z marks were less common.\n\nSleepy faces fit plenty of real moments: saying goodnight, admitting to a 3 a.m. study session, signing off after a long shift, or replying to an early-morning message. A soft (－_－) zzZ says you are drifting off, and a yawning face suits a meeting that ran too long. Japanese sleepy faces often add ｽﾔｧ (suyaa), the sound of peaceful sleep, or ﾈﾑｲ (nemui), meaning sleepy. For goodnight messages to family or a partner, pair a sleepy face with 🌙 or 💤 so the message reads as warm rather than bored.",
    faqs: [
      {
        question: "Sleepy vs tired wording?",
        answer:
          "One page. Tired lives as a chip under sleepy so both searches share a single strong hub.",
      },
      {
        question: "Can I use sleepy faces for boredom?",
        answer:
          "Sometimes, if the face reads checked-out. For true boredom without sleep cues, a milder neutral or confused face may fit better.",
      },
      {
        question: "Will zzz characters paste everywhere?",
        answer:
          "Most chats keep them. If z's vanish, pick a sleepy face that uses only eyes and mouth.",
      },
      {
        question: "How is sleepy different from shy?",
        answer:
          "Shy is bashful and blushy. Sleepy is exhausted or dozy, with no need for social nerves.",
      },
    ],
    related: [
      "/confused-kaomoji",
      "/sad-kaomoji",
      "/shy-kaomoji",
      "/smug-kaomoji",
    ],
  },
  {
    path: "/confused-kaomoji",
    label: "Confused",
    heading: "Confused Kaomoji",
    titleSegment: "Confused Kaomoji (・・？)",
    description:
      "Confused kaomoji for puzzled looks and \"huh?\" moments. Copy tilted text faces when you need a soft question without a long reply.",
    intro:
      "Confused owns uncertainty: tilted heads, question marks, and blank stares that mean \"I don't follow.\" It is not shock (that is the shocked hub), not smug knowing, and not shy blush. Use it for clarifying beats and gentle bewilderment.",
    group: "browse",
    tags: ["confused"],
    howTo: [
      "Pick a face that looks puzzled rather than scared or angry.",
      "Tap Copy to grab the full string.",
      "Paste as a standalone reaction or before your clarifying question.",
    ],
    definition:
      "Puzzled eyes, tilts, and soft question energy sit here. They mark uncertainty, not surprise gasps or shy blush.",
    learnMore:
      "Confusion in kaomoji is often signaled by a tilted head — achieved by leaning the whole face with character spacing — or a question mark placed outside the brackets. The head-tilt cue is intuitive cross-culturally because the physical gesture of tilting one's head when puzzled appears across many human cultures and translates directly into text.",
    faqs: [
      {
        question: "When is confused better than shocked?",
        answer:
          "When you are unsure or lost, not startled. Shocked is a jolt; confused is \"please explain.\"",
      },
      {
        question: "Do confused kaomoji work in work chats?",
        answer:
          "Mild ones can, as a polite \"I'm not following.\" Skip overly dramatic spirals in formal threads.",
      },
      {
        question: "Can these replace asking a question?",
        answer:
          "They help as a tone marker, but a short written question still clears things up faster when stakes are high.",
      },
      {
        question: "Confused vs smug?",
        answer:
          "Confused admits you do not know. Smug signals you do, with a tease.",
      },
    ],
    related: ["/shocked-kaomoji", "/smug-kaomoji", "/sleepy-kaomoji", "/sad-kaomoji", "/thinking-kaomoji"],
  },
  {
    path: "/bear-kaomoji",
    label: "Bear",
    heading: "Bear Kaomoji",
    titleSegment: "Bear Kaomoji ʕ•ᴥ•ʔ",
    description:
      "Bear kaomoji ʕ•ᴥ•ʔ copy and paste: teddy-style text bears with round bracket ears and ᴥ snout. Tap once for the classic bear face in any chat.",
    intro:
      "The ʕ•ᴥ•ʔ shape is one of the most recognizable kaomoji on the internet — the rounded bracket ears and centered ᴥ snout are unmistakably bear. This page collects bear-shaped faces specifically: angry bears, sleepy droops, and the classic neutral pose. Cat and dog have their own pages; soft human smiles belong on cute.",
    group: "browse",
    tags: ["bear"],
    faceGroups: [
      { id: "hug", heading: "Hugging bear kaomoji", glyphs: ["っ", "づ", "⊂", "つ"] },
      { id: "love", heading: "Bear kaomoji with hearts", glyphs: ["♡", "♥", "❤"] },
      { id: "wave", heading: "Waving bear kaomoji", glyphs: ["ﾉ", "ノ", "/", "ﾞ"] },
      { id: "sad", heading: "Sad bear kaomoji", glyphs: [";", "╥", "ᐡ•̥", "´_", "T"] },
      { id: "classic", heading: "Classic teddy bear ʕ•ᴥ•ʔ", glyphs: ["ʕ•ᴥ•ʔ", "ʕ •ᴥ•ʔ", "ʕ·ᴥ·ʔ", "ᵔᴥᵔ"] },
    ],
    howTo: [
      "Choose your bear: the classic neutral ʕ•ᴥ•ʔ, a scowl for mock-grumpy moments, or a sleepy ʕ-ᴥ-ʔ droop.",
      "Tap Copy — the bracket ears and ᴥ snout are multi-character, so copy them as a unit.",
      "Paste into chat; add a word after a space if you want the bear to \"say\" something.",
    ],
    definition:
      "Bear kaomoji are built around the ʕ  ʔ bracket ears and the ᴥ snout character — a combination specific to bear faces. Sleepy variants droop the eyes to ʕ-ᴥ-ʔ; angry ones sharpen the features. All read as bear, not a generic cute human smile.",
    learnMore:
      "The ʕ character was not designed as a bear ear, but its curved bracket shape reads exactly as one. The ᴥ character was similarly repurposed to function as a distinctive animal snout. Their combination became one of the most copied kaomoji on English-language platforms, spreading from early Japanese image boards to Tumblr and Reddit in the late 2000s — a rare example of a kaomoji that gained more traction outside Japan than within it.",
    faqs: [
      {
        question: "What is the most famous bear kaomoji?",
        answer:
          "ʕ•ᴥ•ʔ is the classic — the rounded bracket ears and centered ᴥ snout are the universal shorthand for bear in text culture. It has been in use since the early 2000s on Japanese internet forums.",
      },
      {
        question: "What does ʕ•ᴥ•ʔ mean?",
        answer:
          "The outer ʕ ʔ brackets form the rounded bear ears. The centered ᴥ character is a snout mark used specifically for dogs and bears in kaomoji. The dot eyes • on each side give the face its soft, neutral expression.",
      },
      {
        question: "How is bear different from bunny or dog?",
        answer:
          "Bunny faces use pointed above-head ear marks. Dog faces use floppy lines. Bear faces use ʕ ʔ side brackets and the ᴥ snout. The silhouette is different enough that they are never confused.",
      },
      {
        question: "Can bear kaomoji paste on all devices?",
        answer:
          "Yes. The ʕ ʔ brackets and ᴥ snout are standard Unicode supported on iOS, Android, and most chat apps. If a variant with rare characters shows a box, pick one of the simpler bears in the grid.",
      },
    ],
    related: [
      "/bunny-kaomoji",
      "/dog-kaomoji",
      "/cat-kaomoji",
      "/cute-kaomoji",
    ],
  },
  {
    path: "/hug-kaomoji",
    label: "Hug",
    heading: "Hug Kaomoji",
    titleSegment: "Hug Kaomoji (づ｡◕‿‿◕｡)づ",
    description:
      "Hug kaomoji copy and paste: warm embrace and hugging text faces (づ｡◕‿‿◕｡)づ. Tap once for the perfect hug reaction in any chat.",
    intro:
      "Warm embrace poses and open-arm hugs for when words are not enough — tap to copy. Hug kaomoji are the outstretched-arms reaction for comfort, celebration, and big welcomes.",
    group: "browse",
    tags: ["hug"],
    howTo: [
      "Pick a hug face that matches the intensity — gentle pat or full bear hug.",
      "Tap Copy so the arms and all stay intact on your clipboard.",
      "Paste into your message as a warm standalone gesture.",
    ],
    definition:
      "Hug kaomoji use outstretched arms and embrace poses built from Unicode characters. They convey warmth, comfort, and affection more expressively than a plain heart.",
    learnMore:
      "Hug kaomoji use the づ and ⊂ characters as outstretched arms — a natural fit because both characters already curve in the direction of reaching forward. The gesture covers a range of emotional registers from a comforting shoulder-squeeze to a full enthusiastic embrace. Posting a hug face is one of the few kaomoji gestures that sends a clear physical action to the reader rather than simply expressing an emotion.",
    faqs: [
      {
        question: "When should I send a hug kaomoji?",
        answer: "For comfort after bad news, celebration hugs, hello after a long time, or any moment where a written hug would make someone smile.",
      },
      {
        question: "Is hug different from heart kaomoji?",
        answer: "Heart kaomoji broadly covers affection. Hug kaomoji specifically feature the embrace pose — arms reaching out — as the central expression.",
      },
      {
        question: "Are hugging kaomoji good for friend chats?",
        answer: "Yes. Hug faces read warmly and platonically in most contexts, making them great for close friends and family chats.",
      },
      {
        question: "Will hug faces paste in WhatsApp?",
        answer: "Yes. Most hug kaomoji use standard Unicode characters that paste fine in WhatsApp, Telegram, and other major chat apps.",
      },
    ],
    related: ["/heart-kaomoji", "/love-kaomoji", "/shy-kaomoji", "/bowing-kaomoji"],
  },
  {
    path: "/waving-kaomoji",
    label: "Waving",
    heading: "Waving Kaomoji",
    titleSegment: "Waving Kaomoji ﾟ(｡◕‿◕｡)ﾟ",
    description:
      "Waving kaomoji copy and paste: hello, goodbye, and waving text faces. One-tap copy for a friendly wave in any chat.",
    intro:
      "Friendly waves for hellos, goodbyes, and casual check-ins — tap to copy. Waving kaomoji are the text-face equivalent of a cheerful wave across the room.",
    group: "browse",
    tags: ["waving", "wave"],
    howTo: [
      "Pick a wave face that fits the moment — casual hello, cheerful goodbye, or enthusiastic cheer.",
      "Tap Copy to grab the face with its arm characters intact.",
      "Paste into your opening or closing message for a friendly, visible wave.",
    ],
    definition:
      "Waving kaomoji feature arm-raising and wave poses that signal hello, goodbye, or friendly acknowledgment in plain text. They cover everything from a gentle greeting to an enthusiastic farewell cheer.",
    learnMore:
      "Waving kaomoji are culturally versatile because the wave gesture reads the same way in almost every language — it is a hello, a goodbye, or a friendly acknowledgment. The ﾉ character became the most widely used wave arm in kaomoji because its diagonal line naturally suggests a raised hand. A simple face with a single ﾉ needs no decoding — the gesture is self-explanatory across cultural contexts without any Japanese internet knowledge.",
    faqs: [
      {
        question: "When should I use a waving kaomoji?",
        answer: "For greetings, farewells, or casual check-ins when a written hello feels flat. A wave face makes the warmth visible.",
      },
      {
        question: "Is waving the same as happy kaomoji?",
        answer: "Happy covers cheers and positive energy broadly. Waving is specific to the greeting or farewell pose — arms up, friendly motion toward someone.",
      },
      {
        question: "Can waving kaomoji work as a goodbye?",
        answer: "Yes. Hello and goodbye waves share this page since the arm pose reads the same way in either direction.",
      },
      {
        question: "Do wave arms copy correctly?",
        answer: "Most wave poses use standard characters that paste fine. If arms drop a character, pick a simpler waving face from the grid.",
      },
    ],
    related: ["/happy-kaomoji", "/excited-kaomoji", "/smile-kaomoji", "/thumbs-up-kaomoji", "/giggling-kaomoji"],
  },
  {
    path: "/thinking-kaomoji",
    label: "Thinking",
    heading: "Thinking Kaomoji",
    titleSegment: "Thinking Kaomoji (◔_◔)",
    description:
      "Thinking kaomoji copy and paste: pondering, wondering, and deep-thought text faces. Tap once for the perfect thinking reaction.",
    intro:
      "Pondering faces and deep-thought expressions for when you need to show the gears turning — tap to copy. Thinking kaomoji cover curiosity, contemplation, and the universal \"hmm\".",
    group: "browse",
    tags: ["thinking"],
    howTo: [
      "Pick a face that reads pensive or curious, not blank or confused.",
      "Tap Copy to grab the thinking pose.",
      "Paste as your reaction to a complex question or before your considered reply.",
    ],
    definition:
      "Thinking kaomoji feature hand-to-chin poses, upward glances, and contemplative expressions that signal deep thought or genuine curiosity.",
    learnMore:
      "Thinking kaomoji borrowed the hand-to-chin gesture from Japanese manga, where a tilted head and upward glance signal a character deep in thought. The pose translates well to text because a slightly asymmetric eye — one larger or more open than the other — creates the impression of looking off to one side. Even a two-character difference in the eyes shifts the face from blank to pensive, making the mood readable at a glance.",
    faqs: [
      {
        question: "When should I use a thinking kaomoji?",
        answer: "When you are genuinely processing something, stalling playfully, or signaling \"let me think about this\" in chat. It softens a pause in conversation.",
      },
      {
        question: "How is thinking different from confused kaomoji?",
        answer: "Thinking signals active deliberation — the gears are turning. Confused signals \"I don't understand\" — the gears are stuck.",
      },
      {
        question: "Are thinking faces good for work chats?",
        answer: "Yes. A mild thinking face is a neutral, professional way to signal you are considering a response rather than ignoring a message.",
      },
      {
        question: "Will thinking kaomoji paste on all devices?",
        answer: "Most thinking poses use common Unicode characters. Pick simpler faces if a rare glyph shows as a box.",
      },
    ],
    related: ["/confused-kaomoji", "/nervous-kaomoji", "/smug-kaomoji", "/shy-kaomoji"],
  },
  {
    path: "/dance-kaomoji",
    label: "Dance",
    heading: "Dance Kaomoji",
    titleSegment: "Dance Kaomoji ♪(┌・。・)┌",
    description:
      "Dance kaomoji copy and paste: dancing, grooving, and celebration text faces. Tap once for an animated dance reaction in any chat.",
    intro:
      "Grooving, spinning, and full dance-mode poses for when the vibe calls for a celebration — tap to copy. Dance kaomoji bring movement and joy to plain text.",
    group: "browse",
    tags: ["dance"],
    howTo: [
      "Pick a dance face that matches the music energy — subtle groove or full party mode.",
      "Tap Copy to grab the pose.",
      "Paste as your reaction to good news, a party invite, or a song you love.",
    ],
    definition:
      "Dance kaomoji feature spinning poses, arm movements, and celebratory stances that suggest motion and rhythm in plain text.",
    learnMore:
      "Dance kaomoji capture motion through asymmetric arm placement and musical note characters like ♪ placed outside the face frame. The ♪ glyph is an unusually efficient shorthand — it signals music and movement in a single character, turning a static face into one that clearly reads as grooving. Adding a second ♫ mark intensifies the musical energy further.\n\nDance faces are built from moving arms on both sides: ┏(＾0＾)┛ and ┗(＾0＾)┓ are the same dancer mid-move, and sending them one after another looks like a little routine. ヾ(⌐■_■)ノ♪ adds sunglasses for a cooler dancer, while ~(˘▾˘~) and (~˘▾˘)~ sway side to side. Use them for good news, weekend plans, payday, a favorite song coming on, or the end of exams. Pair them with 🎶 or 🪩 for a party mood. Because dance faces are energetic, they fit friends and group chats better than formal messages.",
    faqs: [
      {
        question: "When should I use a dance kaomoji?",
        answer: "For celebration, party invites, when a favorite song hits, or any moment where the mood calls for a little movement.",
      },
      {
        question: "Are dance and excited kaomoji different?",
        answer: "Similar energy, but dance focuses on the movement pose — spinning and grooving. Excited is broader high-energy enthusiasm without the dance-specific motion.",
      },
      {
        question: "Can I use dance faces in group chats?",
        answer: "Yes. Dance and party reactions are universally understood and usually land well in celebration threads.",
      },
      {
        question: "Will dancing arms paste correctly?",
        answer: "Most dance poses use common Unicode characters that paste fine on all modern devices.",
      },
    ],
    related: ["/excited-kaomoji", "/happy-kaomoji", "/running-kaomoji", "/giggling-kaomoji"],
  },
  {
    path: "/fish-kaomoji",
    label: "Fish",
    heading: "Fish Kaomoji",
    titleSegment: "Fish Kaomoji ><(((°>",
    description:
      "Fish kaomoji copy and paste: fishy, aquatic, and underwater text faces ><(((°>. Tap once for a fun fish reaction in any chat.",
    intro:
      "Fishy faces and aquatic text art for fishing jokes, aquarium fans, and anyone who loves a good ><(((°> — tap to copy. Fish kaomoji are a niche favorite in kaomoji culture.",
    group: "browse",
    tags: ["fish"],
    howTo: [
      "Pick a fish face that shows the size or mood you want.",
      "Tap Copy to grab the fishy characters intact.",
      "Paste into chat for an unexpected aquatic reaction.",
    ],
    definition:
      "Fish kaomoji use bracket and arrow characters to create the classic ><(((°> fish shape, along with aquatic-themed face variants. They are a beloved novelty in the kaomoji tradition.",
    learnMore:
      "The ><(((°> fish shape is one of the earliest kaomoji to spread widely in Western internet culture, appearing on IRC and early forums in the 1990s before most Western users had encountered Japanese-style text faces. Its purely pictographic nature — it represents an object, not a mood — makes it accessible without any knowledge of kaomoji grammar.",
    faqs: [
      {
        question: "What are fish kaomoji?",
        answer: "Text faces shaped like fish, built from arrow and bracket characters. The classic ><(((°> is the most recognized, but there are many creative variants.",
      },
      {
        question: "When do people use fish kaomoji?",
        answer: "For fishing jokes, ocean or aquarium references, playful random reactions, or simply because they enjoy the novelty of a text fish.",
      },
      {
        question: "Are fish kaomoji hard to paste?",
        answer: "No. They use common keyboard characters that paste fine on all devices. Some extended fish art uses rare glyphs that may show as boxes on older systems.",
      },
      {
        question: "How is fish kaomoji different from other animal pages?",
        answer: "Fish kaomoji focus on the aquatic shape — arrows and brackets forming a fish body. Animal pages like cat, dog, and bunny use facial expression cues instead.",
      },
    ],
    related: ["/cat-kaomoji", "/dog-kaomoji", "/bunny-kaomoji", "/bear-kaomoji"],
  },
  {
    path: "/birthday-kaomoji",
    label: "Birthday",
    heading: "Birthday Kaomoji",
    titleSegment: "Birthday Kaomoji ☆彡(ﾉ^^)ﾉ",
    description:
      "Birthday kaomoji copy and paste: celebration, cake, and party text faces. Tap once to send the perfect birthday reaction in any chat.",
    intro:
      "Party faces, cake poses, and celebratory cheers for birthdays — one tap to copy. Birthday kaomoji are the text-face way to celebrate someone without hunting for the right emoji combo.",
    group: "browse",
    tags: ["birthday"],
    howTo: [
      "Pick a face with the celebration intensity you want — heartfelt cheer or full party mode.",
      "Tap Copy to capture every party character.",
      "Paste into your birthday message for an instant text-face celebration.",
    ],
    definition:
      "Birthday kaomoji combine party, celebration, and festive poses to create text faces perfect for birthday wishes, congratulations, and milestone moments.",
    learnMore:
      "Birthday kaomoji borrow celebratory elements from the sparkle and star pages — ★ and ☆ characters — and combine them with cheering poses to signal a special occasion. They occupy the overlap between festive decoration and expressive reaction, making them work equally well as a standalone birthday greeting or as a flourish alongside a written message.\n\nA good birthday message pairs one face with one personal line. 'Happy birthday! Hope this year is your best yet ＼(＾▽＾)／🎂' feels warmer than a face on its own, and putting the face at the end keeps the message easy to read. Cake 🎂, balloons 🎈, party poppers 🎉, and gifts 🎁 are the emoji that make a face read as a birthday at a glance. For a belated wish, a sheepish face with a sweat drop, such as (^_^;)🎂, admits you are late with a smile. For group cards and office chats, choose simple cheering faces that everyone can read.",
    faqs: [
      {
        question: "What makes a kaomoji a birthday kaomoji?",
        answer: "Birthday faces lean into celebration energy: party poses, festive glyphs, and cheering stances that signal a special occasion.",
      },
      {
        question: "Can I use birthday kaomoji with text?",
        answer: "Yes — they work best with a short birthday message. Paste the face before or after your wishes to add expressive flair.",
      },
      {
        question: "Will birthday kaomoji paste in Instagram captions?",
        answer: "Usually yes. Instagram supports most Unicode characters, so birthday kaomoji paste fine in captions and comments.",
      },
      {
        question: "Is there a Christmas or Halloween kaomoji page too?",
        answer: "Yes — Christmas Kaomoji and Halloween Kaomoji each have their own pages with seasonal text faces.",
      },
    ],
    related: ["/excited-kaomoji", "/happy-kaomoji", "/sparkle-kaomoji", "/star-kaomoji", "/dance-kaomoji", "/halloween-kaomoji", "/christmas-kaomoji"],
  },
  {
    path: "/christmas-kaomoji",
    label: "Christmas",
    heading: "Christmas Kaomoji",
    titleSegment: "Christmas Kaomoji ☆*:.｡.o(≧▽≦)o.｡.:*☆",
    description:
      "Christmas kaomoji copy and paste 🎄 190+ festive faces: Santa 🎅(＾▽＾)🎁, snowmen ⛄(◕‿◕)⛄, reindeer Ψ(・ᴥ・)Ψ, gifts, and Merry Christmas greetings.",
    intro:
      "Santa, snowmen, reindeer, gifts, and Merry Christmas greetings — 190+ festive text faces for holiday cards, group chats, and December captions. Tap Copy and paste anywhere.",
    group: "browse",
    tags: ["christmas"],
    faceGroups: [
      { id: "santa", heading: "Santa kaomoji 🎅", glyphs: ["🎅", "🤶", "サンタ", "ｻﾝﾀ"] },
      { id: "tree", heading: "Christmas tree kaomoji 🎄", glyphs: ["🎄", "🌲"] },
      { id: "snow", heading: "Snowman & snow kaomoji ⛄", glyphs: ["⛄", "☃", "❄", "❅", "❆"] },
      { id: "gift", heading: "Gift kaomoji 🎁", glyphs: ["🎁", "由", "プレゼント", "ﾌﾟﾚｾﾞﾝﾄ"] },
      { id: "reindeer", heading: "Reindeer kaomoji 🦌", glyphs: ["🦌", "🛷", "Ψ", "Ѱ"] },
      { id: "greeting", heading: "Merry Christmas kaomoji ✨", glyphs: ["Merry", "メリー", "ﾒﾘｰ", "Happy Holidays", "X'mas"] },
    ],
    howTo: [
      "Jump to a type — Santa, tree, snowman, gifts, reindeer, or Merry Christmas greetings — or scroll the full list.",
      "Tap Copy. Emoji like 🎄 and 🎅 copy together with the text face.",
      "Paste into a holiday card, family group chat, Secret Santa thread, or December post.",
    ],
    definition:
      "Christmas kaomoji are Japanese-style text faces dressed for the holidays — Santa hats, snowmen, reindeer antlers, gifts, and festive greetings built from Unicode characters and seasonal emoji.",
    learnMore:
      "Christmas in Japan is a cheerful, romantic holiday rather than a religious one, and its kaomoji show that spirit: Santa poses, gift-carrying faces, and sparkly メリークリスマス (Merry Christmas) banners. The Japanese words you will see often are サンタ (Santa), プレゼント (present), and メリークリスマス (Merry Christmas), sometimes in half-width katakana like ﾒﾘｰｸﾘｽﾏｽ.\n\nHow festive faces are built: Ψ or Ѱ above a face become reindeer antlers, as in Ψ(・ᴥ・)Ψ. 由 looks like a wrapped present with a ribbon, so ｡∠(*^∇ﾟ)ﾉ⌒由 is someone tossing a gift. ∠ before a face is a Santa hat tilted to one side, and ☆ or ✧ add twinkling lights.\n\nPair faces with holiday emoji for instant context: 🎄 tree, 🎅 Santa, 🤶 Mrs. Claus, ⛄ snowman, ❄️ snowflake, 🎁 gift, 🦌 reindeer, 🔔 bells, 🍪 cookies, and 🧦 stockings. For emoji-only sets, see our holiday emoji combos.\n\nWhere to use them: holiday cards and e-cards, Secret Santa chats, family group texts, Instagram captions, and work holiday messages. Snowmen and gift faces are safe for any audience; romantic faces suit partners.",
    faqs: [
      {
        question: "How do I copy and paste Christmas kaomoji?",
        answer: "Tap Copy under any face, then paste with Ctrl+V, Cmd+V, or a long-press Paste on your phone. Emoji inside the face copy with it.",
      },
      {
        question: "What is the reindeer kaomoji?",
        answer: "Ψ(・ᴥ・)Ψ is a popular reindeer: the Ψ characters are antlers and ᴥ is the snout. Add 🛷 for a sleigh.",
      },
      {
        question: "How do you write Merry Christmas in kaomoji?",
        answer: "Try (*^▽^)/★*☆♪ Merry Christmas or ☆･ﾟ:*【ﾒﾘｰｸﾘｽﾏｽ】*:ﾟ･☆, which spells Merry Christmas in Japanese katakana.",
      },
      {
        question: "Do Christmas kaomoji work for other winter holidays?",
        answer: "Snowman, snowflake, and gift faces work for any winter celebration. Use Happy Holidays greetings for mixed audiences.",
      },
      {
        question: "Will festive glyphs paste correctly?",
        answer: "Yes on modern phones and computers. If a rare symbol shows as a box, choose a simpler face from the same group.",
      },
    ],
    related: ["/new-year-kaomoji", "/winter-kaomoji", "/thanksgiving-kaomoji", "/halloween-kaomoji", "/birthday-kaomoji", "/emoji-combos"],
  },
  {
    path: "/new-year-kaomoji",
    label: "New Year",
    heading: "New Year Kaomoji",
    titleSegment: "New Year Kaomoji 🎆 Happy New Year Faces",
    description:
      "New Year kaomoji copy and paste 🎆 180+ faces: fireworks ＼(＾▽＾)／🎆, champagne toasts 🥂, countdowns, resolutions, and Japanese あけおめ greetings.",
    intro:
      "Fireworks, champagne toasts, midnight countdowns, and Happy New Year greetings — 180+ text faces for December 31 group chats, midnight texts, and New Year captions. Tap Copy and paste anywhere.",
    group: "browse",
    tags: ["new year"],
    faceGroups: [
      { id: "fireworks", heading: "Fireworks kaomoji 🎆", glyphs: ["🎆", "🎇", "✺"] },
      { id: "cheers", heading: "Champagne & cheers kaomoji 🥂", glyphs: ["🥂", "🍾"] },
      { id: "party", heading: "Countdown & party kaomoji 🎉", glyphs: ["🎉", "🎊", "🥳", "🕛", "3…2…1"] },
      { id: "japanese", heading: "Japanese New Year kaomoji 🎍", glyphs: ["🎍", "あけ", "ｱｹ", "お正月", "謹賀", "今年も", "⛩", "🌅"] },
    ],
    howTo: [
      "Jump to a type — fireworks, champagne, countdown, or Japanese greetings — or scroll the full list.",
      "Tap Copy. Emoji like 🎆 and 🥂 copy together with the face.",
      "Paste into a midnight text, a New Year's Eve group chat, or your first post of the year.",
    ],
    definition:
      "New Year kaomoji are Japanese-style text faces for celebrating the turn of the year: fireworks, champagne toasts, countdown cheers, and greetings like Happy New Year or あけおめ, built from Unicode characters and festive emoji.",
    learnMore:
      "New Year (お正月, oshōgatsu) is the biggest holiday of the year in Japan, so Japanese text culture has a rich set of greetings for it. あけましておめでとう (akemashite omedetou) means Happy New Year and is shortened online to あけおめ (akeome). 今年もよろしく (kotoshi mo yoroshiku) means \"please be good to me this year too\" and is often sent right after midnight. 謹賀新年 (kinga shinnen) is the formal New Year greeting you see on cards.\n\nHow festive faces are built: 🎆 and 🎇 on either side of a face become fireworks, raised arms like ＼(＾▽＾)／ show cheering, and 🥂 between two faces turns them into a toast. ✧ and ☆ add sparkle, while ⊃━☆ﾟ.*･｡ﾟ is a magic wand for New Year wishes.\n\nPair faces with New Year emoji for instant context: 🎆 fireworks, 🎇 sparkler, 🥂 clinking glasses, 🍾 champagne, 🎉 party popper, 🎊 confetti ball, 🕛 midnight, and 🎍 kadomatsu, the bamboo decoration placed at Japanese doorways.\n\nWhere to use them: midnight texts to friends and family, New Year's Eve group chats, countdown posts, Instagram and TikTok captions, and work messages wishing colleagues a good year. Fireworks and confetti faces suit any audience; the midnight kiss face suits partners.",
    faqs: [
      {
        question: "How do I copy and paste New Year kaomoji?",
        answer: "Tap Copy under any face, then paste with Ctrl+V, Cmd+V, or a long-press Paste on your phone. Fireworks and champagne emoji copy with the face.",
      },
      {
        question: "What does あけおめ mean?",
        answer: "あけおめ (akeome) is the casual short form of あけましておめでとう, Happy New Year in Japanese. Friends send it in chats right after midnight.",
      },
      {
        question: "What is a good Happy New Year kaomoji?",
        answer: "🎆＼(＾▽＾)／🎆 Happy New Year! is a cheerful classic. For a toast, try (*^▽^)/🥂\\(^▽^*), two faces clinking glasses.",
      },
      {
        question: "Can I use these faces for Lunar New Year?",
        answer: "Fireworks, confetti, and greeting faces work for any New Year celebration. The 🎍 and あけおめ faces are specific to the Japanese New Year on January 1.",
      },
      {
        question: "Will fireworks emoji paste correctly?",
        answer: "Yes on modern phones and computers. If a rare symbol shows as a box, pick a simpler face from the same group.",
      },
    ],
    related: ["/christmas-kaomoji", "/winter-kaomoji", "/birthday-kaomoji", "/excited-kaomoji", "/dance-kaomoji", "/sparkle-kaomoji"],
  },
  {
    path: "/winter-kaomoji",
    label: "Winter",
    heading: "Winter Kaomoji",
    titleSegment: "Winter Kaomoji ❄ Snow & Cozy Faces to Copy",
    description:
      "Winter kaomoji copy and paste ❄ 110+ faces: snowflakes, snowmen ☃️(＾▽＾)☃️, shivering (((;ꏿ_ꏿ;))), hot cocoa ☕, scarves, skiing, and cozy kotatsu days.",
    intro:
      "Snowfall, shivers, hot cocoa, scarves, and snow days — 110+ text faces for cold mornings, cozy nights in, and every winter chat. Tap Copy and paste anywhere.",
    group: "browse",
    tags: ["winter"],
    faceGroups: [
      { id: "snow", heading: "Snow & snowflake kaomoji ❄", glyphs: ["❄", "❅", "❆", "🌨", "☃", "⛄", "⚪"] },
      { id: "cold", heading: "Cold & shivering kaomoji 🥶", glyphs: ["((((", "(((", "ｻﾑｲ", "寒", "Brr", "brr", "🧊"] },
      { id: "cozy", heading: "Cozy winter kaomoji ☕", glyphs: ["☕", "🧣", "🧤", "🫖", "🔥", "🍊", "🛌"] },
      { id: "sports", heading: "Winter sports kaomoji ⛷️", glyphs: ["⛷", "🏂", "⛸"] },
    ],
    howTo: [
      "Jump to a type — snow, shivering, cozy, or winter sports — or scroll the full list.",
      "Tap Copy. Snowflakes, scarves, and cocoa emoji copy together with the face.",
      "Paste into a snow-day text, a cozy night-in post, or a chat about the cold.",
    ],
    definition:
      "Winter kaomoji are Japanese-style text faces for the cold season: falling snow, shivering bodies, warm drinks, scarves, and winter sports, made from Unicode characters and wintry emoji. Unlike Christmas faces, they fit the whole season from December to March.",
    learnMore:
      "In Japanese chat, 寒い (samui) means cold, and you will often see it in half-width katakana as ｻﾑｲ next to a trembling face. Shivering is drawn with stacked brackets: the more ((( ))) around a face, the harder it shakes, as in (((;ꏿ_ꏿ;))). A kotatsu, the heated table Japanese families gather under in winter, often appears with 🍊 mandarin oranges, the classic kotatsu snack.\n\nHow wintry faces are built: ❄, ❅, and ❆ are three snowflake styles that can rain around a face, ⚪ is a snowball in flight, and ☃️ or ⛄ turn a face into a snowman buddy. Warm faces use soft closed eyes like (˘︶˘) next to ☕ or 🫖 to show comfort.\n\nPair faces with winter emoji for instant context: ❄️ snowflake, 🌨️ snow cloud, ☃️ snowman, 🧣 scarf, 🧤 gloves, ☕ hot drink, 🔥 fireplace, ⛷️ skier, 🏂 snowboarder, ⛸️ ice skate, and 🐧 penguin.\n\nWhere to use them: snow-day texts, school-closure group chats, cozy night-in captions, ski-trip posts, and messages telling friends to stay warm. For holiday-specific faces, see Christmas and New Year kaomoji.",
    faqs: [
      {
        question: "How do I copy and paste winter kaomoji?",
        answer: "Tap Copy under any face, then paste with Ctrl+V, Cmd+V, or a long-press Paste on your phone. Snowflakes and emoji copy with the face.",
      },
      {
        question: "What is the shivering kaomoji?",
        answer: "(((;ꏿ_ꏿ;))) is a popular shiver: the stacked brackets are the shaking. Add ❄ or ｻﾑｲ (samui, cold) to make the meaning clear.",
      },
      {
        question: "What is the difference between winter and Christmas kaomoji?",
        answer: "Christmas faces feature Santa, trees, and gifts for December 25. Winter faces cover snow, cold, and cozy moments all season long, so they still fit in January and February.",
      },
      {
        question: "What does ｻﾑｲ mean in kaomoji?",
        answer: "ｻﾑｲ is 寒い (samui), Japanese for cold, written in half-width katakana. It is often added after a trembling face.",
      },
      {
        question: "Will snowflake symbols paste correctly?",
        answer: "Yes. ❄, ❅, and ❆ are standard Unicode and work in nearly every app. If a rare symbol shows as a box, choose a simpler face.",
      },
    ],
    related: ["/christmas-kaomoji", "/new-year-kaomoji", "/sleepy-kaomoji", "/sick-kaomoji", "/bear-kaomoji", "/food-kaomoji"],
  },
  {
    path: "/valentine-kaomoji",
    label: "Valentine's Day",
    heading: "Valentine's Day Kaomoji",
    titleSegment: "Valentine's Day Kaomoji 💘 Cute Love Faces",
    description:
      "Valentine's Day kaomoji copy and paste 💘 110+ faces: love letters 💌, chocolates 🍫, roses, Cupid's arrows, kisses, and shy confessions for February 14.",
    intro:
      "Love letters, chocolates, roses, Cupid, and shy confessions — 110+ text faces for Valentine's Day messages, cards, and captions. Tap Copy and paste anywhere.",
    group: "browse",
    tags: ["valentine"],
    faceGroups: [
      { id: "chocolate", heading: "Chocolate & gift kaomoji 🍫", glyphs: ["🍫", "💝", "🎁", "チョコ", "ﾁｮｺ"] },
      { id: "cupid", heading: "Cupid & love letter kaomoji 💘", glyphs: ["💘", "💌", "🏹"] },
      { id: "kiss", heading: "Valentine kiss kaomoji 💋", glyphs: ["з", "ε", "³", "💋"] },
    ],
    howTo: [
      "Jump to a type — chocolate, Cupid, or kisses — or scroll the full list.",
      "Tap Copy. Hearts and emoji copy together with the face.",
      "Paste into a Valentine's card, a text to your partner or crush, or a Galentine's group chat.",
    ],
    definition:
      "Valentine's Day kaomoji are Japanese-style text faces for February 14: blushing faces, love letters, chocolates, roses, and Cupid's arrows, built from Unicode characters, hearts, and romantic emoji.",
    learnMore:
      "In Japan, Valentine's Day is about chocolate. Traditionally women give chocolate on February 14, either 本命チョコ (honmei choco, for a true love) or 義理チョコ (giri choco, polite chocolate for coworkers and friends), and men return the favor a month later on White Day, March 14. That is why so many Japanese Valentine kaomoji hold out 🍫 or say チョコ.\n\nHow romantic faces are built: ♡ and ❤ placed beside or inside a face show affection, 灬 under the eyes is a deep blush, and з or ε as a mouth is a puckered kiss, as in ( ˘ ³˘)♥. Two faces pressed together like (っ˘з(˘⌣˘ ) make a smooch, and ─=≡Σ in front of a face is a speed trail, perfect for Cupid's arrow.\n\nPair faces with Valentine emoji for instant context: 💘 heart with arrow, 💌 love letter, 💝 heart gift, 🍫 chocolate, 🌹 rose, 💐 bouquet, 💋 kiss mark, and 💑 couple.\n\nWhere to use them: texts to a partner, playful notes to a crush, Valentine's cards, Galentine's chats with friends, and February captions. Chocolate and flower faces suit anyone; kiss faces are best kept for partners.",
    faqs: [
      {
        question: "How do I copy and paste Valentine's Day kaomoji?",
        answer: "Tap Copy under any face, then paste with Ctrl+V, Cmd+V, or a long-press Paste on your phone. Hearts and emoji copy with the face.",
      },
      {
        question: "What is a cute Valentine kaomoji for my partner?",
        answer: "(◍•ᴗ•◍)❤ Be my valentine is sweet and simple. For something cheekier, send (っ˘з(˘⌣˘ ) Smooch.",
      },
      {
        question: "Why do Japanese Valentine kaomoji have chocolate?",
        answer: "In Japan, giving chocolate is the main Valentine's tradition, so 🍫 and チョコ (choco) appear in many faces.",
      },
      {
        question: "Are there Valentine faces for friends?",
        answer: "Yes. Chocolate, flower, and Galentine's faces like 🎀(｡･ω･｡)ﾉ♡ Happy Galentine's are friendly rather than romantic.",
      },
      {
        question: "How are Valentine kaomoji different from love kaomoji?",
        answer: "Love kaomoji cover affection any day of the year. Valentine's faces add February 14 touches like chocolate, Cupid, and love letters.",
      },
    ],
    related: ["/love-kaomoji", "/heart-kaomoji", "/kiss-kaomoji", "/hug-kaomoji", "/shy-kaomoji", "/flower-kaomoji"],
  },
  {
    path: "/thanksgiving-kaomoji",
    label: "Thanksgiving",
    heading: "Thanksgiving Kaomoji",
    titleSegment: "Thanksgiving Kaomoji 🦃 Turkey & Fall Faces",
    description:
      "Thanksgiving kaomoji copy and paste 🦃 turkey 🦃(◕ᴗ◕)🦃, pumpkin pie 🥧(๑´ڡ`๑), fall leaves, thankful, and food-coma faces for holiday texts and captions.",
    intro:
      "Turkeys, pumpkin pie, fall leaves, and thankful faces for Thanksgiving Day texts, family group chats, and November captions. Tap Copy and paste anywhere.",
    group: "browse",
    tags: ["thanksgiving"],
    faceGroups: [
      { id: "turkey", heading: "Turkey kaomoji 🦃", glyphs: ["🦃", "🍗"] },
      { id: "pie", heading: "Pie & dinner kaomoji 🥧", glyphs: ["🥧", "🌽", "🍠", "🥖", "🍽", "🍷"] },
      { id: "fall", heading: "Fall leaf kaomoji 🍂", glyphs: ["🍂", "🍁"] },
      { id: "thankful", heading: "Thankful kaomoji 🙏", glyphs: ["thank", "Thank", "grateful", "🙏"] },
    ],
    howTo: [
      "Pick a type — turkey, pie and dinner, fall leaves, or thankful faces.",
      "Tap Copy to grab the face with its emoji.",
      "Paste into a Thanksgiving greeting, family chat, or a gratitude post.",
    ],
    definition:
      "Thanksgiving kaomoji are text faces themed around the US and Canadian harvest holiday — turkeys, pumpkin pie, corn, fall leaves, family dinners, and grateful faces.",
    learnMore:
      "Thanksgiving falls on the fourth Thursday of November in the United States and the second Monday of October in Canada. Its kaomoji mix classic Japanese text faces with harvest emoji: 🦃 turkey, 🥧 pie, 🌽 corn, 🍂 and 🍁 leaves, and 🍗 drumsticks.\n\nThe food faces borrow from Japanese eating kaomoji. ڡ is a tongue licking the lips (yummy), ﹃ is drool (craving), and ﾓｸﾞﾓｸﾞ (mogu mogu) is the sound of chewing. A sleepy (｡-_-｡)zzZ next to a turkey is the universal post-dinner food coma.\n\nThankful faces such as (人´∀`) use 人, which looks like two hands pressed together, to show gratitude. They work beyond the holiday too — for thank-you notes and appreciation posts.",
    faqs: [
      {
        question: "What is a turkey kaomoji?",
        answer: "There is no single classic one, so most people pair a face with the turkey emoji, like 🦃(◕ᴗ◕)🦃 or 🦃 gobble gobble (≧▽≦).",
      },
      {
        question: "How do I show I'm thankful with a kaomoji?",
        answer: "Use a face with 人 (pressed hands), such as (人´∀`)🙏 thankful, or a soft smile with a heart like (◍•ᴗ•◍)❤ thank you.",
      },
      {
        question: "When is Thanksgiving?",
        answer: "In the United States it is the fourth Thursday of November. In Canada it is the second Monday of October.",
      },
      {
        question: "Can I use these for fall in general?",
        answer: "Yes. Leaf, pie, and cozy faces fit any autumn post, from apple picking to sweater weather.",
      },
    ],
    related: ["/christmas-kaomoji", "/halloween-kaomoji", "/food-kaomoji", "/bowing-kaomoji", "/emoji-combos"],
  },
  {
    path: "/halloween-kaomoji",
    label: "Halloween",
    heading: "Halloween Kaomoji",
    titleSegment: "Halloween Kaomoji ヾ(⌐■_■)ノ♪",
    description:
      "Halloween kaomoji copy and paste 🎃 350+ spooky faces: ghosts 👻(◕ᴗ◕), pumpkins, bats ⎛⎝(•ⱅ•)⎠⎞, zombies [¬º-°]¬, vampires, witches, and devils. Tap to copy.",
    intro:
      "Ghosts, pumpkins, bats, skulls, zombies, vampires, and witches — 350+ spooky and cute Halloween text faces. Tap Copy and paste them into texts, Discord, Instagram captions, or trick-or-treat plans.",
    group: "browse",
    tags: ["halloween"],
    faceGroups: [
      { id: "ghost", heading: "Ghost kaomoji 👻", glyphs: ["👻", "ｵﾊﾞｹ", "ᯅ", "お化け"] },
      { id: "pumpkin", heading: "Pumpkin kaomoji 🎃", glyphs: ["🎃"] },
      { id: "bat", heading: "Bat kaomoji 🦇", glyphs: ["🦇", "⎛⎝"] },
      { id: "zombie", heading: "Zombie kaomoji 🧟", glyphs: ["🧟", "[¬º", "{¬º", "ཀ"] },
      { id: "devil", heading: "Devil kaomoji Ψ", glyphs: ["Ψ", "ψ", "😈"] },
      { id: "skull", heading: "Skull & dead kaomoji 💀", glyphs: ["💀", "☠", "✖", "×_×", "⚰"] },
      { id: "vampire-witch", heading: "Vampire & witch kaomoji 🧛", glyphs: ["🧛", "🩸", "🧙", "🔮", "━☆"] },
      { id: "spider-candy", heading: "Spider, cat & candy kaomoji 🕷️", glyphs: ["🕷", "🕸", "🍬", "🍭", "ᐟ\\", "ↀ"] },
    ],
    howTo: [
      "Pick your spook level: cute ghosts and pumpkins up top, then creepier zombies, devils, and dead-eyed faces further down.",
      "Tap Copy — emoji such as 🎃 and 👻 copy together with the text face.",
      "Paste into a Halloween greeting, party invite, costume post, or group chat.",
    ],
    definition:
      "Halloween kaomoji are Japanese-style text faces with a spooky twist — ghosts, pumpkins, bats, skulls, zombies, vampires, and little devils built from Unicode characters and seasonal emoji. They range from cute (👻(◕ᴗ◕)👻) to creepy ({¬ºཀ°}¬).",
    learnMore:
      "Halloween kaomoji use the same creepy-cute balance that Japanese pop culture perfected: something eerie delivered inside a soft kaomoji frame, so it stays playful instead of truly frightening. That is why a smiling ghost or a pumpkin-holding bear works in a family group chat while still feeling seasonal.\n\nHow spooky faces are built: Ψ and ψ (the Greek letter psi) become a devil's pitchfork, so Ψ(｀▽´)Ψ reads as a grinning little devil. ཀ, a Tibetan letter, looks like a gaping, drooling mouth — perfect for zombies such as {¬ºཀ°}¬. Mismatched eyes like º and ° plus a forward-reaching ¬ arm make the classic zombie shuffle [¬º-°]¬. ⎛⎝ ⎠⎞ draw bat wings around a tiny face, and ✖ or × eyes mean knocked out or dead.\n\nPair faces with emoji for instant Halloween context: 🎃 pumpkin, 👻 ghost, 🦇 bat, 💀 skull, 🕷️ spider, 🕸️ web, 🧛 vampire, 🧟 zombie, 🧙 witch, 🍬 candy, and 🌕 full moon. For emoji-only sets, see our Halloween emoji combos.\n\nWhere to use them: party invites, costume photos, trick-or-treat plans, horror-movie nights, and October bios. Creepier faces suit friends and fandom chats; cute ghosts and pumpkins are safe for family and work channels.",
    faqs: [
      {
        question: "How do I copy and paste Halloween kaomoji?",
        answer: "Tap Copy under any face on this page, then paste it with Ctrl+V, Cmd+V, or a long-press Paste on your phone. Emoji in the face copy along with the text.",
      },
      {
        question: "What are some cute Halloween kaomoji?",
        answer: "Try 👻(◕ᴗ◕)👻 for friendly ghosts, ʕ•ᴥ•ʔ🎃 for a pumpkin bear, 🍬(〃＾▽＾〃)🍭 for trick-or-treat, or /ᐠ｡ꞈ｡ᐟ\\🎃 for a black cat.",
      },
      {
        question: "What is the zombie kaomoji?",
        answer: "[¬º-°]¬ is the classic zombie walk: mismatched eyes and one arm reaching forward. {¬ºཀ°}¬ adds a groaning mouth.",
      },
      {
        question: "What does Ψ mean in a kaomoji?",
        answer: "Ψ is the Greek letter psi. In kaomoji it looks like a pitchfork or horns, so faces like Ψ(｀▽´)Ψ read as a mischievous little devil.",
      },
      {
        question: "Can I use Halloween kaomoji on Instagram and TikTok?",
        answer: "Yes. They are plain text plus standard emoji, so they work in captions, comments, and bios. Preview once, since a few rare glyphs may look different on older phones.",
      },
      {
        question: "Are Halloween kaomoji only for October?",
        answer: "Mostly, but skulls, devils, and zombies also work year-round for horror fans, gaming chats, and dark humor.",
      },
    ],
    related: ["/emoji-combos", "/devil-kaomoji", "/christmas-kaomoji", "/shocked-kaomoji", "/cute-symbols", "/birthday-kaomoji"],
  },
  {
    path: "/star-kaomoji",
    label: "Star",
    heading: "Star Kaomoji",
    titleSegment: "Star Kaomoji ★(^_^)★",
    description:
      "Star kaomoji copy and paste: shining, sparkling, and star-filled text faces. Tap once to copy a star kaomoji and drop it into any chat or bio.",
    intro:
      "Shining and twinkling star text faces for celestial vibes, good luck wishes, and sparkling reactions — one tap to copy. This collection covers classic ★ faces and soft twinkling poses. Stars pair naturally with sparkle and flower pages for a glowing aesthetic.",
    group: "browse",
    tags: ["star", "twinkle"],
    howTo: [
      "Pick a star face with the glow intensity you want — from a single ★ accent to a twinkling full-starfield pose.",
      "Tap Copy so every character, including spacing, lands on your clipboard.",
      "Paste into chat, a bio, or a username for instant celestial flair.",
    ],
    definition:
      "Star kaomoji weave ★ and ✦ glyphs into expressive faces, twinkling poses, and decorative borders. Use them for wishes, achievements, nighttime vibes, or any moment that deserves a little sparkle.",
    learnMore:
      "Star kaomoji occupy a unique position in the kaomoji vocabulary because ★ and ✦ function both as decorative elements and as meaning-carrying symbols. A ★ placed in the eye position turns a neutral face into an achievement face; the same character outside the brackets becomes a sparkling border effect. The dual function makes star characters unusually versatile in kaomoji design.",
    faqs: [
      {
        question: "What are star kaomoji used for?",
        answer: "They add starry sparkle to messages: birthday wishes, good luck, nighttime chats, or any moment that deserves a little celestial flair. Star faces work great in bios and usernames too.",
      },
      {
        question: "Are star kaomoji the same as sparkle kaomoji?",
        answer: "Similar but distinct. Star kaomoji lean on classic ★ and ✦ shapes; sparkle kaomoji use ✨ glitter-style glyphs. This page is the star hub; open sparkle kaomoji for glitter and shine.",
      },
      {
        question: "Will star symbols paste correctly on all phones?",
        answer: "Most ★ and ✦ characters paste fine on modern iOS and Android. If a rare glyph shows a box, pick a face built from the more common ★ symbol.",
      },
      {
        question: "Can I use star kaomoji in usernames?",
        answer: "Usually yes, if the platform allows special characters. Test paste into a profile field once before saving.",
      },
    ],
    related: ["/sparkle-kaomoji", "/flower-kaomoji", "/cute-kaomoji", "/heart-kaomoji"],
  },
  {
    path: "/giggling-kaomoji",
    label: "Giggling",
    heading: "Giggling Kaomoji",
    titleSegment: "Giggling Kaomoji (≧▽≦)",
    description:
      "Giggling kaomoji copy and paste: laughter, giggles, and burst-laugh text faces. Tap once for the perfect giggle reaction in chat.",
    intro:
      "Giggles, chuckles, and burst laughs ready to copy in one tap. Giggling and laughing faces share this page so you get the full spectrum from shy titter to uncontrollable cackle.",
    group: "browse",
    tags: ["giggle", "laugh"],
    howTo: [
      "Scan for the laugh intensity you want — quiet giggle, chuckle, or full burst.",
      "Tap Copy to grab the face with its spacing intact.",
      "Paste into chat as a standalone reaction or after a funny line.",
    ],
    definition:
      "These faces lean into laughter: squinted happy eyes, open mouths, and the energetic poses that signal you found something genuinely funny.",
    learnMore:
      "Giggling kaomoji evolved alongside Japanese onomatopoeia culture, where specific laugh sounds (kuku, fufu, ufufu) were associated with certain levels of amusement. The squinted crescents that form the giggle-eyes in text are a direct visual equivalent of these sounds — a contained, soft laugh that is distinct from the wide-open mouth of a full burst laugh.",
    faqs: [
      {
        question: "When should I use a giggling kaomoji?",
        answer: "Use one when laughing feels more expressive than typing 'lol'. Giggle faces work for light amusement; burst-laugh faces hit harder for genuinely hilarious moments.",
      },
      {
        question: "What is the difference between giggle and laugh kaomoji?",
        answer: "Giggling is softer — a small, contained laugh. Laughing can be louder or more uncontrolled. This page covers both so you can match the intensity.",
      },
      {
        question: "Are these the same as happy kaomoji?",
        answer: "Close but distinct. Happy faces include cheers and smiles. Giggling faces lean specifically into laughter and amusement energy.",
      },
      {
        question: "Will these paste correctly in Discord?",
        answer: "Yes. Discord renders Unicode characters well, so most laugh and giggle faces paste intact. Avoid very long multiline faces in tight channel threads.",
      },
    ],
    related: ["/happy-kaomoji", "/smile-kaomoji", "/excited-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/sparkle-kaomoji",
    label: "Sparkle",
    heading: "Sparkle Kaomoji",
    titleSegment: "Sparkle Kaomoji ✨(◕‿◕)✨",
    description:
      "Sparkle kaomoji copy and paste: glittery, glowing, and twinkling text faces. One-tap copy for that ✨ magic effect in any chat.",
    intro:
      "Glitter, twinkle, and dazzle — sparkle kaomoji for moments that need that extra shine. Copy in one tap and paste into messages, bios, or captions for instant magic.",
    group: "browse",
    tags: ["sparkle"],
    howTo: [
      "Choose a sparkle face that matches your sparkle level — subtle shimmer to full glitter bomb.",
      "Tap Copy to capture all glitter glyphs intact.",
      "Paste into your message or bio for that ✨ effect.",
    ],
    definition:
      "Sparkle kaomoji wrap faces in glitter and shine glyphs like ✨, ★, and ✦. Use them for celebratory vibes, magical moments, or aesthetic text decoration.",
    learnMore:
      "Sparkle kaomoji became a staple of the aesthetic text trend in the mid-2010s, when ✨ surrounded text gained popularity on Tumblr and later on Twitter. The sparkle frame transforms an ordinary face into something magical or celebratory without changing the expression itself — all the meaning shift comes from the decorative elements placed outside the face brackets.",
    faqs: [
      {
        question: "What are sparkle kaomoji?",
        answer: "Text faces decorated with shine glyphs like ✨ and ✦ that add a glittery or magical feel to messages. Great for celebrations, aesthetic posts, and anything that needs a little extra magic.",
      },
      {
        question: "How is sparkle different from star kaomoji?",
        answer: "Sparkle leans into ✨ glitter-style glyphs and shine effects. Star kaomoji focus on classic ★ star shapes. They overlap but carry different vibes.",
      },
      {
        question: "Can I use sparkle kaomoji for birthdays?",
        answer: "Absolutely. Sparkle and star faces are popular for birthday wishes and celebration messages where a little extra glow fits the moment.",
      },
      {
        question: "Will ✨ paste everywhere?",
        answer: "On most modern apps, yes. If a sparkle face shows a box on an older device, pick a simpler face using more basic glyph sets.",
      },
    ],
    related: ["/star-kaomoji", "/flower-kaomoji", "/cute-kaomoji", "/heart-kaomoji"],
  },
  {
    path: "/love-kaomoji",
    label: "Love",
    heading: "Love Kaomoji",
    titleSegment: "Love Kaomoji (♡ω♡)",
    description:
      "Love kaomoji copy and paste: lovestruck, affection, and romantic text faces. Tap once for the perfect love reaction beyond a plain heart emoji.",
    intro:
      "Lovestruck faces and deep affection poses — more expressive than a single ♡ emoji. Love kaomoji go beyond heart symbols into full \"I adore you\" energy, perfect for crush confessions and warm appreciation.",
    group: "browse",
    tags: ["love"],
    howTo: [
      "Pick a face that matches your love intensity — soft warmth, crush energy, or full lovestruck swoon.",
      "Tap Copy once so every heart glyph stays intact.",
      "Paste into a message, a bio, or wherever affection fits.",
    ],
    definition:
      "Love kaomoji go beyond a simple heart symbol into full expressive poses — heart-eyes, lovestruck sighs, and affection-filled stances.",
    learnMore:
      "Love kaomoji in Japanese text culture carry nuance that often softens in translation: the choice of ♡ versus ♥, heart-in-eyes versus heart-beside-face, and the intensity of the lovestruck expression all have distinct tonal weights in their original context. In English-language chat, choosing a more understated face over the most intense option still reads as deliberate.",
    faqs: [
      {
        question: "What are love kaomoji for?",
        answer: "For expressing deep affection, romantic feelings, or warm appreciation in chat. They go beyond a plain ❤️ by wrapping the feeling into a whole character pose.",
      },
      {
        question: "How is love kaomoji different from heart kaomoji?",
        answer: "Heart kaomoji broadly covers affection including hearts, kisses, and hugs. Love kaomoji focus specifically on lovestruck, romantic, and deep-affection poses.",
      },
      {
        question: "Are these too romantic for friends?",
        answer: "Some love faces read purely romantic; others work as warm appreciation. Choose softer affection poses for friend appreciation and stronger lovestruck faces for romantic chats.",
      },
      {
        question: "Can I use love kaomoji on Valentine's Day?",
        answer: "Yes — they are perfect for Valentine's messages, love notes, and any moment where full romantic energy is the intent.",
      },
    ],
    related: ["/heart-kaomoji", "/kiss-kaomoji", "/shy-kaomoji", "/cute-kaomoji", "/hug-kaomoji"],
  },
  {
    path: "/flower-kaomoji",
    label: "Flower",
    heading: "Flower Kaomoji",
    titleSegment: "Flower Kaomoji (✿◠‿◠)",
    description:
      "Flower kaomoji copy and paste: sakura, cherry blossom, and flower-in-hair faces like (◕‿◕✿) and (✿◠‿◠). Tap once to add a floral accent to any message.",
    intro:
      "Soft flower faces, cherry blossom poses, and floral accents for gentle, pretty messages. Flower and sakura kaomoji use ✿, ❀, and ꕤ glyphs to bring nature and warmth to plain text.",
    group: "browse",
    tags: ["flower", "sakura"],
    howTo: [
      "Pick a flower or blossom face that matches the softness you want — subtle petal accent or full sakura pose.",
      "Tap Copy so every floral glyph stays intact.",
      "Paste into chat, a caption, or a username for a soft natural touch.",
    ],
    definition:
      "Flower kaomoji use blossom glyphs like ✿, ❀, and ꕤ woven into text faces and decorative borders. Sakura kaomoji add cherry blossom energy — ideal for spring messages and Japanese-inspired aesthetics.",
    learnMore:
      "Floral glyphs like ✿ and ❀ entered kaomoji through Japanese mobile culture in the early 2000s, when the limited character sets on flip phones became a creative constraint that drove inventive decoration. Adding a single ✿ to a text face transformed a generic smile into a nature-themed expression. Sakura kaomoji followed the same aesthetic logic — pairing soft cherry-blossom glyphs with gentle eye and mouth marks to evoke the warmth of spring in a single line.",
    faqs: [
      {
        question: "What are flower kaomoji used for?",
        answer: "Soft, nature-themed messages: spring greetings, sakura season posts, gentle good mornings, floral aesthetic captions, or any message that should feel warm and fresh.",
      },
      {
        question: "What glyphs appear in flower kaomoji?",
        answer: "Common ones include ✿, ❀, ❁, ꕤ, and various petal-shaped Unicode characters. Sakura kaomoji often layer these for a cherry blossom effect. They all paste as plain text.",
      },
      {
        question: "How is flower different from sparkle?",
        answer: "Flower uses petal and blossom glyphs for a natural, soft aesthetic. Sparkle uses shine and glitter glyphs for a dazzling or magical vibe.",
      },
      {
        question: "Will flower glyphs show on all phones?",
        answer: "Most common flower characters paste well. If a rare petal glyph boxes out, pick a simpler flower face using ✿ or ❀.",
      },
      {
        question: "What is a sakura kaomoji?",
        answer: "Sakura kaomoji are cherry blossom themed text faces, popular during spring in Japan. They share the same soft floral aesthetic as flower kaomoji and are included on this page.",
      },
    ],
    related: ["/sparkle-kaomoji", "/star-kaomoji", "/cute-kaomoji", "/shy-kaomoji", "/love-kaomoji"],
  },
  {
    path: "/kiss-kaomoji",
    label: "Kiss",
    heading: "Kiss Kaomoji",
    titleSegment: "Kiss Kaomoji (ˊᗜˋ*)♡",
    description:
      "Kiss kaomoji copy and paste: blowing kisses, smooch faces, and affectionate peck text faces. Tap once for a sweet kiss reaction in any chat.",
    intro:
      "Blowing kisses, smooch poses, and sweet peck faces — tap to copy. Kiss kaomoji focus on the act of kissing, not just a floating heart symbol. Great for goodnight messages, love notes, and affectionate friend chats.",
    group: "browse",
    tags: ["kiss"],
    howTo: [
      "Pick a kiss face that matches the vibe — playful blown kiss, sweet peck, or romantic smooch.",
      "Tap Copy to capture every character.",
      "Paste into your message as a standalone affectionate gesture.",
    ],
    definition:
      "Kiss kaomoji feature puckered mouths, blown kiss poses, and smooch expressions built from Unicode characters — more expressive than a plain 😘 emoji.",
    learnMore:
      "Kiss kaomoji express the gesture rather than the emotion alone, using mouth-shape characters and motion marks to suggest puckering or a blown kiss in progress. The blown-kiss variant — a figure leaning forward with an extended arm — is one of the more expressive kaomoji poses because it implies movement toward the recipient rather than a static expression.",
    faqs: [
      {
        question: "When should I use a kiss kaomoji?",
        answer: "For goodnight messages, affectionate hellos, or playful blown-kiss reactions. They work in romantic chats and friendly affection equally well.",
      },
      {
        question: "Is kiss different from heart kaomoji?",
        answer: "Yes. Heart kaomoji broadly covers affection. Kiss kaomoji focus specifically on the kissing expression — puckered mouths and blown-kiss poses.",
      },
      {
        question: "Are kiss faces appropriate in casual chats?",
        answer: "Blown-kiss faces read as friendly and playful with close friends. Save stronger romantic smooch faces for clear romantic contexts.",
      },
      {
        question: "Will kiss kaomoji work in SMS?",
        answer: "Most kiss faces use standard Unicode characters that paste fine in SMS. Very rare symbols may show as boxes on older devices — pick a simpler face if that happens.",
      },
    ],
    related: ["/heart-kaomoji", "/love-kaomoji", "/shy-kaomoji", "/cute-kaomoji", "/wink-kaomoji"],
  },
  {
    path: "/smile-kaomoji",
    label: "Smile",
    heading: "Smile Kaomoji",
    titleSegment: "Smile Kaomoji (﹡ᵕ꒳ᵕ﹡)",
    description:
      "Smile kaomoji copy and paste: soft smiles, gentle grins, and warm text faces. Tap once for a friendly smile reaction in any message.",
    intro:
      "Warm smiles and gentle grins for everyday friendly messages — one tap to copy. Smile kaomoji cover the broad soft-smile mood, from tiny resting smiles to warm welcoming grins.",
    group: "browse",
    tags: ["smile"],
    howTo: [
      "Pick a smile that matches the warmth level — barely-there grin or wide open smile.",
      "Tap Copy so every character comes along.",
      "Paste as a soft positive reaction or a friendly standalone message.",
    ],
    definition:
      "Smile kaomoji feature curved mouths and gentle expressions that read as friendly, warm, and approachable. They are softer than happy cheers and less intense than excited faces.",
    learnMore:
      "Smile kaomoji represent the baseline of the kaomoji vocabulary: the simple curved mouth between eye characters is the starting point from which almost all other expressions diverge. The (◡‿◡) and ( ˙‿˙ ) patterns have been in use since the earliest days of Japanese text culture and remain among the most universally recognized text faces.",
    faqs: [
      {
        question: "Are smile kaomoji different from happy kaomoji?",
        answer: "Happy kaomoji include cheers, waves, and upbeat celebrations. Smile kaomoji are quieter — a warm grin without the loud cheer energy.",
      },
      {
        question: "When should I use a smile kaomoji?",
        answer: "For friendly acknowledgments, soft positive reactions, or warming up a neutral message. A smile face adds warmth without escalating the mood.",
      },
      {
        question: "Can I use smile kaomoji in work messages?",
        answer: "Gentle soft smiles are usually acceptable in casual work chats. Stick to simple, clean faces without unusual glyphs in more formal threads.",
      },
      {
        question: "Is there a difference between smiley face and smile kaomoji?",
        answer: "Smiley faces usually means the broad category of happy text faces. On this site, smile kaomoji focuses on the quiet grin and warm expression, not the full happy cheer category.",
      },
    ],
    related: ["/happy-kaomoji", "/giggling-kaomoji", "/cute-kaomoji", "/excited-kaomoji", "/wink-kaomoji"],
  },
  {
    path: "/excited-kaomoji",
    label: "Excited",
    heading: "Excited Kaomoji",
    titleSegment: "Excited Kaomoji ヽ(✿゚▽゚)ノ",
    description:
      "Excited kaomoji copy and paste: hype, enthusiasm, and high-energy text faces. Tap once for the perfect excited reaction in Discord, WhatsApp, or any chat.",
    intro:
      "Arms-up, wide-eyed, and bursting-with-energy faces for genuine excitement — tap to copy. Excited kaomoji bring the hype when a simple smile is not enough.",
    group: "browse",
    tags: ["excited"],
    howTo: [
      "Pick the excitement level you need — contained giddiness or full arms-flailing hype.",
      "Tap Copy to grab the face with arms and all.",
      "Paste as your reaction to good news, an announcement, or a hype moment.",
    ],
    definition:
      "Excited kaomoji are high-energy expressions: raised arms, sparkling eyes, and dynamic poses built from Unicode characters. They signal enthusiasm and genuine joy.",
    learnMore:
      "Excited kaomoji are among the most arm-heavy in the kaomoji vocabulary — the high-energy expression almost always involves raised or spread characters at the edges. This mirrors the physical experience of excitement: arms go up, the body opens outward. Characters like ヽ, ノ, and \\(^o^)/ translate that physical open-armed gesture directly into plain text.",
    faqs: [
      {
        question: "When should I use an excited kaomoji?",
        answer: "When something genuinely makes you want to jump and cheer: good news, an event you've been waiting for, or any moment where energy should come through in text.",
      },
      {
        question: "Are excited faces the same as happy?",
        answer: "Happy is the broad positive category. Excited is specifically high-energy enthusiasm — more dynamic and intense than a calm smile or a warm cheer.",
      },
      {
        question: "Do excited kaomoji have arms?",
        answer: "Many do. Raised arms and dynamic poses are a hallmark of the excited expression, and those characters paste as plain text on all modern devices.",
      },
      {
        question: "Can I use excited kaomoji in Discord?",
        answer: "Yes. Discord supports Unicode kaomoji well. These faces paste cleanly in messages, servers, and DMs.",
      },
    ],
    related: ["/happy-kaomoji", "/giggling-kaomoji", "/smile-kaomoji", "/cute-kaomoji", "/dance-kaomoji", "/running-kaomoji"],
  },
  {
    path: "/nervous-kaomoji",
    label: "Nervous",
    heading: "Nervous Kaomoji",
    titleSegment: "Nervous Kaomoji (;´・ω・)",
    description:
      "Nervous kaomoji copy and paste: anxious, worried, and uneasy text faces. Tap once for an authentic nervous reaction — sweat drops and tense eyes included.",
    intro:
      "Anxious sweat drops, tense eyes, and uneasy expressions for those \"uh oh\" moments — one tap to copy. Nervous kaomoji cover the full range from mild worry to full anxiety spiral.",
    group: "browse",
    tags: ["nervous"],
    howTo: [
      "Pick a face that matches your nerves — mild uneasy look or full sweat-drop panic.",
      "Tap Copy to grab the face.",
      "Paste as your honest reaction to a stressful or uncertain moment.",
    ],
    definition:
      "Nervous kaomoji feature sweat drops, tense mouths, and anxious eyes. They signal unease, worry, or mild dread in a way that pure text descriptions often miss.",
    learnMore:
      "Nervous kaomoji often feature the sweat drop — a small mark placed outside the face brackets to signal stress without changing the facial expression itself. This convention comes directly from manga panel language, where a single bead of sweat at the temple communicates anxiety more economically than any other visual shorthand in Japanese comics and animation.",
    faqs: [
      {
        question: "When should I use a nervous kaomoji?",
        answer: "For waiting on news, admitting a mistake, social awkwardness, or any message where you want to show genuine nervousness without a long explanation.",
      },
      {
        question: "Is nervous different from shy on this site?",
        answer: "Shy is bashful and blushy — social nerves tied to self-consciousness. Nervous is broader anxiety and unease, without the blush-and-cute framing.",
      },
      {
        question: "Can nervous faces come across as too dramatic?",
        answer: "They can in light chat. Use milder anxious faces for small worries; stronger panic faces only when the drama is intentional or playful.",
      },
      {
        question: "Do sweat-drop characters paste everywhere?",
        answer: "Most sweat marks use standard Unicode and paste fine. If a drop shows a box, pick a nervous face built from more common characters.",
      },
    ],
    related: ["/shy-kaomoji", "/confused-kaomoji", "/sad-kaomoji", "/crying-kaomoji", "/thinking-kaomoji"],
  },
  {
    path: "/wink-kaomoji",
    label: "Wink",
    heading: "Wink Kaomoji",
    titleSegment: "Wink Kaomoji (｡•̀ᴗ-)✧",
    description:
      "Wink kaomoji copy and paste: playful winks, cheeky one-eyed text faces. Tap once and paste a wink reaction into any chat or message.",
    intro:
      "Playful one-eyed winks and cheeky expressions for teasing messages — tap to copy. A wink kaomoji says more than words when you want to keep something light.",
    group: "browse",
    tags: ["wink"],
    howTo: [
      "Choose a wink face that feels playful without being too flirty for the context.",
      "Tap Copy to grab the face.",
      "Paste after a teasing line or as a standalone cheeky reply.",
    ],
    definition:
      "Wink kaomoji feature one closed eye and one open eye, suggesting a playful, knowing expression. They signal teasing, flirting, or a shared secret without saying a word.",
    learnMore:
      "The wink kaomoji achieves its effect through asymmetry: one eye closes while the other stays open, creating an imbalance that the face-reading part of the brain immediately recognizes as intentional. In kaomoji, this is usually achieved by using an open eye character on one side and a dash or arc on the other — a minimal change with a clear meaning shift.\n\nCommon wink parts include ‿ or ᴗ for the mouth, - or ~ for the closed eye, and ✧ or ☆ thrown out from the eye as a sparkle, as in (｡•̀ᴗ-)✧. That sparkle version is the classic 'leave it to me' wink and works well when you agree to do someone a favor. A wink can also soften a joke so it does not read as mean: 'You're late again (^_~)' sounds friendly, while the same line without the face can sound like a complaint. In work chats, keep winks for colleagues you know well, because a wink can read as flirty to someone who does not know your style.",
    faqs: [
      {
        question: "When should I send a wink kaomoji?",
        answer: "After a joke, a light tease, or a playful hint. A wink signals \"I'm messing with you\" or \"you know what I mean\" without being heavy about it.",
      },
      {
        question: "Are wink faces flirty?",
        answer: "They can be, but wink kaomoji also work as playful teasing between friends. Match the energy of the conversation — a wink in a friendly chat is rarely misread.",
      },
      {
        question: "How is wink different from smug?",
        answer: "Smug is self-satisfied and knowing. Wink is lighter and more playfully friendly, without the superior undertone.",
      },
      {
        question: "Do wink kaomoji paste correctly on mobile?",
        answer: "Yes. The one-eye-closed effect uses standard Unicode characters that paste on iOS, Android, and desktop without issues.",
      },
    ],
    related: ["/smug-kaomoji", "/smile-kaomoji", "/shy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/thumbs-up-kaomoji",
    label: "Thumbs Up",
    heading: "Thumbs Up Kaomoji",
    titleSegment: "Thumbs Up Kaomoji (b ^_^ )b",
    description:
      "Thumbs up kaomoji and OK text faces copy and paste. Tap once for an approval, agreement, or good-job reaction in any chat.",
    intro:
      "Approval and OK reactions for when a plain \"yes\" feels flat — tap to copy. This page covers thumbs-up poses and OK-gesture kaomoji that signal agreement, confirmation, and encouragement.",
    group: "browse",
    tags: ["thumbs up", "ok"],
    howTo: [
      "Pick a face that matches your level of approval — a subtle OK circle or an enthusiastic thumbs-up pose.",
      "Tap Copy to grab the full character string.",
      "Paste after a message you agree with, or as a standalone reaction to good news.",
    ],
    definition:
      "Thumbs-up and OK kaomoji use raised-arm poses and approval gestures to signal yes, good, or well done. They are the text-face equivalent of a 👍 — direct, positive, and easy to read.",
    learnMore:
      "Thumbs-up kaomoji use the b or ᕙ character as the raised thumb placed at the arm position in the standard kaomoji frame. The b character is particularly elegant because it reads as a thumb visually while also being a basic keyboard character that pastes cleanly on all devices. The OK variant uses circle-shaped characters to form the approval gesture.",
    faqs: [
      {
        question: "When should I use a thumbs-up kaomoji?",
        answer:
          "For agreement, approval, or a quick \"good job\" without typing a full reply. They land well after announcements, finished tasks, or anything you want to endorse.",
      },
      {
        question: "What is an OK kaomoji?",
        answer:
          "An OK kaomoji uses gestures that signal approval or confirmation — circles, raised arms, or an affirming pose. This page combines thumbs-up and OK poses so both search terms land in one place.",
      },
      {
        question: "How is thumbs up different from excited kaomoji?",
        answer:
          "Thumbs-up is calm approval. Excited is high-energy hype with arms waving. Use thumbs-up for a cool nod; use excited when you want the enthusiasm to show.",
      },
      {
        question: "Do these paste on mobile?",
        answer:
          "Yes. All characters are standard Unicode that copy cleanly on iOS and Android. Paste into chat, a reply, or a caption.",
      },
    ],
    related: ["/excited-kaomoji", "/happy-kaomoji", "/waving-kaomoji", "/birthday-kaomoji", "/bowing-kaomoji"],
  },
  {
    path: "/bowing-kaomoji",
    label: "Bowing",
    heading: "Bowing Kaomoji",
    titleSegment: "Bowing Kaomoji m(_ _)m",
    description:
      "Bowing kaomoji copy and paste: respect, thank you, and deep-bow text faces m(_ _)m. Tap once for a sincere greeting or gratitude reaction.",
    intro:
      "Respectful bows, thank-you gestures, and deep dogeza poses for formal and sincere moments — tap to copy. Bowing kaomoji carry real cultural weight in Japanese internet culture, where a bow communicates gratitude, apology, or deep respect in a way a plain \"thanks\" cannot.",
    group: "browse",
    tags: ["bow", "bowing", "dogeza"],
    howTo: [
      "Choose a bow depth: a light nod, the classic m(_ _)m, or a full dogeza (forehead to floor).",
      "Tap Copy to get the full character string on your clipboard.",
      "Paste at the end of a thank-you message or apology for extra sincerity.",
    ],
    definition:
      "Bowing kaomoji use spread arms and a lowered head position to show the bow shape in text. Dogeza — the deepest formal bow in Japanese culture — appears as a figure flat on the floor. Use these when tone matters and a word alone feels insufficient.",
    learnMore:
      "The bow is one of Japan's most socially loaded gestures, with angle and duration communicating different degrees of respect and formality. Kaomoji preserved that nuance in text form: a gentle nod uses a compact character set, while dogeza — forehead to floor — uses a wider prostrate shape. The m(_ _)m format in particular became recognizable across the internet as a signal of honest rather than perfunctory gratitude.",
    faqs: [
      {
        question: "What does m(_ _)m mean?",
        answer:
          "The lowercase m arms are bent at the elbow in a bow, and the _ _ marks in the middle represent a face turned downward in respect. Together they form the classic text bow of gratitude or apology.",
      },
      {
        question: "When should I use a bowing kaomoji?",
        answer:
          "After a sincere thank-you, an apology, or at the end of a formal request. In Japanese internet culture a bow signals genuine feeling rather than a casual nod.",
      },
      {
        question: "What is a dogeza kaomoji?",
        answer:
          "Dogeza is the deepest bow in Japanese etiquette — forehead to the floor. Dogeza kaomoji show a figure fully prostrate, used for very serious apologies or over-the-top humorous gratitude.",
      },
      {
        question: "Can I use bowing kaomoji in non-Japanese chats?",
        answer:
          "Yes. Most readers recognize the bow gesture even without the cultural context. Pair it with a word or two if needed, but the shape reads clearly as respect or thanks.",
      },
    ],
    related: ["/thank-you-kaomoji", "/sorry-kaomoji", "/waving-kaomoji", "/shy-kaomoji", "/heart-kaomoji", "/hug-kaomoji"],
  },
  {
    path: "/running-kaomoji",
    label: "Running",
    heading: "Running Kaomoji",
    titleSegment: "Running Kaomoji ε=ε=┌( >_<)┘",
    description:
      "Running kaomoji copy and paste: dashing, sprinting, and action text faces ε=ε=┌( >_<)┘. Tap once for a run, dash, or zoom-off reaction.",
    intro:
      "Dashing, sprinting, and zoom-off action faces for when you are out the door — tap to copy. Running kaomoji use ε= motion marks and a leaning pose to show speed and urgency in a single line of text.",
    group: "browse",
    tags: ["run", "running", "dash"],
    howTo: [
      "Pick a running pose: a calm jog, a panicked ε=ε= dash, or a triumphant sprint.",
      "Tap Copy to grab the full multi-character string.",
      "Paste as a standalone reaction or after a message about leaving, rushing, or escaping.",
    ],
    definition:
      "Running kaomoji use ε= speed marks and a forward-leaning body pose to show motion. The direction and body tilt signal whether the feeling is energetic or frantic. They cover everything from a casual jog to a full-speed panic-dash.",
    learnMore:
      "The ε= character is a Japanese typographic convention for motion or breath rather than a standard symbol repurposed by coincidence. It appears in Japanese writing to suggest running, panting, or fast movement in the same way an English speaker might write \"whoosh.\" Placed before a running figure, a single ε marks a jog; two marks — ε=ε= — signal a full sprint, giving these faces an unusually clear intensity scale in just a few characters.",
    faqs: [
      {
        question: "What does ε=ε=┌( >_<)┘ mean?",
        answer:
          "The ε= marks are Japanese text shorthand for motion or speed, like exhaust puffs. ┌( >_<)┘ is a figure mid-run, leaning forward with an urgent expression. Together they read as someone dashing away fast.",
      },
      {
        question: "When should I use a running kaomoji?",
        answer:
          "When leaving a conversation, late for something, or reacting to a close call with humor. They also work as a shorthand for \"I am out of here\" or excited rushing-toward something good.",
      },
      {
        question: "Are running and dash kaomoji the same here?",
        answer:
          "On this page, yes. Run, dash, and sprint-style faces share the same user intent — a text face showing fast movement — so they are grouped together.",
      },
      {
        question: "Do running kaomoji paste on all devices?",
        answer:
          "Yes. The ε= motion marks and bracket characters are standard Unicode that paste cleanly on iOS, Android, and most chat apps.",
      },
    ],
    related: ["/excited-kaomoji", "/dance-kaomoji", "/waving-kaomoji", "/table-flip-kaomoji"],
  },
  {
    path: "/lenny-face",
    label: "Lenny face",
    heading: "Lenny Face ( ͡° ͜ʖ ͡°)",
    titleSegment: "Lenny Face Copy and Paste ( ͡° ͜ʖ ͡°) 100+ Styles",
    description:
      "Lenny face copy and paste: the original ( ͡° ͜ʖ ͡°) plus 100+ variations — wink, sad, angry, hug, sunglasses, shrug, and dollar Lenny. One tap to copy.",
    intro:
      "The original Lenny face ( ͡° ͜ʖ ͡°) and every popular variation in one place — winking, sad, angry, hugging, flexing, and meme versions. Tap Copy and the full string, including the tricky combining marks, lands on your clipboard intact.",
    group: "browse",
    tags: ["lenny"],
    howTo: [
      "Start with the classic ( ͡° ͜ʖ ͡°) at the top, or scan for a variation that matches your tone — wink, sad ʖ̯ mouth, or arms.",
      "Tap Copy. The combining characters above the eyes are invisible on their own, so copying is safer than retyping.",
      "Paste into Discord, Reddit, Twitch chat, or a text. If the eyebrows drift, the app's font is the cause — the text itself is unchanged.",
    ],
    definition:
      "The Lenny face is a text emoticon, ( ͡° ͜ʖ ͡°), built from eleven Unicode characters. It usually signals a sly, mischievous, or suggestive grin — the internet's way of saying \"wink wink\" without words.",
    learnMore:
      "The face first spread in November 2012 on the Finnish imageboard Ylilauta, then jumped to 4chan and Reddit the same day. Nobody knows for sure why it is called Lenny; the name stuck through meme sites and has never been replaced. Other names include Le Lenny Face and the \"deg deg\" face.\n\nHow it is built: the eyes are degree signs (°) with a combining double inverted breve ( ͡) above them as eyebrows. The nose and mouth are ͜ʖ — a combining breve below paired with the Latin letter ʖ (a reversed glottal stop). Because the eyebrows and smile are combining marks, they attach to whatever character sits next to them. That is why retyping a Lenny face by hand often breaks it, and why copying a ready-made one is the reliable route.\n\nVariations swap one part at a time: ʖ̯ turns the smile into a frown, ಠ gives a disapproving glare, ~ adds a wink, and ♥ makes heart eyes. Add arms with つ for a hug, ᕦ ᕤ to flex, or ┻━┻ to flip a table. Once you know the parts, you can build your own.\n\nTone tip: the classic Lenny reads as a cheeky, sometimes suggestive smirk. Keep it for friends, memes, and gaming chats rather than formal or work messages.",
    faqs: [
      {
        question: "How do I copy and paste the Lenny face?",
        answer: "Tap Copy next to ( ͡° ͜ʖ ͡°) at the top of this page, then paste with Ctrl+V, Cmd+V, or a long-press Paste on your phone. The face is plain text, so it works in any app that accepts typing.",
      },
      {
        question: "What does ( ͡° ͜ʖ ͡°) mean?",
        answer: "It is a sly, knowing grin. People use it to hint at a joke, an innuendo, or a mischievous plan. Context decides how cheeky it reads.",
      },
      {
        question: "Why is it called the Lenny face?",
        answer: "The origin of the name is unknown. The face appeared on Ylilauta and 4chan in 2012, and the Lenny label spread with it through meme sites.",
      },
      {
        question: "Can I type the Lenny face on a keyboard?",
        answer: "Not with a normal key combination — it uses combining Unicode marks. Copy it from this page, or save it as a text replacement (for example, typing 'lenny' expands to the face) on iPhone, Android, or Mac.",
      },
      {
        question: "Why do the eyebrows look shifted on my phone?",
        answer: "The eyebrows are combining marks drawn by your font. Different fonts place them differently, so the face can look slightly off on some apps while the characters stay correct.",
      },
    ],
    related: ["/shrug-kaomoji", "/text-faces", "/smug-kaomoji", "/emoticons"],
  },
  {
    path: "/shrug-kaomoji",
    label: "Shrug",
    heading: "Shrug Kaomoji ¯\\_(ツ)_/¯",
    titleSegment: "Shrug Emoticon ¯\\_(ツ)_/¯ Copy and Paste",
    description:
      "Copy the shrug emoticon ¯\\_(ツ)_/¯ in one tap, plus 90+ shrug kaomoji: ┐(￣ヘ￣)┌, ʅ(°_°)ʃ, Lenny, cute, and cat shrugs, and how to type it on any device.",
    intro:
      "The classic shrug ¯\\_(ツ)_/¯ and 90+ variations — whatever, I don't know, and oh well faces. Tap Copy to keep the backslash intact; typing it by hand often deletes the left arm.",
    group: "browse",
    tags: ["shrug"],
    howTo: [
      "Copy the classic ¯\\_(ツ)_/¯ or pick a mood: smug ┐(︶▽︶)┌, unimpressed ╮(︶︿︶)╭, or confused ¯\\_(°_o)_/¯.",
      "Tap Copy once — the full string, backslash included, goes to your clipboard.",
      "To type it daily, save it as a text replacement: iPhone Settings › General › Keyboard › Text Replacement, Mac System Settings › Keyboard › Text Replacements, or Gboard's personal dictionary on Android.",
    ],
    definition:
      "The shrug kaomoji ¯\\_(ツ)_/¯ shows a person raising both arms with palms up. It means \"I don't know,\" \"whatever,\" or \"oh well\" — a light way to admit uncertainty or let something go.",
    learnMore:
      "The face is built from a macron (¯) for each hand, a backslash and underscore for the arms, and the Japanese katakana ツ (tsu) as a smiling face. Markdown apps such as Discord, Reddit, and Slack treat a single backslash as an escape character and an underscore as italics, which is why the left arm often disappears. If that happens, add one more backslash before the left arm, or wrap the face in backticks.\n\nOther shrug families skip the backslash completely. ┐( ˘_˘ )┌ and ╮(￣ω￣)╭ use box-drawing corners as raised hands, while ʅ(°_°)ʃ and 乁(ツ)ㄏ use curved letters. These paste cleanly everywhere, which makes them a good choice for Discord bios and usernames.\n\nOn Windows 10 and 11, press Win + . (period), open the kaomoji tab, and you will find a shrug in the list. On a phone, a text replacement shortcut is the fastest route after the first copy.\n\nTone: a shrug is casual and slightly playful. It softens \"I don't know\" in friendly chats but can read as dismissive in a serious work thread.",
    faqs: [
      {
        question: "How do I copy the shrug emoji ¯\\_(ツ)_/¯?",
        answer: "Tap Copy next to the first face on this page. It copies the exact string, including the backslash that is easy to lose when typing.",
      },
      {
        question: "Why does my shrug lose an arm on Discord or Reddit?",
        answer: "Markdown treats the backslash as an escape character. Type one extra backslash before the left arm, or use a shrug without backslashes, such as ┐(￣ヘ￣)┌.",
      },
      {
        question: "What does ¯\\_(ツ)_/¯ mean?",
        answer: "It means \"I don't know,\" \"whatever,\" or \"oh well.\" The raised arms show uncertainty or acceptance.",
      },
      {
        question: "Is there a shrug shortcut on iPhone or Android?",
        answer: "Not built in. Copy the face once, then save it as a text replacement — for example, typing 'shrug' auto-expands into ¯\\_(ツ)_/¯.",
      },
      {
        question: "What is the face in the middle of the shrug?",
        answer: "It is ツ, the Japanese katakana character for 'tsu.' Its shape looks like a smiling face.",
      },
    ],
    related: ["/lenny-face", "/text-faces", "/confused-kaomoji", "/emoticons"],
  },
  {
    path: "/uwu-kaomoji",
    label: "UwU",
    heading: "UwU Kaomoji",
    titleSegment: "UwU Face Copy and Paste — UwU & OwO Kaomoji (˘ω˘)",
    description:
      "UwU face and OwO kaomoji to copy and paste: UwU, (ᵘʷᵘ), (◡ ω ◡), (⁄ ⁄•⁄ω⁄•⁄ ⁄) and 50+ soft, blushing, and teasing faces. What UwU means and when to use it.",
    intro:
      "UwU, OwO, and every soft ω-mouth face in between — sleepy, blushing, cheeky, and flustered. Tap Copy and paste into Discord, TikTok, or any chat.",
    group: "browse",
    tags: ["uwu"],
    howTo: [
      "Pick plain-letter UwU or OwO for speed, or a bracketed ω face like (˘ω˘) for a softer look.",
      "Tap Copy — superscript faces such as (ᵘʷᵘ) are hard to type, so copying keeps them exact.",
      "Paste at the end of a message to soften it or show you are flustered.",
    ],
    definition:
      "UwU is a cute text face: the two U's are closed, happy eyes and the w is a small cat-like mouth. It expresses warmth, contentment, or being adorably flustered. OwO swaps in round, open eyes for curiosity or surprise.",
    learnMore:
      "UwU grew out of anime fandom and furry communities in the 2000s and became mainstream through Discord, Twitch, and TikTok. The ω (Greek omega) mouth that many UwU faces use is borrowed from classic Japanese kaomoji such as (・ω・), where it reads as a small, cat-like smile.\n\nUwU vs OwO: UwU (closed eyes) is soft and content — think a cozy, happy sigh. OwO (open eyes) is curious or surprised, famously paired with \"what's this?\" UnU and TwT lean sad, and >w< reads excited or embarrassed.\n\nUwU is playful and affectionate. Friends, fandom spaces, and gaming chats welcome it; formal or work messages usually do not. Some communities also use it ironically, so read the room before you send it.",
    faqs: [
      {
        question: "What does UwU mean?",
        answer: "UwU is a cute face showing happiness, warmth, or affection. The U's are closed eyes and the w is a little mouth.",
      },
      {
        question: "What is the difference between UwU and OwO?",
        answer: "UwU has closed, content eyes. OwO has wide, open eyes and signals curiosity or surprise.",
      },
      {
        question: "How do I type a small uwu like ᵘʷᵘ?",
        answer: "The small letters are Unicode superscript characters that most keyboards cannot type. Copy (ᵘʷᵘ) from this page instead.",
      },
      {
        question: "Is UwU a kaomoji?",
        answer: "Yes, in the broad sense. Plain UwU is a letter emoticon, while bracketed faces like (˘ω˘) follow the classic kaomoji style with an ω mouth.",
      },
    ],
    related: ["/cute-kaomoji", "/shy-kaomoji", "/cat-kaomoji", "/lenny-face"],
  },
  {
    path: "/food-kaomoji",
    label: "Food",
    heading: "Food Kaomoji",
    titleSegment: "Food Kaomoji — Eating & Drinking Faces (っ˘ڡ˘ς)",
    description:
      "Food kaomoji to copy and paste: eating, drooling, and drinking faces like (っ˘ڡ˘ς), (*´﹃｀*), ~旦, plus ramen, sushi, cake, and boba kaomoji with emoji.",
    intro:
      "Hungry, drooling, munching, and sipping faces — from (*´﹃｀*) to ramen-slurping (っ˘ڡ˘ς). Tap Copy for snack-time chats, food posts, and lunch plans.",
    group: "browse",
    tags: ["food"],
    howTo: [
      "Scan for the moment you want: craving (*´﹃｀*), tasting (๑´ڡ`๑), munching ﾓｸﾞﾓｸﾞ, or sipping tea ~旦.",
      "Tap Copy to grab the full face, including any food emoji attached to it.",
      "Paste into a lunch invite, recipe caption, or a message about your favorite snack.",
    ],
    definition:
      "Food kaomoji show eating, drinking, craving, or being full. They use special mouths — ﹃ for drooling, ڡ for licking lips — and often hold a food emoji or a teacup.",
    learnMore:
      "Two characters do most of the work. ﹃ (a vertical-form bracket) hangs below the face like a drool line, so (¯﹃¯) reads as \"I want that.\" ڡ, an Arabic letter, looks like a tongue licking the lips, giving (๑´ڡ`๑) a \"so tasty\" meaning.\n\n旦 (the kanji for dawn) looks like a teacup on a saucer, so ~旦 or (´・ω・)っ旦 means offering or sipping tea. Japanese sound words often appear beside the face too: ﾓｸﾞﾓｸﾞ (mogu mogu) is chewing, ﾊﾟｸﾊﾟｸ (paku paku) is eating quickly, and ｺﾞｸｺﾞｸ (goku goku) is gulping a drink.\n\nModern food kaomoji mix in emoji — 🍜, 🍣, 🍰, 🧋 — so the face shows exactly what you are eating. Keep the face first and the emoji second for the cleanest look in chat.",
    faqs: [
      {
        question: "What does (*´﹃｀*) mean?",
        answer: "It is a drooling face. The ﹃ mark is a line of drool, so it means you are craving something delicious.",
      },
      {
        question: "What does 旦 mean in a kaomoji?",
        answer: "旦 looks like a cup of tea on a saucer. Faces like (´・ω・)っ旦 are offering or drinking tea.",
      },
      {
        question: "What is the ڡ mouth?",
        answer: "ڡ is an Arabic letter that looks like a tongue licking the lips. It turns a face into a \"yummy\" reaction.",
      },
      {
        question: "Do food kaomoji with emoji paste everywhere?",
        answer: "Yes on modern phones and computers. The text face looks the same everywhere, while the food emoji follows each platform's emoji style.",
      },
    ],
    related: ["/happy-kaomoji", "/cute-kaomoji", "/birthday-kaomoji", "/emoji-combos", "/fish-kaomoji"],
  },
  {
    path: "/emoticons",
    label: "Emoticons",
    heading: "Emoticons — Keyboard Faces & Meanings",
    titleSegment: "Emoticons Copy and Paste: List with Meanings :)",
    description:
      "130+ text emoticons with meanings — :) :D ;) :P XD <3 :( — keyboard smileys to copy and paste for chat, posts, and bios.",
    intro:
      "Every classic keyboard emoticon with what it means — smileys :), laughs XD, winks ;), hearts <3, and more. Tap Copy, or learn how to type each one with your own keyboard.",
    group: "browse",
    howToName: "How to type and copy text emoticons",
    howTo: [
      "Find the feeling in the groups below — smile, laugh, wink, sad, angry, surprised, love, or characters.",
      "Read the meaning column so the emoticon fits your tone, then tap Copy.",
      "Or type it yourself: almost every emoticon on this page uses keys on a standard US keyboard, apart from a few Unicode extras at the end.",
    ],
    definition:
      "An emoticon (emotion + icon) is a face made from ordinary keyboard characters, such as :) for a smile. Western emoticons are read sideways — tilt your head left — while Japanese-style kaomoji like (^_^) are read upright.",
    learnMore:
      "Computer scientist Scott Fahlman proposed :-) and :-( on a Carnegie Mellon University message board on September 19, 1982, to mark jokes and serious posts. The nose later became optional, giving the shorter :) that most people type today.\n\nEmoticons vs emoji vs kaomoji: emoticons are typed characters read sideways. Emoji are picture characters (😀) drawn differently by Apple, Google, and Microsoft. Kaomoji are upright Japanese text faces such as (◕‿◕). Many apps auto-convert :) into 😊 — if you want the text version to stay, paste it, or add a space after it.\n\nReading the parts: the colon is two eyes, a semicolon is a wink, an equals sign is wide eyes, 8 or B is glasses, and > above the eyes adds angry brows. The mouth sets the mood — ) is happy, ( is sad, D is laughing, P is a tongue, O is surprise, and | is no reaction. An apostrophe is a tear or sweat drop.\n\nWhen to use them: emoticons feel casual and a bit retro. A single :) softens a short work message without the playfulness of an emoji, while XD and :P belong in friendly chats.",
    faqs: [
      {
        question: "What is the difference between an emoticon and an emoji?",
        answer: "An emoticon is typed from keyboard characters, like :). An emoji is a single picture character, like 😀, that looks different on each platform.",
      },
      {
        question: "Who invented the emoticon?",
        answer: "Scott Fahlman of Carnegie Mellon University suggested :-) and :-( in 1982 to mark jokes in online posts.",
      },
      {
        question: "What does XD mean?",
        answer: "XD is a laughing face with eyes squeezed shut. It means something is very funny.",
      },
      {
        question: "What does <3 mean?",
        answer: "<3 is a sideways heart. It means love, thanks, or appreciation. </3 is a broken heart.",
      },
      {
        question: "How do I stop my phone turning :) into an emoji?",
        answer: "Many apps auto-replace emoticons. Turn off emoji replacement in the app or keyboard settings, or paste the emoticon instead of typing it.",
      },
      {
        question: "Are kaomoji emoticons too?",
        answer: "Yes — kaomoji are Japanese-style emoticons read upright, like (^_^). Browse thousands of them on our kaomoji pages.",
      },
    ],
    related: ["/text-faces", "/japanese-emoticons", "/shrug-kaomoji", "/lenny-face"],
  },
  {
    path: "/cute-symbols",
    label: "Cute symbols",
    heading: "Cute Symbols Copy and Paste ♡",
    titleSegment: "Cute Symbols Copy and Paste ♡ ✿ ☆ Aesthetic",
    description:
      "Cute symbols to copy and paste: hearts ♡, stars ✧, flowers ✿, bows ʚɞ, brackets ꒰ ꒱, dividers, and arrows. 250+ aesthetic text symbols for bios and captions.",
    intro:
      "Hearts, stars, flowers, bows, frames, and dividers — 250+ aesthetic text symbols for Instagram bios, TikTok names, and Discord servers. Tap any symbol to copy it.",
    group: "browse",
    howToName: "How to copy and paste cute symbols",
    howTo: [
      "Jump to a group — hearts, stars, flowers, bows, frames, dividers, or arrows.",
      "Tap Copy under a symbol. Mix several to build your own pattern, like ₊˚ʚ ♡ ɞ˚₊.",
      "Paste into your bio, display name, or caption, then check how it looks in the app before saving.",
    ],
    definition:
      "Cute symbols are Unicode text characters — hearts, stars, flowers, and decorative marks — that you can paste anywhere text is allowed. Unlike emoji, they take the color of the text around them, which gives bios and names a clean, aesthetic look.",
    learnMore:
      "Every symbol here is a standard Unicode character, so it is plain text rather than an image. That means it works in Instagram and TikTok bios, Discord nicknames, game names (where allowed), and documents. Most come from the Dingbats, Miscellaneous Symbols, and Geometric Shapes blocks that every modern phone supports.\n\nBuilding combos: aesthetic decorations usually stack small marks around a center symbol — for example ⋆｡°✩ or ˚₊‧꒰ა ☆ ໒꒱ ‧₊˚. The tiny characters (˚, ₊, ‧, ⋆) are spacers that add sparkle without visual weight. Frames like ꒰ ꒱ or 『 』 wrap a name or word, and dividers split a bio into neat sections.\n\nIf a symbol shows as an empty box, the app's font does not have it. Swap to a more common alternative from the same group — ♡ and ☆ work almost everywhere. Some username fields also strip special characters; test once before you save.\n\nPair them with kaomoji: symbols turn a plain face into a styled one, like ⋆˙⟡(◕‿◕)⟡˙⋆ or ♡ (˶ᵔ ᵕ ᵔ˶) ♡.",
    faqs: [
      {
        question: "How do I copy and paste cute symbols?",
        answer: "Tap Copy under any symbol, then paste it in your app with Ctrl+V, Cmd+V, or a long-press Paste on mobile.",
      },
      {
        question: "Can I use these symbols in my Instagram or TikTok bio?",
        answer: "Yes. They are standard Unicode text. A few rare ones may show as boxes on older phones, so preview your bio before saving.",
      },
      {
        question: "Why does a symbol show as a box?",
        answer: "The font on that device does not include the character. Choose a more common symbol from the same group, such as ♡, ☆, or ✿.",
      },
      {
        question: "What is the difference between cute symbols and emoji?",
        answer: "Symbols are text characters that take your text color. Emoji are colorful pictures that look different on each platform.",
      },
      {
        question: "Are these symbols free to use?",
        answer: "Yes. They are Unicode characters that anyone can type or paste anywhere — no license is needed.",
      },
    ],
    related: ["/emoji-combos", "/sparkle-kaomoji", "/star-kaomoji", "/heart-kaomoji"],
  },
  {
    path: "/emoji-combos",
    label: "Emoji combos",
    heading: "Aesthetic Emoji Combos",
    titleSegment: "Aesthetic Emoji Combos Copy and Paste 🎀✨",
    description:
      "120+ aesthetic and cute emoji combos to copy and paste 🎀✨: love, funny, birthday, Christmas, Halloween, food, and study combinations for bios and captions.",
    intro:
      "120+ ready-made emoji combinations — aesthetic, cute, love, funny, birthday, holiday, and food. Tap Copy to grab the whole set at once for your bio, caption, or text.",
    group: "browse",
    howToName: "How to copy and use emoji combos",
    howTo: [
      "Browse by theme: aesthetic, cute, love, funny, birthday, holidays, seasons, food, or daily vibes.",
      "Tap Copy to grab the full combo in one go — no need to hunt for each emoji.",
      "Paste at the end of a caption or between lines in your bio. Two or three emoji usually look cleaner than a long row.",
    ],
    definition:
      "An emoji combo is a short sequence of emoji that tells a mini story or sets a mood together, like 🍂☕📖 for cozy autumn. Combos are popular in Instagram and TikTok bios, captions, and group chats.",
    learnMore:
      "Good combos stick to one color family or one theme. White and cream (🤍🕊️☁️), pink coquette (🎀🩰🦢), and dark academia (🕯️📜🪶) are popular because the emoji look coordinated side by side. Three emoji is the sweet spot — enough to set a mood without crowding your text.\n\nEmoji look different on iPhone, Android, Windows, and Samsung devices because each company draws its own set. A combo that matches perfectly on an iPhone may clash slightly on Android, so check your post on the device your audience uses most. Newer emoji (released in the last year or two) can show as empty boxes on older phones.\n\nFor a softer, text-based look, mix emoji with kaomoji or cute symbols — for example (˶ᵔ ᵕ ᵔ˶)🎀 or ⋆｡‧˚ʚ🍓ɞ˚‧｡⋆. The kaomoji and symbols stay the same on every device, which keeps your style consistent.",
    faqs: [
      {
        question: "What are aesthetic emoji combos?",
        answer: "They are groups of 2–4 emoji with a shared color or theme, used to decorate bios, captions, and messages.",
      },
      {
        question: "How do I copy an emoji combo?",
        answer: "Tap Copy under the combo. The whole set is copied in one go, ready to paste.",
      },
      {
        question: "Why does my combo look different on Android?",
        answer: "Apple, Google, Samsung, and Microsoft each draw their own emoji. The meaning is the same, but colors and details change.",
      },
      {
        question: "How many emoji should I use in a bio?",
        answer: "Two to four per line usually looks clean. Long rows of emoji can be hard to read and are read out one by one by screen readers.",
      },
    ],
    related: ["/cute-symbols", "/kaomoji-copy-paste", "/cute-kaomoji", "/food-kaomoji", "/halloween-kaomoji", "/christmas-kaomoji"],
  },
  {
    path: "/sorry-kaomoji",
    label: "Sorry",
    heading: "Sorry Kaomoji",
    titleSegment: "Sorry Kaomoji (｡•́︿•̀｡) Apology Faces to Copy",
    description:
      "Sorry kaomoji to copy and paste: apology faces like m(_ _)m, (｡•́︿•̀｡), orz, and ごめんね. 100+ ways to say sorry, my bad, and please forgive me in a message.",
    intro:
      "Apologies, my-bads, and please-forgive-me faces — from a quick (>_<) to a full m(_ _)m bow. Tap Copy and soften your sorry in any chat.",
    group: "browse",
    tags: ["sorry"],
    faceGroups: [
      { id: "bow", heading: "Bowing apology kaomoji", glyphs: ["m(_", "(シ_", "_(._.)_", "_ _"] },
      { id: "orz", heading: "orz & OTL (on your knees)", glyphs: ["orz", "OTL", "○|￣|_"] },
      { id: "teary", heading: "Teary sorry kaomoji", glyphs: ["；ω；", ";ω;", "╥", "T", "ᗒ", "ノ_<"] },
      { id: "japanese", heading: "Japanese sorry: gomen kaomoji", glyphs: ["ごめん", "ゴメン", "ｺﾞﾒﾝ", "すみません"] },
      { id: "please", heading: "Please forgive me", glyphs: ["人", "forgive", "please"] },
    ],
    howTo: [
      "Match the size of the mistake: a light (>_<) my bad for small slips, m(_ _)m or orz for big ones.",
      "Tap Copy to grab the face, including any words like ごめんね (gomen ne, sorry).",
      "Paste it after your written apology — the face softens the tone but should not replace saying sorry.",
    ],
    definition:
      "Sorry kaomoji are apology text faces. They show regret through bowing (m(_ _)m), kneeling (orz), teary eyes, or hands pressed together asking for forgiveness.",
    learnMore:
      "Bowing is how apologies are shown in Japan, and kaomoji copy it: m(_ _)m is a person bowing so low that only the top of the head and the hands (m) on the floor are visible. orz goes further — it is a person on hands and knees, seen from the side: o is the head, r the arms, and z the folded legs. OTL is the same pose in capital letters.\n\nThe Japanese words you will see are ごめん / ごめんね (gomen / gomen ne, a casual sorry), すみません (sumimasen, a polite excuse me or sorry), and 申し訳ありません (mōshiwake arimasen, a formal apology). Half-width katakana like ｺﾞﾒﾝ is the same word written smaller.\n\nHands pressed together — 人 in faces like (*_ _)人 — mean please or forgive me. Teary eyes (；ω；) make the apology heartfelt, while (>_<) or (￣▽￣;)ゞ keep it light and a little embarrassed.\n\nTone tip: a kaomoji makes an apology feel warmer, but for anything serious, say sorry in words first and add the face after.",
    faqs: [
      {
        question: "What does m(_ _)m mean?",
        answer: "It is a person bowing deeply — the m shapes are hands on the floor and _ _ is the lowered head. It means a sincere sorry or thank you.",
      },
      {
        question: "What does orz mean?",
        answer: "orz is a person kneeling on the ground: o is the head, r the arms, and z the legs. It means 'I give up,' deep regret, or 'I am so sorry.'",
      },
      {
        question: "How do you say sorry in Japanese kaomoji?",
        answer: "Add ごめんね (gomen ne) to a face, like (´；ω；`) ごめんね, or use the bowing face m(_ _)m.",
      },
      {
        question: "Is a sorry kaomoji okay at work?",
        answer: "A simple m(_ _)m or (>_<) works in friendly team chats. For formal or serious apologies, write the apology in full and skip the face.",
      },
    ],
    related: ["/bowing-kaomoji", "/thank-you-kaomoji", "/crying-kaomoji", "/sad-kaomoji", "/nervous-kaomoji"],
  },
  {
    path: "/thank-you-kaomoji",
    label: "Thank you",
    heading: "Thank You Kaomoji",
    titleSegment: "Thank You Kaomoji (◍•ᴗ•◍)❤ Thanks Faces",
    description:
      "Thank you kaomoji to copy and paste: (◍•ᴗ•◍)❤, (人´∀`), ありがとう faces, and 100+ cute ways to say thanks, ty, and arigato in any message.",
    intro:
      "Cute thank-yous, grateful hands, and arigato faces — from a quick ty ♡ to a heartfelt (人´∀`). Tap Copy and paste your thanks anywhere.",
    group: "browse",
    tags: ["thanks"],
    faceGroups: [
      { id: "hands", heading: "Grateful hands kaomoji 人", glyphs: ["人", "ㅅ"] },
      { id: "arigato", heading: "Arigato kaomoji ありがとう", glyphs: ["ありがと", "ｱﾘｶﾞﾄ", "アリガト", "arigato"] },
      { id: "love", heading: "Thank you with love ♡", glyphs: ["♡", "♥", "❤", "💕"] },
      { id: "english", heading: "Thanks, ty & thx kaomoji", glyphs: ["thank", "Thank", "thx", "ty"] },
    ],
    howTo: [
      "Pick the tone: a quick ty ♡, a grateful (人´∀`), or a Japanese ありがとう (arigatou).",
      "Tap Copy to grab the face and its words.",
      "Paste it after a thank-you message, a gift, a favor, or a nice compliment.",
    ],
    definition:
      "Thank you kaomoji are grateful text faces — hands pressed together, warm smiles, hearts, and the Japanese word ありがとう (arigatou) — that make a thank-you feel warmer than plain text.",
    learnMore:
      "The most common thank-you shape is 人, a Chinese and Japanese character that looks like two hands pressed together. In faces like (人´∀`) or (*˘︶˘人), it shows gratitude or a small bow of thanks. ㅅ, a Korean letter, plays the same role in faces like (ㅅ´ ˘ `).\n\nありがとう (arigatou) means thank you in Japanese, and ありがとうございます (arigatou gozaimasu) is the polite form. Half-width ｱﾘｶﾞﾄ is the same word in a cute, compact style. English shortcuts — ty, thx, tysm (thank you so much) — pair well with soft faces like (˶ᵔ ᵕ ᵔ˶).\n\nFor a deeper thank-you, a bow works too: m(_ _)m can mean both sorry and thank you, depending on the words around it.",
    faqs: [
      {
        question: "What is the kaomoji for thank you?",
        answer: "Popular ones are (◍•ᴗ•◍)❤ thank you, (人´∀`) thanks, and ありがとう (◕ᴗ◕✿). The 人 shape is two hands pressed together in gratitude.",
      },
      {
        question: "How do you say thank you in Japanese with a kaomoji?",
        answer: "Add ありがとう (arigatou) or ｱﾘｶﾞﾄ to a face, such as (*´ｰ`人)ｱﾘｶﾞﾄ.",
      },
      {
        question: "What does 人 mean in kaomoji?",
        answer: "人 looks like two hands pressed together. It means thanks, please, or a small respectful bow.",
      },
      {
        question: "Can I use thank you kaomoji at work?",
        answer: "Yes — soft ones like (◍•ᴗ•◍) thank you are friendly and polite for team chats.",
      },
    ],
    related: ["/sorry-kaomoji", "/bowing-kaomoji", "/thanksgiving-kaomoji", "/heart-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/cool-kaomoji",
    label: "Cool",
    heading: "Cool Kaomoji (⌐■_■)",
    titleSegment: "Cool Kaomoji (⌐■_■) Sunglasses Faces to Copy",
    description:
      "Cool kaomoji with sunglasses to copy and paste: (⌐■_■), ( •_•)>⌐■-■ deal with it, (▀̿Ĺ̯▀̿ ̿), finger guns, and 50+ confident, chill faces.",
    intro:
      "Sunglasses, finger guns, and deal-with-it faces — the coolest kaomoji, from (⌐■_■) to (▀̿Ĺ̯▀̿ ̿). Tap Copy for confident, chill, or show-off moments.",
    group: "browse",
    tags: ["cool"],
    howTo: [
      "Pick your move: plain shades (⌐■_■), the put-on gag ( •_•)>⌐■-■, or finger guns (☞⌐■_■)☞.",
      "Tap Copy to grab the full face.",
      "Send the put-on and take-off faces one after another for the classic deal-with-it meme.",
    ],
    definition:
      "Cool kaomoji wear sunglasses made from ■ blocks, ▀ bars, or ⌐ frames. They show confidence, swagger, or a relaxed 'no big deal' attitude.",
    learnMore:
      "The sunglasses are built from three pieces: ⌐ is the frame arm, ■ are the dark lenses, and _ or - is the bridge. Put together, (⌐■_■) reads instantly as shades. The bigger (▀̿Ĺ̯▀̿ ̿) uses ▀ bars with combining marks for a heavier, cooler look, and Ĺ̯ is a smirking mouth.\n\nThe 'deal with it' meme plays out in two steps: ( •_•)>⌐■-■ is someone holding the glasses, then (⌐■_■) is the moment they put them on. Reverse it, (⌐■_■)>( •_•), for taking them off in surprise.\n\nAdd arms for attitude: ☞ ☜ are finger guns, ᕙ ᕗ are flexed arms, and ノ♪ makes the face dance.\n\nCool faces work as a reply when someone asks if you handled something: a quick (⌐■_■) says 'done, no stress'. They also suit finishing an exam, landing a new job, showing off a new outfit, or a heatwave when you really are wearing sunglasses. Combine them with 😎 or 🔥 for extra emphasis, or with ☀️ for summer posts. Because the sunglasses are ordinary block and line symbols, these faces display reliably on almost every phone and computer, which makes them a safe pick for usernames and status lines as well as messages.",
    faqs: [
      {
        question: "What is the sunglasses kaomoji?",
        answer: "(⌐■_■) is the classic. ⌐ is the frame, ■ the lenses, and _ the bridge.",
      },
      {
        question: "How do I do the deal with it kaomoji?",
        answer: "Send ( •_•)>⌐■-■ (holding the glasses), then (⌐■_■) (wearing them). It is a two-step joke.",
      },
      {
        question: "What does (▀̿Ĺ̯▀̿ ̿) mean?",
        answer: "It is a cool guy with big dark sunglasses and a smirk — confident or unbothered.",
      },
    ],
    related: ["/smug-kaomoji", "/lenny-face", "/dance-kaomoji", "/thumbs-up-kaomoji"],
  },
  {
    path: "/sick-kaomoji",
    label: "Sick",
    heading: "Sick Kaomoji",
    titleSegment: "Sick Kaomoji (´×ω×`)😷 Ill, Cold & Get Well Faces",
    description:
      "Sick kaomoji to copy and paste: mask (´×ω×`)😷, fever, sneezing 🤧, coughing, and get-well-soon faces for when you or a friend feel under the weather.",
    intro:
      "Masks, fevers, sneezes, and get-well-soon faces. Copy one to say you're sick without a long explanation, or to cheer up a friend who is.",
    group: "browse",
    tags: ["illness"],
    faceGroups: [
      { id: "cold", heading: "Cold & flu kaomoji 🤧", glyphs: ["🤧", "ｸｼｭﾝ", "ｺﾞﾎ", "ｹﾞﾎ", "😷", "cold", "Cough"] },
      { id: "fever", heading: "Fever kaomoji 🤒", glyphs: ["🤒", "🌡", "fever"] },
      { id: "queasy", heading: "Dizzy & queasy kaomoji", glyphs: ["@_@", "×﹏×", "🤮", "꒪ö꒪", "ᴗ˳ᴗ"] },
      { id: "get-well", heading: "Get well soon kaomoji 💊", glyphs: ["get well", "feel better", "💊", "🍵", "🍲", "🍯"] },
    ],
    howTo: [
      "Pick the symptom: sneezing 🤧, fever 🤒, dizzy (@_@), or a mask 😷.",
      "Tap Copy to grab the face.",
      "Send a get-well face like (づ｡◕‿‿◕｡)づ💊 feel better to someone who is ill.",
    ],
    definition:
      "Sick kaomoji are text faces for being ill — masks, fevers, sneezes, coughs, dizziness — plus get-well-soon faces to send to someone else.",
    learnMore:
      "Sick faces swap the eyes for crosses or spirals: × eyes as in (×_×) mean knocked out or unwell, and @ eyes as in (@_@) mean dizzy. 😷 is a face mask, 🤒 a thermometer, and 🤧 a tissue for sneezing.\n\nJapanese sound words show up often. ｸｼｭﾝ (kushun) is a sneeze, ｺﾞﾎｺﾞﾎ (goho goho) and ｹﾞﾎｯ (geho) are coughs, and 風邪 (kaze) means a cold. Pairing a face with 🍵 tea, 🍲 soup, or 🍯🍋 honey and lemon turns it into a care message.\n\nUse sick faces to let a team or class know you are out, or as a gentle way to check in on a friend.\n\nTo check on a friend, a soft face says more than a long message: (っ´ω`)っ🍵 offers tea, while (｡•́︿•̀｡) shows you are sorry they feel bad. If you are the one who is ill, a mask face like (´-ω-`)😷 is a quick way to tell a group chat you are off work or skipping plans without listing symptoms. Dizzy @ eyes suit a headache or a long day rather than real illness, so they also work as a joke after a hard exam. Keep comic sick faces for colds; for serious illness or hospital news, a gentle hug face is kinder than a funny one.",
    faqs: [
      { question: "What is the sick kaomoji?", answer: "Popular ones are (´×ω×`)😷 with a mask, (×_×;) for under the weather, and (@_@) for dizzy." },
      { question: "How do I say get well soon with a kaomoji?", answer: "Try (づ｡◕‿‿◕｡)づ💊 feel better or ヾ(˙❥˙)ﾉ get well soon." },
      { question: "What does ｸｼｭﾝ mean?", answer: "ｸｼｭﾝ (kushun) is the Japanese sound of a sneeze, like 'achoo'." },
    ],
    related: ["/sad-kaomoji", "/sleepy-kaomoji", "/hug-kaomoji", "/crying-kaomoji"],
  },
  {
    path: "/scared-kaomoji",
    label: "Scared",
    heading: "Scared Kaomoji",
    titleSegment: "Scared Kaomoji (((( ;°Д°)))) Afraid Faces",
    description:
      "Scared kaomoji to copy and paste: trembling (((( ;°Д°)))), terrified, hiding, and running-away faces for horror movies, jump scares, and nervous moments.",
    intro:
      "Trembling, hiding, and running-away faces for when something is genuinely frightening. For a quick 'whoa, what?' surprise, Shocked Kaomoji fits better.",
    group: "browse",
    tags: ["fear"],
    faceGroups: [
      { id: "trembling", heading: "Trembling kaomoji", glyphs: ["((((", "(((", "ﾌﾞﾙﾌﾞﾙ", "ガクブル", "{{"] },
      { id: "hiding", heading: "Hiding & can't look", glyphs: ["/ω＼", "＞＿＜", "don't look", ">_<", ">﹏<"] },
      { id: "fleeing", heading: "Running away scared", glyphs: ["ε=", "┌(", "っ°Д°", "ﾉﾟ0ﾟ"] },
    ],
    howTo: [
      "Pick the level of fear: uneasy (ㆆ_ㆆ), trembling (((( ;°Д°)))), or fleeing ε=ε=┌(;°□°)┘.",
      "Tap Copy to grab the face.",
      "Paste it during a horror movie chat, a spooky story, or before a scary exam.",
    ],
    definition:
      "Scared kaomoji show fear: shaking, hiding the eyes, backing away, or running. They differ from shocked faces, which show sudden surprise rather than fear.",
    learnMore:
      "The trembling effect comes from stacked brackets: (((( and )))) on both sides of a face look like it is vibrating with fear. Japanese adds sound words for it — ブルブル (buru buru) is shivering and ガクブル (gakuburu) is shaking so hard your knees knock.\n\nHiding faces cover the eyes with hands, as in (/ω＼), while ε= dust puffs behind a running figure mean you are getting away fast. Wide °Д° eyes with an open mouth show terror; ;; sweat drops add nervousness.\n\nScared vs shocked: use scared faces for fear that lasts (a horror film, a dark hallway) and shocked faces for a sudden surprise.\n\nScared faces are how people react to horror games, scary films, and late-night noises in group chats. Send a trembling face like (((;°Д°))) when a friend shares a creepy story, or a hiding (/ω＼) face when a jump scare is coming. For a softer feeling, nervous rather than terrified, sweat-drop faces such as (；・∀・) work better. Around Halloween these faces pair naturally with 👻 or 🎃 to show you are spooked in a fun way. When someone shares something genuinely upsetting, skip the dramatic faces and reply with words, because exaggerated fear can read as mocking.",
    faqs: [
      { question: "What is the scared kaomoji?", answer: "(((( ;°Д°)))) is the classic: the stacked brackets show trembling and °Д° is a terrified face." },
      { question: "What is the difference between scared and shocked kaomoji?", answer: "Scared faces show fear (trembling, hiding, fleeing). Shocked faces show sudden surprise." },
      { question: "What does ガクブル mean?", answer: "ガクブル (gakuburu) means shaking with fear, so badly your knees knock." },
    ],
    related: ["/shocked-kaomoji", "/nervous-kaomoji", "/halloween-kaomoji", "/crying-kaomoji"],
  },
  {
    path: "/devil-kaomoji",
    label: "Devil",
    heading: "Devil Kaomoji Ψ(｀▽´)Ψ",
    titleSegment: "Devil Kaomoji Ψ(｀▽´)Ψ Evil Faces to Copy",
    description:
      "Devil kaomoji to copy and paste: Ψ(｀▽´)Ψ, ψ(｀∇´)ψ, evil grins (◣‿◢)Ψ, and 😈 mischief faces for pranks, plotting, and playful evil.",
    intro:
      "Little devils, evil grins, and plotting faces with pitchforks — for pranks, mischief, and playful villainy. Tap Copy and unleash your inner devil.",
    group: "browse",
    tags: ["devil"],
    faceGroups: [
      { id: "pitchfork", heading: "Pitchfork devil kaomoji Ψ", glyphs: ["Ψ(", ")Ψ", "ψ(", ")ψ"] },
      { id: "evil-grin", heading: "Evil grin kaomoji", glyphs: ["◣", "◢", "▼", "ᗨ"] },
      { id: "emoji", heading: "Devil emoji kaomoji 😈", glyphs: ["😈", "👿", "🔥"] },
    ],
    howTo: [
      "Pick the mood: cheeky Ψ(｀▽´)Ψ, wicked (◣‿◢)Ψ, or plotting (¬‿¬)👿.",
      "Tap Copy to grab the face.",
      "Paste it when you're up to something — a prank, a plot twist, or a playful threat.",
    ],
    definition:
      "Devil kaomoji are mischievous or evil-looking text faces, usually holding a pitchfork made from the Greek letter Ψ (psi) or ψ.",
    learnMore:
      "Ψ looks like a trident or pitchfork, so placing it beside a face — Ψ(｀▽´)Ψ — turns any grin into a little devil. The eyes ｀ and ´ slant inward like scheming brows, and ▽ or ∀ is a wide, wicked grin. ◣ ◢ make heavier, angrier brows for a darker look.\n\nNote that Ψ also appears in some food faces as a fork, so a Ψ next to a food emoji usually means eating, not evil.\n\nDevil faces are playful in most chats: a teasing threat, a prank, or a plot twist. For full Halloween monsters, see the devil section on Halloween Kaomoji.\n\nDevil faces fit plenty of everyday chat moments: suggesting one more episode before bed, tempting a friend with dessert, or admitting you ate the last slice. Pair them with an emoji to make the joke clear, such as Ψ(｀▽´)Ψ🍰 for temptation or Ψ(｀∀´)Ψ🎮 for staying up too late gaming. Around Halloween, devil faces join ghosts and pumpkins as costume-style reactions. If you want mischief without the evil look, a sly grin such as (¬‿¬) does the job, and an innocent face like (◕‿◕) makes a nice contrast when you want to play good versus bad.",
    faqs: [
      { question: "What is the devil kaomoji?", answer: "Ψ(｀▽´)Ψ is the most popular: Ψ is a pitchfork on each side of a wicked grin." },
      { question: "What does Ψ mean in kaomoji?", answer: "Ψ is the Greek letter psi. It looks like a pitchfork, so it marks a face as a devil. Next to food it can also be a fork." },
      { question: "Are devil kaomoji mean?", answer: "Usually not — they read as playful mischief. Avoid them in serious conversations." },
    ],
    related: ["/halloween-kaomoji", "/smug-kaomoji", "/angry-kaomoji", "/cool-kaomoji"],
  },
  {
    path: "/about",
    label: "About",
    heading: "About",
    titleSegment: "About",
    description:
      "About Paste Kaomoji: curated kaomoji and text-face library with mood pages, integrity filters, and MIT-licensed source attribution.",
    intro:
      "Paste Kaomoji is a focused library for copying kaomoji and text faces. The point is find, copy, paste - without a giant emoji catalog or a wall of ads.",
    group: "trust",
    definition:
      "Paste Kaomoji is a focused copy-paste library for Japanese-style text faces and related character expressions. Faces are unicode text you can edit, not a sticker pack locked to one app.",
    learnMore:
      "Kaomoji (often called Japanese emoticons) are usually read upright, with eyes carrying most of the mood. This site groups faces by intent so you can find, copy, and paste without wading through a giant unsorted dump or a wall of ads.",
    faqs: [
      {
        question: "Who is Paste Kaomoji for?",
        answer: "Anyone who wants a fast, free way to copy kaomoji and text faces into chat, captions, or bios without creating an account.",
      },
      {
        question: "Where do the faces come from?",
        answer: "Much of the expanded catalog comes from the open kaomoji-collection project (MIT License), curated by Kaomojiya. Paste Kaomoji is not affiliated with that project. We dedupe faces, add English names and tags, and apply mood integrity rules so each category matches its intent—not a bare republish of the source dump.",
      },
      {
        question: "Does this site sell faces or require signup?",
        answer: "No. Faces are unicode text arranged for browsing. This release does not run a paywall or account system; you copy from the grid and paste where you need.",
      },
    ],
    related: ["/contact", "/privacy"],
  },
  {
    path: "/contact",
    label: "Contact",
    heading: "Contact",
    titleSegment: "Contact",
    description:
      "Contact Paste Kaomoji: email hello@pastekaomoji.com for face suggestions, corrections, display issues, or rights requests. No contact form.",
    intro:
      "Send corrections, face suggestions, or site questions by email. There is no account system and no contact form in this release.",
    group: "trust",
    related: ["/about", "/privacy"],
  },
  {
    path: "/privacy",
    label: "Privacy",
    heading: "Privacy",
    titleSegment: "Privacy",
    description:
      "Privacy notes for Paste Kaomoji: copy storage, Google AdSense, and consent choices in the EEA, UK, Switzerland, and U.S. states.",
    intro:
      "Privacy policy for pastekaomoji.com, effective October 20, 2026. Plain-language summary of what the site stores, how copy works, and how advertising and consent messages work.",
    group: "trust",
    related: ["/terms", "/contact"],
  },
  {
    path: "/terms",
    label: "Terms",
    heading: "Terms",
    titleSegment: "Terms",
    description:
      "Terms of use for Paste Kaomoji. Faces are unicode text; the site is a free copy-paste library.",
    intro:
      "Terms of use for pastekaomoji.com, effective September 25, 2026. How you may use the library and what we provide.",
    group: "trust",
    related: ["/privacy", "/about"],
  },
  {
    path: "/disclaimer",
    label: "Disclaimer",
    heading: "Disclaimer",
    titleSegment: "Disclaimer",
    description:
      "Disclaimer for Paste Kaomoji: information accuracy, advertising, external links, and trademarks on this free kaomoji library.",
    intro:
      "What Paste Kaomoji does and does not promise, effective October 21, 2026: accuracy of face meanings, advertising, links to other sites, and trademarks.",
    group: "trust",
    related: ["/terms", "/privacy"],
  },
];

export const getPage = cache(function getPage(path: string): SitePage {
  const page = pages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown page: ${path}`);
  }
  return page;
});

export function pagesByGroup(group: PageGroup): SitePage[] {
  return pages.filter((page) => page.group === group);
}

/** Top-level browse pages only (excludes nested subcategory children). */
export function topLevelBrowsePages(): SitePage[] {
  return pagesByGroup("browse").filter((page) => !page.parentPath);
}

/** Max related links per page (own picks first, then reciprocal links). */
const RELATED_LIMIT = 8;

/**
 * Hand-picked related pages, then pages that list this one in their own
 * `related` (reciprocal), so every link earns a link back and no browse page
 * depends on nav/footer alone for internal links.
 */
export function relatedPages(page: SitePage): SitePage[] {
  const out = page.related.map((path) => getPage(path));
  const seen = new Set([page.path, ...page.related]);
  for (const other of pages) {
    if (out.length >= RELATED_LIMIT) break;
    if (seen.has(other.path) || other.path === "/") continue;
    if (other.group !== page.group) continue;
    if (other.related.includes(page.path)) {
      out.push(other);
      seen.add(other.path);
    }
  }
  return out;
}

/** Sibling subcategory pages that share the same parentPath (excludes self). */
export function siblingPages(page: SitePage): SitePage[] {
  if (!page.parentPath) return [];
  return pages.filter(
    (item) => item.parentPath === page.parentPath && item.path !== page.path,
  );
}

/** Child subcategory pages under a parent path. */
export function childPages(parentPath: string): SitePage[] {
  return pages.filter((item) => item.parentPath === parentPath);
}

/** "All" + child chips for a parent page or one of its children (empty when none). */
export function subcategoryNavItems(page: SitePage): { path: string; label: string }[] {
  const parentPath = page.parentPath ?? (childPages(page.path).length ? page.path : null);
  if (!parentPath) return [];
  const parent = getPage(parentPath);
  const children = childPages(parentPath);
  if (children.length === 0) return [];
  return [
    { path: parent.path, label: `All ${parent.label.toLowerCase()}` },
    ...children.map((child) => ({ path: child.path, label: child.label })),
  ];
}

/** Client-safe slice of a page (no copy text) for header nav and search scope. */
export type NavPage = {
  path: string;
  label: string;
  group: PageGroup;
  tags?: string[];
  category?: string;
};

/** Slim page list the layout hands to client chrome, so lib/site.ts stays server-only. */
export function navPages(): NavPage[] {
  return pages.map(({ path, label, group, tags, category }) => ({
    path,
    label,
    group,
    ...(tags ? { tags } : {}),
    ...(category ? { category } : {}),
  }));
}
