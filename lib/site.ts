import { cache } from "react";
import type { SearchScope } from "@/lib/search/actions";

export const siteConfig = {
  siteName: "Paste Kaomoji",
  url: "https://pastekaomoji.com",
  description:
    "Browse a kaomoji library by mood—cute, happy, cat, sad, crying, angry, and more. Discover kaomoji faces on category pages, then one-tap copy into chat.",
  locale: "en_US",
} as const;

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
  inHeader: boolean;
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
    heading: "Kaomoji — Browse by Mood",
    titleSegment: "Kaomoji — Copy & Paste Japanese Text Faces | Paste Kaomoji",
    description:
      "Browse 2,000+ kaomoji by mood: cute (◕‿◕), happy (＾▽＾), cat, sad, star, heart, and more. One-tap copy into Discord, WhatsApp, or any chat. Free kaomoji library.",
    intro:
      "Browse over 2,000 kaomoji by mood and theme — tap once to copy any face into chat. Choose a category below to discover, or open Kaomoji Copy and Paste for a quick grab.",
    group: "hub",
    inHeader: true,
    definition:
      "Kaomoji are Japanese-style text faces made from punctuation, symbols, and letters so feeling shows up in plain text. They travel as normal characters, so they work in chats and comments where picture stickers sometimes fail or look inconsistent.\n\nPaste Kaomoji groups them by mood and format so you can find a face fast, copy it in one tap, and drop it into Discord, WhatsApp, Slack, SMS, or a comment. Because they are editable text, you can type around them or tweak a character when you want a custom twist.",
    learnMore:
      "Most kaomoji are built from punctuation and Unicode symbols rather than a single picture glyph. Eyes usually carry the mood; arms, cheeks, and sweat marks add motion or tone.\n\nCategories on this site exist so you can browse kaomoji faces by intent instead of scrolling one giant unsorted dump. Multiline faces need a font and chat field that preserve line breaks, or the stack can collapse into one messy row.",
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
        question: "I searched kamoji or kao moji—is that the same thing?",
        answer: "Usually yes. Misspellings such as kamoji, koamoji, or kaomoji with a space point to the same Japanese-style text faces. Start from this hub or Kaomoji Copy and Paste instead of hunting typo-only URLs.",
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
      "Cute kaomoji and kawaii faces (◕‿◕) to copy and paste — soft blush, tiny hugs, gentle charm. 100+ adorable Japanese text faces for Discord, WhatsApp, and any chat.",
    intro:
      "Soft kawaii smiles, blush, and tiny hugs ready to copy and paste in one tap. Cute owns the gentle aesthetic mood — cheers, waves, and big grins live on happy kaomoji so the two stay distinct.",
    group: "browse",
    inHeader: true,
    category: "cute",
    definition:
      "This set favors soft eyes, blush, and gentle smiles meant to feel warm on sight. Use them when you want sweetness without a long written compliment.",
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
    related: ["/happy-kaomoji", "/cat-kaomoji", "/heart-kaomoji", "/shy-kaomoji", "/kaomoji-copy-paste"],
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
    inHeader: true,
    category: "happy",
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
    ],
    related: ["/cute-kaomoji", "/cat-kaomoji", "/sad-kaomoji", "/angry-kaomoji"],
  },
  {
    path: "/cat-kaomoji",
    label: "Cat",
    heading: "Cat Kaomoji",
    titleSegment: "Cat Kaomoji (=^･ω･^=)",
    description:
      "Cat kaomoji (=^･ω･^=) copy and paste (neko / catmoji): calm cats to excited ones. Large tap targets and instant clipboard toast.",
    intro:
      "Neko faces from calm cats to excited ones - one tap to copy. Cat kaomoji stay on their own page so they are not mixed into the general cute grid.",
    group: "browse",
    inHeader: true,
    category: "cat",
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
    related: ["/cute-kaomoji", "/bunny-kaomoji", "/dog-kaomoji", "/bear-kaomoji", "/kaomoji-copy-paste"],
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
    inHeader: true,
    category: "sad",
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
    ],
    related: ["/crying-kaomoji", "/happy-kaomoji", "/cute-kaomoji", "/angry-kaomoji"],
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
    inHeader: true,
    category: "crying",
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
    inHeader: true,
    tags: ["angry"],
    howTo: [
      "Scan the angry grid for scowls and growls that match your chat tone.",
      "Tap Copy once - the face goes to your clipboard with any spacing intact.",
      "Need a narrower mood? Use the chips for table flip, fight, or pout — rage and glare faces stay on this grid via tags and search.",
    ],
    definition:
      "These faces lean into mad energy, from mild irritation to full meltdown jokes. Pick the intensity that matches the chat, not the loudest option by default.",
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
    inHeader: false,
    tags: ["tableflip", "table flip"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Table flip faces are the classic flip-desk reaction, not every angry scowl.",
      "Copy the flip that matches your intensity, then paste into chat or a caption.",
      "For punches or silent stares, jump to fight or glare instead.",
    ],
    faqs: [
      {
        question: "What is a table flip kaomoji?",
        answer: "A classic desk-flip reaction face for when words are not enough. This page owns table flip and tableflip tags under the angry mood family.",
      },
      {
        question: "Should I use table flip or the angry hub?",
        answer: "Open table flip when you want the flip gag specifically. Stay on angry kaomoji for the broader scowls and growls, or jump to fight kaomoji for punches.",
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
    inHeader: false,
    tags: ["fight", "punch", "hit"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Fight faces lean into punches, hits, and sparring poses.",
      "Copy one action face when you want motion, not just a mad look.",
      "Keep full fury on rage and desk flips on table flip so each set stays clear.",
    ],
    faqs: [
      {
        question: "What makes fight kaomoji different from angry?",
        answer: "Fight faces lean into punches, hits, and sparring poses. Angry is the wider mad-face shelf; fight is action heat with its own punch and hit tags.",
      },
      {
        question: "When should I skip fight and open table flip instead?",
        answer: "Choose table flip for the desk-flip gag. Choose fight when you want motion and impact rather than a flipped table.",
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
    inHeader: false,
    tags: ["pout", "hmph", "annoyed"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Pout faces cover hmph, sulk, and mild annoyance - soft pushback.",
      "Copy a pout when you want attitude without full rage.",
      "Hard scowls stay on angry; silent stares stay on glare.",
    ],
    faqs: [
      {
        question: "What is a pout kaomoji for?",
        answer: "Hmph, sulk, and mildly annoyed faces for soft pushback. Use pout when attitude should stay light and full rage would be too much.",
      },
      {
        question: "How is pout different from rage on this site?",
        answer: "Pout keeps its own page for sulky soft pushback. Rage and glare stay on the angry hub via tags, so hard scowls stay with the parent angry set.",
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
      "Kaomoji copy and paste — 2,000+ faces, popular picks first, one tap to clipboard, no account needed. Works on phone and desktop. Browse by mood on the home hub when you want categories.",
    intro:
      "Kaomoji copy and paste when you want a face fast: popular picks first, one tap to clipboard. For mood shelves — cute, happy, cat, star, and more — start on the home hub instead.",
    group: "browse",
    inHeader: true,
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
      "Japanese emoticons and japanese kaomoji (^_^): upright faces from punctuation and kana. This page owns JP construction—not Lenny, shrug, or ASCII text faces.",
    intro:
      "Classic Japanese emoticon construction from punctuation, kana, and symbols - ready to copy. This page owns the language and kaomoji concept; ASCII shrugs and Lenny faces live on text faces.",
    group: "browse",
    inHeader: true,
    category: "japanese",
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
    titleSegment: "Text Faces — Shrug & Lenny ¯\\_(ツ)_/¯",
    description:
      "Text faces copy and paste: shrug ¯\\_(ツ)_/¯, Lenny face, disapproval, and Western ASCII. Not japanese kaomoji—those live on Japanese emoticons.",
    intro:
      "ASCII and unicode faces such as shrug, Lenny, and disapproval - one-tap copy. Their own page keeps Japanese emoticon construction separate from Western-style text faces.",
    group: "browse",
    inHeader: true,
    category: "text-faces",
    definition:
      "Text faces here mean Western-leaning ASCII and unicode expressions—shrug, Lenny, disapproval, and similar sideways or compact smiles—not classic upright japanese kaomoji built from kana.",
    faqs: [
      {
        question: "What counts as a text face here?",
        answer: "ASCII and unicode expressions such as shrug, Lenny, and disapproval. They are character faces, but this page leans Western-style catalogs rather than classic Japanese kaomoji construction.",
      },
      {
        question: "Is Lenny or shrug a Japanese kaomoji?",
        answer: "People often mix the labels. On this site, Lenny and shrug live with text faces so Japanese emoticon pages can stay focused on upright, eyes-first kaomoji style.",
      },
      {
        question: "When should I open Japanese emoticons instead?",
        answer: "Open Japanese emoticons when you want kana-and-punctuation kaomoji read upright. Stay here for shrug, Lenny, disapproval, and similar ASCII-leaning faces.",
      },
    ],
    related: ["/japanese-emoticons", "/cute-kaomoji", "/kaomoji-copy-paste"],
  },
  {
    path: "/kaomoji-generator",
    label: "Generator",
    heading: "Kaomoji Generator",
    titleSegment: "Kaomoji Generator — Make a Face (´∀｀)",
    description:
      "Free kaomoji generator to make and type custom faces: pick eyes, mouth, and arms, preview live, then copy. Browse mood categories when you want ready-made lists instead.",
    intro:
      "Make or remix a custom kaomoji in your browser: pick arms, eyes, mouth, and optional extras, preview live, then copy. This page is for building and remixing faces, not browsing a ready-made grid. When you want curated lists instead of a builder, use the category links in the header.",
    group: "browse",
    inHeader: true,
    howTo: [
      "Pick left arm, eyes, mouth, and right arm from the curated sets.",
      "Add an optional extra if you want ears, blush, or sweat marks.",
      "Copy the preview, or hit Randomize for a quick surprise face.",
    ],
    definition:
      "Parts and presets exist so you can invent a face instead of only browsing. Copy the string you like and keep a personal shortlist outside the tool if you reuse it often.",
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
    inHeader: true,
    tags: ["heart", "love", "kiss", "hug"],
    howTo: [
      "Open a heart face that matches the warmth you want (light thanks vs full swoon).",
      "Tap Copy so the full string lands on your clipboard.",
      "Paste into your chat, then add your own words around it if you need context.",
    ],
    definition:
      "Affection shows up as hearts woven into poses, not only a single heart glyph. Choose lighter mixes for friends and fuller swoons when the relationship already supports that tone.",
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
    related: [
      "/shy-kaomoji",
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/shy-kaomoji",
    label: "Shy",
    heading: "Shy Kaomoji",
    titleSegment: "Shy Kaomoji (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    description:
      "Shy kaomoji for bashful, awkward, and blushy moments. Copy soft nervous faces and paste them when a big smile feels too bold.",
    intro:
      "Shy faces are for hesitation and blush, not loud cute energy. Use this grid after compliments, nervous hellos, or gentle \"I'm flustered\" beats, and open the blush chip when you want that cue inside the set. Cute stays warmly adorable; heart stays affection-first. This page owns the quiet, bashful read.",
    group: "browse",
    inHeader: true,
    tags: ["shy", "blush", "embarrassed"],
    howTo: [
      "Pick a face with blush, peeking eyes, or a tiny mouth that feels nervous, not shouty.",
      "Tap Copy and keep the page handy on mobile until you switch apps.",
      "Paste into the chat; if the face looks empty, try a simpler shy face from the same grid.",
    ],
    definition:
      "Expect bashful cues like sweat, peeking eyes, and small mouths. They signal nerves or blush more than pure happiness.",
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
    related: [
      "/heart-kaomoji",
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/sad-kaomoji",
    ],
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
    inHeader: true,
    tags: ["bunny", "rabbit"],
    howTo: [
      "Pick a bunny face with the ear style you like.",
      "Tap Copy so the full character string is on your clipboard.",
      "Paste into chat and add a short line if the face alone needs context.",
    ],
    definition:
      "These faces lean rabbit: ears, soft animal eyes, and gentle poses made for playful chats. Choose them when you want an animal read, not only a human cute smile.",
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
    inHeader: true,
    tags: ["dog", "puppy"],
    howTo: [
      "Scan for floppy-ear or snout styles that read as a dog.",
      "Tap Copy to capture the full face.",
      "Paste into your message, then tweak surrounding words to match the tone.",
    ],
    definition:
      "Expect pup energy: soft ears, snout shapes, and loyal or playful poses. They are for animal charm, not a stand-in for happy or heart pages.",
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
    inHeader: true,
    tags: ["shocked", "surprised"],
    howTo: [
      "Choose a face whose eyes and mouth look stunned, not merely confused.",
      "Tap Copy before you switch apps on mobile.",
      "Paste into the chat right when the reaction lands.",
    ],
    definition:
      "Wide eyes and open mouths carry the shock. Pick intensity to match the moment, from mild stun to full cartoon gasp.",
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
    related: [
      "/confused-kaomoji",
      "/smug-kaomoji",
      "/sad-kaomoji",
      "/crying-kaomoji",
    ],
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
    inHeader: true,
    tags: ["smug"],
    howTo: [
      "Pick a face that looks satisfied or teasing, not loudly joyful.",
      "Tap Copy so every character comes along.",
      "Paste and add a short line if the tease needs a softener.",
    ],
    definition:
      "These lean into knowing smiles and light swagger. Use them for teasing confidence, not soft cute warmth or shy nerves.",
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
    related: [
      "/confused-kaomoji",
      "/happy-kaomoji",
      "/sleepy-kaomoji",
      "/shy-kaomoji",
    ],
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
    inHeader: true,
    tags: ["sleepy", "tired"],
    howTo: [
      "Choose a face with closed or heavy eyes, z's, or a yawn mouth.",
      "Tap Copy while the string is still selected.",
      "Paste into your goodnight or \"brb sleeping\" message.",
    ],
    definition:
      "Heavy lids, yawns, and quiet doze poses define this set. Send them for low energy and rest, not for cute or affectionate moods.",
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
    inHeader: true,
    tags: ["confused"],
    howTo: [
      "Pick a face that looks puzzled rather than scared or angry.",
      "Tap Copy to grab the full string.",
      "Paste as a standalone reaction or before your clarifying question.",
    ],
    definition:
      "Puzzled eyes, tilts, and soft question energy sit here. They mark uncertainty, not surprise gasps or shy blush.",
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
    related: [
      "/shocked-kaomoji",
      "/smug-kaomoji",
      "/sleepy-kaomoji",
      "/sad-kaomoji",
    ],
  },
  {
    path: "/bear-kaomoji",
    label: "Bear",
    heading: "Bear Kaomoji",
    titleSegment: "Bear Kaomoji ʕ•ᴥ•ʔ",
    description:
      "Bear kaomoji with soft animal faces ready to copy and paste. Browse teddy-style text bears for cozy, playful chats.",
    intro:
      "Bear faces are animal-first: round ears, snout marks, and teddy warmth. This is not the bunny ear set, not dog/puppy, and not a generic cute human smile page. Use bear when you want cozy animal energy; keep other animals on their own hubs.",
    group: "browse",
    inHeader: true,
    tags: ["bear"],
    howTo: [
      "Select a bear with the roundness or snout style you like.",
      "Tap Copy so ears and eyes stay intact.",
      "Paste into chat; add a word or two if you want the bear to \"say\" something.",
    ],
    definition:
      "Round ears and soft snouts give these their teddy read. Pick them for cozy animal charm, not as a duplicate of cute or heart hubs.",
    faqs: [
      {
        question: "What defines a bear kaomoji?",
        answer:
          "Round bear-like ears, a centered snout or mouth, and a soft animal silhouette built from characters (classic examples look like ʕ•ᴥ•ʔ).",
      },
      {
        question: "Bear vs bunny vs dog pages?",
        answer:
          "Each animal gets its own hub so grids stay intent-matched. Bear is teddy/cozy; bunny is rabbit ears; dog is pup energy.",
      },
      {
        question: "Are bear faces only \"cute\"?",
        answer:
          "Many read cute, but the primary intent is the animal shape. Human cute smiles still belong on the cute page.",
      },
      {
        question: "Can bear kaomoji look broken on old phones?",
        answer:
          "Rare symbols sometimes fail. If that happens, choose a simpler bear from the same list.",
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
    inHeader: false,
    tags: ["hug"],
    howTo: [
      "Pick a hug face that matches the intensity — gentle pat or full bear hug.",
      "Tap Copy so the arms and all stay intact on your clipboard.",
      "Paste into your message as a warm standalone gesture.",
    ],
    definition:
      "Hug kaomoji use outstretched arms and embrace poses built from Unicode characters. They convey warmth, comfort, and affection more expressively than a plain heart.",
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
    related: ["/heart-kaomoji", "/love-kaomoji", "/shy-kaomoji", "/cute-kaomoji"],
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
    inHeader: false,
    tags: ["waving"],
    howTo: [
      "Pick a wave face that fits the moment — casual hello or cheerful goodbye.",
      "Tap Copy to grab the face.",
      "Paste into your opening or closing message for a friendly touch.",
    ],
    definition:
      "Waving kaomoji feature arm-raising and waving poses that signal hello, goodbye, or friendly acknowledgment in text form.",
    faqs: [
      {
        question: "When should I use a waving kaomoji?",
        answer: "For greetings, farewells, or casual check-ins when a written hello feels flat. A wave face makes the warmth visible.",
      },
      {
        question: "Is waving the same as happy kaomoji?",
        answer: "Happy covers cheers and positive energy broadly. Waving is specific to the greeting pose — arms up, friendly motion.",
      },
      {
        question: "Can waving kaomoji work as a goodbye?",
        answer: "Yes. Both hello and goodbye waves share this page since the arm pose reads the same way in either direction.",
      },
      {
        question: "Do wave arms copy correctly?",
        answer: "Most wave poses use standard characters that paste fine. If arms drop a character, pick a simpler waving face from the grid.",
      },
    ],
    related: ["/happy-kaomoji", "/excited-kaomoji", "/smile-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/thinking-kaomoji",
    label: "Thinking",
    heading: "Thinking Kaomoji",
    titleSegment: "Thinking Kaomoji (・・？)",
    description:
      "Thinking kaomoji copy and paste: pondering, wondering, and deep-thought text faces. Tap once for the perfect thinking reaction.",
    intro:
      "Pondering faces and deep-thought expressions for when you need to show the gears turning — tap to copy. Thinking kaomoji cover curiosity, contemplation, and the universal \"hmm\".",
    group: "browse",
    inHeader: false,
    tags: ["thinking"],
    howTo: [
      "Pick a face that reads pensive or curious, not blank or confused.",
      "Tap Copy to grab the thinking pose.",
      "Paste as your reaction to a complex question or before your considered reply.",
    ],
    definition:
      "Thinking kaomoji feature hand-to-chin poses, upward glances, and contemplative expressions that signal deep thought or genuine curiosity.",
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
    inHeader: false,
    tags: ["dance"],
    howTo: [
      "Pick a dance face that matches the music energy — subtle groove or full party mode.",
      "Tap Copy to grab the pose.",
      "Paste as your reaction to good news, a party invite, or a song you love.",
    ],
    definition:
      "Dance kaomoji feature spinning poses, arm movements, and celebratory stances that suggest motion and rhythm in plain text.",
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
    related: ["/excited-kaomoji", "/happy-kaomoji", "/giggling-kaomoji", "/smile-kaomoji"],
  },
  {
    path: "/fish-kaomoji",
    label: "Fish",
    heading: "Fish Kaomoji",
    titleSegment: "Fish Kaomoji ><(((°>",
    description:
      "Fish kaomoji copy and paste: fishy, aquatic, and underwater text faces ><(((°>. Tap once for a fun fish reaction in any chat.",
    intro:
      "Fishy faces and aquatic text art for fishing jokes, aquarium fans, and anyone who loves a good ><(((°> — tap to copy. Fish kaomoji are a niche favourite in kaomoji culture.",
    group: "browse",
    inHeader: false,
    tags: ["fish"],
    howTo: [
      "Pick a fish face that shows the size or mood you want.",
      "Tap Copy to grab the fishy characters intact.",
      "Paste into chat for an unexpected aquatic reaction.",
    ],
    definition:
      "Fish kaomoji use bracket and arrow characters to create the classic ><(((°> fish shape, along with aquatic-themed face variants. They are a beloved novelty in the kaomoji tradition.",
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
    inHeader: false,
    tags: ["birthday"],
    howTo: [
      "Pick a face with the celebration intensity you want — heartfelt cheer or full party mode.",
      "Tap Copy to capture every party character.",
      "Paste into your birthday message for an instant text-face celebration.",
    ],
    definition:
      "Birthday kaomoji combine party, celebration, and festive poses to create text faces perfect for birthday wishes, congratulations, and milestone moments.",
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
    related: ["/excited-kaomoji", "/happy-kaomoji", "/sparkle-kaomoji", "/star-kaomoji"],
  },
  {
    path: "/christmas-kaomoji",
    label: "Christmas",
    heading: "Christmas Kaomoji",
    titleSegment: "Christmas Kaomoji ☆*:.｡.o(≧▽≦)o.｡.:*☆",
    description:
      "Christmas kaomoji copy and paste: festive, holiday, and seasonal text faces. Tap once for the perfect Christmas greeting in any chat.",
    intro:
      "Festive snowflakes, Santa poses, and holiday cheer for Christmas greetings — tap to copy. Christmas kaomoji are the text-face way to spread seasonal warmth.",
    group: "browse",
    inHeader: false,
    tags: ["christmas"],
    howTo: [
      "Pick a face with the holiday spirit you want — cozy snowflake or full party Santa.",
      "Tap Copy to grab every festive character.",
      "Paste into your Christmas message or holiday greeting.",
    ],
    definition:
      "Christmas kaomoji combine winter, festive, and holiday elements — snowflakes, stars, and celebration poses — for seasonal text-face greetings.",
    faqs: [
      {
        question: "When should I use Christmas kaomoji?",
        answer: "In holiday greetings, Christmas messages, festive posts, or any December conversation where seasonal cheer fits.",
      },
      {
        question: "Do Christmas kaomoji work for other winter holidays?",
        answer: "Many do. Winter and snowflake faces work for any cold-weather season celebration, not just Christmas specifically.",
      },
      {
        question: "Will festive glyphs paste correctly?",
        answer: "Most common festive characters paste fine. If a snowflake shows as a box, pick a simpler Christmas face from the grid.",
      },
      {
        question: "Is there a Halloween kaomoji page too?",
        answer: "Yes — Halloween Kaomoji has its own page with spooky and autumn text faces.",
      },
    ],
    related: ["/halloween-kaomoji", "/birthday-kaomoji", "/sparkle-kaomoji", "/star-kaomoji"],
  },
  {
    path: "/halloween-kaomoji",
    label: "Halloween",
    heading: "Halloween Kaomoji",
    titleSegment: "Halloween Kaomoji ヾ(⌐■_■)ノ♪",
    description:
      "Halloween kaomoji copy and paste: spooky, creepy, and ghostly text faces. Tap once for a perfect Halloween reaction in any chat.",
    intro:
      "Spooky ghosts, creepy grins, and Halloween energy for October messages — tap to copy. Halloween kaomoji are your text-face weapon for all things eerie and fun.",
    group: "browse",
    inHeader: false,
    tags: ["halloween"],
    howTo: [
      "Pick a face with the spook level you want — mild creepy or full horror mode.",
      "Tap Copy to grab the spooky characters.",
      "Paste into your Halloween message or use it as a seasonal reaction.",
    ],
    definition:
      "Halloween kaomoji use ghostly, creepy, and dark-themed Unicode characters to create text faces suited for October, horror humor, and spooky vibes.",
    faqs: [
      {
        question: "When should I use Halloween kaomoji?",
        answer: "For Halloween messages, October greetings, horror humor, or any moment where a spooky or creepy tone fits the chat.",
      },
      {
        question: "Are Halloween kaomoji only for October?",
        answer: "Mostly, but creepy and gothic faces work year-round for horror fans, dark humor, or edgy vibes in any season.",
      },
      {
        question: "Will spooky glyphs paste correctly?",
        answer: "Most Halloween faces use common Unicode characters. If a rare glyph boxes out, pick a simpler spooky face.",
      },
      {
        question: "Is there a Christmas kaomoji page?",
        answer: "Yes — Christmas Kaomoji has festive and holiday text faces for the winter season.",
      },
    ],
    related: ["/christmas-kaomoji", "/birthday-kaomoji", "/nervous-kaomoji", "/confused-kaomoji"],
  },
  {
    path: "/star-kaomoji",
    label: "Star",
    heading: "Star Kaomoji",
    titleSegment: "Star Kaomoji ★(^_^)★",
    description:
      "Star kaomoji copy and paste: shining, sparkling, and star-filled text faces. Tap once to copy a star kaomoji and drop it into any chat or bio.",
    intro:
      "Shining star text faces for celestial vibes, good luck wishes, and sparkling reactions — one tap to copy. Stars pair naturally with sparkle and flower pages for a glowing aesthetic.",
    group: "browse",
    inHeader: false,
    tags: ["star"],
    howTo: [
      "Pick a star face with the glow intensity you want — from a single ★ accent to a full starfield.",
      "Tap Copy so every character, including spacing, lands on your clipboard.",
      "Paste into chat, a bio, or a username for instant celestial flair.",
    ],
    definition:
      "Star kaomoji weave ★ and ✦ glyphs into expressive faces, poses, and decorative borders. Use them for wishes, nighttime vibes, or dazzling reactions.",
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
    inHeader: false,
    tags: ["giggle", "laugh"],
    howTo: [
      "Scan for the laugh intensity you want — quiet giggle, chuckle, or full burst.",
      "Tap Copy to grab the face with its spacing intact.",
      "Paste into chat as a standalone reaction or after a funny line.",
    ],
    definition:
      "These faces lean into laughter: squinted happy eyes, open mouths, and the energetic poses that signal you found something genuinely funny.",
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
    inHeader: false,
    tags: ["sparkle"],
    howTo: [
      "Choose a sparkle face that matches your sparkle level — subtle shimmer to full glitter bomb.",
      "Tap Copy to capture all glitter glyphs intact.",
      "Paste into your message or bio for that ✨ effect.",
    ],
    definition:
      "Sparkle kaomoji wrap faces in glitter and shine glyphs like ✨, ★, and ✦. Use them for celebratory vibes, magical moments, or aesthetic text decoration.",
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
    inHeader: false,
    tags: ["love"],
    howTo: [
      "Pick a face that matches your love intensity — soft warmth, crush energy, or full lovestruck swoon.",
      "Tap Copy once so every heart glyph stays intact.",
      "Paste into a message, a bio, or wherever affection fits.",
    ],
    definition:
      "Love kaomoji go beyond a simple heart symbol into full expressive poses — heart-eyes, lovestruck sighs, and affection-filled stances.",
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
    related: ["/heart-kaomoji", "/kiss-kaomoji", "/shy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/flower-kaomoji",
    label: "Flower",
    heading: "Flower Kaomoji",
    titleSegment: "Flower Kaomoji (✿◠‿◠)",
    description:
      "Flower kaomoji copy and paste: blossom, petal, and floral text faces. Tap once to add a (✿) flower accent to any message.",
    intro:
      "Soft flower faces and blossom accents for gentle, pretty messages. Flower kaomoji use ✿, ❀, and ꕤ glyphs to bring nature and warmth to plain text.",
    group: "browse",
    inHeader: false,
    tags: ["flower"],
    howTo: [
      "Pick a flower face that matches the softness you want — subtle petal accent or full blossom pose.",
      "Tap Copy so every floral glyph stays intact.",
      "Paste into chat, a caption, or a username for a soft natural touch.",
    ],
    definition:
      "Flower kaomoji use blossom glyphs like ✿, ❀, and ꕤ woven into text faces and decorative borders. They bring a soft, natural aesthetic to messages.",
    faqs: [
      {
        question: "What are flower kaomoji used for?",
        answer: "Soft, nature-themed messages: spring greetings, gentle good mornings, floral aesthetic posts, or any message that should feel warm and fresh.",
      },
      {
        question: "What glyphs appear in flower kaomoji?",
        answer: "Common ones include ✿, ❀, ❁, ꕤ, and various petal-shaped Unicode characters. They paste as plain text just like other kaomoji.",
      },
      {
        question: "How is flower different from sparkle?",
        answer: "Flower uses petal and blossom glyphs for a natural, soft aesthetic. Sparkle uses shine and glitter glyphs for a dazzling or magical vibe.",
      },
      {
        question: "Will flower glyphs show on all phones?",
        answer: "Most common flower characters paste well. If a rare petal glyph boxes out, pick a simpler flower face using ✿ or ❀.",
      },
    ],
    related: ["/sparkle-kaomoji", "/star-kaomoji", "/cute-kaomoji", "/shy-kaomoji"],
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
    inHeader: false,
    tags: ["kiss"],
    howTo: [
      "Pick a kiss face that matches the vibe — playful blown kiss, sweet peck, or romantic smooch.",
      "Tap Copy to capture every character.",
      "Paste into your message as a standalone affectionate gesture.",
    ],
    definition:
      "Kiss kaomoji feature puckered mouths, blown kiss poses, and smooch expressions built from Unicode characters — more expressive than a plain 😘 emoji.",
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
    related: ["/heart-kaomoji", "/love-kaomoji", "/shy-kaomoji", "/cute-kaomoji"],
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
    inHeader: false,
    tags: ["smile"],
    howTo: [
      "Pick a smile that matches the warmth level — barely-there grin or wide open smile.",
      "Tap Copy so every character comes along.",
      "Paste as a soft positive reaction or a friendly standalone message.",
    ],
    definition:
      "Smile kaomoji feature curved mouths and gentle expressions that read as friendly, warm, and approachable. They are softer than happy cheers and less intense than excited faces.",
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
    related: ["/happy-kaomoji", "/giggling-kaomoji", "/cute-kaomoji", "/excited-kaomoji"],
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
    inHeader: false,
    tags: ["excited"],
    howTo: [
      "Pick the excitement level you need — contained giddiness or full arms-flailing hype.",
      "Tap Copy to grab the face with arms and all.",
      "Paste as your reaction to good news, an announcement, or a hype moment.",
    ],
    definition:
      "Excited kaomoji are high-energy expressions: raised arms, sparkling eyes, and dynamic poses built from Unicode characters. They signal enthusiasm and genuine joy.",
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
    related: ["/happy-kaomoji", "/giggling-kaomoji", "/smile-kaomoji", "/cute-kaomoji"],
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
    inHeader: false,
    tags: ["nervous"],
    howTo: [
      "Pick a face that matches your nerves — mild uneasy look or full sweat-drop panic.",
      "Tap Copy to grab the face.",
      "Paste as your honest reaction to a stressful or uncertain moment.",
    ],
    definition:
      "Nervous kaomoji feature sweat drops, tense mouths, and anxious eyes. They signal unease, worry, or mild dread in a way that pure text descriptions often miss.",
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
    related: ["/shy-kaomoji", "/confused-kaomoji", "/sad-kaomoji", "/crying-kaomoji"],
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
    inHeader: false,
    tags: ["wink"],
    howTo: [
      "Choose a wink face that feels playful without being too flirty for the context.",
      "Tap Copy to grab the face.",
      "Paste after a teasing line or as a standalone cheeky reply.",
    ],
    definition:
      "Wink kaomoji feature one closed eye and one open eye, suggesting a playful, knowing expression. They signal teasing, flirting, or a shared secret without saying a word.",
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
    path: "/about",
    label: "About",
    heading: "About",
    titleSegment: "About",
    description:
      "About Paste Kaomoji: curated kaomoji and text-face library with mood pages, integrity filters, and MIT-licensed source attribution.",
    intro:
      "Paste Kaomoji is a focused library for copying kaomoji and text faces. The point is find, copy, paste - without a giant emoji catalog or a wall of ads.",
    group: "trust",
    inHeader: false,
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
    description: "Contact Paste Kaomoji by email at hello@pastekaomoji.com.",
    intro:
      "Send corrections, face suggestions, or site questions by email. There is no account system and no contact form in this release.",
    group: "trust",
    inHeader: false,
    related: ["/about", "/privacy"],
  },
  {
    path: "/privacy",
    label: "Privacy",
    heading: "Privacy",
    titleSegment: "Privacy",
    description:
      "Privacy notes for Paste Kaomoji. This release sets no accounts, ads, or analytics cookies.",
    intro:
      "Privacy policy for pastekaomoji.com, effective September 25, 2026. Plain-language summary of what the site stores and how copy works.",
    group: "trust",
    inHeader: false,
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
    inHeader: false,
    related: ["/privacy", "/about"],
  },
];

export const getPage = cache(function getPage(path: string): SitePage {
  const page = pages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown page: ${path}`);
  }
  return page;
});

export function headerNav(): SitePage[] {
  return pages.filter((page) => page.inHeader);
}

export function pagesByGroup(group: PageGroup): SitePage[] {
  return pages.filter((page) => page.group === group);
}

/** Top-level browse pages only (excludes nested subcategory children). */
export function topLevelBrowsePages(): SitePage[] {
  return pagesByGroup("browse").filter((page) => !page.parentPath);
}

export function relatedPages(page: SitePage): SitePage[] {
  return page.related.map((path) => getPage(path));
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

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

/** Placeholder copy for header search when scoped to a category or tag page. */
export function searchPlaceholderForScope(scope: SearchScope): string {
  if (!scope.category && !scope.tags) {
    return "Search faces, like cute, cry, or shrug";
  }
  const page = pages.find((item) => item.path === scope.path);
  if (page) return `Search within ${page.label}`;
  return "Search faces on this page";
}

/** Header search scope from the current pathname (longest path match). */
export function resolveSearchScope(pathname: string): SearchScope {
  const normalized = normalizePathname(pathname);

  const exact = pages.find((item) => item.path === normalized);
  const page =
    exact ??
    [...pages]
      .filter((item) => item.path !== "/")
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => normalized.startsWith(`${item.path}/`));

  if (!page || page.group === "trust") {
    return { path: "/" };
  }

  if (page.tags && page.tags.length > 0) {
    return {
      path: page.path,
      tags: page.tags,
    };
  }

  if (page.category) {
    return { path: page.path, category: page.category };
  }

  return { path: page.path };
}
