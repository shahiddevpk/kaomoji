/**
 * Blog: dated, event-driven posts (holidays, seasons) that the evergreen guides
 * and browse pages do not own. Posts reuse the guide block format, plus
 * "messages" blocks for ready-to-send texts.
 * Rule: a post targets "messages / texts / ideas" queries for an event, never the
 * head term ("christmas kaomoji") that a category page owns, and links to it.
 */
import type { GuideSection } from "@/lib/guides";

export type BlogPost = {
  slug: string;
  /** Visible H1 and BlogPosting headline. */
  title: string;
  /** Document title before `| Paste Kaomoji`. */
  titleSegment: string;
  description: string;
  /** Card blurb and lead paragraph. */
  intro: string;
  /** Decorative face for the index card. */
  face: string;
  /** Short event label shown on cards, e.g. "Christmas · Dec 25". */
  event: string;
  published: string;
  updated: string;
  /** Category pages this post sends readers to (they link back). */
  related: string[];
  sections: GuideSection[];
  faqs?: { question: string; answer: string }[];
};

export const BLOG_INDEX = {
  path: "/blog",
  heading: "Kaomoji Blog",
  titleSegment: "Kaomoji Blog: Holiday Messages & Seasonal Ideas",
  description:
    "Ready-to-send holiday messages and seasonal captions with kaomoji, texting ideas, and tips for Halloween, Diwali, Thanksgiving, Christmas, New Year, and Valentine's Day.",
  intro:
    "Seasonal posts with copy-paste messages and captions for holidays and events. Every line has a Copy button, and every post links to the full face collection for that occasion.",
};

