/**
 * Blog posts from the 2026-11-15 keyword plan (docs/CONTENT-PLAN.md).
 * Spread into `posts` in lib/blog.ts.
 * Every post here must clear the thin-content gate in the plan: real value in
 * every section, 900+ words, unique faces and notes, and no keyword variants
 * split into separate near-duplicate posts.
 */
import type { BlogPost } from "@/lib/blog";

export const posts4: BlogPost[] = [
  {
    slug: "60-best-kaomojis-to-copy-and-paste",
    title: "60 Best Kaomojis to Copy and Paste, With Meanings",
    titleSegment: "60 Best Kaomojis to Copy & Paste",
    description:
      "The 60 best kaomojis to copy and paste, grouped by mood, with what each one means and when to use it. A short list to start with before you browse thousands.",
    intro:
      "There are tens of thousands of kaomojis, which makes it hard to know where to start. This list picks sixty that work well in real chats, grouped by mood. Each one has a short meaning and a note on when to use it, so you can copy with confidence.",
    face: "(≧▽≦)ﾉ",
    event: "Guide · Starter list",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/kaomoji-copy-paste", "/cute-kaomoji", "/happy-kaomoji", "/sad-kaomoji", "/angry-kaomoji"],
    sections: [
      {
        id: "how",
        heading: "How to use this list",
        blocks: [
          {
            type: "p",
            text: "Tap Copy under any face below, then paste it where you need it. Kaomojis are plain text, so they work in messages, comments, bios, and documents. They look the same on every device, unlike emoji, which change from phone to phone.",
          },
          {
            type: "p",
            text: "If a face shows as a box, the app's font is missing one character. Pick another face from the same group, because most have close alternatives.",
          },
        ],
      },
      {
        id: "happy",
        heading: "Happy and excited",
        blocks: [
          {
            type: "p",
            text: "Open eyes and curved mouths mark happy kaomojis. The more symbols around the face, the louder the joy.",
          },
          {
            type: "messages",
            items: [
              { label: "Plain, cheerful smile: A friendly hello or good news", text: "(＾▽＾)" },
              { label: "Overjoyed: Something wonderful just happened", text: "(≧▽≦)" },
              { label: "Arms up cheering: You won, passed, or finished", text: "＼(^o^)／" },
              { label: "Joyful and playful: Celebrating with friends", text: "٩(◕‿◕)۶" },
              { label: "Star-struck: You love what you just saw", text: "(☆▽☆)" },
              { label: "Fists up, excited: You are ready for something big", text: "(๑˃ᴗ˂)ﻭ" },
              { label: "Cheerful wave: Greeting someone happily", text: "ヽ(•‿•)ノ" },
              { label: "Happy and a little shy: Taking a compliment", text: "(*^▽^*)" },
              { label: "Calm, content smile: A cozy, quiet good mood", text: "(●´ω｀●)" },
              { label: "Light, happy greeting: Starting a chat on a good note", text: "ヾ(＾∇＾)" },
            ],
          },
        ],
      },
      {
        id: "cute",
        heading: "Cute and sweet",
        blocks: [
          {
            type: "p",
            text: "Cute kaomojis use big round eyes, small mouths, and soft extras like flowers, hearts, or animal ears.",
          },
          {
            type: "messages",
            items: [
              { label: "Sweet smile with a flower: A gentle thank you", text: "(◕‿◕✿)" },
              { label: "Soft, rounded smile: A warm message to a friend", text: "(◍•ᴗ•◍)" },
              { label: "Arms out for a hug: Offering comfort", text: "(づ｡◕‿‿◕｡)づ" },
              { label: "Cat face: Cat photos or playful moods", text: "(=^･ω･^=)" },
              { label: "Bear face: Cozy, friendly messages", text: "ʕ•ᴥ•ʔ" },
              { label: "Simple, calm face: A quiet, small reaction", text: "(・ω・)" },
              { label: "Happy squint: Something sweet made you smile", text: "(๑>◡<๑)" },
              { label: "Heart eyes: You adore something", text: "(｡♥‿♥｡)" },
              { label: "Sleepy and sweet: A gentle goodnight", text: "(っ˘ω˘ς)" },
              { label: "Blushing smile: Feeling flattered", text: "(*´∀`*)" },
            ],
          },
        ],
      },
      {
        id: "love",
        heading: "Love and affection",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Hearts around a happy face: Feeling in love", text: "(♡°▽°♡)" },
              { label: "Smile with a heart: Soft affection", text: "(´∀`)♡" },
              { label: "Heart eyes, shy: A crush", text: "(♥ω♥*)" },
              { label: "Blowing a kiss: A goodnight or goodbye kiss", text: "(*^3^)/~☆" },
              { label: "Sending a kiss: Playful romance", text: "(づ￣ ³￣)づ" },
              { label: "Smile and heart: Telling someone you care", text: "(◕‿◕)♡" },
              { label: "Shy, loving smile: A gentle love message", text: "(´,,•ω•,,)♡" },
              { label: "Overflowing with love: Big feelings", text: "(๑♡⌓♡๑)" },
              { label: "Happy in love: A date went well", text: "(●♡∀♡)" },
              { label: "Kiss with a heart: A sweet sign-off", text: "(˘³˘)♥" },
            ],
          },
        ],
      },
      {
        id: "sad",
        heading: "Sad and crying",
        blocks: [
          {
            type: "p",
            text: "Sad kaomojis use drooping eyes, tears, and small mouths. Pick the quieter ones for mild disappointment and the teary ones for real sadness.",
          },
          {
            type: "messages",
            items: [
              { label: "Classic crying face: Plain sadness", text: "(T_T)" },
              { label: "Sniffling: Feeling hurt or touched", text: "(；ω；)" },
              { label: "Streaming tears: Heartbreak", text: "(╥﹏╥)" },
              { label: "Sad and a little scared: Needing comfort", text: "(｡•́︿•̀｡)" },
              { label: "Deep sorrow: A very sad moment", text: "(ಥ﹏ಥ)" },
              { label: "Trying not to cry: Holding back tears", text: "(´；ω；`)" },
              { label: "Wiping tears: Crying a little", text: "(つ﹏<。)" },
              { label: "Down and flat: Disappointment", text: "(︶︹︺)" },
              { label: "Tired, let down: Quiet letdown", text: "(´・_・`)" },
              { label: "Pouty sadness: Wanting sympathy", text: "(๑•́ ₃ •̀๑)" },
            ],
          },
        ],
      },
      {
        id: "angry",
        heading: "Angry and annoyed",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Furious: You are very angry", text: "(╬ಠ益ಠ)" },
              { label: "Sharp shout: A strong complaint", text: "(｀Д´)" },
              { label: "Angry with a vein: Fed up", text: "(＃`Д´)" },
              { label: "Side-eye: Annoyed or unimpressed", text: "(¬_¬)" },
              { label: "Cold stare: Judging silently", text: "(눈_눈)" },
              { label: "Table flip: A dramatic rage", text: "(╯°□°）╯︵ ┻━┻" },
              { label: "Putting the table back: Calming down after a flip", text: "┬─┬ノ( º _ ºノ)" },
              { label: "Grumpy: Mild irritation", text: "(｀ω´)" },
              { label: "Smug annoyance: Sarcastic frustration", text: "(ー`´ー)" },
              { label: "Pouting anger: Annoyed but cute", text: "(`ε´)" },
            ],
          },
        ],
      },
      {
        id: "other",
        heading: "Surprised, shy, sleepy and playful",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Surprised: Unexpected news", text: "(°o°)" },
              { label: "Wide-eyed shock: You cannot believe it", text: "(⊙_⊙)" },
              { label: "Stunned: Total disbelief", text: "(ﾟдﾟ)" },
              { label: "Blushing: Feeling shy", text: "(〃▽〃)" },
              { label: "Nervous laugh: An awkward moment", text: "(^_^;)" },
              { label: "Asleep: Going to bed", text: "(－_－)zzZ" },
              { label: "Tired: Drained but still here", text: "(´-ω-`)" },
              { label: "Shrug: You do not know", text: "¯\\_(ツ)_/¯" },
              { label: "Cheeky look: Teasing a friend", text: "( ͡° ͜ʖ ͡°)" },
              { label: "Running away: Making a quick exit", text: "ᕕ( ᐛ )ᕗ" },
            ],
          },
        ],
      },
      {
        id: "more",
        heading: "Where to go next",
        blocks: [
          {
            type: "p",
            text: "Every mood above has its own page with far more choices. Start with [happy kaomoji](/happy-kaomoji/), [cute kaomoji](/cute-kaomoji/), [sad kaomoji](/sad-kaomoji/), and [angry kaomoji](/angry-kaomoji/), or browse the full [kaomoji copy and paste](/kaomoji-copy-paste/) library. To learn how the parts fit together, read [how to read kaomoji](/guides/how-to-read-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What are the best kaomojis to start with?",
        answer:
          "Start with a few from each mood: (＾▽＾) for happy, (◕‿◕✿) for cute, (T_T) for sad, (¬_¬) for annoyed, and (〃▽〃) for shy. Those five cover most chats.",
      },
      {
        question: "Why do kaomojis look the same on every device?",
        answer:
          "They are built from text characters, not pictures, so every device draws the same symbols. Emoji are pictures that each company draws in its own style.",
      },
      {
        question: "How do I copy a kaomoji?",
        answer:
          "Tap Copy or select the face, then paste it with Ctrl+V on Windows, Cmd+V on Mac, or a long-press and Paste on a phone.",
      },
      {
        question: "Can I use kaomojis in a username?",
        answer:
          "Often not. Many apps limit usernames to letters and numbers, but allow faces in bios and display names. Test the field before you commit.",
      },
    ],
  },

  {
    slug: "funny-silly-and-tongue-out-kaomoji",
    title: "Funny, Silly and Tongue-Out Kaomoji to Copy and Paste",
    titleSegment: "Funny, Silly & Tongue-Out Kaomoji",
    description:
      "Funny kaomoji, silly faces, tongue-out kaomoji and awkward reactions to copy and paste, with notes on what each one says and when the joke works.",
    intro:
      "Some messages need a face that says \"I am joking\". This post collects funny kaomoji, silly faces, tongue-out kaomoji, and a few awkward ones, with a note on the tone of each so the joke lands the way you meant it.",
    face: "(๑´ڡ`๑)",
    event: "Guide · Funny faces",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/giggling-kaomoji", "/wink-kaomoji", "/smug-kaomoji", "/lenny-face", "/nervous-kaomoji"],
    sections: [
      {
        id: "tongue",
        heading: "Tongue-out kaomoji",
        blocks: [
          {
            type: "p",
            text: "A tongue sticking out says \"just kidding\" or \"yum\". In kaomoji the tongue is usually a single curly character such as ڡ, placed where the mouth would be.",
          },
          {
            type: "messages",
            items: [
              { label: "Yum", text: "(๑´ڡ`๑) That looks delicious" },
              { label: "Playful", text: "(^ڡ^) Just kidding" },
              { label: "Cheeky", text: "(>ڡ<) You walked right into that one" },
              { label: "Teasing", text: "(*`ڡ´*) I told you so" },
              { label: "Silly", text: "(´ڡ`) I could eat this all day" },
            ],
          },
          {
            type: "tip",
            text: "Tongue-out faces soften a tease. Put one at the end of a joke so the other person knows you are being playful.",
          },
        ],
      },
      {
        id: "funny",
        heading: "Funny kaomoji for jokes and banter",
        blocks: [
          {
            type: "p",
            text: "These funny kaomoji work best with friends, in group chats, and in comments, where a joke does not need much explanation.",
          },
          {
            type: "messages",
            items: [
              { label: "Cheeky, knowing look: A joke with a wink in it", text: "( ͡° ͜ʖ ͡°)" },
              { label: "I have no idea: Shrugging off a question", text: "¯\\_(ツ)_/¯" },
              { label: "Smug and scheming: A plan you are proud of", text: "(≖‿≖)" },
              { label: "Pointing at you: \"This one is for you\"", text: "(☞ﾟヮﾟ)☞" },
              { label: "Dramatic table flip: Over-the-top anger over something small", text: "(╯°□°）╯︵ ┻━┻" },
              { label: "Putting the table back: A calm apology after a flip", text: "┬─┬ノ( º _ ºノ)" },
              { label: "Fake rage: Joking about being furious", text: "(ノ°益°)ノ" },
              { label: "Offering something sweet: A silly peace offering", text: "(＾◡＾)っ" },
            ],
          },
        ],
      },
      {
        id: "silly",
        heading: "Silly kaomoji",
        blocks: [
          {
            type: "p",
            text: "Silly faces use mismatched eyes, big grins, and raised arms. They are meant to look a little ridiculous.",
          },
          {
            type: "messages",
            items: [
              { label: "Goofy", text: "(＾◇＾)ゞ Oops, wrong chat" },
              { label: "Dancing", text: "ヾ(＠⌒ー⌒＠)ノ I just got the day off" },
              { label: "Wild", text: "ε=ε=ε=┌(;*´Д`)ﾉ Running to the snack table" },
              { label: "Wobbly", text: "(＠_＠;) Too much coffee today" },
              { label: "Proud", text: "(ง •̀_•́)ง I can do this" },
            ],
          },
        ],
      },
      {
        id: "awkward",
        heading: "Awkward and embarrassed",
        blocks: [
          {
            type: "p",
            text: "When a joke does not land, an awkward face lets you laugh at yourself first.",
          },
          {
            type: "messages",
            items: [
              { label: "Nervous laugh with a sweat drop: An awkward moment", text: "(^_^;)" },
              { label: "Side look, uneasy: Not sure what to say", text: "(；一_一)" },
              { label: "Cringing: Something embarrassing happened", text: "(＞﹏＜)" },
              { label: "Resigned, flat: Giving up gracefully", text: "(´-ω-`)" },
              { label: "Smiling through it: Covering a mistake", text: "(＾ω＾;)" },
            ],
          },
        ],
      },
      {
        id: "tips",
        heading: "When the joke works, and when it does not",
        blocks: [
          {
            type: "list",
            items: [
              "Use funny kaomoji with people who know your sense of humor. A cheeky face to a stranger can read as rude.",
              "Match the face to the message. A tongue-out face after serious news looks careless.",
              "Keep it to one face per line. Three in a row turns a joke into noise.",
              "At work, keep to simple faces such as (^_^) and leave the cheeky ones for friends.",
            ],
          },
          {
            type: "p",
            text: "For more laughing faces, see [giggling kaomoji](/giggling-kaomoji/) and [wink kaomoji](/wink-kaomoji/). The classic cheeky face has its own page: [Lenny face](/lenny-face/). For the smug and scheming ones, go to [smug kaomoji](/smug-kaomoji/), and for awkward moments, [nervous kaomoji](/nervous-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a tongue-out kaomoji?",
        answer:
          "It is a face with a curly tongue character, usually ڡ, in place of the mouth, such as (๑´ڡ`๑) or (^ڡ^). It means playful, cheeky, or that something looks tasty.",
      },
      {
        question: "What are the best funny kaomoji?",
        answer:
          "( ͡° ͜ʖ ͡°), ¯\\_(ツ)_/¯, (≖‿≖), and the table flip (╯°□°）╯︵ ┻━┻ are the most used. They each have a clear joke tone, so they need little explanation.",
      },
      {
        question: "How do I make a silly kaomoji?",
        answer:
          "Mix features that do not match, such as wide eyes with a big grin, and add motion with arms or running lines. Our how to make kaomoji guide explains the parts.",
      },
      {
        question: "Are funny kaomoji okay at work?",
        answer:
          "Simple ones such as (^_^) are fine in casual team chats. Keep cheeky faces for friends, and skip them with clients and in formal email.",
      },
    ],
  },
];
