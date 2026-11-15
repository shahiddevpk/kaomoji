/**
 * Blog posts added 2026-11-15 to cover the rest of the November and December
 * calendar: Giving Tuesday, Winter Solstice, Kwanzaa, Japanese year-end and
 * year-end work thank-yous. Spread into `posts` in lib/blog.ts.
 * Expanded 2026-11-15 after review: each post now has 900+ words of its own
 * text (not counting the related-post cards) and primary-keyword density in
 * the 0.45-0.95% range.
 */
import type { BlogPost } from "@/lib/blog";

export const posts3: BlogPost[] = [
  {
    slug: "giving-tuesday-and-small-business-saturday-posts-with-kaomoji",
    title: "Giving Tuesday and Small Business Saturday Posts with Kaomoji",
    titleSegment: "Giving Tuesday & Small Business Saturday",
    description:
      "Giving Tuesday posts and Small Business Saturday captions with kaomoji to copy: donation asks, thank-yous, shop shout-outs, and short messages for your followers.",
    intro:
      "Right after Thanksgiving weekend, the focus moves from shopping to giving. Small Business Saturday is on November 28 in 2026, and Giving Tuesday is on December 1. Below are short posts you can copy for both, whether you run a shop, a charity, or just want to point friends to a good cause. There are also tips on writing a post people actually share, and a few mistakes to avoid.",
    face: "(づ｡◕‿‿◕｡)づ💝",
    event: "Giving Tuesday · Dec 1",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/thank-you-kaomoji", "/heart-kaomoji", "/hug-kaomoji", "/bowing-kaomoji"],
    sections: [
      {
        id: "dates",
        heading: "The dates in 2026",
        blocks: [
          {
            type: "table",
            head: ["Event", "Date (2026)", "What it is"],
            rows: [
              ["Small Business Saturday", "Sat, Nov 28", "A day to shop at local, independent stores"],
              ["Cyber Monday", "Mon, Nov 30", "Online deals after Thanksgiving weekend"],
              ["Giving Tuesday", "Tue, Dec 1", "A day for donating time, money, or help"],
            ],
          },
          {
            type: "p",
            text: "Small Business Saturday was started by American Express in 2010 to bring shoppers back to local stores. The day of giving followed in 2012, launched by the 92nd Street Y in New York with the United Nations Foundation as an answer to the shopping rush. Both are now used around the world, so your followers will likely know them by name.",
          },
        ],
      },
      {
        id: "small-business",
        heading: "Small Business Saturday posts",
        blocks: [
          {
            type: "p",
            text: "If you own a shop, keep the post short and say what is special in store. If you are a customer, name the shop. A named shout-out helps more than a general one, because friends can find the place.",
          },
          {
            type: "messages",
            items: [
              { label: "Shop owner", text: "Open today with fresh stock and warm tea. Thank you for shopping local! (◕‿◕)♡" },
              { label: "Customer", text: "Skipped the big stores and bought gifts from our corner bakery today ٩(◕‿◕)۶" },
              { label: "Recommend", text: "Tell me your favorite local shop and I will share it with everyone (๑•̀ㅂ•́)و✧" },
              { label: "Thank you", text: "To everyone who came by today: you keep this little shop alive (人´∀`)" },
              { label: "Deal", text: "Today only: a free card with every gift wrap (≧◡≦)" },
              { label: "Hours", text: "Doors open at 9, coffee is on us until noon. See you soon ヽ(•‿•)ノ" },
            ],
          },
        ],
      },
      {
        id: "giving",
        heading: "Donation and volunteer posts",
        blocks: [
          {
            type: "p",
            text: "A good giving post says what you are supporting, how to help, and what a small gift can do. Put the link in your bio or in a reply rather than in the first line, so the message reads like a person talking and not an ad.",
          },
          {
            type: "messages",
            items: [
              { label: "Ask", text: "Today is the big day of giving. Every gift to our food bank puts meals on tables this winter (づ｡◕‿‿◕｡)づ" },
              { label: "Time", text: "No money to give? Give an hour. Our shelter needs helpers on Saturday ٩(◕‿◕)۶" },
              { label: "Share", text: "I donated today and I am sharing the link in my bio. Any amount helps ♡(˘▾˘)" },
              { label: "Match", text: "Every gift is doubled until midnight thanks to a local sponsor. Now is the time (ﾉ´ヮ`)ﾉ*: ･ﾟ" },
              { label: "Update", text: "We are halfway to our goal! Thank you, and please keep sharing (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
              { label: "Impact", text: "$10 buys a warm hat and gloves for one child. Small gifts add up (◕ᴗ◕✿)" },
            ],
          },
          {
            type: "tip",
            text: "One kaomoji is enough. Fundraising posts should feel warm, but the ask must stay clear.",
          },
        ],
      },
      {
        id: "how-to",
        heading: "How to write a post people share",
        blocks: [
          {
            type: "steps",
            items: [
              "Lead with the cause or the shop, not with yourself. \"Our animal shelter\" beats \"I have news\".",
              "Give one clear action: donate, volunteer, visit, or share. Two or three asks in one post split attention.",
              "Add a number when you have one. \"$25 feeds a family for a week\" is easier to act on than \"please help\".",
              "End with a face that matches the mood. Warm hugging or heart faces suit giving; cheerful faces suit shop posts.",
              "Post the thank-you the next day. People who gave like to see the result, and it reminds anyone who missed the day.",
            ],
          },
        ],
      },
      {
        id: "thanks",
        heading: "Thank-you posts for the day after",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Donors", text: "Thank you to every donor. You made this year possible (｡•́︿•̀｡)♡" },
              { label: "Result", text: "We raised enough for 400 winter meals. We are so grateful (人´∀`)" },
              { label: "Shoppers", text: "Saturday was our busiest day of the year. Thank you for shopping small (≧▽≦)" },
              { label: "Volunteers", text: "Twelve volunteers, six hours, one very clean park. Thank you, team (๑•̀ㅂ•́)و✧" },
            ],
          },
        ],
      },
      {
        id: "faces",
        heading: "Which face to use",
        blocks: [
          {
            type: "table",
            head: ["Face", "Mood", "Best for"],
            rows: [
              ["(づ｡◕‿‿◕｡)づ", "A warm hug", "Donation asks and thanks"],
              ["(人´∀`)", "Grateful, hands together", "Thank-you posts"],
              ["٩(◕‿◕)۶", "Cheerful energy", "Volunteer calls and shop news"],
              ["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "Celebration", "Goal updates"],
              ["(◕‿◕)♡", "Friendly and soft", "Shop owner posts"],
            ],
          },
          {
            type: "list",
            items: [
              "Avoid crying or sad faces in an ask. They can feel like guilt and push people away.",
              "Avoid long strings of faces and emoji. They bury the link and the action.",
              "Do not tag people to pressure them to give. Invite, do not chase.",
            ],
          },
        ],
      },
      {
        id: "no-money",
        heading: "Ways to help without spending",
        blocks: [
          {
            type: "p",
            text: "Not everyone can donate this year, and a good post can say so. These ideas give followers a way to take part for free, which often brings in more support than a money ask alone.",
          },
          {
            type: "list",
            items: [
              "Share the cause's post with a line about why it matters to you.",
              "Leave a review for a local shop you love. It costs nothing and helps them all year.",
              "Volunteer an hour, or offer a skill such as photos, design, or tutoring.",
              "Donate items: coats, books, or unopened food often help as much as cash.",
            ],
          },
        ],
      },
      {
        id: "more",
        heading: "Where to find more faces",
        blocks: [
          {
            type: "p",
            text: "The [thank you kaomoji](/thank-you-kaomoji/) page has dozens of grateful faces, and [heart kaomoji](/heart-kaomoji/) has warm ones for donor messages. For deal announcements, see our [Black Friday and Cyber Monday texts](/blog/black-friday-and-cyber-monday-texts-with-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is Giving Tuesday in 2026?",
        answer: "It is on Tuesday, December 1, 2026. It always falls on the Tuesday after US Thanksgiving.",
      },
      {
        question: "When is Small Business Saturday in 2026?",
        answer: "Small Business Saturday is on Saturday, November 28, 2026, the day after Black Friday.",
      },
      {
        question: "Should I use kaomoji in a fundraising post?",
        answer: "Yes, one warm face is fine. Keep the ask and the link clear so the face supports the message and does not replace it.",
      },
      {
        question: "What is the difference between Small Business Saturday and Black Friday?",
        answer: "Black Friday is the day after Thanksgiving, known for big store and online deals. Small Business Saturday comes the next day and asks shoppers to spend at local, independent shops instead.",
      },
    ],
  },

  {
    slug: "winter-solstice-and-yule-messages-with-kaomoji",
    title: "Winter Solstice and Yule Messages with Kaomoji",
    titleSegment: "Winter Solstice & Yule Messages to Copy",
    description:
      "Winter solstice and Yule messages with kaomoji to copy: short greetings, candle and sun captions, and cozy texts for the longest night of the year.",
    intro:
      "The solstice in December brings the shortest day and longest night of the year in the Northern Hemisphere. In 2026 it falls on Monday, December 21 in the Americas and Europe, and on Tuesday, December 22 in parts of Asia and Australia because of time zones. Many people mark it with candles, a quiet dinner, or a Yule celebration. These short messages fit that calm, hopeful mood, and the traditions below give you ideas for friends around the world.",
    face: "☾(˘▾˘)✧",
    event: "Winter Solstice · Dec 21",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/winter-kaomoji", "/sleepy-kaomoji", "/sparkle-kaomoji", "/star-kaomoji"],
    sections: [
      {
        id: "what",
        heading: "What the solstice is",
        blocks: [
          {
            type: "p",
            text: "On the solstice, the sun reaches its lowest point in the sky for the year, so daylight is shortest. After this date the days slowly get longer. Yule is an old midwinter festival, and many modern Yule customs, such as lighting candles and bringing in greenery, mark the return of the light.",
          },
          {
            type: "p",
            text: "In the Southern Hemisphere the same day is the summer solstice. If you have friends there, a sun message may suit them better than a candle.",
          },
        ],
      },
      {
        id: "greetings",
        heading: "Short greetings",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Simple", text: "Happy winter solstice! The days start getting longer from here ☀(˘▾˘)" },
              { label: "Yule", text: "Merry Yule! May your night be warm and your candles bright (◕‿◕✿)🕯️" },
              { label: "Hope", text: "Longest night of the year. Brighter days are on the way ✧(｡•́‿•̀｡)" },
              { label: "Cozy", text: "Blanket, tea, and candlelight. That is my solstice plan (˶ᵔ ᵕ ᵔ˶)" },
              { label: "To a friend", text: "Thinking of you on the longest night. Sending warmth (っ´▽`)っ" },
              { label: "Group chat", text: "Official notice: from tomorrow, we get a little more sun every day ＼(＾▽＾)／" },
            ],
          },
        ],
      },
      {
        id: "traditions",
        heading: "Midwinter traditions around the world",
        blocks: [
          {
            type: "p",
            text: "Many cultures mark the longest night. Knowing a friend's tradition makes your message feel personal, so here are some of the best known.",
          },
          {
            type: "table",
            head: ["Tradition", "Where", "How it is marked"],
            rows: [
              ["Yule", "Northern Europe, modern pagan groups", "Candles, a Yule log, evergreen branches, a feast"],
              ["Dongzhi (冬至)", "China and Chinese communities", "Families gather to eat tangyuan (rice balls) or dumplings"],
              ["Toji (冬至)", "Japan", "A hot bath with yuzu fruit and a dish of kabocha squash"],
              ["Shab-e Yalda", "Iran and Central Asia", "Staying up late with pomegranates, watermelon, and poetry by Hafez"],
              ["Newgrange sunrise", "Ireland", "Dawn light shines into a 5,000-year-old stone tomb"],
            ],
          },
          {
            type: "messages",
            items: [
              { label: "Dongzhi", text: "Happy Dongzhi! Save me a bowl of tangyuan 🥣 (๑´ڡ`๑)" },
              { label: "Toji", text: "Yuzu bath tonight and pumpkin for dinner. Happy Toji ♨ (˘ω˘)" },
              { label: "Yalda", text: "Happy Yalda night! Pomegranates, poems, and staying up late with you 🍉 (◕‿◕✿)" },
            ],
          },
        ],
      },
      {
        id: "captions",
        heading: "Captions for candle and sunrise photos",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Candle", text: "One candle for every good thing this year 🕯️ (˘︶˘)" },
              { label: "Sunrise", text: "Up early to see the shortest day begin 🌅 (◕ᴗ◕✿)" },
              { label: "Walk", text: "A cold walk and a warm drink to mark the solstice ❄ (๑˃ᴗ˂)ﻭ" },
              { label: "Dinner", text: "Quiet dinner for the longest night 🍲 (｡◕‿◕｡)" },
              { label: "Sunset", text: "Sunset at 4:30. Tomorrow it gets a little later ☾ (˘▾˘)" },
            ],
          },
          {
            type: "tip",
            text: "Soft faces fit this day better than loud ones. Pick calm eyes and a small smile.",
          },
        ],
      },
      {
        id: "summer",
        heading: "Messages for friends south of the equator",
        blocks: [
          {
            type: "p",
            text: "In Australia, New Zealand, South Africa, and South America, December 21 is the longest day of the year. Flip the message: talk about sun, beaches, and late light instead of candles.",
          },
          {
            type: "messages",
            items: [
              { label: "Summer", text: "Happy longest day! Enjoy every minute of that sun for me ☀ (≧▽≦)" },
              { label: "Swap", text: "You get the longest day, I get the longest night. Fair trade? (￣▽￣;)" },
              { label: "Beach", text: "Midsummer beach day while I sit by the heater. Send photos 🏖 (๑•̀ㅂ•́)و" },
            ],
          },
        ],
      },
      {
        id: "picking",
        heading: "Picking a face for the long night",
        blocks: [
          {
            type: "list",
            items: [
              "Closed or half-closed eyes, such as (˘︶˘) and (˘▾˘), read as peaceful and cozy.",
              "Add a moon ☾, a star ✧, or a candle 🕯️ beside the face to tie it to the night.",
              "Hug faces like (っ´▽`)っ suit messages to someone who finds dark winters hard.",
              "Save excited faces for the sun messages, where the mood is brighter.",
            ],
          },
        ],
      },
      {
        id: "ideas",
        heading: "Simple ways to mark the longest night",
        blocks: [
          {
            type: "p",
            text: "You do not need a big plan. Many people keep it small, and any of these makes a nice photo or a reason to invite a friend over.",
          },
          {
            type: "list",
            items: [
              "Turn off the lights after sunset and eat dinner by candlelight.",
              "Write down one thing you want to leave behind this year and one thing you hope for, then share the hope with someone.",
              "Get up for the sunrise the next morning and take a short walk to greet the first slightly longer day.",
              "Bake something round and golden, such as orange cake or sun-shaped cookies, to welcome the light back.",
              "Hang evergreen branches or a small wreath, an old Yule custom that keeps green in the house through winter.",
            ],
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Candlelit dinner at mine for the longest night. Bring a sweater and a story 🕯️ (◕‿◕✿)" },
              { label: "Hope", text: "Leaving this year's worries in the dark tonight. Here's to more light ✧(˘▾˘)" },
            ],
          },
        ],
      },
      {
        id: "more",
        heading: "More winter faces",
        blocks: [
          {
            type: "p",
            text: "For snow, cocoa, and cold-weather faces, see [winter kaomoji](/winter-kaomoji/). The [sleepy kaomoji](/sleepy-kaomoji/) page suits long, quiet nights, and [sparkle kaomoji](/sparkle-kaomoji/) works for candle and light captions. For longer holiday texts, read our [winter messages](/blog/winter-messages-with-kaomoji/) post.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is the winter solstice in 2026?",
        answer: "In the Northern Hemisphere it is on Monday, December 21, 2026 in the Americas and Europe. In parts of Asia and Australia it is already December 22 because of time zones. It is the shortest day of the year.",
      },
      {
        question: "What is the difference between the solstice and Yule?",
        answer: "The solstice is the astronomical moment of the shortest day. Yule is a midwinter festival that many people celebrate around that date.",
      },
      {
        question: "What is a good solstice message?",
        answer: "Keep it short and hopeful, such as: \"Longest night of the year. Brighter days are on the way.\"",
      },
      {
        question: "Why does the solstice date change between December 21 and 22?",
        answer: "The solstice is a single moment in time, set by the Earth's orbit. Depending on the year and your time zone, that moment can fall on December 20, 21, or 22 on your local calendar.",
      },
    ],
  },

  {
    slug: "kwanzaa-messages-with-kaomoji",
    title: "Kwanzaa Messages with Kaomoji: Greetings for All Seven Days",
    titleSegment: "Kwanzaa Messages & Greetings to Copy",
    description:
      "Kwanzaa messages with kaomoji for each of the seven days: Heri za Kwanzaa greetings, the seven principles, and warm texts for family and friends.",
    intro:
      "This is a seven-day celebration of African American culture, family, and community, held every year from December 26 to January 1. It was created by Maulana Karenga in 1966, and each day is tied to one principle. Below you will find what the days and symbols mean, a message for every day, and short texts for the feast and gifts, each with a soft kaomoji to add warmth.",
    face: "🕯️(◕‿◕✿)🕯️",
    event: "Kwanzaa · Dec 26 – Jan 1",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/thank-you-kaomoji", "/happy-kaomoji", "/hug-kaomoji", "/new-year-kaomoji"],
    sections: [
      {
        id: "days",
        heading: "The seven days and their principles",
        blocks: [
          {
            type: "table",
            head: ["Date (2026–27)", "Principle", "Meaning"],
            rows: [
              ["Dec 26", "Umoja", "Unity"],
              ["Dec 27", "Kujichagulia", "Self-determination"],
              ["Dec 28", "Ujima", "Collective work and responsibility"],
              ["Dec 29", "Ujamaa", "Cooperative economics"],
              ["Dec 30", "Nia", "Purpose"],
              ["Dec 31", "Kuumba", "Creativity"],
              ["Jan 1", "Imani", "Faith"],
            ],
          },
          {
            type: "tip",
            text: "The usual greeting is \"Heri za Kwanzaa\", Swahili for roughly \"happy Kwanzaa\". On each day, people also ask \"Habari gani?\" (\"what is the news?\") and answer with that day's principle, such as \"Umoja!\" on the first day.",
          },
        ],
      },
      {
        id: "symbols",
        heading: "The seven symbols",
        blocks: [
          {
            type: "p",
            text: "The holiday also has seven symbols, which are set out on a table at home. Knowing them helps you write a message that fits what the family is doing that night.",
          },
          {
            type: "table",
            head: ["Symbol", "What it is", "What it stands for"],
            rows: [
              ["Mkeka", "A woven mat", "History and tradition, the base for everything else"],
              ["Kinara", "A candle holder for seven candles", "The roots of the people"],
              ["Mishumaa saba", "Seven candles: one black, three red, three green", "The seven principles"],
              ["Mazao", "Fruit and vegetables", "The harvest and the reward of shared work"],
              ["Muhindi", "Ears of corn", "Children and the future"],
              ["Kikombe cha umoja", "The unity cup", "Remembering ancestors and staying together"],
              ["Zawadi", "Gifts", "Effort and promises kept, often handmade or for learning"],
            ],
          },
          {
            type: "p",
            text: "The black candle in the middle of the kinara is lit on the first night. On each night after that, one more candle is lit, red and green in turn, until all seven are burning on January 1.",
          },
        ],
      },
      {
        id: "each-day",
        heading: "A message for each day",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Umoja (Dec 26)", text: "Umoja today: unity. Grateful for everyone in my circle (人´∀`)" },
              { label: "Kujichagulia (Dec 27)", text: "Today is about speaking for ourselves and choosing our own path. Proud of you ٩(◕‿◕)۶" },
              { label: "Ujima (Dec 28)", text: "Ujima: we lift each other. Thank you for always showing up for this family (づ｡◕‿‿◕｡)づ" },
              { label: "Ujamaa (Dec 29)", text: "Ujamaa day, so we are buying from Black-owned shops in our neighborhood (๑•̀ㅂ•́)و✧" },
              { label: "Nia (Dec 30)", text: "Nia: purpose. Here's to a year of doing what matters to us ✧(｡•́‿•̀｡)" },
              { label: "Kuumba (Dec 31)", text: "Kuumba tonight: make something beautiful with the people you love (◕ᴗ◕✿)🎨" },
              { label: "Imani (Jan 1)", text: "Imani on the final day: faith in our people and our future (˘︶˘)🕯️" },
            ],
          },
        ],
      },
      {
        id: "greetings",
        heading: "Greetings for family and friends",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Opening", text: "Heri za Kwanzaa! Wishing you a week full of unity and joy (◕‿◕✿)🕯️" },
              { label: "Family", text: "Wishing my family a week of unity and light. So glad we light the candles together (づ｡◕‿‿◕｡)づ" },
              { label: "Friend", text: "Warm wishes to you this week, my friend. Thinking of you ♡(˘▾˘)" },
              { label: "Far away", text: "Lighting a candle tonight and thinking of all of you back home (っ´▽`)っ" },
              { label: "Habari gani?", text: "Habari gani? Nia! Today I am writing down three goals for the new year ✍ (๑•̀ㅂ•́)و✧" },
              { label: "Group chat", text: "Day five already! Who is lighting the candles tonight, and who is bringing dessert? (≧◡≦)" },
            ],
          },
        ],
      },
      {
        id: "karamu",
        heading: "Feast and gift messages",
        blocks: [
          {
            type: "p",
            text: "The Karamu is a large feast held on December 31, often with music, readings, and food from across the African diaspora. Gifts, called zawadi, are usually given on January 1, and handmade or educational gifts are encouraged.",
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Karamu at our place on the 31st! Bring a dish and a story (≧◡≦)" },
              { label: "Thanks for food", text: "Still full from last night's feast. Thank you for cooking with so much love (๑´ڡ`๑)" },
              { label: "Gift thanks", text: "Thank you for the book. I will read it this week and tell you everything (人´∀`)" },
            ],
          },
        ],
      },
      {
        id: "community",
        heading: "Posts for groups, schools, and community pages",
        blocks: [
          {
            type: "p",
            text: "Libraries, schools, churches, and community centers often host a candle lighting or a craft day during the week. A public post should be welcoming, give the time and place, and explain the day's principle in a few words for people who are new to it.",
          },
          {
            type: "messages",
            items: [
              { label: "Event", text: "Join us Saturday at 2 pm for a candle lighting and story hour. All ages welcome (◕‿◕✿)🕯️" },
              { label: "Craft day", text: "Kuumba means creativity, so today we are making paper kinaras in the library. Come build one with us ✂ (๑˃ᴗ˂)ﻭ" },
              { label: "Shop local", text: "Celebrating Ujamaa this week by spotlighting the Black-owned businesses on our street. Tell us your favorite ♡(˘▾˘)" },
            ],
          },
          {
            type: "p",
            text: "The week is a cultural celebration, not a religious one, so people of any faith take part. Many families celebrate it alongside Christmas or New Year, which is why a single message can often wish someone well for all three.",
          },
        ],
      },
      {
        id: "tips",
        heading: "A few tips",
        blocks: [
          {
            type: "list",
            items: [
              "Match the day. A message that names that day's principle feels more personal than a general one.",
              "Keep faces warm and simple. Soft smiles suit the tone better than jokes.",
              "Ask before you post about someone else's celebration, and let people share what they want.",
              "If you do not celebrate yourself, a simple \"wishing you a joyful week\" is warm and respectful.",
            ],
          },
          {
            type: "p",
            text: "For more warm faces, see [happy kaomoji](/happy-kaomoji/) and [hug kaomoji](/hug-kaomoji/). The week runs into the new year, so [New Year kaomoji](/new-year-kaomoji/) fits the last two days.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is Kwanzaa in 2026?",
        answer: "It runs from Saturday, December 26, 2026 to Friday, January 1, 2027.",
      },
      {
        question: "What does Heri za Kwanzaa mean?",
        answer: "It is the most common greeting of the week. \"Heri\" is Swahili for joy or good wishes, and the holiday's name comes from a Swahili phrase meaning \"first fruits\", so it means roughly \"joy of the first fruits\".",
      },
      {
        question: "Who created the holiday?",
        answer: "Maulana Karenga created it in 1966. It honors African heritage and is built around seven principles.",
      },
      {
        question: "What do the candle colors mean?",
        answer: "The black candle stands for the people, the red candles for their struggle, and the green candles for the land and hope for the future. Together they light up the seven principles.",
      },
      {
        question: "Is it a religious holiday?",
        answer: "No. It is a cultural celebration, so people of any religion can take part, and many celebrate it alongside Christmas or New Year.",
      },
    ],
  },

  {
    slug: "japanese-year-end-bonenkai-and-omisoka-with-kaomoji",
    title: "Japanese Year-End with Kaomoji: Bonenkai, Omisoka and New Year Cards",
    titleSegment: "Japanese Year-End: Bonenkai & Omisoka",
    description:
      "Japanese year-end customs with kaomoji: bonenkai parties, Omisoka and toshikoshi soba, New Year cards, plus messages to copy in English and Japanese.",
    intro:
      "Kaomoji come from Japan, so it fits to look at how the year ends there. December is full of parties, cleaning, and cards, New Year's Eve has its own foods and bells, and the first days of January have customs of their own. Below is a short guide to each one, with messages to copy in English and Japanese and a face to match.",
    face: "(＾▽＾)🎍",
    event: "Bonenkai · Dec",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/japanese-emoticons", "/new-year-kaomoji", "/bowing-kaomoji", "/food-kaomoji"],
    sections: [
      {
        id: "customs",
        heading: "Year-end customs at a glance",
        blocks: [
          {
            type: "table",
            head: ["Custom", "When", "What it is"],
            rows: [
              ["Bonenkai (忘年会)", "Through December", "A \"forget the year\" party with coworkers or friends"],
              ["Osoji (大掃除)", "Late December", "A deep clean of the home before the new year"],
              ["Nengajo (年賀状)", "Posted by about Dec 25", "New Year cards that arrive on January 1"],
              ["Omisoka (大晦日)", "Dec 31", "New Year's Eve"],
              ["Toshikoshi soba (年越しそば)", "Dec 31", "Noodles eaten for a long life"],
              ["Joya no kane (除夜の鐘)", "Dec 31, midnight", "Temple bells rung 108 times"],
            ],
          },
        ],
      },
      {
        id: "party",
        heading: "Year-end party messages",
        blocks: [
          {
            type: "p",
            text: "The year-end party is a way to thank people and leave the year's stress behind. The tone is warm and a little silly. These work for a team chat or a friend group.",
          },
          {
            type: "messages",
            items: [
              { label: "Invite", text: "Year-end party on Friday at 7! Come and forget the whole year with us (๑•̀ㅂ•́)و✧" },
              { label: "Thanks", text: "Thank you for all your help this year. Let's finish it with good food (人´∀`)" },
              { label: "Toast", text: "Kanpai! Here's to a year we survived 🍻 (≧◡≦)" },
              { label: "Japanese", text: "今年もお疲れ様でした！来年もよろしくお願いします (^▽^)/" },
              { label: "Can't come", text: "So sorry I can't make it. Have a great night and save me a story (｡•́︿•̀｡)" },
            ],
          },
          {
            type: "tip",
            text: "「お疲れ様でした」 means roughly \"thank you for your hard work\". 「来年もよろしくお願いします」 means \"please look after me again next year\".",
          },
        ],
      },
      {
        id: "manners",
        heading: "Party manners worth knowing",
        blocks: [
          {
            type: "list",
            items: [
              "Wait for the opening toast. Nobody drinks until someone, often the most senior person, says \"kanpai\".",
              "Pour for others, not for yourself. Keep an eye on your neighbors' glasses, and they will fill yours.",
              "Non-alcoholic drinks are fine. Oolong tea or a soft drink in your glass for the toast is normal.",
              "Thank the organizer the next day. A short message the morning after is a common, polite touch.",
            ],
          },
          {
            type: "messages",
            items: [
              { label: "Next morning", text: "Thank you for organizing last night. It was the best way to end the year (人´∀`)" },
              { label: "Japanese", text: "昨日はありがとうございました！とても楽しかったです (*^▽^*)" },
            ],
          },
          {
            type: "p",
            text: "「昨日はありがとうございました」 means \"thank you for yesterday\", and 「とても楽しかったです」 means \"I had a really good time\".",
          },
        ],
      },
      {
        id: "osoji",
        heading: "Osoji: the big clean",
        blocks: [
          {
            type: "p",
            text: "In the last week of December, families, schools, and offices clean from top to bottom so the new year can start fresh. Windows, shelves, and the corners nobody touches all year get attention. It is hard work, which makes it a good topic for a funny text.",
          },
          {
            type: "messages",
            items: [
              { label: "Progress", text: "Osoji day 1: found three lost pens and one very old snack (￣▽￣;)" },
              { label: "Done", text: "The whole flat is clean. I am ready for the new year and also a nap ٩(ˊᗜˋ*)و" },
              { label: "Office", text: "Desk cleaned for the first time since March. Who am I? ✧(◕‿◕✿)" },
              { label: "Help wanted", text: "Will trade dinner for help cleaning the windows this weekend (｡•́︿•̀｡)🧽" },
            ],
          },
        ],
      },
      {
        id: "omisoka",
        heading: "Omisoka messages",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Soba", text: "Soba is ready. Long noodles, long life, happy Omisoka 🍜 (๑˃ᴗ˂)ﻭ" },
              { label: "Bells", text: "Listening to the temple bells and thinking of everyone I'm thankful for (˘︶˘)🔔" },
              { label: "Japanese", text: "良いお年をお迎えください (^_^)ゞ" },
            ],
          },
          {
            type: "p",
            text: "「良いお年をお迎えください」 is said before the new year starts and means \"have a good new year\". After midnight, people switch to 「あけましておめでとうございます」, which means \"happy new year\". Many families also watch the long music show Kohaku Uta Gassen on TV before heading out to hear the bells.",
          },
        ],
      },
      {
        id: "nengajo",
        heading: "Writing a New Year card",
        blocks: [
          {
            type: "p",
            text: "Nengajo are postcards sent to friends, family, and coworkers. The post office holds the cards posted in time and delivers them all on the morning of January 1. Most cards show the zodiac animal of the coming year. 2027 is the Year of the Sheep (羊), so expect a lot of fluffy drawings.",
          },
          {
            type: "table",
            head: ["Phrase", "Reading", "Meaning"],
            rows: [
              ["謹賀新年", "kinga shinnen", "A formal \"happy new year\" for cards"],
              ["あけましておめでとうございます", "akemashite omedetou gozaimasu", "Happy new year (polite)"],
              ["今年もよろしくお願いします", "kotoshi mo yoroshiku onegaishimasu", "Please look after me again this year"],
              ["良いお年を", "yoi otoshi o", "Have a good new year (said before Jan 1)"],
            ],
          },
          {
            type: "messages",
            items: [
              { label: "Card line", text: "あけましておめでとうございます！今年もよろしくお願いします (*^▽^*)" },
              { label: "English card", text: "Happy New Year! Thank you for last year, and I hope we see more of each other this year (◕‿◕✿)" },
            ],
          },
          {
            type: "tip",
            text: "A family in mourning does not send New Year cards. Instead they post a short notice in November or early December, so friends know not to send one.",
          },
        ],
      },
      {
        id: "january",
        heading: "The first days of January",
        blocks: [
          {
            type: "list",
            items: [
              "Hatsuhinode (初日の出): watching the first sunrise of the year.",
              "Hatsumode (初詣): the first visit to a shrine or temple to pray for the year ahead.",
              "Osechi ryori (おせち料理): boxed New Year food, where each dish carries a wish such as health or long life.",
              "Otoshidama (お年玉): small envelopes of money given to children.",
            ],
          },
          {
            type: "messages",
            items: [
              { label: "Sunrise", text: "Saw the first sunrise of the year. Wishing you a bright one 🌅 (˘▾˘)" },
              { label: "Shrine", text: "First shrine visit done. I wished for good health for all of us ⛩ (人´∀`)" },
            ],
          },
        ],
      },
      {
        id: "more",
        heading: "More Japanese-style faces",
        blocks: [
          {
            type: "p",
            text: "See [Japanese emoticons](/japanese-emoticons/) for the history behind these faces and [bowing kaomoji](/bowing-kaomoji/) for polite thank-yous. For the countdown itself, use [New Year kaomoji](/new-year-kaomoji/), and for the noodles, [food kaomoji](/food-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a bonenkai?",
        answer: "It is a year-end party in Japan, often held with coworkers. The name means \"forget the year party\".",
      },
      {
        question: "Why do people eat soba on New Year's Eve in Japan?",
        answer: "The long noodles stand for a long life, and soba is easy to cut, which suggests leaving the old year's troubles behind.",
      },
      {
        question: "When should I post a New Year card in Japan?",
        answer: "Post it by about December 25 so it arrives on the morning of January 1. Cards posted later still arrive, just a few days into the new year, and that is fine.",
      },
      {
        question: "How do you say happy new year in Japanese?",
        answer: "Say あけましておめでとうございます (akemashite omedetou gozaimasu) after midnight. Before the new year starts, say 良いお年を (yoi otoshi o).",
      },
    ],
  },

  {
    slug: "end-of-year-thank-you-messages-for-work-with-kaomoji",
    title: "End-of-Year Thank-You Messages for Work with Kaomoji",
    titleSegment: "End-of-Year Work Thank-You Messages",
    description:
      "End-of-year thank-you messages for coworkers, your boss, clients and your team, with light kaomoji options that stay professional. Copy and send in one tap.",
    intro:
      "December is a good time to thank the people you work with, and a short note goes a long way. The trick is tone. A face can make a message warmer, but it should still suit the person who gets it. Below is a simple way to write your own note, ready-made lines for coworkers, managers, clients, your own team, and the people behind the scenes, and advice on when to use a face and when to leave it out.",
    face: "(＾▽＾)🎁",
    event: "Year-End · Dec",
    published: "2026-11-15",
    updated: "2026-11-15",
    related: ["/thank-you-kaomoji", "/bowing-kaomoji", "/happy-kaomoji", "/new-year-kaomoji"],
    sections: [
      {
        id: "rule",
        heading: "When a face fits",
        blocks: [
          {
            type: "list",
            items: [
              "Peers and close teammates: a face is usually fine.",
              "Your boss: use a face only if you already use them in chat.",
              "Clients: use no face, or a very simple one like (^_^), and only if they use emoji first.",
              "Formal email: leave faces out and keep them for chat apps.",
            ],
          },
        ],
      },
      {
        id: "formula",
        heading: "How to write your own in four parts",
        blocks: [
          {
            type: "steps",
            items: [
              "Use their name. A message to one person beats a reply-all.",
              "Name one specific thing they did, such as covering a shift, fixing a bug, or answering every question you asked.",
              "Say what it changed: \"the launch went out on time\" or \"I felt less lost in my first month\".",
              "Close with a wish for the break or the new year, and add a face only if it suits the person.",
            ],
          },
          {
            type: "p",
            text: "Put together, it reads like this: \"Priya, thanks for covering my calls in October. It meant I could finish the report on time. Have a restful break!\" Three short sentences are enough. Longer notes are lovely, but most people read these on a phone between meetings.",
          },
        ],
      },
      {
        id: "team",
        heading: "For coworkers and your team",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Team", text: "Thank you all for a great year. I'm proud of what we built together (人´∀`)" },
              { label: "Coworker", text: "Thanks for always having my back this year. Enjoy your break! (◕‿◕✿)" },
              { label: "Help", text: "Thank you for the help on the launch. I could not have done it without you ٩(◕‿◕)۶" },
              { label: "Holiday", text: "Wishing everyone a restful break and a strong start in January (˘▾˘)" },
              { label: "New hire", text: "Thanks for being so patient with my questions this year. You made starting here easy (◕ᴗ◕✿)" },
            ],
          },
        ],
      },
      {
        id: "boss",
        heading: "For your manager and clients",
        blocks: [
          {
            type: "messages",
            items: [
              { label: "Manager", text: "Thank you for your guidance this year. I learned a lot and appreciate your support (^_^)" },
              { label: "Manager, formal", text: "Thank you for your support this year. Wishing you a restful holiday season." },
              { label: "Client", text: "Thank you for trusting us this year. We look forward to working together in the new year." },
              { label: "Client, warm", text: "It has been a pleasure working with you this year. Happy holidays! (^_^)" },
            ],
          },
          {
            type: "tip",
            text: "Name one specific thing. \"Thanks for the extra hours on the launch\" is stronger than \"thanks for everything\".",
          },
        ],
      },
      {
        id: "reports",
        heading: "If you lead a team",
        blocks: [
          {
            type: "p",
            text: "A note from a manager carries extra weight. Thank each person for something different, and send it before the review season so it does not feel like part of a rating.",
          },
          {
            type: "messages",
            items: [
              { label: "Whole team", text: "This year was a lot, and you handled all of it. Thank you, and please really switch off over the break (人´∀`)" },
              { label: "One person", text: "Thank you for taking the lead on the support backlog. The whole team felt the difference (๑•̀ㅂ•́)و✧" },
              { label: "Growth", text: "I loved watching you grow into the client calls this year. Proud to work with you (◕‿◕✿)" },
            ],
          },
        ],
      },
      {
        id: "behind",
        heading: "For the people behind the scenes",
        blocks: [
          {
            type: "p",
            text: "IT, office staff, cleaners, and support teams make every other job possible and rarely get thanked. A short note to them is often the one people remember.",
          },
          {
            type: "messages",
            items: [
              { label: "IT", text: "Thanks for rescuing my laptop twice this year. You are a hero (≧▽≦)" },
              { label: "Office", text: "Thank you for keeping the office running all year, coffee included ☕ (˘▾˘)" },
              { label: "Mentor", text: "Thank you for every coffee chat this year. Your advice helped more than you know (人´∀`)" },
            ],
          },
        ],
      },
      {
        id: "channel",
        heading: "Chat, email, or card?",
        blocks: [
          {
            type: "p",
            text: "Where you send thank-you messages changes how they should read. Match the channel to the person and how well you know them.",
          },
          {
            type: "list",
            items: [
              "Team chat (Slack, Teams): short, friendly, and the best place for a face. Send it as a direct message rather than in a busy channel.",
              "Email: one short paragraph, a clear subject such as \"Thank you for this year\", and no faces for clients or senior leaders.",
              "Handwritten card: the most personal choice for a mentor or a close manager. A few lines are enough.",
              "Public shout-out: great for teammates who like credit. Ask first if the person is shy.",
            ],
          },
          {
            type: "p",
            text: "Whichever you choose, thank-you messages land best when they are sent on their own, not tacked on to a work request. Keep the ask for another day.",
          },
        ],
      },
      {
        id: "faces",
        heading: "Safe faces for work chat",
        blocks: [
          {
            type: "table",
            head: ["Face", "Tone", "Safe for"],
            rows: [
              ["(^_^)", "Polite smile", "Anyone in chat, including clients who use emoji"],
              ["(人´∀`)", "Grateful", "Peers and your own team"],
              ["(˘▾˘)", "Calm and kind", "Holiday wishes"],
              ["٩(◕‿◕)۶", "Cheerful", "Close teammates"],
              ["m(_ _)m", "A deep bow", "Apologies or very formal thanks"],
            ],
          },
          {
            type: "p",
            text: "Skip crying, angry, or flirty faces at work, even as a joke. They are easy to misread in writing, and a thank-you note should never need explaining.",
          },
        ],
      },
      {
        id: "more",
        heading: "Where to find more",
        blocks: [
          {
            type: "p",
            text: "The [thank you kaomoji](/thank-you-kaomoji/) page has grateful faces, and [bowing kaomoji](/bowing-kaomoji/) suits formal thanks. For the new year, see [New Year kaomoji](/new-year-kaomoji/) and our [New Year's Eve texts](/blog/new-years-eve-texts-with-kaomoji/).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is it okay to use kaomoji in work messages?",
        answer: "Yes, with peers and in chat apps where others use them. With clients and in formal email, keep it plain.",
      },
      {
        question: "What is a good end-of-year thank-you for a coworker?",
        answer: "Name one thing they did and say thanks, such as: \"Thanks for the help on the launch. Enjoy your break!\"",
      },
      {
        question: "When should I send year-end thank-yous?",
        answer: "Send them in the last full week before the holidays, so people read them before they log off.",
      },
      {
        question: "Should I send thank-you messages to everyone on my team?",
        answer: "If the team is small, yes, and make each one a little different. In a large team, send one group message and add personal notes for the people you worked with most.",
      },
    ],
  },
];