/** In event order: the next upcoming event first. */
export const posts: BlogPost[] = [
  {
    slug: "halloween-messages-with-kaomoji",
    title: "Halloween Messages with Kaomoji: Spooky, Cute & Funny Texts to Send",
    titleSegment: "Halloween Messages with Kaomoji to Copy",
    description:
      "Spooky, cute, and funny Halloween messages with kaomoji for friends, party invites, costume compliments, scary-movie nights, partners, kids, and coworkers.",
    intro:
      "Halloween texting is half the fun: party invites, costume photos, and scary-movie reactions all land better with a ghost or pumpkin face. These messages are grouped by moment, from planning the party to the sugar crash on November 1, and every one can be copied in a tap.",
    face: "👻(◕ᴗ◕)🎃",
    event: "Halloween · Oct 31",
    published: "2026-10-21",
    updated: "2026-10-25",
    related: ["/halloween-kaomoji", "/scared-kaomoji", "/devil-kaomoji", "/food-kaomoji"],
    sections: [
      {
        id: "friends",
        heading: "Happy Halloween messages for friends",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Classic", text: "Happy Halloween! 🎃(◕‿◕) Hope your night is more treats than tricks." },
              { label: "Spooky", text: "Something is watching you… it's me, wishing you a Happy Halloween 👻(◕ᴗ◕)👻" },
              { label: "Funny", text: "My costume this year: a person who ate all the candy before the trick-or-treaters arrived 🍬(っ˘ڡ˘ς)" },
              { label: "Short", text: "Boo! 👻 Happy Halloween ヽ(°〇°)ﾉ" },
            ],
          },
        ],
      },
      {
        id: "party",
        heading: "Party invites and plans",
        blocks: [
          {
            type: "p",
            text: "Send invites a week or two ahead, and put the date, time, and dress code in the first line so nobody has to scroll up to find them later.",
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Halloween party at mine on the 31st, 8 p.m.! Costumes required, screaming optional 🎃ヽ(・∀・)ﾉ👻" },
              { label: "Group chat", text: "Costume theme vote: horror classics or cute monsters? Reply with a 👻 or a 🦇 (๑•̀ㅂ•́)و✧" },
              { label: "Reminder", text: "Tomorrow's the party! Don't forget your costume and your appetite for candy 🍬(◕ᴗ◕✿)" },
              { label: "Running late", text: "On my way! Still gluing on my vampire fangs (；・∀・)🧛" },
            ],
          },
        ],
      },
      {
        id: "costumes",
        heading: "Costume compliments",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Impressed", text: "Your costume is unreal! Did you actually make that?! (☆▽☆)" },
              { label: "Scary", text: "Okay that costume genuinely scared me (((;°Д°))) 10/10" },
              { label: "Cute", text: "The cutest little monster I've ever seen 👻(*´▽`*)💜" },
              { label: "Group costume", text: "Best group costume of the night, no contest ＼(＾▽＾)／🎃" },
            ],
          },
        ],
      },
      {
        id: "movie-night",
        heading: "Scary-movie night",
        blocks: [
          {
            type: "p",
            text: "Trembling and hiding faces from the [scared kaomoji](/scared-kaomoji/) page fit horror films perfectly. Send one during the movie as a live reaction.",
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Horror movie marathon Friday? I'll bring popcorn, you bring a blanket to hide behind (/ω＼)🍿" },
              { label: "Live reaction", text: "WHY DID THEY GO INTO THE BASEMENT (((;ꏿ_ꏿ;)))" },
              { label: "After the movie", text: "Not sleeping tonight. Thanks for that 👻(；´Д｀)" },
            ],
          },
        ],
      },
      {
        id: "partner",
        heading: "For your partner",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Sweet", text: "You're my favorite boo 👻♡(◕ᴗ◕✿)" },
              { label: "Playful", text: "Couples costume idea: I'm the vampire, you're my snack 🧛(¬‿¬)" },
              { label: "Cozy night", text: "Pumpkin carving and a scary movie tonight? I'll hold your hand at the jump scares 🎃(っ´▽`)っ" },
            ],
          },
        ],
      },
      {
        id: "family",
        heading: "For kids and family",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Trick-or-treat", text: "Trick-or-treat time! Stay together, check your candy, and have fun 🍬(◕‿◕)🎃" },
              { label: "Grandparents", text: "Sending you a photo of our little pumpkin in costume tonight! Happy Halloween 🎃(*^▽^*)" },
              { label: "Candy haul", text: "Final candy count: 47 pieces. Negotiations for a trade are open 🍫(｀・ω・´)" },
            ],
          },
        ],
      },
      {
        id: "work",
        heading: "For coworkers",
        blocks: [
          {
            type: "p",
            text: "Keep work messages playful but light. Cute ghosts and pumpkins suit any team; save the gory faces for friends.",
          },
          {
            type: "messages",
            items: [
              { label: "Team chat", text: "Happy Halloween, team! There are spooky treats in the kitchen 🎃(•‿•)" },
              { label: "Dress-up day", text: "Reminder: Friday is costume day! Prizes for the most creative outfit 👻(｡•̀ᴗ-)✧" },
            ],
          },
        ],
      },
      {
        id: "after",
        heading: "The morning after",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Sugar crash", text: "November 1 status: candy coma (´-ω-`)🍬" },
              { label: "Thank you", text: "Thanks for an amazing Halloween party! Already planning next year's costume (๑•̀ㅂ•́)و✧" },
            ],
          },
          {
            type: "p",
            text: "Want more spooky faces? The [Halloween kaomoji](/halloween-kaomoji/) page has 370+ greetings, ghosts, pumpkins, bats, zombies, and witches, and the [devil kaomoji](/devil-kaomoji/) page has mischievous faces for tricks. Posting a costume photo instead of texting? Try these [Halloween captions](/blog/halloween-captions-and-social-posts-with-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a cute Halloween kaomoji?",
        answer: "👻(◕ᴗ◕) is a friendly ghost, and 🎃(◕‿◕) is a happy pumpkin. Both suit any audience.",
      },
      {
        question: "What should I write in a Halloween party invite?",
        answer:
          "Put the date, time, place, and costume rule in the first line, then add a fun face like 🎃ヽ(・∀・)ﾉ👻 so the invite stands out in the chat.",
      },
      {
        question: "Are scary kaomoji okay to send at work?",
        answer:
          "Cute ghosts and pumpkins are fine in most team chats. Keep gory or very dramatic faces for friends who enjoy them.",
      },
    ],
  },
  {
    slug: "halloween-captions-and-social-posts-with-kaomoji",
    title: "Halloween Captions & Social Posts with Kaomoji for Instagram, TikTok & Status",
    titleSegment: "Halloween Captions with Kaomoji to Copy",
    description:
      "Halloween captions and post ideas with kaomoji for Instagram, TikTok, WhatsApp status, Discord bios, costume photos, pumpkin posts, and October 31 countdowns.",
    intro:
      "A costume photo deserves more than pumpkin emoji spam. These captions are written for posts and profiles: short enough for a story, punchy enough for TikTok, and weird in the good way that kaomoji do best. Copy one as-is, or trim the second line if your platform has a character limit.",
    face: "🦇(◕‿◕)✨",
    event: "Halloween · Oct 31",
    published: "2026-10-22",
    updated: "2026-10-22",
    related: ["/halloween-kaomoji", "/scared-kaomoji", "/sparkle-kaomoji", "/emoji-combos"],
    sections: [
      {
        id: "costume-captions",
        heading: "Costume photo captions for Instagram and TikTok",
        blocks: [
          {
            type: "p",
            text: "Lead with the joke or the vibe, then drop the face at the end so it reads like a sign-off, not a random symbol pile. On TikTok, the first line is what people see before they tap \"more,\" so put the hook there.",
          },
          {
            type: "messages",
            items: [
              { label: "Main character", text: "Legally distinct from any copyrighted character (trust me) 🎃(｀・ω・´)" },
              { label: "Effort flex", text: "Three hours of makeup, one photo, zero regrets (☆▽☆)👻" },
              { label: "Low effort pride", text: "Budget costume, premium attitude ＼(＾▽＾)／" },
              { label: "Mystery", text: "Guess who I am before you swipe 👀(◕‿◕)🎃" },
              { label: "Reused costume", text: "Same costume as last year because it still slaps ♻️(◕ᴗ◕✿)" },
              { label: "Solo post", text: "Dressed up anyway. The party is in my camera roll 🦇(っ´▽`)っ" },
            ],
          },
        ],
      },
      {
        id: "group-couple",
        heading: "Group and couple costume captions",
        blocks: [
          {
            type: "p",
            text: "Tag everyone in the photo, but keep the caption about the group energy. Matching faces in the text (two ghosts, a row of pumpkins) mirror the photo without repeating every name.",
          },
          {
            type: "messages",
            items: [
              { label: "Squad", text: "The gang's all here and slightly feral 👻👻👻 ヽ(°〇°)ﾉ" },
              { label: "Couple", text: "His and hers horror (or her and hers, we don't judge) 🧛♡🧟(◕‿◕)" },
              { label: "Parents + kids", text: "One family, one theme, one sugar rush incoming 🍬(◕‿◕)🎃" },
              { label: "Work friends", text: "We do spreadsheets by day, chaos by night 🎃(•‿•)✧" },
              { label: "Last-minute trio", text: "Three people, one sheet ghost, infinite dignity lost (；・∀・)" },
            ],
          },
        ],
      },
      {
        id: "pumpkin-fall",
        heading: "Pumpkin patch, carving, and cozy October posts",
        blocks: [
          {
            type: "p",
            text: "Not every Halloween post is the 31st. Patch days and carving nights fill your feed all month, and warm faces fit them better than jump-scare ones. Save the trembling faces from the [scared kaomoji](/scared-kaomoji/) page for horror-movie posts later.",
          },
          {
            type: "messages",
            items: [
              { label: "Patch day", text: "Picked the roundest pumpkin in the field. Judge me 🎃(*´▽`*)" },
              { label: "Carving fail", text: "Jack-o'-lantern looks like it saw things 👻(；´Д｀) Still cute though." },
              { label: "Carving win", text: "Knife skills: questionable. Results: iconic (๑•̀ㅂ•́)و✧🎃" },
              { label: "Candle glow", text: "Porch light off, pumpkin light on ✨(◕‿◕)✨" },
              { label: "Rainy October", text: "Mood: fog machine but make it weather ☁️(˘▾˘~)🎃" },
              { label: "Hot cocoa", text: "Spooky season is mostly just cold hands and warm drinks ☕(◕ᴗ◕)" },
            ],
          },
        ],
      },
      {
        id: "party-night",
        heading: "Party, club, and night-out captions",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Pre-game", text: "Costume check passed. Hydration check pending 🎃(｀・ω・´)🍸" },
              { label: "Dance floor", text: "Doing the monster mash unironically ヽ(・∀・)ﾉ👻" },
              { label: "2 a.m.", text: "Still standing. Mostly glitter and willpower ✨(っ˘ڡ˘ς)" },
              { label: "Photo dump", text: "October 31 in 12 blurry photos 📸(◕‿◕) swipe if you dare" },
              { label: "Ride home", text: "Our driver rated us 5 stars for commitment to the bit 🚗(°〇°)" },
            ],
          },
        ],
      },
      {
        id: "funny-self-aware",
        heading: "Funny, chaotic, and self-aware captions",
        blocks: [
          {
            type: "p",
            text: "Honest captions usually get more laughs than try-hard spooky poetry. If you ate the fun-size bars before trick-or-treaters showed up, say so. Your friends already suspect it.",
          },
          {
            type: "messages",
            items: [
              { label: "Candy confession", text: "Bought candy for the neighborhood. Ate the neighborhood's candy 🍫(っ˘ڡ˘ς)" },
              { label: "Scared adult", text: "Age 30, still won't watch the trailer alone (/ω＼)👻" },
              { label: "Decorations", text: "Spent too much on fake cobwebs. No regrets, only spiders 🕸️(•‿•)" },
              { label: "No costume", text: "My costume is \"person who said they'd have one by Friday\" (；・∀・)" },
              { label: "Pet stole show", text: "I wore a costume. The dog is the main post 🐕(◕ᴗ◕)👑" },
              { label: "Nov 1", text: "Halloween is over. I am 80% mini chocolate bars now 🍬(´-ω-`)" },
            ],
          },
        ],
      },
      {
        id: "status-bio",
        heading: "WhatsApp status, Discord bio, and display-name lines",
        blocks: [
          {
            type: "p",
            text: "Statuses and bios need to be short. One kaomoji plus five words often fits where a full caption will not. Sparkle faces from the [sparkle kaomoji](/sparkle-kaomoji/) page work well next to a single Halloween word.",
          },
          {
            type: "messages",
            items: [
              { label: "Status", text: "🎃 spooky season mode (◕‿◕)" },
              { label: "Status", text: "👻 boo 👻 (◕ᴗ◕)" },
              { label: "Bio", text: "Professional candy inspector 🍬(•‿•)" },
              { label: "Bio", text: "Here for tricks, staying for treats 🎃(っ´▽`)っ" },
              { label: "Discord", text: "🦇 AFK — haunting the snack table" },
              { label: "Name tag", text: "(ง •̀_•́)ง pumpkin warrior" },
            ],
          },
        ],
      },
      {
        id: "countdown",
        heading: "Countdown posts and October 31 captions",
        blocks: [
          {
            type: "p",
            text: "A one-week countdown story and a same-day post can reuse the same face so people recognize your theme. Post the big photo after sunset local time if you want it in friends' feeds when they are out, not at lunch when the costume is still in a bag.",
          },
          {
            type: "messages",
            items: [
              { label: "7 days", text: "One week until chaos 🎃(๑•̀ㅂ•́)و✧" },
              { label: "Tomorrow", text: "Costume tomorrow. Panic today (；・∀・)👻" },
              { label: "Oct 31 morning", text: "Happy Halloween! May your coffee be strong and your candy stash hidden ☕👻(◕‿◕)" },
              { label: "Oct 31 night", text: "Trick or treat, be safe, text me when you're home 🍬(◕‿◕)🎃" },
              { label: "Midnight", text: "November tried to start. We said not yet 🦇ヽ(°〇°)ﾉ" },
            ],
          },
        ],
      },
      {
        id: "comments",
        heading: "Comments on friends' Halloween posts",
        blocks: [
          {
            type: "p",
            text: "Comments can be shorter than captions. A single face plus one line often gets more replies than a paragraph. If you need words to send in DMs instead of public posts, the [Halloween messages guide](/blog/halloween-messages-with-kaomoji/) is built for that.",
          },
          {
            type: "messages",
            items: [
              { label: "Hype", text: "STOP this is so good (☆▽☆)👻" },
              { label: "Scared", text: "I would run from you in a parking lot, compliment only (((;°Д°)))" },
              { label: "Cute", text: "Protect this little monster at all costs 👻(*´▽`*)" },
              { label: "Group photo", text: "Everyone ate. No crumbs left 🎃＼(＾▽＾)／" },
              { label: "Kids", text: "Officially the cutest trick-or-treater on my feed 🍬(◕‿◕)" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "Platform tips (without fighting the algorithm)",
        blocks: [
          {
            type: "list",
            items: [
              "Instagram: put the kaomoji after the last sentence so it does not break hashtag blocks at the bottom.",
              "TikTok: keep the hook short enough to show before \"more\"; move the face to the caption body or on-screen text.",
              "WhatsApp status: one line only; skip hashtags entirely.",
              "Accessibility: add a short alt-text description of your costume in the post settings, not only in the caption.",
              "Mix emoji and kaomoji sparingly. One pumpkin or ghost emoji plus one face reads cleaner than a wall of symbols.",
              "Need more faces? Browse [Halloween kaomoji](/halloween-kaomoji/) for ghosts and pumpkins, or [emoji combos](/emoji-combos/) for ready-made Halloween emoji sets.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What are good Halloween captions for Instagram?",
        answer:
          "Short hooks work best: a joke about your costume, an honest line about effort or chaos, then a kaomoji sign-off like 🎃(◕‿◕) or 👻(☆▽☆). Save long stories for carousel captions.",
      },
      {
        question: "Can I use kaomoji in TikTok captions?",
        answer:
          "Yes. Kaomoji paste as plain text in TikTok captions. Keep the visible first line short; put the face after \"more\" so the hook still shows in preview.",
      },
      {
        question: "What is a short Halloween WhatsApp status?",
        answer:
          "Try 🎃 spooky season (◕‿◕) or 👻 boo (◕ᴗ◕). One face and a few words fit the status bar without getting cut off.",
      },
      {
        question: "How is this different from Halloween text messages?",
        answer:
          "Captions are for public posts and profiles. For party invites, family check-ins, and one-to-one texts, the Halloween messages post on this blog is the better fit.",
      },
    ],
  },
  {
    slug: "diwali-wishes-and-messages-with-kaomoji",
    title: "Diwali Wishes & Messages with Kaomoji: Warm, Funny & Family Texts",
    titleSegment: "Diwali Wishes and Messages with Kaomoji",
    description:
      "Happy Diwali wishes with kaomoji for family, friends, and coworkers, plus Hindi wishes, WhatsApp status lines, Instagram captions, and Dhanteras to Bhai Dooj texts.",
    intro:
      "Diwali is five days of cleaning, shopping, lamps, sweets, and a phone that does not stop buzzing. These wishes are grouped by moment, from the Dhanteras shopping trip to the Bhai Dooj message for your sibling, so you can find the right tone quickly. Every line copies in one tap and pastes cleanly into WhatsApp, Instagram, or a work chat.",
    face: "🪔(◕‿◕)✨",
    event: "Diwali · Nov 8",
    published: "2026-10-22",
    updated: "2026-10-22",
    related: ["/sparkle-kaomoji", "/heart-kaomoji", "/food-kaomoji", "/flower-kaomoji"],
    sections: [
      {
        id: "short-wishes",
        heading: "Short Happy Diwali wishes",
        blocks: [
          {
            type: "p",
            text: "On Diwali morning everyone sends the same forwarded image. A short line in your own words, with one small face, stands out more than another glittery card.",
          },
          {
            type: "messages",
            items: [
              { label: "Classic", text: "Happy Diwali! May your home be full of light and your plate full of sweets 🪔(◕‿◕)✨" },
              { label: "Short", text: "Happy Diwali 🪔 (◕ᴗ◕)" },
              { label: "Warm", text: "Wishing you and your family a bright, peaceful Diwali ✨(っ´▽`)っ🪔" },
              { label: "Deepavali", text: "Happy Deepavali! Light, laughter, and too much murukku this year (*´▽`*)🪔" },
              { label: "New beginnings", text: "Here's to new beginnings, fresh starts, and a year that treats you kindly 🪔(◕‿◕✿)" },
            ],
          },
        ],
      },
      {
        id: "diwali-kaomoji",
        heading: "Diwali kaomoji to copy",
        blocks: [
          {
            type: "p",
            text: "Want just the face? These pair a kaomoji with a diya, sparkle, or sweet so it reads as Diwali at a glance. Add one to the end of any wish, or send it on its own as a reply.",
          },
          {
            type: "faces",
            items: [
              { face: "🪔(◕‿◕)✨", name: "Diya smile", note: "The all-rounder. Works for family, friends, and work." },
              { face: "(人´∀`)🪔", name: "Folded hands", note: "人 looks like palms pressed together. Good for blessings and elders." },
              { face: "✨(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", name: "Throwing sparkles", note: "Excited, festive, a little extra. Best for friends." },
              { face: "(っ˘ڡ˘ς)🍬", name: "Sweets", note: "Licking lips over the mithai box." },
              { face: "🎆ヽ(・∀・)ﾉ🎇", name: "Fireworks", note: "Arms up under the sky on Diwali night." },
              { face: "🌸(◕ᴗ◕✿)🌸", name: "Rangoli", note: "Soft and pretty, for rangoli and flower photos." },
              { face: "♡(◕‿◕✿)🪔", name: "Family love", note: "Warm and gentle, for parents and relatives." },
              { face: "🪔🪔🪔(☆▽☆)", name: "Row of lamps", note: "Starry eyes for a balcony full of diyas." },
            ],
          },
        ],
      },
      {
        id: "hindi-hinglish",
        heading: "Diwali wishes in Hindi and Hinglish",
        blocks: [
          {
            type: "p",
            text: "A lot of Diwali messages are sent in Hindi written in English letters, the way people actually type on WhatsApp. Kaomoji sit just as well at the end of these.",
          },
          {
            type: "messages",
            items: [
              { label: "Formal", text: "Aapko aur aapke parivaar ko Diwali ki hardik shubhkamnayein 🪔(◕‿◕)🙏" },
              { label: "Short", text: "Shubh Deepavali! ✨(◕ᴗ◕)" },
              { label: "Warm", text: "Is Diwali aapke ghar mein khushiyan, sehat aur roshni aaye 🪔(っ´▽`)っ" },
              { label: "To friends", text: "Happy Diwali yaar! Mithai bacha ke rakhna mere liye (っ˘ڡ˘ς)" },
              { label: "To family", text: "Happy Diwali Mummy Papa, aap dono ki bahut yaad aa rahi hai ♡(◕‿◕✿)" },
            ],
          },
        ],
      },
      {
        id: "dhanteras",
        heading: "Dhanteras and the days of getting ready",
        blocks: [
          {
            type: "p",
            text: "The festival starts before the big night. Dhanteras is the day people buy something new for the home, often a steel pot, a silver coin, or gold if the budget allows, and the days before are mostly cleaning and decorating.",
          },
          {
            type: "messages",
            items: [
              { label: "Dhanteras", text: "Happy Dhanteras! May whatever you bring home today bring luck with it ✨(◕‿◕)" },
              { label: "Shopping", text: "Went out for one steel pot. Came back with three bags and no regrets (๑•̀ㅂ•́)و✧" },
              { label: "Cleaning", text: "Diwali cleaning update: found a sock from 2019 and my old school diary (；・∀・)" },
              { label: "Lights up", text: "Fairy lights are up, only took four arguments and one ladder ✨ヽ(・∀・)ﾉ" },
              { label: "Mom's list", text: "Mom has assigned the whole family cleaning duties. Send help (´-ω-`)" },
            ],
          },
        ],
      },
      {
        id: "lakshmi-puja",
        heading: "Lakshmi Puja night wishes",
        blocks: [
          {
            type: "p",
            text: "The main evening is a prayer for prosperity and well-being, so keep these messages sincere. Gentle, smiling faces fit better here than the loud ones you might send a friend.",
          },
          {
            type: "messages",
            items: [
              { label: "Blessings", text: "May Goddess Lakshmi bless your home with health, peace, and plenty this Diwali 🪔(◕‿◕)🙏" },
              { label: "Prosperity", text: "Wishing you a Diwali that brings good health first and good fortune right behind it ✨(◕ᴗ◕)" },
              { label: "Simple", text: "Puja done, diyas lit, family together. Happy Diwali from all of us 🪔(*^▽^*)" },
              { label: "For elders", text: "Happy Diwali, Dadi and Dada. Thank you for your blessings, we miss you tonight 🙏(◕‿◕✿)" },
            ],
          },
        ],
      },
      {
        id: "diyas-rangoli-sweets",
        heading: "Diyas, rangoli, and sweets",
        blocks: [
          {
            type: "p",
            text: "These work as photo captions or as a message sent with a picture. Food faces from the [food kaomoji](/food-kaomoji/) page are perfect for the mithai box that somehow empties itself by evening.",
          },
          {
            type: "messages",
            items: [
              { label: "Rangoli", text: "Two hours on the floor for this rangoli. My knees are done, my heart is happy 🌸(◕‿◕)🌸" },
              { label: "Diyas", text: "Every diya on the balcony is lit and nobody burned a finger. Diwali miracle 🪔🪔🪔(☆▽☆)" },
              { label: "Sweets", text: "Ate one kaju katli. Then another. Then stopped counting (っ˘ڡ˘ς)" },
              { label: "Sweet box", text: "Sending you a box of ladoos today. Please share. Or don't, I won't know 🍬(¬‿¬)" },
              { label: "Lights", text: "Our street looks like a galaxy tonight ✨(◕ᴗ◕)✨" },
            ],
          },
        ],
      },
      {
        id: "status-captions",
        heading: "WhatsApp status and Instagram captions",
        blocks: [
          {
            type: "p",
            text: "Statuses get a quick glance, so keep them to one line. On Instagram, put the face at the end of the caption so it does not crowd your photo's first line.",
          },
          {
            type: "messages",
            items: [
              { label: "Status", text: "🪔 Happy Diwali from our home to yours (◕‿◕)" },
              { label: "Status", text: "Lights on, phone off, family time ✨(˘▾˘~)" },
              { label: "Outfit post", text: "Festive fit, borrowed jhumkas, zero regrets ✨(◕ᴗ◕✿)" },
              { label: "Family photo", text: "Took 20 tries to get everyone in the frame. Worth it 🪔(*´▽`*)" },
              { label: "Night shot", text: "Same street, a thousand little lights 🪔✨(◕‿◕)" },
            ],
          },
        ],
      },
      {
        id: "family",
        heading: "For family, near and far",
        blocks: [
          {
            type: "p",
            text: "For relatives abroad, Diwali can be the hardest day of the year to be away. Mention something specific, like the food or the sound of the house, so the message feels like home and not like a template.",
          },
          {
            type: "messages",
            items: [
              { label: "Parents", text: "Happy Diwali, Mummy and Papa. Thank you for every Diwali you made special for us ♡(◕‿◕✿)🪔" },
              { label: "Living abroad", text: "Lit one diya in my tiny apartment and called it a celebration. Missing your cooking so much 🪔(´；ω；`)♡" },
              { label: "Video call", text: "Video call at 8? I want to see the whole house lit up 🪔(っ´▽`)っ" },
              { label: "Cousins", text: "Cousins group chat, who is coming over for Diwali night? Bring sweets, not excuses ヽ(・∀・)ﾉ" },
              { label: "First Diwali", text: "Baby's first Diwali! Tiny kurta, big eyes, zero sleep for the parents 🪔(*´▽`*)" },
            ],
          },
        ],
      },
      {
        id: "friends",
        heading: "Funny Diwali messages for friends",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Card party", text: "Diwali card night at mine. Bring snacks and be ready to lose your pocket money (｀・ω・´)🃏" },
              { label: "Food coma", text: "Diwali status: emotionally full, physically fuller (´-ω-`)🍬" },
              { label: "Relatives", text: "Survived the \"when are you getting married\" round. Rewarding myself with gulab jamun (；・∀・)" },
              { label: "New clothes", text: "New kurta on, photo-ready, will still spill chai on it by 7 p.m. ✨(◕‿◕)" },
              { label: "Crackers", text: "Our pet has filed a formal complaint about the noise outside (/ω＼)🐕" },
            ],
          },
        ],
      },
      {
        id: "work",
        heading: "For coworkers, clients, and friends who don't celebrate",
        blocks: [
          {
            type: "p",
            text: "In a work chat, keep the wish short and leave out religious lines unless you know the person well. A diya, a sparkle, and one friendly face is plenty. Friends who don't celebrate are usually happy to get a wish too; a line about sweets or lights keeps it easy.",
          },
          {
            type: "messages",
            items: [
              { label: "Team chat", text: "Happy Diwali, everyone! Wishing you a restful break and a bright year ahead 🪔(•‿•)" },
              { label: "Client", text: "Wishing you and your team a happy and prosperous Diwali. Thank you for a great year together ✨(◕‿◕)" },
              { label: "Office sweets", text: "Diwali sweets are on the kitchen counter. First come, first served 🍬(｡•̀ᴗ-)✧" },
              { label: "Non-celebrating friend", text: "It's Diwali, so I'm bringing you sweets whether you like it or not ＼(＾▽＾)／" },
            ],
          },
        ],
      },
      {
        id: "bhai-dooj",
        heading: "Govardhan Puja and Bhai Dooj",
        blocks: [
          {
            type: "p",
            text: "The last two days are easy to forget once the lights come down. Bhai Dooj is about siblings, so a little teasing is expected.",
          },
          {
            type: "messages",
            items: [
              { label: "Govardhan Puja", text: "Happy Govardhan Puja! Wishing your family health and a full kitchen 🙏(◕‿◕)" },
              { label: "To a brother", text: "Happy Bhai Dooj! You still owe me a gift from last year, just saying (¬‿¬)♡" },
              { label: "To a sister", text: "Happy Bhai Dooj, didi. Thank you for putting up with me for this many years ♡(◕ᴗ◕✿)" },
              { label: "Far away", text: "Can't put tilak on your forehead this year, so here's a digital one 🪔(っ´▽`)っ Happy Bhai Dooj!" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "A few things to keep in mind",
        blocks: [
          {
            type: "list",
            items: [
              "Diwali is celebrated by Hindus, Sikhs, and Jains, each with their own meaning. Sikhs mark Bandi Chhor Divas on the same day, so a simple \"Happy Diwali\" or \"Happy Bandi Chhor Divas\" works for Sikh friends.",
              "In South India and Singapore, many people say Deepavali, and the main day can fall a day earlier than in the north.",
              "Send family wishes in the morning or before the evening puja. Most people are busy and offline during the puja itself.",
              "One diya 🪔 or sparkle ✨ next to a kaomoji reads cleaner than a long row of emoji, especially on WhatsApp status.",
              "Want more faces? The [sparkle kaomoji](/sparkle-kaomoji/) page has light and glitter faces, and the [heart kaomoji](/heart-kaomoji/) page has warm ones for family.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is Diwali in 2026?",
        answer:
          "The main day of Diwali, with Lakshmi Puja, is Sunday, November 8, 2026. The festival runs about five days around it, from Dhanteras to Bhai Dooj, and exact dates can shift by a day depending on region and calendar.",
      },
      {
        question: "What is a good Diwali kaomoji?",
        answer:
          "🪔(◕‿◕)✨ is a smiling face with a diya and a sparkle, and it suits almost anyone. For sweets, try (っ˘ڡ˘ς), and for family, ♡(◕‿◕✿).",
      },
      {
        question: "How do you say Happy Diwali in Hindi?",
        answer:
          "\"Diwali ki hardik shubhkamnayein\" is the formal way, and \"Shubh Deepavali\" is short and works for anyone. With friends, plain \"Happy Diwali\" is just as common.",
      },
      {
        question: "Is it Diwali or Deepavali?",
        answer:
          "Both are correct. Deepavali means \"row of lamps\" and is common in South India, Sri Lanka, Malaysia, and Singapore. Diwali is the shorter form used across North India and most of the diaspora.",
      },
      {
        question: "How do I wish a coworker Happy Diwali?",
        answer:
          "Keep it short and general: \"Happy Diwali! Wishing you a bright and restful festival\" with a small face like 🪔(•‿•). Save religious blessings for people you know well.",
      },
    ],
  },
  {
    slug: "thanksgiving-messages-with-kaomoji",
    title: "Thanksgiving Messages with Kaomoji: Grateful, Funny & Family Texts",
    titleSegment: "Thanksgiving Messages with Kaomoji to Copy",
    description:
      "Thanksgiving messages with kaomoji for family, friends, Friendsgiving, your host, coworkers, and anyone you are grateful for, plus funny food-coma texts.",
    intro:
      "Thanksgiving is the one holiday built around saying thank you, and a warm kaomoji makes a short text feel heartfelt. These messages cover the whole day, from inviting people and thanking the host to the inevitable food coma, and every one can be copied in a tap.",
    face: "🦃(◕ᴗ◕)🥧",
    event: "Thanksgiving · Nov 26",
    published: "2026-10-21",
    updated: "2026-10-22",
    related: ["/thanksgiving-kaomoji", "/thank-you-kaomoji", "/food-kaomoji", "/bowing-kaomoji"],
    sections: [
      {
        id: "grateful",
        heading: "Grateful messages for people you love",
        blocks: [
          {
            type: "p",
            text: "The best Thanksgiving texts name one specific thing you are thankful for. 'Thankful for you' is nice; 'thankful you drove me to every exam this year' is unforgettable.",
          },
          {
            type: "messages",
            items: [
              { label: "Simple", text: "Happy Thanksgiving! I'm so thankful to have you in my life (◍•ᴗ•◍)❤" },
              { label: "Specific", text: "Thankful for you and every late-night call this year. Happy Thanksgiving 🦃(っ´▽`)っ" },
              { label: "Best friend", text: "Grateful for snacks, naps, and a best friend who puts up with me. Happy Thanksgiving! (◕‿◕✿)🍂" },
              { label: "Partner", text: "Of everything on the table today, you're still my favorite (˘ω˘)♡🥧" },
            ],
          },
        ],
      },
      {
        id: "family",
        heading: "For family",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Parents", text: "Happy Thanksgiving, Mom and Dad! Thank you for everything, always m(_ _)m🍂" },
              { label: "Far away", text: "Missing your cooking and your company today. Happy Thanksgiving from far away (っ´▽`)っ🦃" },
              { label: "Grandparents", text: "Happy Thanksgiving! Save me a slice of your famous pie 🥧(๑´ڡ`๑)" },
              { label: "Family chat", text: "Who's bringing what? I call dibs on the mashed potatoes (｀・ω・´)ゞ🍽️" },
            ],
          },
        ],
      },
      {
        id: "friendsgiving",
        heading: "Friendsgiving invites and plans",
        blocks: [
          {
            type: "p",
            text: "Friendsgiving is a Thanksgiving-style dinner with friends, usually potluck. Put the date and what to bring in the invite so the menu sorts itself out.",
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Friendsgiving at mine on Saturday, 6 p.m.! Potluck style, bring a dish and your appetite 🦃ヽ(・∀・)ﾉ🥧" },
              { label: "Menu sign-up", text: "Reply with what you're bringing so we don't end up with five pies. (Five pies is fine, actually) (｡•̀ᴗ-)✧" },
              { label: "Day of", text: "Oven's on, table's set, see you all soon! (◕ᴗ◕✿)🍂" },
            ],
          },
        ],
      },
      {
        id: "host",
        heading: "Thank the host",
        blocks: [
          {
            type: "p",
            text: "Send a thank-you the same evening or the next morning. A [bowing face](/bowing-kaomoji/) like m(_ _)m adds a sincere, polite touch.",
          },
          {
            type: "messages",
            items: [
              { label: "Same night", text: "Thank you for having us! Dinner was incredible and I'm still full m(_ _)m🦃" },
              { label: "Next morning", text: "Still dreaming about that stuffing. Thank you for a wonderful Thanksgiving (◍•ᴗ•◍)✧" },
              { label: "Leftovers", text: "Thank you for the leftovers! Lunch today is the best lunch of the year (っ˘ڡ˘ς)" },
            ],
          },
        ],
      },
      {
        id: "work",
        heading: "For coworkers",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Team chat", text: "Happy Thanksgiving, team! Grateful to work with all of you. Enjoy the long weekend (•‿•)🍂" },
              { label: "Out of office", text: "I'm out for Thanksgiving and back on Monday. Have a great holiday! 🦃(・ω・)ノ" },
              { label: "Thanking a manager", text: "Thanks for having our backs this year. Have a relaxing Thanksgiving with your family (◕‿◕)🍂" },
            ],
          },
        ],
      },
      {
        id: "captions",
        heading: "Captions for the table photo",
        blocks: [
          {
            type: "p",
            text: "Everyone takes the same photo of the full table before anyone is allowed to eat. A short caption with one face is all it needs.",
          },
          {
            type: "messages",
            items: [
              { label: "Full table", text: "Took 6 hours to cook and 12 minutes to eat 🦃(っ˘ڡ˘ς)" },
              { label: "Grateful", text: "Full table, fuller heart 🍂(◕‿◕✿)" },
              { label: "First host", text: "First time hosting Thanksgiving. Nobody got food poisoning. I'm calling it a win (๑•̀ㅂ•́)و✧" },
              { label: "Pie shot", text: "The pie is the main character today 🥧(☆▽☆)" },
            ],
          },
        ],
      },
      {
        id: "missing-someone",
        heading: "When someone is missing from the table",
        blocks: [
          {
            type: "p",
            text: "For a lot of people, Thanksgiving is also the day they notice who is not there. If a friend lost someone this year or is spending the day alone, a quiet message that does not ask anything of them is often the kindest one. Keep the face gentle, or leave it out.",
          },
          {
            type: "messages",
            items: [
              { label: "Thinking of you", text: "Thinking of you today. No need to reply, just wanted you to know (っ´▽`)っ" },
              { label: "Alone this year", text: "If you end up on your own today, my door's open and there's way too much food 🍂(◕‿◕)" },
              { label: "Remembering", text: "I know today's a hard one without your mom. Sending you a big hug ♡" },
            ],
          },
        ],
      },
      {
        id: "black-friday",
        heading: "Black Friday and the day after",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Shopping trip", text: "Black Friday plan: leave at 6 a.m., buy one thing I actually need, come home with nine ε=ε=┌(;°□°)┘" },
              { label: "Staying home", text: "Doing my Black Friday shopping from bed, in leftover-stuffing pajamas (´-ω-`)" },
              { label: "Leftovers", text: "Day-after sandwich with turkey, stuffing, and cranberry is the real holiday 🥪(๑´ڡ`๑)" },
            ],
          },
        ],
      },
      {
        id: "funny",
        heading: "Funny food-coma texts",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Food coma", text: "Status: horizontal. Ate too much. Regret nothing (´-ω-`)🥧" },
              { label: "Pie priorities", text: "Thanksgiving plan: skip the turkey, go straight to pie 🥧(๑•̀ㅂ•́)و✧" },
              { label: "Stretchy pants", text: "Wearing my stretchy pants today. I came prepared (｀・ω・´)🍗" },
            ],
          },
          {
            type: "p",
            text: "Need more faces? The [Thanksgiving kaomoji](/thanksgiving-kaomoji/) page has turkeys, pies, and autumn-leaf faces, and the [thank you kaomoji](/thank-you-kaomoji/) page has grateful faces for any time of year.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is Thanksgiving in 2026?",
        answer:
          "US Thanksgiving is the fourth Thursday of November, which is November 26 in 2026. Canadian Thanksgiving is the second Monday of October.",
      },
      {
        question: "What is a good Thanksgiving kaomoji?",
        answer: "🦃(◕ᴗ◕)🥧 combines a turkey and a pie, and m(_ _)m is a grateful bow for thanking the host.",
      },
      {
        question: "What is Friendsgiving?",
        answer:
          "Friendsgiving is a Thanksgiving-style meal shared with friends, usually potluck, held on or around Thanksgiving.",
      },
    ],
  },
  {
    slug: "christmas-messages-with-kaomoji",
    title: "Christmas Messages with Kaomoji for Friends, Family & Coworkers",
    titleSegment: "Christmas Messages with Kaomoji to Copy",
    description:
      "Ready-to-send Christmas messages with kaomoji for friends, family, partners, coworkers, and Secret Santa, plus late wishes and holiday card ideas.",
    intro:
      "Christmas texts go out in a rush, and a festive kaomoji makes yours stand out without writing a paragraph. These messages are grouped by who you are sending to, each with a face that fits, and every one can be copied in a tap.",
    face: "🎄(◕ᴗ◕✿)🎅",
    event: "Christmas · Dec 25",
    published: "2026-10-21",
    updated: "2026-10-22",
    related: ["/christmas-kaomoji", "/winter-kaomoji", "/emoji-combos", "/happy-kaomoji"],
    sections: [
      {
        id: "friends",
        heading: "For friends",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Classic", text: "Merry Christmas! 🎄(◕ᴗ◕✿) Hope your day is full of food, naps, and good company." },
              { label: "Funny", text: "Santa called. He says you're on the nice list. Barely ( ¬‿¬)🎁" },
              { label: "Cozy", text: "Wishing you a warm, cozy Christmas ☕(˘▾˘~) Let's catch up before New Year!" },
              { label: "Group chat", text: "MERRY CHRISTMAS EVERYONE ＼(＾▽＾)／🎅 Post your best present below!" },
            ],
          },
        ],
      },
      {
        id: "family",
        heading: "For family",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Parents", text: "Merry Christmas, Mom and Dad! Thank you for every Christmas you made special (◕‿◕)🎄" },
              { label: "Siblings", text: "Merry Christmas! Still think my present was better than yours 🎁(｀・ω・´)" },
              { label: "Far away", text: "Wish I was home with you all today. Merry Christmas from far away (っ´▽`)っ🎄" },
              { label: "Kids", text: "Ho ho ho! Santa's reindeer are on their way Ψ(・ᴥ・)Ψ🛷" },
            ],
          },
        ],
      },
      {
        id: "partner",
        heading: "For your partner",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Sweet", text: "All I want for Christmas is you (っ˘з(˘⌣˘ )🎄" },
              { label: "Under the mistletoe", text: "Meet me under the mistletoe? (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)💋" },
              { label: "Grateful", text: "My favorite gift this year is you. Merry Christmas, love ( ˘͈ ᵕ ˘͈♡)" },
            ],
          },
        ],
      },
      {
        id: "work",
        heading: "For coworkers and clients",
        blocks: [
          {
            type: "p",
            text: "Keep work messages warm but simple, and use 'Happy Holidays' when you are not sure everyone celebrates Christmas.",
          },
          {
            type: "messages",
            items: [
              { label: "Team chat", text: "Happy holidays, everyone! Thanks for a great year. Enjoy the break (•‿•)🎄" },
              { label: "Out of office", text: "I'm off for the holidays and back on January 2. Wishing you a restful break ⛄(◕‿◕)" },
              { label: "Client", text: "Wishing you and your team a wonderful holiday season. Thank you for working with us this year m(_ _)m" },
            ],
          },
        ],
      },
      {
        id: "secret-santa",
        heading: "For Secret Santa",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Gift note", text: "From your Secret Santa: hope this makes you smile 🎁(｡•̀ᴗ-)✧" },
              { label: "Thank you", text: "Thank you, Secret Santa! I love it ＼(≧▽≦)／🎁" },
              { label: "Group reminder", text: "Reminder: Secret Santa gifts by Friday! Budget is $25 🎅(・ω・)ノ" },
            ],
          },
        ],
      },
      {
        id: "christmas-eve",
        heading: "Christmas Eve messages",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Night before", text: "Merry Christmas Eve! Cookies out, stockings up, kids finally asleep (´-ω-`)🎄" },
              { label: "Wrapping", text: "Wrapping presents at 11 p.m. like every year. Send tape (；・∀・)🎁" },
              { label: "Church or service", text: "Heading to the candlelight service tonight. Wishing you a peaceful Christmas Eve 🕯️(◕‿◕)" },
              { label: "Movie night", text: "Christmas Eve plan: pajamas, hot chocolate, and the same movie we watch every year ☕(˘▾˘~)" },
            ],
          },
        ],
      },
      {
        id: "card-notes",
        heading: "Short notes for Christmas cards",
        blocks: [
          {
            type: "p",
            text: "Handwritten cards only have room for a line or two. Simple faces like (◕‿◕) are easy to draw by hand; save the complicated Unicode ones for texts and digital cards.",
          },
          {
            type: "messages",
            items: [
              { label: "Neighbors", text: "Merry Christmas from number 12! Thanks for always taking in our packages (◕‿◕)" },
              { label: "Teacher", text: "Thank you for a wonderful year of learning. Have a restful Christmas break! (^▽^)" },
              { label: "Old friend", text: "It's been too long. Let's actually meet up in the new year this time ♡(◕‿◕)" },
              { label: "Family card", text: "Love and warm wishes from all four of us (and the dog) 🎄(◕ᴗ◕✿)" },
            ],
          },
        ],
      },
      {
        id: "captions",
        heading: "Captions for tree, sweater, and family photos",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Tree", text: "The tree is up and only slightly crooked 🎄(◕‿◕)" },
              { label: "Ugly sweater", text: "Wore it ironically. Now I love it unironically (☆▽☆)🎄" },
              { label: "Family photo", text: "Took 47 tries to get everyone looking at the camera 📸(；・∀・)" },
              { label: "Snow", text: "White Christmas, finally ⛄(*´▽`*)❄" },
            ],
          },
        ],
      },
      {
        id: "hard-holidays",
        heading: "For friends who find Christmas hard",
        blocks: [
          {
            type: "p",
            text: "Not everyone has a merry December. For someone who is grieving, alone, or just tired, a low-pressure check-in usually lands better than a cheerful greeting.",
          },
          {
            type: "messages",
            items: [
              { label: "Check-in", text: "No pressure to be festive. Just thinking of you this week (っ´▽`)っ" },
              { label: "Open invite", text: "If you want company on the 25th, there's a seat and a plate here for you ♡" },
              { label: "After the day", text: "Glad the holidays are almost done? Coffee next week, my treat ☕(◕‿◕)" },
            ],
          },
        ],
      },
      {
        id: "late",
        heading: "Late and Boxing Day wishes",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Belated", text: "Sorry I'm late! Hope you had a merry Christmas (^_^;)🎄" },
              { label: "Food coma", text: "Still full from Christmas dinner (´-ω-`) Hope yours was just as good!" },
            ],
          },
          {
            type: "p",
            text: "Need more faces? The [Christmas kaomoji](/christmas-kaomoji/) page has 190+ Santa, snowman, reindeer, and gift faces, and the [emoji combos](/emoji-combos/) page has holiday emoji sets for cards and captions.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good Christmas kaomoji for a text?",
        answer: "🎄(◕ᴗ◕✿) is cheerful and short, and Ψ(・ᴥ・)Ψ is a reindeer kids love.",
      },
      {
        question: "Should I say Merry Christmas or Happy Holidays at work?",
        answer:
          "If you are not sure everyone celebrates Christmas, Happy Holidays is the inclusive choice. In teams that celebrate, Merry Christmas is fine.",
      },
      {
        question: "Will Christmas kaomoji show on every phone?",
        answer:
          "Yes on modern phones. If a rare symbol shows as a box, choose a simpler face built from common characters.",
      },
    ],
  },
  {
    slug: "new-years-eve-texts-with-kaomoji",
    title: "New Year's Eve Texts with Kaomoji: Countdown, Midnight & Resolution Messages",
    titleSegment: "New Year's Eve Texts with Kaomoji",
    description:
      "Ready-to-send New Year's Eve and New Year's Day texts with kaomoji: countdown messages, midnight wishes, family greetings, work messages, and resolutions.",
    intro:
      "Midnight on December 31 is the busiest moment of the year for group chats. These messages are ready to copy, from the countdown to the first morning of the year, each with a kaomoji that fits the moment.",
    face: "🎆＼(＾▽＾)／🎆",
    event: "New Year · Dec 31 – Jan 1",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/new-year-kaomoji", "/excited-kaomoji", "/dance-kaomoji", "/sparkle-kaomoji"],
    sections: [
      {
        id: "countdown",
        heading: "Countdown messages",
        blocks: [
          {
            type: "p",
            text: "Messages sent in the last minutes before midnight can arrive late because networks are busy. Schedule them, or send them a few minutes early.",
          },
          {
            type: "messages",
            items: [
              { label: "Ten minutes to go", text: "10 minutes left of this year! Grab a drink, it's almost time 🥂(◕‿◕)🥂" },
              { label: "Countdown", text: "3…2…1… ٩(ˊᗜˋ*)و 🎉 HAPPY NEW YEAR!" },
              { label: "Group chat", text: "Whoever sends the first Happy New Year in here wins 2 seconds of fame (ノ°▽°)ノ🎆" },
            ],
          },
        ],
      },
      {
        id: "midnight",
        heading: "Midnight wishes for friends",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Classic", text: "Happy New Year! 🎆＼(＾▽＾)／🎆 Here's to more laughs together." },
              { label: "Grateful", text: "Thank you for being part of my year. Let's make the next one even better ✨(ノ^∇^)ノ✨" },
              { label: "Funny", text: "New year, same me, but with better snacks (っ˘ω˘ς)🍾" },
              { label: "Slept through it", text: "Happy New Year! I may have been asleep at midnight but my wishes are wide awake (－_－) zzZ" },
            ],
          },
        ],
      },
      {
        id: "family",
        heading: "Messages for family",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Parents", text: "Happy New Year, Mom and Dad! Wishing you health and happiness all year (◕‿◕)🎇" },
              { label: "Far away", text: "Wish I was celebrating with you all tonight. Happy New Year from afar (っ´▽`)っ🎆" },
              { label: "Grandparents", text: "Happy New Year! Hope this year brings you lots of good days and visits from us ⭐(☆▽☆)⭐" },
            ],
          },
        ],
      },
      {
        id: "work",
        heading: "Messages for coworkers",
        blocks: [
          {
            type: "p",
            text: "For work chats, keep faces small and friendly. Save champagne and party faces for teams that already use them.",
          },
          {
            type: "messages",
            items: [
              { label: "Team chat", text: "Happy New Year, team! Thanks for a great year of work together (•‿•)" },
              { label: "First day back", text: "Welcome back, everyone! Hope you had a restful break (｡･ω･｡)ﾉ" },
              { label: "To a manager", text: "Wishing you a happy and successful New Year. Thank you for your support this year m(_ _)m" },
            ],
          },
        ],
      },
      {
        id: "japanese",
        heading: "Japanese New Year greetings",
        blocks: [
          {
            type: "p",
            text: "In Japan, New Year (お正月) is the biggest holiday, and friends send あけおめ (short for あけましておめでとう, Happy New Year) right after midnight, often with 今年もよろしく, 'please be good to me this year too'. The [New Year kaomoji](/new-year-kaomoji/) page has many more Japanese greetings.",
          },
          {
            type: "messages",
            items: [
              { label: "Casual", text: "あけおめ! 今年もよろしく 🎍(｡･ω･｡)🎍" },
              { label: "Polite", text: "あけましておめでとうございます。今年もよろしくお願いします m(_ _)m" },
            ],
          },
        ],
      },
      {
        id: "resolutions",
        heading: "Resolution messages",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Determined", text: "New Year's resolution: drink more water and reply to texts faster (｡•̀ᴗ•́｡)و ✧" },
              { label: "Honest", text: "My resolution is to keep last year's resolutions 📝(￣^￣)ゞ" },
              { label: "Together", text: "Gym buddy for the new year? Accountability starts tomorrow (ง •̀_•́)ง" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good Happy New Year kaomoji?",
        answer: "🎆＼(＾▽＾)／🎆 is a cheerful classic, and 🥂(◕‿◕)🥂 works for a toast.",
      },
      {
        question: "Why do my midnight texts arrive late?",
        answer:
          "Mobile networks are busy at midnight, so messages can be delayed. Schedule the message or send it a few minutes before midnight.",
      },
      {
        question: "What does あけおめ mean?",
        answer: "It is the casual short form of あけましておめでとう, Japanese for Happy New Year.",
      },
    ],
  },
  {
    slug: "winter-messages-with-kaomoji",
    title: "Winter Messages with Kaomoji: Snow Day, Stay Warm & Cozy Texts",
    titleSegment: "Winter Messages with Kaomoji to Copy",
    description:
      "Cozy winter messages with kaomoji: snow-day texts, stay-warm check-ins, cozy night invites, winter break plans, and funny cold-weather complaints.",
    intro:
      "Winter lasts long after the holidays end, and cold days are full of small moments worth a message: the first snow, a canceled school day, a friend stuck in the cold. These texts cover the whole season, from December to March, each with a snowy or cozy kaomoji.",
    face: "❄(˘︶˘)☕",
    event: "Winter · Dec – Mar",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/winter-kaomoji", "/sleepy-kaomoji", "/sick-kaomoji", "/hug-kaomoji"],
    sections: [
      {
        id: "first-snow",
        heading: "First snow and snow days",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "First snow", text: "IT'S SNOWING! Look outside right now ❅ ❆ (ﾉ◕ヮ◕)ﾉ ❆ ❅" },
              { label: "Snow day", text: "School's canceled! Snowman building at 10, hot chocolate at 11 ☃️(＾▽＾)☃️" },
              { label: "Snowball fight", text: "Snowball fight in the park? Losers buy the cocoa (ノ°▽°)ノ ⚪))" },
              { label: "Photo", text: "Sending you a photo of the snow because it's too pretty not to share (*˘︶˘*).｡.:*❄" },
            ],
          },
        ],
      },
      {
        id: "stay-warm",
        heading: "Stay warm check-ins",
        blocks: [
          {
            type: "p",
            text: "A quick check-in during a cold snap means a lot, especially to older relatives or friends who live alone. Keep it warm and practical.",
          },
          {
            type: "messages",
            items: [
              { label: "Check-in", text: "It's freezing out there! Stay warm and text me if you need anything 🧣(◕ᴗ◕✿)" },
              { label: "Grandparents", text: "Thinking of you on this cold day. Are you warm enough? Call me anytime ☕(っ´ω`)っ" },
              { label: "Drive safe", text: "Roads are icy tonight, drive slowly and let me know when you're home safe (｡•́︿•̀｡)❄" },
              { label: "Under the weather", text: "Heard you caught a cold. Soup, blankets, and rest, doctor's orders 🍲(っ´ω`)っ" },
            ],
          },
        ],
      },
      {
        id: "cozy",
        heading: "Cozy night invites",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Movie night", text: "Blankets, hot chocolate, and a movie at mine tonight? (✿˘︶˘)♡☕" },
              { label: "Game night", text: "Too cold to go out, so board games at mine? I'll make soup 🍲(◕‿◕)" },
              { label: "Partner", text: "Perfect weather for staying in and cuddling under a blanket (っ˘ω˘ς)💤" },
            ],
          },
        ],
      },
      {
        id: "winter-break",
        heading: "Winter break and ski trips",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Break plans", text: "Winter break plan: sleep in, eat snacks, repeat (－_－) zzZ" },
              { label: "Ski trip", text: "Ski trip countdown: 3 days! Who's ready to fall over gracefully? ⛷️ ┗(＾0＾)┓" },
              { label: "Skating", text: "Ice skating Saturday? I promise to only hold onto the wall a little ⛸️ ヽ(・∀・)ﾉ" },
            ],
          },
        ],
      },
      {
        id: "funny",
        heading: "Funny cold-weather texts",
        blocks: [
          {
            type: "p",
            text: "Trembling faces from the [winter kaomoji](/winter-kaomoji/) page are perfect for exaggerating how cold it is. Stacked brackets like ((( ))) show the shivering.",
          },
          {
            type: "messages",
            items: [
              { label: "Freezing", text: "It's so cold my coffee froze on the way to the car (((;ꏿ_ꏿ;)))" },
              { label: "Bed", text: "Not leaving my bed until spring. Send snacks (っ- ‸ – ς)🛌" },
              { label: "Hibernating", text: "Officially in hibernation mode. Wake me up in March ʕ•ᴥ•ʔ💤" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a cute winter kaomoji?",
        answer: "❄(˘︶˘)☕ is a cozy face with a warm drink, and ☃️(＾▽＾)☃️ is a happy snowman.",
      },
      {
        question: "What should I text someone on a cold day?",
        answer:
          "A short check-in works best: tell them to stay warm, offer help if they need anything, and add a cozy face like 🧣(◕ᴗ◕✿).",
      },
      {
        question: "How are winter messages different from Christmas messages?",
        answer:
          "Christmas messages are for December 25. Winter messages fit the whole cold season, from the first snow in December to the last cold snap in March.",
      },
    ],
  },
  {
    slug: "valentines-day-messages-with-kaomoji",
    title: "Valentine's Day Messages with Kaomoji for Partners, Crushes & Friends",
    titleSegment: "Valentine's Day Messages with Kaomoji",
    description:
      "Sweet, funny, and shy Valentine's Day messages with kaomoji for your partner, a crush, long distance, and Galentine's friends. Tap Copy and send.",
    intro:
      "A kaomoji turns a short Valentine's text into something that feels hand-made. These messages are grouped by who you are writing to, from a long-term partner to a crush you have not told yet, with tips on timing and tone.",
    face: "(◍•ᴗ•◍)💘",
    event: "Valentine's Day · Feb 14",
    published: "2026-10-21",
    updated: "2026-10-21",
    related: ["/valentine-kaomoji", "/love-kaomoji", "/heart-kaomoji", "/kiss-kaomoji"],
    sections: [
      {
        id: "partner",
        heading: "For your partner",
        blocks: [
          {
            type: "p",
            text: "With a partner you can be soft, silly, or both. Send one first thing in the morning so it is the first message they see on February 14.",
          },
          {
            type: "messages",
            items: [
              { label: "Morning", text: "Happy Valentine's Day to my favorite person (◍•ᴗ•◍)❤ Still choosing you, every single day." },
              { label: "Sweet and short", text: "Be my valentine? Again? Forever? (っ˘з(˘⌣˘ )" },
              { label: "Funny", text: "I love you more than chocolate. And you know how much I love chocolate 🍫(*´ω`*)🍫" },
              { label: "Dinner plans", text: "Table booked, outfit chosen, heart already yours (つ≧▽≦)つ💝 See you at 8!" },
              { label: "After a long year", text: "We got through so much this year and I'd do it all again with you ( ˘͈ ᵕ ˘͈♡)" },
              { label: "Goodnight", text: "Best Valentine's Day ever. Sleep well, my love (˘ω˘)♡" },
            ],
          },
        ],
      },
      {
        id: "crush",
        heading: "For a crush",
        blocks: [
          {
            type: "p",
            text: "Keep it light. A playful face gives the other person an easy way to reply in kind without pressure. Shy faces from the [shy kaomoji](/shy-kaomoji/) page work well here.",
          },
          {
            type: "messages",
            items: [
              { label: "Low pressure", text: "Happy Valentine's Day! Hope someone makes you smile today. (Hint: I'm trying) (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)" },
              { label: "Playful", text: "Roses are red, violets are blue, I made you a kaomoji 🌹(◕‿◕✿)" },
              { label: "Bold", text: "Okay, I'll just say it: want to grab coffee this week? (*/ω＼*)" },
              { label: "With a treat", text: "Left something sweet on your desk 🍫 No reason. Okay, maybe one reason (｡•̀ᴗ-)✧" },
            ],
          },
        ],
      },
      {
        id: "long-distance",
        heading: "For long distance",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Missing you", text: "Sending you a hug across all these miles (っ´▽`)っ💕 Counting the days." },
              { label: "Time zones", text: "It's already Valentine's Day here, so you get your message first ─=≡Σ((( つ•̀ω•́)つ💘" },
              { label: "Video date", text: "Video call date tonight? I'll bring snacks, you bring that smile (｡♥‿♥｡)" },
            ],
          },
        ],
      },
      {
        id: "friends",
        heading: "For friends and Galentine's Day",
        blocks: [
          {
            type: "p",
            text: "Galentine's Day on February 13 is for celebrating friends. Bright, cute faces suit it better than kisses.",
          },
          {
            type: "messages",
            items: [
              { label: "Galentine's", text: "Happy Galentine's Day to the best friend a girl could ask for 🎀(｡･ω･｡)ﾉ♡" },
              { label: "Single and fine", text: "Valentine's plan: snacks, movies, and you. Better than any date ( ¬‿¬)🍫" },
              { label: "Group chat", text: "Love you all, you weirdos ヽ(♡‿♡)ノ Happy Valentine's!" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "Timing and tone tips",
        blocks: [
          {
            type: "list",
            items: [
              "Send partner messages early in the day; a late message can feel like an afterthought.",
              "One face per message is enough. Let the words do most of the work.",
              "Match the face to the relationship: kisses for partners, blushes for crushes, hearts and bows for friends.",
              "Not sure how a face will land? The [kaomoji etiquette guide](/guides/kaomoji-etiquette/) covers faces that can be misread.",
              "Want more choice? The [Valentine's Day kaomoji](/valentine-kaomoji/) page has over 100 faces with chocolate, Cupid, and kisses.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a cute Valentine's Day kaomoji?",
        answer:
          "(◍•ᴗ•◍)❤ is sweet and simple, and (っ˘з(˘⌣˘ ) is a playful smooch. Both work in any messaging app.",
      },
      {
        question: "What should I text a crush on Valentine's Day?",
        answer:
          "Keep it light and easy to answer, such as a playful compliment or an invitation for coffee, with a shy face like (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄).",
      },
      {
        question: "When is Galentine's Day?",
        answer: "Galentine's Day is celebrated on February 13, the day before Valentine's Day, to celebrate friendship.",
      },
    ],
  },
  {
    slug: "roblox-bio-kaomoji-ideas",
    title: "Roblox Bio Ideas with Kaomoji: About Me Templates, Trading Statuses & Chat Lines",
    titleSegment: "Roblox Bio Ideas: About Me Templates with Kaomoji",
    description:
      "25+ Roblox bio templates and chat lines with filter-safe kaomoji: About section intros, trading statuses, obby reactions, AFK messages, and co-op openers.",
    intro:
      "Roblox keeps @usernames and Display Names strict, but your profile About box and in-game chat let you show personality with short text faces. Every template below uses compact punctuation faces, which are much less likely to turn into ### hashes than fancy Unicode ones.",
    face: "(^_^)v",
    event: "Gaming · Roblox",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/roblox-kaomoji", "/happy-kaomoji", "/uwu-kaomoji", "/cool-kaomoji", "/kaomoji-app"],
    sections: [
      {
        id: "about-casual",
        heading: "Friendly About section bios",
        blocks: [
          {
            type: "p",
            text: "Keep your About text to two or three short lines so mobile players can read the whole bio without tapping More. One clean face per line looks sharper than a wall of symbols.",
          },
          {
            type: "messages",
            items: [
              { label: "Friendly", text: "Just here to have fun and play obbies (^_^)v" },
              { label: "Cozy", text: "ʕ•ᴥ•ʔ casual player | joins are on for friends" },
              { label: "UwU vibe", text: "UwU cozy games + dress up | say hi in chat!" },
              { label: "Cat lover", text: "=^.^= certified cat person | builder in training" },
              { label: "Music mood", text: "d(^_^)b probably listening to music while I play" },
            ],
          },
        ],
      },
      {
        id: "trading-and-roles",
        heading: "Trading, builder & status templates",
        blocks: [
          {
            type: "p",
            text: "Let people know your trade rules or timezone right in your profile so you do not have to repeat yourself in every server:",
          },
          {
            type: "messages",
            items: [
              { label: "Trader", text: "(^_^)b trades open | fair offers only please!" },
              { label: "No trades", text: "(-_-) not trading my inventory right now, sorry!" },
              { label: "Builder", text: "Studio builder & scripter (⌐■_■) commissions closed" },
              { label: "Collector", text: "(*_*) limiteds collector | check my favorites" },
            ],
          },
        ],
      },
      {
        id: "chat-openers",
        heading: "In-game chat openers and team invites",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Join invite", text: "Anyone want to team up for the next round? (^_^)/" },
              { label: "Greeting", text: "Hey everyone! Good luck this round \\(^o^)/" },
              { label: "Help", text: "Wait for me at the checkpoint! (>_<)" },
              { label: "Thank you", text: "Thanks so much for the revive! (^_^)v" },
            ],
          },
        ],
      },
      {
        id: "reactions",
        heading: "Obby fails, clutches & GG reactions",
        blocks: [
          {
            type: "p",
            text: "Short ASCII faces shine in fast-moving game chat because they are under ten characters and fit in a chat bubble without wrapping:",
          },
          {
            type: "messages",
            items: [
              { label: "Clutch win", text: "GG! I cannot believe we survived that (O_O)" },
              { label: "Last jump fail", text: "I fell on the very last jump... (T_T)" },
              { label: "Dizzy", text: "That boss fight had me spinning (@_@)" },
              { label: "Salute", text: "GG team, it was an honor o7" },
              { label: "Cool win", text: "First try, no sweat (B_B)" },
            ],
          },
        ],
      },
      {
        id: "afk",
        heading: "AFK and busy status lines",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "AFK", text: "AFK for 5 mins, grabbing snacks (u_u)" },
              { label: "Grinding", text: "d(-_-)b grinding levels | slow replies" },
              { label: "Logging off", text: "Logging off for tonight, see you tomorrow! (^_^)/" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "What to do when Roblox blocks a symbol",
        blocks: [
          {
            type: "list",
            items: [
              "Swap to pure keyboard punctuation from the [Roblox kaomoji](/roblox-kaomoji/) page — faces built from ( ), ^, _, and T rarely get hashed.",
              "Remember that @usernames and Display Names will not accept kaomoji symbols; save your faces for your About bio and in-game chat.",
              "Skip multiline drawings on Roblox and save [kaomoji art](/art-kaomoji/) for your Discord server.",
              "Playing on PC? Keep the [kaomoji app](/kaomoji-app/) open in a pinned browser tab so you can copy faces between rounds in one click.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I write in my Roblox bio?",
        answer:
          "Two or three short lines: what you like to play, whether your trades or joins are open, and one face that matches your vibe. Leave out personal details like your real name, school, or phone number. Roblox's filter blocks a lot of that anyway, and it keeps you safer.",
      },
      {
        question: "Why did my Roblox bio turn into ### hashtags?",
        answer:
          "Roblox's automated filter hashes out text it cannot verify as safe, including long runs of unusual symbols and number strings that look like personal info. A short keyboard face like (^_^) or (T_T) usually gets through.",
      },
      {
        question: "Can I use the same bio line on Roblox and Discord?",
        answer:
          "Usually, yes. Every template here is short keyboard text, so it pastes cleanly into a Discord About Me too. The reverse is not always true: fancy Unicode Discord bios can show up as boxes or hashes on Roblox.",
      },
      {
        question: "How many characters can a Roblox About bio have?",
        answer:
          "Roblox allows up to 1,000 characters in the profile About box, though keeping it under three lines makes it much easier to read on mobile.",
      },
    ],
  },
  {
    slug: "instagram-bio-dividers-with-kaomoji",
    title: "Instagram & TikTok Bio Dividers with Kaomoji: Aesthetic Lines to Copy",
    titleSegment: "Instagram Bio Dividers with Kaomoji to Copy",
    description:
      "25+ aesthetic Instagram and TikTok bio dividers with kaomoji: coquette ribbons ୨୧, sparkle lines ✧, soft pastel stacks, and one-line captions ready to copy.",
    intro:
      "A good bio divider gives your profile breathing room — separating your name from your links or framing a single mood face so your bio looks intentional instead of crowded. Every template below pairs lines from our [kaomoji borders and dividers](/border-kaomoji/) collection with soft faces you can copy in one tap.",
    face: "─── ⋆⋅☆⋅⋆ ───",
    event: "Social · Bios",
    published: "2026-10-24",
    updated: "2026-10-24",
    related: ["/border-kaomoji", "/cute-kaomoji", "/sparkle-kaomoji", "/shy-kaomoji", "/cute-symbols"],
    sections: [
      {
        id: "coquette-and-soft",
        heading: "Soft & coquette bio stacks",
        blocks: [
          {
            type: "p",
            text: "These three-line stacks stay narrow enough to fit on both iPhone and Android screens without wrapping in the middle:",
          },
          {
            type: "messages",
            items: [
              {
                label: "Ribbon bow",
                text: "────── ୨୧ ──────\n(˶ᵔ ᵕ ᵔ˶) ♡\nart · coffee · slow days",
              },
              {
                label: "Angel wings",
                text: "˚₊‧꒰ა ♡ ໒꒱ ‧₊˚\n꒰ᐢ. .ᐢ꒱\nshe/her · daydreaming",
              },
              {
                label: "Blossom vine",
                text: "°•. ✿ .•°•. ✿ .•°\n(◕‿◕✿)\ncreating little things",
              },
              {
                label: "Shy blush",
                text: "─── ⋆⋅ ♡ ⋅⋆ ───\n(⁄ ⁄•⁄ω⁄•⁄ ⁄)\nwelcome to my corner",
              },
            ],
          },
        ],
      },
      {
        id: "sparkle-and-star",
        heading: "Sparkle, star & night-sky bio dividers",
        blocks: [
          {
            type: "p",
            text: "Inspired by starry fan bios and the [Porter Robinson kaomoji guide](/guides/porter-robinson-kaomoji/), these lines mix four-point ✧ sparkles with crescent moons and stars:",
          },
          {
            type: "messages",
            items: [
              {
                label: "Star center",
                text: "─── ⋆⋅☆⋅⋆ ───\n✧(◕‿◕)✧\nlooking at the sky",
              },
              {
                label: "Moon & cloud",
                text: "⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n(˘ω˘) zzZ\nlate night playlists",
              },
              {
                label: "Worlds vibe",
                text: "✧･ﾟ: *✧･ﾟ:*\n【=◈︿◈=】\ngoodbye to a world",
              },
              {
                label: "Sparkle frame",
                text: "╭──── · · ✧ · · ────╮\n   (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\n╰──── · · ✧ · · ────╯",
              },
            ],
          },
        ],
      },
      {
        id: "one-line-bios",
        heading: "Compact one-line bios for TikTok (80-character limit)",
        blocks: [
          {
            type: "p",
            text: "TikTok caps bios at 80 characters, and line breaks count toward the limit. A single centered line with a face in the middle saves space:",
          },
          {
            type: "messages",
            items: [
              { label: "Soft smile", text: "─── ⋆⋅ (˶ᵔ ᵕ ᵔ˶) ⋅⋆ ───" },
              { label: "Little bear", text: "────── ʕ•ᴥ•ʔ ──────" },
              { label: "Kitty paws", text: "─── ⋆⋅ ฅ^•ﻌ•^ฅ ⋅⋆ ───" },
              { label: "Wink", text: "✧･ﾟ (｡•̀ᴗ-)✧ ･ﾟ✧" },
            ],
          },
        ],
      },
      {
        id: "captions",
        heading: "Matching photo dump & Reel captions",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Photo dump", text: "little moments from lately ✧･ﾟ: *(˶ᵔ ᵕ ᵔ˶)*:･ﾟ✧" },
              { label: "Outfit post", text: "୨୧ dressed up with nowhere to be (◕ᴗ◕✿) ୨୧" },
              { label: "Cozy weekend", text: "iced latte and zero plans ─── ♡ (˘ω˘) ♡ ───" },
              { label: "Night out", text: "⋆⁺₊⋆ stars out, overthinking off ⋆⁺₊⋆ (｡•̀ᴗ-)✧" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "How to keep bio dividers from wrapping on mobile",
        blocks: [
          {
            type: "list",
            items: [
              "Keep horizontal lines under 16–18 characters wide so they stay on a single row on smaller iPhones.",
              "If a divider wraps after you save, edit the bio and delete two ─ dashes from both the left and right ends.",
              "Want to mix individual hearts, bows, and brackets yourself? Grab pieces from [cute symbols](/cute-symbols/) or read our [soft kaomoji copy guide](/guides/kaomoji-soft-copy/).",
              "Check how your bio looks in both light mode and dark mode — Unicode text dividers automatically switch color with the user's theme.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a kaomoji divider in an Instagram bio?",
        answer:
          "A kaomoji divider is a short decorative line made from Unicode dashes, stars, or ribbons (like ─── ⋆⋅☆⋅⋆ ───) placed above, below, or around a text face to organize a profile bio.",
      },
      {
        question: "Why did my Instagram bio divider split onto two lines?",
        answer:
          "Instagram bios use a proportional font and narrow mobile margins. Shorten the line by removing two or three dash characters from each side so it fits on a single row.",
      },
      {
        question: "Do Instagram and TikTok bios keep line breaks when you paste?",
        answer:
          "Yes, both keep line breaks. TikTok caps the whole bio at 80 characters, so on TikTok a three-line stack has to stay short.",
      },
      {
        question: "Where can I find more borders without text?",
        answer:
          "Visit our Kaomoji Borders & Dividers page for 70+ standalone lines, box caps, and ribbon separators ready to copy.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function postPath(post: BlogPost): string {
  return `/blog/${post.slug}`;
}

/** Blog posts that point at a category page (shown on that page). */
export function postsForPage(path: string): BlogPost[] {
  return posts.filter((post) => post.related.includes(path));
}
