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
    "Ready-to-send holiday messages with kaomoji, seasonal texting ideas, and tips for upcoming events like Christmas, New Year, and Valentine's Day.",
  intro:
    "Seasonal posts with ready-to-send messages for upcoming holidays and events. Every message has a Copy button, and every post links to the full face collection for that occasion.",
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
    updated: "2026-10-21",
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
            text: "Want more spooky faces? The [Halloween kaomoji](/halloween-kaomoji/) page has 350+ ghosts, pumpkins, bats, zombies, and witches, and the [devil kaomoji](/devil-kaomoji/) page has mischievous faces for tricks.",
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
    updated: "2026-10-21",
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
