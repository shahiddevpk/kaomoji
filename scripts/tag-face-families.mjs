// Adds face-family tags (lenny, shrug, uwu, food) by glyph pattern and appends
// curated faces for thin families. Idempotent: safe to re-run.
// Usage: node scripts/tag-face-families.mjs
import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../data/items.json", import.meta.url);
const items = JSON.parse(readFileSync(file, "utf8"));

const FAMILIES = {
  lenny: (f) => f.includes("ʖ"),
  shrug: (f) =>
    /¯\\+_|_\/¯|┐\(.*\)┌|╮\(.*\)╭|ʅ\(.*\)ʃ|ƪ\(.*\)ʃ|乁\(.*\)ㄏ|┐（.*）┌|ʅ（.*）ʃ/.test(f),
  uwu: (f) => /[uUoO][wω][uUoO]|ᵘʷᵘ|ᵒʷᵒ|ᵘᵂᵘ/.test(f),
  // Teddy shape ʕ…ʔ, or a ᴥ snout that is not a dog/cat frame (U・ᴥ・U, ૮ ა, ᐡ, ﻌ).
  bear: (f) => /ʕ[^ʔ]*ʔ/.test(f) || (f.includes("ᴥ") && !/U・|∪|ᐡ|૮|ﻌ|=\^/.test(f)),
  // Only faces that actually show a table (┻━┻ / ┬─┬); tag-only "throw" faces stay out.
  tableflip: (f) => /┻|┬─┬|┳━┳|┬──┬/.test(f),
  illness: (f) => /😷|🤒|🤧|🤮|ｹﾞﾎ|ｺﾞﾎ|ゲホ|ゴホ|ﾊｸｼｮﾝ|ハックション|ｸｼｭﾝ|くしゃみ|💊|🌡|風邪/.test(f),
  fear: (f) =>
    /ｶﾞｸﾌﾞﾙ|ｶﾞｸｶﾞｸ|ブルブル|ﾌﾞﾙﾌﾞﾙ|ガクブル|ガクガク|怖|ｺﾜｲ|こわい|ﾋｨｨ|ヒィィ|\(\(\(\(\s*[;；]|\(\(\(\(.*ﾟ[дД]ﾟ.*\)\)\)\)/.test(f),
  devil: (f) => /😈|👿|[Ψψ]\(｀|\(｀[∀▽∇]´\)[Ψψ]|\(｀[∀▽∇]´#?\)[Ψψ]/.test(f),
  sorry: (f) =>
    /ごめん|ゴメン|ｺﾞﾒﾝ|すみません|ｽﾐﾏｾﾝ|ｽﾏﾝ|申し訳|[Ss]orry|m\(_ _\)m|m\(__\)m|orz|OTL/.test(f),
  thanks: (f) => /ありがと|アリガト|ｱﾘｶﾞﾄ|ｻﾝｷｭ|[Tt]hank|THANK|感謝|[Aa]rigato/.test(f),
  cool: (f) => /⌐■|■-■|■_■|▀̿|😎/.test(f),
  christmas: (f) =>
    /🎄|🎅|🤶|⛄|☃|🦌|🛷|Merry X|Merry Christmas|メリークリスマス|ﾒﾘｰｸﾘｽﾏｽ|クリスマス|ｸﾘｽﾏｽ|サンタ|ｻﾝﾀ/.test(f),
  thanksgiving: (f) => /🦃|🥧|🌽|🍂|🍁|Thanksgiving|thankful/i.test(f),
  halloween: (f) => /🎃|👻|🦇|💀|☠|🕷|🕸|🧛|🧟|🧙|⚰|🔮|🍬/.test(f),
  food: (f) =>
    /﹃|ڡ|🍙|🍰|🍜|🍕|🍔|🍩|🍪|🍡|🍣|🍵|☕|🍺|🍻|🍷|🍫|🍦|🍭|🍓|🍎|🥤|🍝|🍱|🍚|🥢|旦|🧋|🍮|🍧|🍨|🥞|🧁|🍤|🍟|🌭|🍿|🍉|🍑|🍒|🍞|🥐|🍳/.test(
      f,
    ),
};

const CURATED = {
  uwu: {
    category: "cute",
    faces: [
      ["UwU", "UwU"], ["uwu", "Lowercase uwu"], ["OwO", "OwO"], ["owo", "Lowercase owo"],
      ["ÚwÚ", "Smug UwU"], ["(◕ᴗ◕✿)", "Soft flower uwu"], ["(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "Blushing uwu"],
      ["(｡U⁄ ⁄ω⁄ ⁄ U｡)", "Flustered UwU"], ["(ᵘʷᵘ)", "Tiny uwu"], ["(ᵒʷᵒ)", "Tiny owo"],
      ["(*ᵘʷᵘ*)", "Blush tiny uwu"], ["(◡ ω ◡)", "Sleepy uwu"], ["(˘ω˘)", "Content uwu"],
      ["(｡◕‿‿◕｡)", "Happy uwu"], ["(・ω・)", "Neutral owo"], ["( ˘ ³˘)♥", "Kissy uwu"],
      ["( ͡ᵘ ͜ʖ ͡ᵘ)", "Lenny uwu"], ["(UwU)", "Bracket UwU"], ["(OwO)", "Bracket OwO"],
      ["(⑅˘ω˘⑅)", "Soft uwu"], ["(๑ᵔωᵔ๑)", "Cheek uwu"], ["(っ˘ω˘ς )", "Hugging uwu"],
      ["ʕ•ᴥ•ʔ uwu", "Bear uwu"], ["(=^ω^=)", "Cat owo"], ["(✿˘ω˘)", "Flower uwu"],
      ["(◍•ᴗ•◍)", "Round uwu"], ["(｡•ω•｡)", "Wide-eyed owo"], ["ᕦ(UwU)ᕤ", "Strong UwU"],
      ["(ﾉ´ヮ`)ﾉ*: ･ﾟ uwu", "Sparkle uwu"], ["OwO what's this?", "OwO what's this"],
      ["(✧ω✧)", "Starry owo"], ["(◕ω◕✿)", "Flower owo"], ["(｡˘ω˘｡)♡", "Love uwu"],
      ["(ノ≧ω≦)ノ", "Excited uwu"], ["(〃ω〃)", "Blushed owo"], ["(＾ω＾)", "Grin uwu"],
      ["(o˘◡˘o)", "Gentle uwu"], ["(ꈍωꈍ)", "Closed-eye uwu"], ["(˶ᵔ ᵕ ᵔ˶)", "Cheeky uwu"],
      ["ପ(๑•ᴗ•๑)ଓ ♡", "Winged uwu"], ["(ﾐ ᵕ̣̣̣̣̣̣ ﹏ ᵕ̣̣̣̣̣̣ ﾐ)", "Teary uwu"],
      ["(っ◞‸◟ c) uwu", "Sad uwu"], ["(˵ ͡° ͜ʖ ͡°˵)", "Blushing lenny"],
      ["UwU *nuzzles*", "Nuzzle UwU"], ["OwO *notices*", "Notices OwO"],
    ],
  },
  shrug: {
    category: "text-faces",
    faces: [
      ["¯\\_(ツ)_/¯", "Classic shrug"], ["¯\\_( ͡° ͜ʖ ͡°)_/¯", "Lenny shrug"],
      ["¯\\_(°_o)_/¯", "Confused shrug"], ["¯\\_(⊙_ʖ⊙)_/¯", "Wide-eyed shrug"],
      ["¯\\_(ಠ_ಠ)_/¯", "Disapproving shrug"], ["¯\\_( ´･ω･)_/¯", "Soft shrug"],
      ["¯\\_(•‿•)_/¯", "Smiling shrug"], ["¯\\_(◕‿◕)_/¯", "Cute shrug"],
      ["¯\\_(-_-)_/¯", "Tired shrug"], ["¯\\_(⊙︿⊙)_/¯", "Worried shrug"],
      ["¯\\_(ᵔᴥᵔ)_/¯", "Bear shrug"], ["¯\\_(=^･ω･^=)_/¯", "Cat shrug"],
      ["¯\\_(°ペ)_/¯", "Huh shrug"], ["¯\\(°_o)/¯", "Armless shrug"],
      ["¯\\_㋡_/¯", "Circle shrug"], ["¯\\_( ̄▽ ̄)_/¯", "Grin shrug"],
      ["¯\\_(シ)_/¯", "Shi shrug"], ["┐(￣ヘ￣)┌", "Whatever shrug"],
      ["┐(︶▽︶)┌", "Smug shrug"], ["╮(︶︿︶)╭", "Unimpressed shrug"],
      ["ヽ(゜～゜o)ノ", "Clueless shrug"], ["┐(￣∀￣)┌", "Grinning shrug"],
      ["ʅ(°_°)ʃ", "Blank shrug"], ["ʅ(◞‿◟)ʃ", "Wry shrug"], ["乁( ◔ ౪◔)ㄏ", "Goofy shrug"],
      ["乁(ツ)ㄏ", "Simple shrug"], ["¯\\_(ツ)_/¯ idk", "Shrug idk"],
      ["¯\\_( ⊙_ʖ⊙ )_/¯", "Lenny confused shrug"], ["¯\\_(ಥ‿ಥ)_/¯", "Teary shrug"],
    ],
  },
  illness: {
    category: "sad",
    faces: [
      ["(´×ω×`)😷", "Mask on"], ["(っ- ‸ – ς)🤒", "Fever"], ["🤧( >_<)ｸｼｭﾝ", "Sneeze"], ["(＞﹏＜)🤧", "Hay fever"],
      ["(｡•́︿•̀｡)🌡️", "Taking temperature"], ["(っ´ω`)っ💊", "Taking medicine"], ["(˘̩̩̩ε˘̩ƪ) sick", "Feeling sick"],
      ["(×﹏×)", "Dizzy and sick"], ["(@_@)", "Woozy"], ["(ᴗ˳ᴗ) zzZ 🛌", "Sick in bed"], ["(;´༎ຶД༎ຶ`) cold", "Bad cold"],
      ["(´・ω・`)🍵 get well", "Get well tea"], ["(っ˘̩╭╮˘̩)っ🤒", "Needs a hug"], ["(×_×;)", "Under the weather"],
      ["(っ◞‸◟ c)", "Achy"], ["(´-ι_-｀) ugh", "Ugh"], ["(ﾟдﾟ;)🤮", "Nauseous"], ["(; ꒪ö꒪)", "Queasy"],
      ["(｡ŏ﹏ŏ) ｺﾞﾎｺﾞﾎ", "Coughing"], ["(> _ <) ｹﾞﾎｯ", "Cough"], ["(˘ω˘)🍲 soup", "Chicken soup"],
      ["(っ˘̩╭╮˘̩)っ🛏️", "Staying home"], ["(*´﹃｀*)🍯🍋", "Honey lemon"], ["ヾ(˙❥˙)ﾉ get well soon", "Get well soon"],
      ["(づ｡◕‿‿◕｡)づ💊 feel better", "Feel better"], ["(｡>﹏<｡)🤕", "Headache"], ["(-_-)🌡️ 101°F", "Fever check"],
    ],
  },
  fear: {
    category: "text-faces",
    faces: [
      ["(((( ;°Д°))))", "Shaking in fear"], ["(((;ꏿ_ꏿ;)))", "Terrified"], ["ヽ(ﾟДﾟ)ﾉ", "Panic"],
      ["(〃＞＿＜;〃)", "Too scared to look"], ["(/ω＼)", "Hiding face"], ["(⊙﹏⊙)", "Frightened"],
      ["(ﾉﾟ0ﾟ)ﾉ~", "Running scared"], ["ε=ε=ε=┌(;°□°)┘", "Fleeing"], ["(ʘᗩʘ')", "Horrified"],
      ["(;;;*_*)", "Frozen in fear"], ["(ㆆ_ㆆ)", "Uneasy stare"], ["Σ(°△°|||)︴", "Jump scare"],
      ["(；゜０゜)", "Gasping"], ["｡ﾟ･(>﹏<)･ﾟ｡", "Crying in fear"], ["(っ°Д°;)っ", "Backing away"],
      ["┌(;°Д°)┘ help", "Help"], ["(*_*;)", "Nervous fear"], ["(;´༎ຶД༎ຶ`) scary", "So scary"],
      ["{{ (>_<) }}", "Trembling"], ["(ᗒᗣᗕ)՞ nooo", "Nooo"], ["(⋟﹏⋞)", "Shuddering"], ["(º﹃º ) ...", "Speechless fear"],
      ["(ノ°ο°)ノ", "Spooked"], ["ガクブル (((ﾟДﾟ)))", "Gakuburu (shaking)"], ["(゜ロ゜) behind you", "Behind you"],
      ["(｡>_<｡) don't look", "Don't look"], ["((( ;ﾟДﾟ)))ﾌﾞﾙﾌﾞﾙ", "Buru buru (trembling)"],
    ],
  },
  devil: {
    category: "text-faces",
    faces: [
      ["Ψ(｀▽´)Ψ", "Little devil"], ["ψ(｀∇´)ψ", "Devil grin"], ["(｀∀´)Ψ", "Devil with fork"], ["😈(¬‿¬)", "Evil smirk"],
      ["Ψ(◣_◢)Ψ", "Angry devil"], ["(◣‿◢)Ψ", "Wicked grin"], ["(¬‿¬)👿", "Plotting"], ["ψ(▼へ▼メ)～→", "Devil attack"],
      ["(⇀‸↼‶)Ψ", "Annoyed devil"], ["٩(◣_◢)۶ Ψ", "Raging devil"], ["Ψ(●｀▽´●)Ψ", "Cheeky devil"], ["(ᗒᗨᗕ)Ψ", "Evil laugh"],
      ["Ψ(￣∀￣)Ψ", "Smug devil"], ["(✧∀✧)Ψ", "Sparkly devil"], ["ψ( ` ∇ ´ )ψ", "Devil cheer"], ["😈 mwahaha (｀∀´)", "Mwahaha"],
      ["(¬‿¬ )🔥Ψ", "Fiery devil"], ["Ψ(=ↀωↀ=)Ψ", "Devil cat"], ["ʕ◣ᴥ◢ʔΨ", "Devil bear"], ["(•̀ᴗ•́)Ψ", "Mischief"],
      ["ψ(｀∀´#)ψ", "Mad devil"], ["Ψ(｀_´ # )↝", "Devil tail"], ["(▼皿▼#)Ψ", "Demon"], ["Ψ(◕ᴗ◕✿)Ψ", "Cute devil"],
    ],
  },
  sorry: {
    category: "text-faces",
    faces: [
      ["m(_ _)m", "Deep bow sorry"], ["(シ_ _)シ", "Bowing apology"], ["(人◕ω◕) sorry", "Please forgive me"],
      ["(｡•́︿•̀｡) sorry", "Sad sorry"], ["(っ- ‸ – ς) sorry", "Guilty sorry"], ["(´；ω；`) ごめんね", "Teary sorry"],
      ["(>_<) my bad", "My bad"], ["(〃＞＿＜;〃)", "Embarrassed sorry"], ["(ノ_<。) sorry!", "Crying sorry"],
      ["(｡>﹏<｡) forgive me", "Forgive me"], ["(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) oops", "Oops"], ["(￣▽￣;)ゞ sorry", "Awkward sorry"],
      ["＼(º □ º l|l)/ so sorry", "Panicked sorry"], ["(っ˘̩╭╮˘̩)っ sorry", "Sorry hug"], ["orz", "Kneeling in defeat"],
      ["OTL", "On my knees"], ["_(._.)_", "Bow down"], ["(*_ _)人", "Begging for forgiveness"],
      ["(ᗒᗣᗕ)՞ I'm sorry", "Wailing sorry"], ["(´• ω •`) sowwy", "Sowwy"], ["(人 •͈ᴗ•͈) please", "Please"],
      ["(；人；)", "Pleading"], ["(╥﹏╥) sorry", "Very sorry"], ["(ノ﹏ヽ) my fault", "My fault"],
    ],
  },
  thanks: {
    category: "text-faces",
    faces: [
      ["(◍•ᴗ•◍)❤ thank you", "Thank you heart"], ["(人´∀`) thanks", "Grateful hands"], ["(｡♥‿♥｡) thank you!", "Loving thanks"],
      ["ありがとう (◕ᴗ◕✿)", "Arigatou"], ["(ﾉ´ヮ`)ﾉ*: ･ﾟ thank you!", "Sparkly thanks"], ["(*˘︶˘人)♡ thanks", "Soft thanks"],
      ["ヽ(・∀・)ﾉ thx!", "Thx"], ["(っ´▽`)っ♡ ty", "Ty hug"], ["(≧▽≦)ゞ thanks!", "Salute thanks"],
      ["( •̀ ω •́ )✧ thank u", "Cool thanks"], ["(ㅅ´ ˘ `) thank you so much", "Thank you so much"], ["(つ≧▽≦)つ thanks!!", "Excited thanks"],
      ["(๑˃ᴗ˂)ﻭ thank you", "Cheering thanks"], ["(˶ᵔ ᵕ ᵔ˶) ty ♡", "Cute ty"], ["m(_ _)m thank you", "Bowing thanks"],
      ["(人 •͈ᴗ•͈) arigato", "Arigato hands"], ["ʕ•ᴥ•ʔ thank you", "Bear thanks"], ["ฅ^•ﻌ•^ฅ thank mew", "Cat thanks"],
      ["(❁´◡`❁) much appreciated", "Much appreciated"], ["٩(◕‿◕)۶ thanks a lot", "Thanks a lot"], ["☆Thank you☆(◍•ᴗ•◍)", "Thank you star"],
      ["(⁄ ⁄•⁄ω⁄•⁄ ⁄) th-thanks", "Shy thanks"], ["(づ｡◕‿‿◕｡)づ thank you", "Thank you hug"], ["(ღ˘⌣˘ღ) grateful", "Grateful"],
    ],
  },
  cool: {
    category: "text-faces",
    faces: [
      ["(⌐■_■)", "Sunglasses"], ["( •_•)>⌐■-■", "Putting on sunglasses"], ["(⌐■_■)>( •_•)", "Taking off sunglasses"],
      ["(▀̿Ĺ̯▀̿ ̿)", "Cool guy"], ["ᕙ(⌐■_■)ᕗ", "Cool flex"], ["(⌐■_■)ノ♪", "Cool wave"],
      ["ヾ(⌐■_■)ノ♪", "Cool dance"], ["(☞⌐■_■)☞", "Finger guns"], ["☜(⌐■_■☜)", "Finger guns left"],
      ["(⌐■_■)👍", "Cool thumbs up"], ["(⌐■_■)✨", "Shiny cool"], ["¯\\_(⌐■_■)_/¯", "Cool shrug"],
      ["(⌐■_■)☕", "Cool coffee"], ["ʕ⌐■ᴥ■ʔ", "Cool bear"], ["(=⌐■ω■=)", "Cool cat"],
      ["(⌐■_■)🔥", "On fire"], ["(⌐■_■)–︻╦╤─", "Action hero"], ["( ⌐■ ͜ʖ ■)", "Cool Lenny"],
      ["(⌐■ᗜ■)", "Cool grin"], ["(⌐▨_▨)", "Shades"], ["(⌐☐_☐)", "Glasses"], ["( -_・)σ cool", "Point cool"],
      ["(⌐■_■)🎧", "Cool music"], ["(⌐■_■)🏖️", "Cool beach"], ["deal with it (⌐■_■)", "Deal with it"],
    ],
  },
  christmas: {
    category: "text-faces",
    faces: [
      ["🎄(◕ᴗ◕✿)🎄", "Christmas tree smile"], ["🎅(＾▽＾)🎁", "Santa gift"], ["(っ◔◡◔)っ 🎁", "Giving a present"],
      ["🎁(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "Gift sparkle"], ["⛄(◕‿◕)⛄", "Snowman friends"], ["☃️(˘ω˘)❄️", "Snowy day"],
      ["❄️ (っ˘̩╭╮˘̩)っ ❄️", "Cold hug"], ["❅ ❆ ( ˘ ³˘)♥ ❆ ❅", "Snow kiss"], ["(*^▽^)/★*☆♪ Merry Christmas", "Merry Christmas cheer"],
      ["🦌(ᵔᴥᵔ)🛷", "Reindeer sleigh"], ["Ψ(・ᴥ・)Ψ", "Reindeer"], ["🔔(≧▽≦)🔔", "Jingle bells"],
      ["🌟🎄(◕ᴗ◕)🎄🌟", "Tree topper"], ["(っ˘ڡ˘ς)🍪🥛", "Cookies and milk"], ["(˶ᵔ ᵕ ᵔ˶)☕🎄", "Cozy cocoa"],
      ["ʕ•ᴥ•ʔ🎅", "Santa bear"], ["ฅ^•ﻌ•^ฅ🎄", "Christmas cat"], ["(❄️ᴗ❄️)", "Snowflake eyes"],
      ["🎅 ho ho ho (≧∇≦)", "Ho ho ho"], ["(づ｡◕‿‿◕｡)づ🎁", "Present hug"], ["★~(◡‿◡✿)🎄", "Sparkly tree"],
      ["(⁄ ⁄•⁄ω⁄•⁄ ⁄)🎁", "Shy gift"], ["🎄✨(ﾉ´ヮ`)ﾉ*: ･ﾟ✨🎄", "Festive sparkle"], ["🧦(・ω・)🧦", "Stockings"],
      ["🎶(￣▽￣)ノ🎄", "Carol singing"], ["⛷️(◕ᴗ◕)❄️", "Ski holiday"], ["(✿◠‿◠)🕯️🎄", "Candlelit tree"],
      ["🎅🤶(◕‿◕)♡", "Santa and Mrs Claus"], ["🎉(ﾉ≧∀≦)ﾉ Happy Holidays", "Happy holidays"], ["(☆▽☆)🌟", "Star of wonder"],
    ],
  },
  thanksgiving: {
    category: "text-faces",
    faces: [
      ["🦃(◕ᴗ◕)🦃", "Happy turkey"], ["🦃 gobble gobble (≧▽≦)", "Gobble gobble"], ["(っ˘ڡ˘ς)🍗", "Turkey dinner"],
      ["🥧(๑´ڡ`๑)", "Pumpkin pie"], ["(*´﹃｀*)🥧", "Craving pie"], ["🍂(◕‿◕)🍂", "Autumn leaves"],
      ["🍁(˘ω˘)🍁", "Maple leaf calm"], ["(人´∀`)🙏 thankful", "Thankful"], ["(◍•ᴗ•◍)❤ thank you", "Grateful thanks"],
      ["🌽(๑•̀ㅂ•́)و✧", "Corn power"], ["(´～`)ﾓｸﾞﾓｸﾞ🍗", "Chewing turkey"], ["(＞﹏＜)🍽️ so full", "Food coma"],
      ["(｡-_-｡)zzZ 🦃", "Turkey nap"], ["👨‍👩‍👧‍👦(◕‿◕)🍽️", "Family dinner"], ["🏈(ﾉ◕ヮ◕)ﾉ*", "Football Thursday"],
      ["🍂✨(˶ᵔ ᵕ ᵔ˶)✨🍂", "Cozy fall"], ["(っ◔◡◔)っ 🥧", "Sharing pie"], ["🦃💨 ε=ε=┌( >_<)┘", "Turkey chase"],
      ["(づ￣ ³￣)づ🍂", "Fall hug"], ["🍠(´ω`)", "Sweet potato"], ["🥖🧈(◕ᴗ◕)", "Bread rolls"],
      ["🍷(￣▽￣)ノ🦃", "Thanksgiving toast"], ["🙏(◡‿◡✿)🍂 grateful", "Grateful heart"], ["🦃( ˘▽˘)っ♨", "Turkey from the oven"],
    ],
  },
  tableflip: {
    category: "text-faces",
    faces: [
      ["(╯°□°)╯︵ ┻━┻", "Classic table flip"], ["(ノಠ益ಠ)ノ彡┻━┻", "Rage table flip"],
      ["┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻", "Double table flip"], ["(┛◉Д◉)┛彡┻━┻", "Wide-eyed flip"],
      ["(╯ರ ~ ರ)╯︵ ┻━┻", "Fed-up flip"], ["(ﾉ≧∇≦)ﾉ ﾐ ┸━┸", "Happy flip"],
      ["┬─┬ノ( º _ ºノ)", "Put the table back"], ["┬─┬ ノ( ゜-゜ノ)", "Calm table reset"],
      ["(ヘ･_･)ヘ┳━┳", "Table carry"], ["(╯’□’)╯︵ ┻━┻", "Surprised flip"],
      ["(ノ°益°)ノ ︵ ┻━┻", "Furious flip"], ["(ﾉ｀Д´)ﾉ彡┻━┻", "Angry flip"],
      ["(╯ ͠° ͟ʖ ͡°)╯┻━┻", "Lenny flip"], ["ʕノ•ᴥ•ʔノ ︵ ┻━┻", "Bear flip"],
      ["(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ)", "Flip and reset"], ["┻━┻ミ＼(≧ﾛ≦＼)", "Backhand flip"],
      ["(┛ಠ_ಠ)┛彡┻━┻", "Disapproving flip"], ["(╯°Д°)╯︵ /(.□ . \)", "Flipping the flipper"],
      ["(ノ ゜Д゜)ノ ︵ ┻━┻", "Shocked flip"], ["┻━┻ ︵ ¯\(ツ)/¯ ︵ ┻━┻", "Shrug double flip"],
      ["(╯✧▽✧)╯︵ ┻━┻", "Sparkly flip"], ["(ﾉ´･ω･)ﾉ ﾐ ┸━┸", "Gentle flip"],
      ["(っ•﹏•)っ ✴==≡눈٩(`皿´҂)ง ┻━┻", "Chaos flip"], ["┬──┬◡ﾉ(° -°ﾉ)", "Polite reset"],
      ["(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻", "Lift and flip"], ["┻━┻ ︵ ლ(⌒-⌒ლ)", "Flip it away"],
    ],
  },
  halloween: {
    category: "text-faces",
    faces: [
      ["👻(◕ᴗ◕)👻", "Cute ghost friends"], ["ヽ(👻 ᐛ )ﾉ", "Boo ghost"], ["(◡ ‿ ◡ ✿)👻", "Gentle ghost"],
      ["ʕ•ᴥ•ʔ🎃", "Pumpkin bear"], ["🎃(ﾉ≧∀≦)ﾉ", "Pumpkin party"], ["(っ˘ڡ˘ς)🍬", "Candy haul"],
      ["🎃✧*｡٩(ˊᗜˋ*)و✧*｡", "Happy Halloween"], ["(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ.*🎃", "Pumpkin spell"],
      ["🦇(ᵔᴥᵔ)🦇", "Bat buddy"], ["⎛⎝(•ⱅ•)⎠⎞", "Bat wings"], ["/(◕▿◕)\🦇", "Little bat"],
      ["(◣_◢)", "Evil glare"], ["(¬‿¬)🔪", "Slasher smirk"], ["Ψ(｀▽´)Ψ", "Devil grin"],
      ["ψ(｀∇´)ψ", "Little devil"], ["(ↀДↀ)✧", "Spooky stare"], ["(☠_☠)", "Skull face"],
      ["💀(╥﹏╥)💀", "Scared to death"], ["☠️ ( ͡ಠ ʖ̯ ͡ಠ) ☠️", "Pirate glare"], ["(×_×)⌒☆", "Knocked out"],
      ["( ✖_✖ )", "Dead eyes"], ["(ꈍᴗꈍ)🧛", "Sleepy vampire"], ["(ʘ‿ʘ)🩸", "Vampire grin"],
      ["(¬▂¬)🧛‍♂️", "Count stare"], ["[¬º-°]¬", "Zombie walk"], ["{¬ºཀ°}¬", "Zombie groan"],
      ["(っ´ཀ`)っ", "Zombie reach"], ["🧟‍♀️ ┌༼◉ل͟◉༽┐", "Zombie arms"], ["(∩｀-´)⊃━☆ﾟ.*･｡ﾟ", "Witch spell"],
      ["🧙‍♀️(◕‿◕)🔮", "Cute witch"], ["(　-_･) ︻デ═一 🎃", "Pumpkin sniper"], ["🕷️(•_•)🕸️", "Spider web"],
      ["/ᐠ｡ꞈ｡ᐟ\🎃", "Black cat pumpkin"], ["ฅ^•ﻌ•^ฅ🌕", "Moon cat"], ["(=ↀωↀ=)✧🖤", "Spooky cat"],
      ["🍬(〃＾▽＾〃)🍭", "Trick or treat"], ["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧🎃", "Halloween sparkle"], ["🎃 boo! (・∀・)", "Boo"],
      ["( •́ ⍨ •̀)🕯️", "Candle glare"], ["⚰️(－_－) zzZ", "Coffin nap"], ["( ๑‾̀◡‾́)σ»🔥🎃", "Jack-o-lantern"],
      ["༼ つ ◕_◕ ༽つ🍬", "Give candy"], ["(｡•̀ᴗ-)✧🦇", "Wink bat"], ["🌕 (￣ー￣)ゞ🦇", "Full moon salute"],
      ["(⊙_◎)👻", "Ghost sighting"], ["ヾ(｡ꏿ﹏ꏿ)ﾉ", "Spooked"], ["(((;ꏿ_ꏿ;)))", "Shaking in fear"],
    ],
  },
  lenny: {
    category: "text-faces",
    faces: [
      ["( ͡° ͜ʖ ͡°)", "Lenny face"], ["( ͠° ͟ʖ ͡°)", "Suspicious lenny"],
      ["( ͡ʘ ͜ʖ ͡ʘ)", "Staring lenny"], ["( ͡~ ͜ʖ ͡°)", "Winking lenny"],
      ["( ͡° ʖ̯ ͡°)", "Sad lenny"], ["( ͡ಠ ʖ̯ ͡ಠ)", "Angry lenny"],
      ["(つ ͡° ͜ʖ ͡°)つ", "Hugging lenny"], ["ᕦ( ͡° ͜ʖ ͡°)ᕤ", "Flexing lenny"],
      ["( ͡°👅 ͡°)", "Tongue lenny"], ["( ͡◉ ͜ʖ ͡◉)", "Bug-eyed lenny"],
      ["( ͡☉ ͜ʖ ͡☉)", "Shocked lenny"], ["( ͡❛ ͜ʖ ͡❛)", "Smug lenny"],
      ["( ͡♥ ͜ʖ ͡♥)", "Heart-eyed lenny"], ["( ͡$ ͜ʖ ͡$)", "Money lenny"],
      ["( ͡⚆ ͜ʖ ͡⚆)", "Dizzy lenny"], ["( ͡ᵔ ͜ʖ ͡ᵔ)", "Happy lenny"],
      ["( ͡• ͜ʖ ͡•)", "Dot-eyed lenny"], ["(▀̿Ĺ̯▀̿ ̿)", "Sunglasses lenny"],
      ["(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄", "Cool guy lenny"], ["( ͡°╭͜ʖ╮͡° )", "Mustache lenny"],
      ["[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]", "Dollar bill lenny"], ["( ͡° ͜ʖ ͡°)>⌐■-■", "Deal with it lenny"],
      ["(☭ ͜ʖ ☭)", "Comrade lenny"], ["( ͡~ ͜ʖ ͡~)", "Double wink lenny"],
      ["(͡ ͡° ͜ つ ͡͡°)", "Big nose lenny"], ["ʕ ͡° ͜ʖ ͡°ʔ", "Bear lenny"],
      ["( ͡°ᴥ ͡°)", "Dog lenny"], ["(ง ͠° ͟ل͜ ͡°)ง", "Fighting lenny"],
      ["( ͡° ͜ʖ ͡°)ﾉ", "Waving lenny"], ["( ͡ᵔ ͜ʖ ͡ᵔ )♡", "Love lenny"],
      ["(╯ ͠° ͟ʖ ͡°)╯┻━┻", "Table flip lenny"], ["( ͡° ͜ʖ ͡°)👍", "Thumbs up lenny"],
    ],
  },
};

let tagged = 0;
for (const item of items) {
  for (const [tag, test] of Object.entries(FAMILIES)) {
    if (test(item.face) && !item.tags.includes(tag)) {
      item.tags.push(tag);
      tagged += 1;
    }
  }
}

const existing = new Set(items.map((x) => x.face));
let added = 0;
for (const [tag, { category, faces }] of Object.entries(CURATED)) {
  faces.forEach(([face, name], i) => {
    if (existing.has(face)) {
      const item = items.find((x) => x.face === face);
      if (!item.tags.includes(tag)) item.tags.push(tag);
      return;
    }
    existing.add(face);
    const tags = [tag, "kaomoji", face.includes("\n") ? "multiline" : "single-line"];
    for (const [other, test] of Object.entries(FAMILIES)) {
      if (other !== tag && test(face)) tags.push(other);
    }
    items.push({
      id: `pk-${tag}-${String(i + 1).padStart(3, "0")}`,
      face,
      name,
      categories: [category],
      tags,
      aliases: [name.toLowerCase()],
      popular: i < 6,
    });
    added += 1;
  });
}

writeFileSync(file, JSON.stringify(items));
const count = (t) => items.filter((x) => x.tags.includes(t)).length;
console.log(`tagged ${tagged}, added ${added}`);
for (const t of Object.keys(FAMILIES)) console.log(t, count(t));
