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
        id: "read",
        heading: "How to read a face in two seconds",
        blocks: [
          {
            type: "p",
            text: "Japanese text faces are read straight on, not sideways like :-). That means the eyes carry most of the feeling, and the mouth and extras fine-tune it. Once you know the main parts, you can tell what almost any face means at a glance.",
          },
          {
            type: "table",
            head: ["Part", "Examples", "What it adds"],
            rows: [
              ["Eyes", "^ ^, ◕ ◕, T T, ¬ ¬", "The main mood: happy, sweet, crying, or annoyed"],
              ["Mouth", "▽, ω, ‿, Д", "Open joy, a cute pout, a calm smile, or a shout"],
              ["Cheeks", "〃, *, ๑", "Blushing, shyness, or extra softness"],
              ["Arms", "ノ, ヽ, つ, ╯", "Waving, cheering, hugging, or flipping a table"],
              ["Extras", "♡, ✿, ;, zzZ", "Love, sweetness, sweat from nerves, or sleep"],
            ],
          },
          {
            type: "p",
            text: "For example, (◕‿◕✿) is round eyes, a soft smile, and a flower, so it reads as gentle and sweet. (╬ಠ益ಠ) has narrow eyes, gritted teeth, and an anger mark, so it reads as furious.",
          },
        ],
      },
      {
        id: "happy",
        heading: "Happy and excited",
        blocks: [
          {
            type: "p",
            text: "Open eyes and curved mouths mark a happy face. The more symbols around it, the louder the joy.",
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
            text: "Cute faces use big round eyes, small mouths, and soft extras like flowers, hearts, or animal ears.",
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
            text: "Sad faces use drooping eyes, tears, and small mouths. Pick the quieter ones for mild disappointment and the teary ones for real sadness.",
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
        id: "in-messages",
        heading: "Putting a face in a message",
        blocks: [
          {
            type: "p",
            text: "Most people put the face at the end of a sentence, where it works like a tone of voice. A face at the start sets the mood before the words, which suits greetings. On its own, a face is a full reply.",
          },
          {
            type: "messages",
            items: [
              { label: "At the end: Adds tone to the words", text: "See you at 7, can't wait (≧▽≦)" },
              { label: "At the start: Sets the mood first", text: "ヽ(•‿•)ノ Good morning, everyone!" },
              { label: "As the whole reply: When words are not needed", text: "(⊙_⊙)" },
              { label: "Softening a request: Makes an ask feel friendly", text: "Could you send the file when you get a chance? (◕‿◕✿)" },
            ],
          },
          {
            type: "tip",
            text: "One face per message is usually enough. A face after every sentence makes it hard to read and waters down the feeling.",
          },
        ],
      },
      {
        id: "choose",
        heading: "Choosing between similar faces",
        blocks: [
          {
            type: "list",
            items: [
              "Pick by who is reading. Simple faces such as (^_^) suit coworkers; faces with hearts and flowers suit friends and partners.",
              "Pick by strength. (´・_・`) is mild disappointment, while (ಥ﹏ಥ) is real heartbreak. Using the strong one for a small problem can read as sarcasm.",
              "Pick by length. Short faces fit names, comments, and narrow phone screens. Long ones with arms and props work better in a full chat message.",
              "Pick by font. If your friend's phone shows a box, swap to a face made from more common characters, such as (T_T) or (＾▽＾).",
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
        id: "why",
        heading: "Why these faces read as jokes",
        blocks: [
          {
            type: "p",
            text: "Text has no tone of voice, so the face does the job a grin or a raised eyebrow would do in person. A few features almost always signal \"not serious\":",
          },
          {
            type: "table",
            head: ["Feature", "Example", "What it signals"],
            rows: [
              ["Half-closed or sideways eyes", "(≖‿≖), ( ͡° ͜ʖ ͡°)", "A knowing look, a tease, or a hint"],
              ["A tongue", "(^ڡ^)", "Playful cheek, or that food looks good"],
              ["Big motion", "(╯°□°）╯︵ ┻━┻", "Over-the-top drama about something small"],
              ["A sweat drop", "(^_^;)", "Laughing at your own awkward moment"],
              ["A shrug", "¯\\_(ツ)_/¯", "Mock helplessness, so nobody takes it to heart"],
            ],
          },
          {
            type: "p",
            text: "The bigger the reaction, the smaller the real problem should be. A table flip over a missing sock is funny. A table flip over a friend's bad news is not.",
          },
        ],
      },
      {
        id: "everyday",
        heading: "Replies for everyday moments",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Monday morning", text: "Me walking into Monday like (＠_＠;)" },
              { label: "Friend is late again", text: "Still waiting... I have grown a beard (¬_¬)" },
              { label: "Group chat goes quiet", text: "Hello? Is this thing on? (・_・ヾ" },
              { label: "You finally finish a task", text: "Done! Nobody touch anything ever again ᕕ( ᐛ )ᕗ" },
              { label: "Someone guesses your secret", text: "I have no idea what you are talking about (≖‿≖)" },
              { label: "Bad cooking", text: "Dinner is served, and by served I mean slightly burnt (^_^;)" },
              { label: "Low battery", text: "Phone at 2%. If I vanish, avenge me ( ´ ▽ ` )ﾉ" },
              { label: "Spoiler alert", text: "Don't tell me the ending or I flip the table (ノ°益°)ノ" },
            ],
          },
        ],
      },
      {
        id: "timing",
        heading: "Where to put the face in a joke",
        blocks: [
          {
            type: "steps",
            items: [
              "Write the joke first, with no face. If it does not work as plain text, a face will not save it.",
              "Add the face after the punchline, not before. A face at the start gives the joke away.",
              "Match the face to the joke type: tongue-out for teasing, a shrug for mock confusion, a sweat drop for self-mockery.",
              "Read it once as the other person. If it could sound mean, swap to a softer face such as (^ڡ^).",
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
      {
        question: "What does ¯\\_(ツ)_/¯ mean?",
        answer:
          "It is the shrug face. It means \"I don't know\", \"oh well\", or \"what can you do\". It is light and friendly, so it works for small problems and mock confusion, but it can sound dismissive if someone asked you a real question.",
      },
    ],
  },
];
