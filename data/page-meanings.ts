/**
 * Per-page "popular faces and what they mean" cards (page 1 only).
 * Hand-written: each card explains the mood and which characters build it,
 * so mood pages carry unique teaching copy beyond the face grid.
 */
export type PageMeaning = {
  face: string;
  name: string;
  meaning: string;
  parts: string;
};

export const PAGE_MEANINGS: Record<string, PageMeaning[]> = {
  "/sick-kaomoji": [
    { face: "(´×ω×`)😷", name: "Mask on", meaning: "I'm sick, staying away.", parts: "× eyes look unwell; 😷 is a face mask." },
    { face: "🤧( >_<)ｸｼｭﾝ", name: "Sneeze", meaning: "Cold or hay fever.", parts: "> < squeezed eyes mid-sneeze; ｸｼｭﾝ (kushun) is 'achoo'." },
    { face: "(｡ŏ﹏ŏ) ｺﾞﾎｺﾞﾎ", name: "Cough", meaning: "Coughing, sore throat.", parts: "ŏ tired eyes, ﹏ a wobbly mouth, ｺﾞﾎｺﾞﾎ (goho goho) the cough." },
    { face: "(づ｡◕‿‿◕｡)づ💊 feel better", name: "Get well soon", meaning: "Caring message to a sick friend.", parts: "づ arms offer a 💊, with a warm ◕‿‿◕ smile." },
  ],
  "/scared-kaomoji": [
    { face: "(((( ;°Д°))))", name: "Trembling", meaning: "Shaking with fear.", parts: "Stacked (((( )))) brackets look like the face is vibrating; °Д° is terror." },
    { face: "(/ω＼)", name: "Can't look", meaning: "Too scared to watch.", parts: "/ ＼ are hands covering the eyes." },
    { face: "ε=ε=┌(;°□°)┘", name: "Run away", meaning: "Fleeing in fear.", parts: "ε= are dust puffs; ┌ ┘ are pumping arms." },
    { face: "(ㆆ_ㆆ)", name: "Uneasy stare", meaning: "Creeped out.", parts: "ㆆ eyes are wary and tense; _ is a flat, worried mouth." },
  ],
  "/devil-kaomoji": [
    { face: "Ψ(｀▽´)Ψ", name: "Little devil", meaning: "Playful mischief.", parts: "Ψ pitchforks on both sides; ｀ ´ scheming brows; ▽ a wide grin." },
    { face: "(◣‿◢)Ψ", name: "Wicked grin", meaning: "Up to no good.", parts: "◣ ◢ are sharp, angled brows over a sly ‿ smile." },
    { face: "ψ(｀∇´)ψ", name: "Devil cheer", meaning: "Gleeful evil.", parts: "ψ is a smaller pitchfork; ∇ an open, laughing mouth." },
    { face: "😈 mwahaha (｀∀´)", name: "Evil laugh", meaning: "Villain laugh.", parts: "😈 adds horns; mwahaha is the classic villain laugh." },
  ],
  "/cool-kaomoji": [
    { face: "(⌐■_■)", name: "Sunglasses", meaning: "Cool, confident, unbothered.", parts: "⌐ is the frame arm, ■ ■ dark lenses, and _ the bridge." },
    { face: "( •_•)>⌐■-■", name: "Putting them on", meaning: "Step one of 'deal with it'.", parts: "A plain face holds ⌐■-■ glasses in its > hand." },
    { face: "(☞⌐■_■)☞", name: "Finger guns", meaning: "Smooth, 'ayy'.", parts: "☞ hands point forward on both sides of the shades." },
    { face: "(▀̿Ĺ̯▀̿ ̿)", name: "Cool guy", meaning: "Big, heavy-shade swagger.", parts: "▀ bars are thick lenses; Ĺ̯ is a smirking mouth." },
  ],
  "/thank-you-kaomoji": [
    { face: "(人´∀`)", name: "Grateful hands", meaning: "Thank you, sincerely.", parts: "人 looks like two hands pressed together; ∀ is a warm smile." },
    { face: "(◍•ᴗ•◍)❤", name: "Heartfelt thanks", meaning: "Thanks with love.", parts: "◍ are round blushing cheeks and ❤ is the feeling." },
    { face: "(*´ｰ`人)ｱﾘｶﾞﾄ", name: "Arigato", meaning: "Thank you in Japanese.", parts: "ｱﾘｶﾞﾄ is half-width katakana for arigato." },
    { face: "m(_ _)m", name: "Bow of thanks", meaning: "Deep, formal gratitude.", parts: "m m are hands on the floor and _ _ the lowered head." },
  ],
  "/sorry-kaomoji": [
    { face: "m(_ _)m", name: "Deep bow", meaning: "A sincere apology.", parts: "Hands (m) on the floor and a head bowed so low only _ _ shows." },
    { face: "orz", name: "On my knees", meaning: "Deep regret or defeat.", parts: "o is the head, r the arms, z the folded legs — seen from the side." },
    { face: "(｡•́︿•̀｡)", name: "Sad sorry", meaning: "I feel bad about it.", parts: "Sloped eyes and a ︿ frown; ｡ are soft cheeks." },
    { face: "(>_<) my bad", name: "My bad", meaning: "A light, everyday oops.", parts: "> < are squeezed eyes — a wince at your own mistake." },
  ],
  "/thanksgiving-kaomoji": [
    { face: "🦃(◕ᴗ◕)🦃", name: "Happy turkey", meaning: "Happy Thanksgiving.", parts: "A bright ◕ᴗ◕ smile between two 🦃 turkeys." },
    { face: "🥧(๑´ڡ`๑)", name: "Pie time", meaning: "So tasty.", parts: "ڡ is a tongue licking the lips; ๑ are cheeks." },
    { face: "(人´∀`)🙏 thankful", name: "Thankful", meaning: "Grateful for the day.", parts: "人 is pressed hands — the shape of thanks." },
    { face: "(｡-_-｡)zzZ 🦃", name: "Food coma", meaning: "Too full, need a nap.", parts: "Closed - eyes and zzZ snoring after the turkey." },
  ],
  "/food-kaomoji": [
    { face: "(*´﹃｀*)", name: "Drooling", meaning: "Craving something delicious.", parts: "﹃ hangs under the face like a line of drool." },
    { face: "(๑´ڡ`๑)", name: "Yummy", meaning: "That tastes great.", parts: "ڡ, an Arabic letter, looks like a tongue licking the lips." },
    { face: "(っ˘ڡ˘ς)", name: "Slurping", meaning: "Eating happily, often noodles.", parts: "っ ς are hands holding a bowl; ڡ is the tongue." },
    { face: "( ´・ω・)っ旦", name: "Tea time", meaning: "Offering a cup of tea.", parts: "旦 looks like a teacup on a saucer." },
  ],
  "/shy-kaomoji": [
    { face: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", name: "Blushing", meaning: "Flustered and shy.", parts: "⁄ slashes across the face are blush lines." },
    { face: "(〃▽〃)", name: "Bashful smile", meaning: "Happy but embarrassed.", parts: "〃 marks are rosy cheeks around a ▽ smile." },
    { face: "(*/ω＼*)", name: "Hiding face", meaning: "Too shy to look.", parts: "/ ＼ are hands covering the eyes." },
    { face: "(//▽//)", name: "Red-faced", meaning: "Very embarrassed.", parts: "// are deep blush marks on both cheeks." },
  ],
  "/flower-kaomoji": [
    { face: "(✿◠‿◠)", name: "Flower smile", meaning: "Sweet and gentle.", parts: "✿ is a flower tucked by the face like a hair clip." },
    { face: "(◕‿◕✿)", name: "Flower in hair", meaning: "Cute and cheerful.", parts: "✿ sits on the side of the head — a flower hair pin." },
    { face: "❀(*´▽`*)❀", name: "Blossom cheer", meaning: "Happy spring mood.", parts: "❀ blossoms frame a beaming face." },
    { face: "(｡♡‿♡｡)🌸", name: "Sakura love", meaning: "Loving cherry blossom season.", parts: "♡ eyes and a 🌸 sakura flower." },
  ],
  "/text-faces": [
    { face: "ಠ_ಠ", name: "Look of disapproval", meaning: "Unimpressed, judging.", parts: "ಠ is a Kannada letter used as a glaring eye." },
    { face: "(ʘ‿ʘ)", name: "Wide stare", meaning: "Creepy-happy or intense.", parts: "ʘ is a Latin letter (a click sound) used as a big round eye." },
    { face: "ლ(ಠ益ಠლ)", name: "Why?!", meaning: "Exasperated frustration.", parts: "ლ are raised hands; 益 is gritted teeth." },
    { face: "(ง'̀-'́)ง", name: "Fight me", meaning: "Ready to fight.", parts: "ง are raised fists in a boxing stance." },
  ],
  "/uwu-kaomoji": [
    { face: "UwU", name: "UwU", meaning: "Soft, happy, affectionate.", parts: "U U are closed happy eyes; w is a small cat mouth." },
    { face: "OwO", name: "OwO", meaning: "Curious or surprised.", parts: "O O are wide open eyes over the w mouth." },
    { face: "(˘ω˘)", name: "Content uwu", meaning: "Cozy and relaxed.", parts: "˘ are closed eyes; ω is the classic kaomoji cat mouth." },
    { face: "(ᵘʷᵘ)", name: "Tiny uwu", meaning: "Extra-cute, small uwu.", parts: "Superscript ᵘʷᵘ letters make a mini face." },
  ],
  "/bowing-kaomoji": [
    { face: "m(_ _)m", name: "Deep bow", meaning: "Respect, thanks, or apology.", parts: "m m are hands on the floor; _ _ is the bowed head." },
    { face: "(シ_ _)シ", name: "Bow with hands", meaning: "Polite bow.", parts: "シ shapes are hands placed on the ground." },
    { face: "<(_ _)>", name: "Standing bow", meaning: "A formal greeting bow.", parts: "< > are arms at the sides while the head lowers." },
    { face: "orz", name: "Dogeza", meaning: "Kneeling — deepest apology or defeat.", parts: "o head, r arms, z legs: a person on hands and knees." },
  ],
  "/pout-kaomoji": [
    { face: "(￣ヘ￣)", name: "Hmph", meaning: "Sulking, mildly annoyed.", parts: "Flat ￣ eyes and a ヘ downturned mouth." },
    { face: "( ˘•ω•˘ )", name: "Pouty", meaning: "Unhappy but cute.", parts: "˘ raised brows over a small ω mouth." },
    { face: "(｀ε´)", name: "Puckered pout", meaning: "Grumpy pout.", parts: "ε is pushed-out lips; ｀ ´ are frowning brows." },
    { face: "(¬､¬)", name: "Side-eye sulk", meaning: "Not talking to you.", parts: "¬ eyes look away; ､ is a tiny frown." },
  ],
  "/japanese-emoticons": [
    { face: "(^_^)", name: "Classic smile", meaning: "Happy — the original Japanese emoticon.", parts: "^ ^ are smiling closed eyes; read upright, not sideways." },
    { face: "(´・ω・`)", name: "Shobon", meaning: "Disappointed or deflated.", parts: "´ ` are drooping brows; ω is a small mouth." },
    { face: "(＾▽＾)", name: "Big grin", meaning: "Very happy.", parts: "Full-width ＾ eyes and a ▽ open mouth." },
    { face: "(-_-;)", name: "Sweat drop", meaning: "Awkward or exasperated.", parts: "; is a sweat drop borrowed from manga." },
  ],
  "/confused-kaomoji": [
    { face: "(・・?)", name: "Head tilt", meaning: "Puzzled — 'wait, what?'", parts: "Dot eyes stare blankly while the ? floats beside the head like a thought." },
    { face: "(⊙_☉)", name: "Mismatched eyes", meaning: "Something does not add up.", parts: "One ⊙ and one ☉ eye look in different directions, showing a brain trying to process." },
    { face: "(￣ω￣;)", name: "Awkward confusion", meaning: "Unsure and a little uncomfortable.", parts: "Flat ￣ eyes and the ; sweat drop add awkwardness to the confusion." },
    { face: "ヽ(゜～゜o)ノ", name: "Clueless arms", meaning: "No idea what is going on.", parts: "Raised ヽ ノ arms and a wavy ～ mouth show helpless bewilderment." },
  ],
  "/dance-kaomoji": [
    { face: "♪┏(・o･)┛♪", name: "Disco dance", meaning: "Dancing to the music.", parts: "┏ and ┛ are bent arms mid-move, and ♪ notes set the beat." },
    { face: "ヾ(⌐■_■)ノ♪", name: "Cool dance", meaning: "Dancing with style.", parts: "⌐■_■ are sunglasses; ヾ and ノ are waving arms." },
    { face: "└(＾＾)┐", name: "Side shuffle", meaning: "A happy little dance.", parts: "└ ┐ arms swing in opposite directions, like a step to the side." },
    { face: "₍₍ ◝(●˙꒳˙●)◜ ₎₎", name: "Wiggle dance", meaning: "Cute bouncing dance.", parts: "₍₍ ₎₎ are motion lines, and ◝ ◜ are arms raised in a wiggle." },
  ],
  "/birthday-kaomoji": [
    { face: "ヽ(°〇°)ﾉ🎂", name: "Cake surprise", meaning: "Excited birthday cheer.", parts: "Wide 〇 mouth and raised arms celebrate the 🎂 cake." },
    { face: "\\(★ω★)/", name: "Star-eyed celebration", meaning: "Big birthday joy.", parts: "★ eyes sparkle and both arms shoot up in a cheer." },
    { face: "(っ˘ڡ˘ς)🍰", name: "Eating cake", meaning: "Enjoying birthday cake.", parts: "ڡ is a tongue licking the lips — 'yummy'." },
    { face: "🎉(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", name: "Party sparkle", meaning: "Throwing confetti for someone.", parts: "ﾉ arms toss *:･ﾟ✧ glitter into the air." },
  ],
  "/shocked-kaomoji": [
    { face: "(°ロ°)", name: "Open-mouth shock", meaning: "Stunned surprise.", parts: "° eyes are wide open and ロ (a katakana box) is a gaping mouth." },
    { face: "Σ(°△°|||)", name: "Gasp", meaning: "Sudden shock or horror.", parts: "Σ is a jolt of surprise; ||| are vertical shock lines on the face." },
    { face: "(⊙_⊙)", name: "Stare", meaning: "Speechless disbelief.", parts: "Round ⊙ eyes and a flat mouth freeze the face mid-shock." },
    { face: "∑(O_O;)", name: "Double take", meaning: "Did that really happen?", parts: "∑ marks a surprise jolt and ; adds a nervous sweat drop." },
  ],
  "/sleepy-kaomoji": [
    { face: "(－_－) zzZ", name: "Sleeping", meaning: "Fast asleep or bored to sleep.", parts: "－ － are closed eyes and zzZ is snoring." },
    { face: "(¦3[▓▓]", name: "In bed", meaning: "Tucked in, not getting up.", parts: "¦3 is a sideways sleeping face and [▓▓] is a blanket." },
    { face: "(ᴗ˳ᴗ)", name: "Soft sleep", meaning: "Peaceful, gentle sleep.", parts: "ᴗ curved lids are closed eyes; ˳ is a tiny open mouth." },
    { face: "(*-ω-)", name: "Drowsy", meaning: "Getting sleepy.", parts: "Half-closed - eyes and a relaxed ω mouth." },
  ],
  "/smug-kaomoji": [
    { face: "(￣ー￣)", name: "Smirk", meaning: "Pleased with yourself.", parts: "Flat ￣ eyes look down and ー is a sly, closed smile." },
    { face: "( ͡° ͜ʖ ͡°)", name: "Lenny smirk", meaning: "Cheeky or suggestive.", parts: "Raised ͡ eyebrows and the ͜ʖ smirk make the famous Lenny face." },
    { face: "(¬‿¬)", name: "Side-eye smirk", meaning: "Knowing look.", parts: "¬ eyes glance sideways and ‿ is a small smug smile." },
    { face: "( ̄▽ ̄)ノ", name: "Smug wave", meaning: "Told you so.", parts: "Satisfied ￣ eyes, a wide ▽ grin, and a casual ノ wave." },
  ],
  "/thinking-kaomoji": [
    { face: "(￢_￢)", name: "Hmm", meaning: "Thinking it over, unconvinced.", parts: "￢ eyes glance to the side while the flat mouth stays neutral." },
    { face: "(・・ ) ?", name: "Pondering", meaning: "Wondering about something.", parts: "Eyes look off to one side with a ? hovering nearby." },
    { face: "( ˘･з･)", name: "Pouty thinking", meaning: "Considering, a bit doubtful.", parts: "з is a pursed mouth, like 'hmm' with the lips pushed out." },
    { face: "(ーー;)", name: "Deep thought", meaning: "Concentrating hard.", parts: "Lowered ーー eyes and a ; sweat drop show mental effort." },
  ],
  "/crying-kaomoji": [
    { face: "(╥﹏╥)", name: "Streaming tears", meaning: "Crying, deeply sad.", parts: "╥ are eyes with tears running down; ﹏ is a trembling mouth." },
    { face: "(T_T)", name: "Classic cry", meaning: "Sad or disappointed.", parts: "T shapes are eyes with tear lines falling straight down." },
    { face: "｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡", name: "Sobbing", meaning: "Crying hard, wailing.", parts: "Д is a wide-open crying mouth; ｡ﾟ marks are flying tears." },
    { face: "(っ˘̩╭╮˘̩)っ", name: "Hold me", meaning: "Sad and needing a hug.", parts: "˘̩ are teary eyes, ╭╮ a frown, and っ arms reaching out." },
  ],
  "/hug-kaomoji": [
    { face: "(づ｡◕‿‿◕｡)づ", name: "Big hug", meaning: "Sending a warm hug.", parts: "づ are arms reaching forward; ｡ are blushing cheeks." },
    { face: "⊂(・ω・*⊂)", name: "Running hug", meaning: "Coming in for a hug.", parts: "⊂ arms stretch out in front, like rushing toward someone." },
    { face: "(っ´▽｀)っ", name: "Happy hug", meaning: "Friendly, cheerful hug.", parts: "っ is a small arm; ▽ is a big happy mouth." },
    { face: "(つ≧▽≦)つ", name: "Excited hug", meaning: "Can't wait to hug you.", parts: "≧ ≦ are squeezed happy eyes, つ open arms." },
  ],
  "/excited-kaomoji": [
    { face: "ヽ(°〇°)ﾉ", name: "Wow", meaning: "Super excited or amazed.", parts: "Raised ヽ ﾉ arms and a round 〇 mouth shout 'wow!'." },
    { face: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", name: "Sparkle toss", meaning: "Pure excitement.", parts: "◕ヮ◕ is a beaming face and *:･ﾟ✧ is thrown glitter." },
    { face: "☆*:.｡.o(≧▽≦)o.｡.:*☆", name: "Starburst", meaning: "Overjoyed.", parts: "≧▽≦ is a squealing face framed by twinkling ☆ trails." },
    { face: "(๑>ᴗ<๑)", name: "Squee", meaning: "Excited squeal.", parts: "> < eyes are squeezed shut with joy; ๑ are rosy cheeks." },
  ],
  "/wink-kaomoji": [
    { face: "(^_~)", name: "Classic wink", meaning: "Joking or 'you know'.", parts: "^ is an open happy eye, ~ a winking eye." },
    { face: "(｡•̀ᴗ-)✧", name: "Sparkle wink", meaning: "Confident, playful wink.", parts: "- is the closed eye; ✧ adds a twinkle." },
    { face: "(o‿∩)", name: "Cute wink", meaning: "Sweet, friendly wink.", parts: "∩ is a closed eye curving up in a smile." },
    { face: "( ˘ ³˘)♥", name: "Kissy wink", meaning: "Flirty and affectionate.", parts: "˘ are relaxed eyes, ³ puckered lips, ♥ love." },
  ],
  "/love-kaomoji": [
    { face: "(♡μ_μ)", name: "Lovestruck", meaning: "Shy, in love.", parts: "μ eyes look down bashfully next to a ♡." },
    { face: "(´∀｀)♡", name: "Happy love", meaning: "Simple, warm affection.", parts: "∀ is a big smile and ♡ is the feeling." },
    { face: "(*♡∀♡)", name: "Heart eyes", meaning: "Adoring someone.", parts: "♡ eyes replace normal ones: total crush." },
    { face: "(ღ˘⌣˘ღ)", name: "Gentle love", meaning: "Soft, content affection.", parts: "ღ are heart-shaped cheeks; ⌣ is a calm smile." },
  ],
  "/kiss-kaomoji": [
    { face: "( ˘ ³˘)♥", name: "Kiss", meaning: "Blowing a kiss.", parts: "³ is puckered lips; ♥ is the kiss flying off." },
    { face: "(っ˘з(˘⌣˘ )", name: "Cheek kiss", meaning: "Kissing someone's cheek.", parts: "Two faces: з lips meet a smiling ⌣ face." },
    { face: "(*￣3￣)╭", name: "Smooch", meaning: "Playful kiss.", parts: "3 is a sideways pucker; ╭ an arm reaching in." },
    { face: "(づ￣ ³￣)づ", name: "Kiss and hug", meaning: "Kisses with a hug.", parts: "³ lips plus づ reaching arms." },
  ],
  "/sparkle-kaomoji": [
    { face: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", name: "Throwing sparkles", meaning: "Magic, joy, celebration.", parts: "ﾉ arms toss *:･ﾟ✧ — the classic sparkle throw." },
    { face: "✧･ﾟ: *✧･ﾟ:*", name: "Sparkle trail", meaning: "Decoration or excitement.", parts: "✧ stars and ･ﾟ: dots form a glitter line." },
    { face: "(✿◠‿◠)✧", name: "Sparkly smile", meaning: "Cute and shining.", parts: "✿ is a flower clip; ✧ a twinkle." },
    { face: "(☆▽☆)", name: "Star eyes", meaning: "Dazzled or amazed.", parts: "☆ eyes shine with excitement." },
  ],
  "/sad-kaomoji": [
    { face: "(｡•́︿•̀｡)", name: "Pouty sad", meaning: "Hurt or let down.", parts: "Sloped •́ •̀ eyes and a ︿ frown; ｡ are soft cheeks." },
    { face: "(╯︵╰,)", name: "Teary frown", meaning: "About to cry.", parts: "╯ ╰ are downcast eyes, ︵ a frown, and , a tear." },
    { face: "(ᗒᗣᗕ)՞", name: "Wailing", meaning: "Upset, whiny sadness.", parts: "ᗒ ᗕ squeezed eyes and an open ᗣ mouth." },
    { face: "( ´_ゝ`)", name: "Deflated", meaning: "Disappointed, unimpressed.", parts: "Droopy ´ ` eyes and a flat ゝ mouth." },
  ],
  "/nervous-kaomoji": [
    { face: "(・_・;)", name: "Sweat drop", meaning: "Awkward or nervous.", parts: "; is a sweat drop on a blank face." },
    { face: "(°ー°〃)", name: "Uneasy", meaning: "Nervous laughter.", parts: "〃 are worry marks beside wide ° eyes." },
    { face: "(⊙﹏⊙)", name: "Anxious", meaning: "Worried and tense.", parts: "Wide ⊙ eyes and a wobbly ﹏ mouth." },
    { face: "ヽ(°〇°)ﾉ;", name: "Panic", meaning: "Freaking out.", parts: "Raised arms, round 〇 mouth, and a sweat drop." },
  ],
  "/happy-kaomoji": [
    { face: "(＾▽＾)", name: "Big smile", meaning: "Happy and cheerful.", parts: "＾ ＾ closed smiling eyes and a wide ▽ mouth." },
    { face: "(◕‿◕)", name: "Bright smile", meaning: "Content, friendly.", parts: "◕ shiny eyes and a ‿ smile." },
    { face: "ヽ(・∀・)ﾉ", name: "Cheer", meaning: "Yay!", parts: "Raised ヽ ﾉ arms and an open ∀ grin." },
    { face: "(ﾉ´ヮ`)ﾉ*: ･ﾟ", name: "Joy toss", meaning: "So happy you throw sparkles.", parts: "ヮ is a beaming mouth; *: ･ﾟ is glitter." },
  ],
  "/giggling-kaomoji": [
    { face: "(≧▽≦)", name: "Laugh", meaning: "Laughing out loud.", parts: "≧ ≦ squeezed-shut eyes and an open ▽ mouth." },
    { face: "(๑˃̵ᴗ˂̵)", name: "Giggle", meaning: "Cute, playful laugh.", parts: "˃ ˂ squinting eyes and ๑ rosy cheeks." },
    { face: "(*≧ω≦*)", name: "Squeal", meaning: "Giggling with delight.", parts: "≧ω≦ is a squealing face; * are blush marks." },
    { face: "(´∀`*)ｳﾌﾌ", name: "Ufufu", meaning: "Quiet, knowing giggle.", parts: "ｳﾌﾌ (ufufu) is the Japanese sound of a soft giggle." },
  ],
  "/waving-kaomoji": [
    { face: "(^_^)/", name: "Wave hello", meaning: "Hi or bye.", parts: "/ is one arm raised in a wave." },
    { face: "ヾ(＾∇＾)", name: "Happy wave", meaning: "Cheerful goodbye.", parts: "ヾ is a waving hand with motion marks." },
    { face: "(ﾉ´ヮ`)ﾉ", name: "Excited hello", meaning: "So glad to see you.", parts: "ﾉ arm raised high and a big ヮ smile." },
    { face: "(*・ω・)ﾉ", name: "Little wave", meaning: "Soft, friendly hi.", parts: "ω is a small cat-like mouth; ﾉ a wave." },
  ],
  "/fish-kaomoji": [
    { face: "><(((('>", name: "Fish", meaning: "A swimming fish.", parts: "> is the tail, (((( the body scales, and '> the head." },
    { face: "<゜)))彡", name: "Fish swimming left", meaning: "Fish (or 'something smells fishy').", parts: "<゜ is the head and eye; 彡 is the tail swish." },
    { face: "ฅ^•ﻌ•^ฅ🐟", name: "Cat wants fish", meaning: "Hungry kitty.", parts: "Cat face with ฅ paws reaching for 🐟." },
    { face: "<°)))><", name: "Simple fish", meaning: "Cute fish doodle.", parts: "<°) head, ))) body, >< tail." },
  ],
  "/smile-kaomoji": [
    { face: "(◠‿◠)", name: "Gentle smile", meaning: "Calm, happy.", parts: "◠ curved eyes and a ‿ smile." },
    { face: "(*^‿^*)", name: "Blushing smile", meaning: "Happy and a bit shy.", parts: "* are rosy cheeks around ^‿^." },
    { face: "(´• ω •`)", name: "Soft smile", meaning: "Sweet and content.", parts: "ω is a small cat-mouth smile." },
    { face: "(ᵔ◡ᵔ)", name: "Tiny smile", meaning: "Quietly pleased.", parts: "ᵔ small eyes and ◡ a little grin." },
  ],
  "/thumbs-up-kaomoji": [
    { face: "(b ᵔ▽ᵔ)b", name: "Double thumbs up", meaning: "Great job!", parts: "b looks like a thumbs-up hand on each side." },
    { face: "( •̀ᴗ•́ )و ̑̑", name: "Fist pump", meaning: "You got this.", parts: "و is a raised, determined fist." },
    { face: "d(^_^)b", name: "Approve", meaning: "Okay, sounds good.", parts: "d and b are two thumbs pointing up." },
    { face: "(๑•̀ㅂ•́)و✧", name: "Ready", meaning: "Determined and confident.", parts: "ㅂ is a set mouth; ✧ a sparkle of confidence." },
  ],
  "/star-kaomoji": [
    { face: "☆⌒(ゝ。∂)", name: "Star wink", meaning: "Playful 'teehee'.", parts: "ゝ and ∂ are a wink and tongue; ☆⌒ a star flying off." },
    { face: "(☆▽☆)", name: "Star eyes", meaning: "Amazed or starstruck.", parts: "☆ eyes shining in awe." },
    { face: "★~(◡‿◡✿)", name: "Starry smile", meaning: "Cheerful and sweet.", parts: "★~ a shooting star beside a flower-clip face." },
    { face: "( ˶ˆᗜˆ˵ )☆", name: "Twinkle", meaning: "Bright happiness.", parts: "ᗜ is a big open smile; ☆ the twinkle." },
  ],
  "/running-kaomoji": [
    { face: "ε=ε=┌( >_<)┘", name: "Panic run", meaning: "Running away fast.", parts: "ε= are dust puffs; ┌ ┘ are arms pumping." },
    { face: "ᕕ( ᐛ )ᕗ", name: "Happy stroll", meaning: "Off I go!", parts: "ᕕ ᕗ are swinging arms; ᐛ a carefree face." },
    { face: "ヽ(ヅ)ノ", name: "Dash", meaning: "Rushing, arms up.", parts: "ヅ is a smiling face with raised ヽ ノ arms." },
    { face: "₍₍ ᕕ(´ ω` )ᕗ⁾⁾", name: "Bouncing run", meaning: "Cheerful jog.", parts: "₍₍ ⁾⁾ show bouncing motion." },
  ],
  "/dog-kaomoji": [
    { face: "U・ᴥ・U", name: "Puppy", meaning: "Cute dog face.", parts: "U U are floppy ears and ᴥ is the snout." },
    { face: "▼・ᴥ・▼", name: "Pointy ears", meaning: "Alert dog.", parts: "▼ ▼ are pointed ears." },
    { face: "૮ ˶ᵔ ᵕ ᵔ˶ ა", name: "Happy pup", meaning: "Soft, happy dog.", parts: "૮ ა are droopy ears; ˶ are cheeks." },
    { face: "∪･ω･∪", name: "Little dog", meaning: "Curious puppy.", parts: "∪ ∪ are ears; ω a small mouth." },
  ],
  "/bunny-kaomoji": [
    { face: "(\\_/)\n(•ㅅ•)\n/ 　 づ", name: "Bunny holding something", meaning: "Offering a gift or note.", parts: "(\\_/) ears on top, ㅅ nose, づ arms holding something out." },
    { face: "₍ᐢ. .ᐢ₎", name: "Tiny bunny", meaning: "Cute rabbit.", parts: "ᐢ ᐢ are upright ears." },
    { face: "(・x・)", name: "Bunny mouth", meaning: "Small bunny face.", parts: "x is a rabbit's split lip." },
    { face: "／(･ × ･)＼", name: "Long ears", meaning: "Bunny with ears out.", parts: "／ ＼ are long ears, × the nose." },
  ],
};
