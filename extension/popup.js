// Paste Kaomoji popup: pick a mood, click a face to copy it.
// Each mood links to its full page on pastekaomoji.com (UTM-tagged).
const SITE = "https://pastekaomoji.com";
const UTM = "?utm_source=chrome-extension&utm_medium=popup&utm_campaign=paste-kaomoji";

const MOODS = [
  { label: "Popular", path: "/kaomoji-copy-paste/", faces: ["¯\\_(ツ)_/¯", "( ͡° ͜ʖ ͡°)", "(╯°□°)╯︵ ┻━┻", "(◕‿◕✿)", "(づ｡◕‿‿◕｡)づ", "ʕ•ᴥ•ʔ", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "ಠ_ಠ", "(╥﹏╥)", "(˘ω˘)"] },
  { label: "Happy", path: "/happy-kaomoji/", faces: ["(＾▽＾)", "ヽ(・∀・)ﾉ", "(◕‿◕)", "(≧▽≦)", "٩(◕‿◕)۶", "(ﾉ´ヮ`)ﾉ*: ･ﾟ", "(*^‿^*)", "\\(★ω★)/", "(๑˃ᴗ˂)ﻭ", "(｡◕‿◕｡)"] },
  { label: "Cute", path: "/cute-kaomoji/", faces: ["(◕ᴗ◕✿)", "(˶ᵔ ᵕ ᵔ˶)", "(っ˘ω˘ς)", "₍ᐢ. .ᐢ₎", "૮ ˶ᵔ ᵕ ᵔ˶ ა", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "(✿◠‿◠)", "ʚ(•ᴗ•)ɞ", "(｡•ᴗ•｡)♡", "(◍•ᴗ•◍)"] },
  { label: "Sad", path: "/sad-kaomoji/", faces: ["(╥﹏╥)", "(｡•́︿•̀｡)", "(T_T)", "(っ˘̩╭╮˘̩)っ", "｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡", "(´；ω；`)", "(ᗒᗣᗕ)՞", "(╯︵╰,)", "( ´_ゝ`)", "(;_;)"] },
  { label: "Love", path: "/love-kaomoji/", faces: ["(♡μ_μ)", "(*♡∀♡)", "( ˘ ³˘)♥", "(づ￣ ³￣)づ", "(ღ˘⌣˘ღ)", "(´∀｀)♡", "♡(｡- ω -)", "(｡♥‿♥｡)", "(灬♥ω♥灬)", "(っ´▽`)っ♡"] },
  { label: "Angry", path: "/angry-kaomoji/", faces: ["(╬ಠ益ಠ)", "(ノಠ益ಠ)ノ彡┻━┻", "(￣ヘ￣)", "ლ(ಠ益ಠლ)", "(｀Д´)", "(ง'̀-'́)ง", "(¬_¬)", "ヽ(`Д´)ﾉ", "(◣_◢)", "凸(￣ヘ￣)"] },
  { label: "Animals", path: "/cat-kaomoji/", faces: ["(=^･ω･^=)", "ฅ^•ﻌ•^ฅ", "ʕ•ᴥ•ʔ", "U・ᴥ・U", "₍ᐢ•ﻌ•ᐢ₎", "><(((('>", "ʕっ•ᴥ•ʔっ", "/ᐠ｡ꞈ｡ᐟ\\", "(・θ・)", "ᓚᘏᗢ"] },
  { label: "Lenny", path: "/lenny-face/", faces: ["( ͡° ͜ʖ ͡°)", "( ͠° ͟ʖ ͡°)", "( ͡~ ͜ʖ ͡°)", "( ͡° ʖ̯ ͡°)", "(つ ͡° ͜ʖ ͡°)つ", "ᕦ( ͡° ͜ʖ ͡°)ᕤ", "( ͡ʘ ͜ʖ ͡ʘ)", "(▀̿Ĺ̯▀̿ ̿)", "¯\\_( ͡° ͜ʖ ͡°)_/¯", "( ͡♥ ͜ʖ ͡♥)"] },
];

const tabs = document.getElementById("tabs");
const list = document.getElementById("faces");
const status = document.getElementById("status");
const more = document.getElementById("more");

let active = 0;
try {
  active = Math.min(Number(localStorage.getItem("pk-tab")) || 0, MOODS.length - 1);
} catch {
  active = 0;
}

async function copy(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.classList.add("copied");
    status.textContent = `Copied ${text}`;
    setTimeout(() => button.classList.remove("copied"), 1200);
  } catch {
    status.textContent = "Copy was blocked. Select the face and press Ctrl+C.";
  }
}

function render() {
  tabs.replaceChildren(
    ...MOODS.map((mood, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = mood.label;
      b.setAttribute("aria-pressed", String(i === active));
      b.addEventListener("click", () => {
        active = i;
        try {
          localStorage.setItem("pk-tab", String(i));
        } catch {
          /* storage unavailable */
        }
        render();
      });
      return b;
    }),
  );
  const mood = MOODS[active];
  list.replaceChildren(
    ...mood.faces.map((face) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = face;
      b.setAttribute("aria-label", `Copy ${face}`);
      b.addEventListener("click", () => copy(face, b));
      li.append(b);
      return li;
    }),
  );
  more.href = SITE + mood.path + UTM;
  more.textContent = `More ${mood.label.toLowerCase()} faces on pastekaomoji.com →`;
}

render();
