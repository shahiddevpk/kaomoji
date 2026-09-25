import { cache } from "react";
import type { SearchScope } from "@/lib/search/actions";

export const siteConfig = {
  siteName: "Paste Kaomoji",
  url: "https://pastekaomoji.com",
  description:
    "Kaomoji library by mood: cute, cat, happy, crying, angry, Japanese emoticons, and text faces. Browse the discovery hub, then one-tap copy.",
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
  /** When true, also include faces whose decoded face contains a real newline. */
  includeNewlineFaces?: boolean;
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
    heading: "Browse Kaomoji by Mood",
    titleSegment: "Kaomoji Library by Mood | Text Faces | Paste Kaomoji",
    description:
      "Browse kaomoji and text faces by mood: cute, happy, cat, crying, angry, Japanese emoticons, and more. Discover the library, then one-tap copy.",
    intro:
      "Explore the kaomoji library by mood and theme, then copy in one tap. Start from category tiles when you are discovering; open Kaomoji Copy and Paste when you only need a fast grab.",
    group: "hub",
    inHeader: true,
    definition:
      "Kaomoji are Japanese-style text faces made from punctuation, symbols, and letters so feeling shows up in plain text. They travel as normal characters, so they work in chats and comments where picture stickers sometimes fail or look inconsistent.\n\nPaste Kaomoji groups them by mood and format so you can find a face fast, copy it in one tap, and drop it into Discord, WhatsApp, Slack, SMS, or a comment. Because they are editable text, you can type around them or tweak a character when you want a custom twist.",
    learnMore:
      "Most kaomoji are built from punctuation and Unicode symbols rather than a single picture glyph. Eyes usually carry the mood; arms, cheeks, and sweat marks add motion or tone.\n\nCategories on this site exist so you can browse by intent instead of scrolling one giant dump. Multiline faces need a font and chat field that preserve line breaks, or the stack can collapse into one messy row.",
    faqs: [
      {
        question: "What is a kaomoji?",
        answer: "A kaomoji is a text face built from keyboard characters, often read sideways or upright, that shows an emotion or reaction. Classic examples include happy (^_^), sad (T_T), and surprised (⊙_⊙).",
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
    ],
    related: [],
  },
  {
    path: "/cute-kaomoji",
    label: "Cute",
    heading: "Cute Kaomoji",
    titleSegment: "Cute Kaomoji (◕‿◕)",
    description:
      "Cute kaomoji (◕‿◕) copy and paste: soft kawaii blush, tiny hugs, and gentle charm. Soft aesthetic mood with one-tap copy, separate from happy cheers.",
    intro:
      "Soft kawaii smiles, blush, and tiny hugs ready to copy and paste. Cute owns the soft aesthetic mood; cheers, waves, and big grins live on happy kaomoji so the two stay distinct.",
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
    ],
    related: ["/happy-kaomoji", "/cat-kaomoji", "/heart-kaomoji", "/shy-kaomoji"],
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
    ],
    related: ["/cute-kaomoji", "/bunny-kaomoji", "/dog-kaomoji", "/bear-kaomoji"],
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
      "Scowls, growls, and mad faces when chat needs heat - tap Copy once and paste anywhere. This page owns the head term angry kaomoji: the full angry-tagged set ranked with popular faces first so the grid matches angry searches.\n\nTable flip, fight, and pout each keep their own flat pages when the face pools stay distinct. Rage and glare faces stay discoverable here via tags and search rather than thin duplicate URLs. Use the chips below for the shipped sub-moods, or stay on this hub for the broad angry shelf.",
    group: "browse",
    inHeader: true,
    tags: ["angry"],
    howTo: [
      "Scan the angry grid for scowls and growls that match your chat tone.",
      "Tap Copy once - the face goes to your clipboard with any spacing intact.",
      "Need a narrower mood? Use the chips for table flip, fight, rage, pout, or glare.",
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
      "Flip-the-table faces for classic desk-flip reactions - one tap to copy. This page owns table flip kaomoji (including tableflip spelling in tags), nested in the angry mood family for discovery but indexed on its own flat URL so it does not compete with the angry parent.\n\nGrab a flip when words are not enough. For punches open fight kaomoji; for soft sulks open pout. Rage and glare faces stay on the angry hub via tags. The parent angry page keeps the broader scowls and growls.",
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
      "Hmph, sulk, and mildly annoyed faces for soft pushback - tap to copy. Pout kaomoji owns pout, hmph, and annoyed tags. Annoyed is a supporting synonym on this page, not its own URL, so we avoid doorway thin pages.\n\nChoose pout when attitude should stay light. Hard scowls and hotter rage or glare faces stay on the angry parent via tags. Related chips keep the shipped angry family easy to scan like a labeled mood shelf.",
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
        answer: "Pout keeps its own page for sulky soft pushback. Rage and glare stay on the angry hub via tags rather than thin duplicate URLs, so hard scowls stay with the parent angry set.",
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
      "Kaomoji copy and paste (◕‿◕) utility: popular faces first, one-tap clipboard, then moods. Explicit copy task, not the discovery hub.",
    intro:
      "Explicit copy-and-paste utility for grabbing a face fast. Popular faces first, one tap to clipboard. For browsing the full library by mood, start on the home hub instead.",
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
    ],
    related: ["/cute-kaomoji", "/happy-kaomoji", "/japanese-emoticons", "/text-faces"],
  },
  {
    path: "/japanese-emoticons",
    label: "Japanese",
    heading: "Japanese Emoticons",
    titleSegment: "Japanese Emoticons (^_^)",
    description:
      "Japanese emoticons (^_^) copy and paste (kaomoji): classic faces from punctuation and kana. Language-first set, not ASCII shrug lists.",
    intro:
      "Classic Japanese emoticon construction from punctuation, kana, and symbols - ready to copy. This page owns the language and kaomoji concept; ASCII shrugs and Lenny faces live on text faces.",
    group: "browse",
    inHeader: true,
    category: "japanese",
    definition:
      "Japanese emoticons (kaomoji) are usually read upright, with eyes doing most of the emotional work. This page focuses on that classic construction rather than Western sideways smiles or single emoji pictographs.",
    learnMore:
      "Punctuation, kana, and symbols combine into faces that stay editable text. If a rare glyph shows as a box, your device font is missing that code point. Try a simpler face from the same grid, or open the multiline page when you want stacked art instead of one-line Japanese faces.",
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
    related: ["/text-faces", "/cute-kaomoji", "/kaomoji-copy-paste", "/multiline-kaomoji"],
  },
  {
    path: "/text-faces",
    label: "Text faces",
    heading: "Text Faces",
    titleSegment: "Text Faces ¯\\_(ツ)_/¯",
    description:
      "Text faces ¯\\_(ツ)_/¯ copy and paste: shrug, Lenny, disapproval, and more. ASCII and unicode catalog, not Japanese kana construction.",
    intro:
      "ASCII and unicode faces such as shrug, Lenny, and disapproval - one-tap copy. Their own page keeps Japanese emoticon construction separate from Western-style text faces.",
    group: "browse",
    inHeader: true,
    category: "text-faces",
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
    related: ["/japanese-emoticons", "/cute-kaomoji", "/kaomoji-copy-paste", "/multiline-kaomoji"],
  },
  {
    path: "/multiline-kaomoji",
    label: "Multiline",
    heading: "Multiline Kaomoji / ASCII Art Faces",
    titleSegment: "Multiline Kaomoji / ASCII Art",
    description:
      "Multiline kaomoji and ASCII art faces copy and paste: stacked multi-line faces that keep line breaks with pre-wrap. Discover them in one place.",
    intro:
      "Stacked multi-line kaomoji and ASCII art faces that keep every line break when you copy. Cards use whitespace pre-wrap so the preview matches what lands on your clipboard - made for bios, notes, and chats that allow wraps.\n\nThis browse page gathers multi-line and newline faces in one place, apart from one-line cute or Japanese sets. If you only need a single-line emoticon, use those mood pages or the generator to build a custom face.",
    group: "browse",
    inHeader: false,
    tags: ["multi-line"],
    includeNewlineFaces: true,
    howTo: [
      "Multiline faces stack across lines - the card keeps breaks with pre-wrap.",
      "Copy once to keep every line, then paste into a bio, note, or chat that allows wraps.",
      "If you only need a single-line cute or Japanese face, use those mood pages instead.",
    ],
    definition:
      "Tall layouts are the point here: stacked lines that form a tiny scene. Confirm line breaks survived paste before you hit send in a picky app.",
    faqs: [
      {
        question: "What is a multiline kaomoji?",
        answer: "A face or mini scene that uses more than one line of text stacked vertically. It pastes as a small block of art, not a single-row emoticon.",
      },
      {
        question: "Will multiline faces break in my chat app?",
        answer: "Some apps wrap or indent oddly. Paste into a note first if you need to check spacing, then send. One-line chats may squash the layout.",
      },
      {
        question: "Why is multiline its own page instead of a mood?",
        answer: "Multiline is a format. You can find stacked art here without filtering by angry, cute, or love first.",
      },
      {
        question: "Any tip for copying tall faces?",
        answer: "Select or tap Copy so every line is included. If only the top line pastes, copy again from a desktop browser or a notes app that keeps line breaks.",
      },
    ],
    related: [
      "/japanese-emoticons",
      "/text-faces",
      "/cute-kaomoji",
      "/kaomoji-generator",
    ],
  },
  
  {
    path: "/kaomoji-generator",
    label: "Generator",
    heading: "Kaomoji Generator",
    titleSegment: "Kaomoji Generator to Make Faces (´∀｀)",
    description:
      "Make kaomoji online with a simple generator. Build or remix text faces, then copy and paste them into any chat without hunting a giant list.",
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
    ],
    related: [
      "/angry-kaomoji",
      "/cute-kaomoji",
      "/text-faces",
      "/multiline-kaomoji",
    ],
  },

  {
    path: "/heart-kaomoji",
    label: "Heart",
    heading: "Heart Kaomoji",
    titleSegment: "Heart Kaomoji (♡‿♡)",
    description:
      "Heart kaomoji to copy for affection, crush energy, and warm thanks. Browse love-ready text faces, tap once, and paste into any chat.",
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
          "No separate rabbit page. Rabbit is a chip on this bunny hub so one grid covers both wordings without thin duplicate URLs.",
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
    path: "/about",
    label: "About",
    heading: "About",
    titleSegment: "About",
    description:
      "About Paste Kaomoji - a kaomoji and text-face library at pastekaomoji.com.",
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
        answer: "Much of the expanded catalog comes from the open kaomoji-collection project (MIT License), curated by Kaomojiya. We dedupe faces and add English names, tags, and aliases for search. Paste Kaomoji is not affiliated with that project.",
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
      "This page explains what pastekaomoji.com handles today. It is a starter policy written in plain language.",
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
      "Short terms for using pastekaomoji.com. This is starter text, not a substitute for advice from a lawyer.",
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
      includeNewlines: page.includeNewlineFaces,
    };
  }

  if (page.category) {
    return { path: page.path, category: page.category };
  }

  return { path: page.path };
}
