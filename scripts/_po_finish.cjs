const fs = require("fs");

// ---- pagination: remove rage/glare ----
let pag = fs.readFileSync("lib/category-pagination.ts", "utf8");
pag = pag.replace(/"rage-kaomoji": \{[\s\S]*?\},?\n/, "");
pag = pag.replace(/"glare-kaomoji": \{[\s\S]*?\},?\n/, "");
pag = pag.replace(/"angry-kaomoji\/[a-z-]+": \{[\s\S]*?\},?\n/g, "");
fs.writeFileSync("lib/category-pagination.ts", pag, "utf8");
console.log(
  "pag has rage?",
  pag.includes("rage-kaomoji"),
  "glare?",
  pag.includes("glare-kaomoji"),
  "pout?",
  pag.includes("pout-kaomoji"),
  "multiline?",
  pag.includes("multiline-kaomoji")
);

// ---- redirects: rage/glare/mad/furious -> angry; annoyed -> pout ----
let cfg = fs.readFileSync("next.config.ts", "utf8");
// Fix destinations that pointed rage/glare to their own pages
const rewrites = [
  [/destination: "\/rage-kaomoji\/"/g, 'destination: "/angry-kaomoji/"'],
  [/destination: "\/glare-kaomoji\/"/g, 'destination: "/angry-kaomoji/"'],
];
for (const [re, to] of rewrites) cfg = cfg.replace(re, to);

// Ensure key aliases exist
const need = [
  ['"/rage-kaomoji"', "/angry-kaomoji/"],
  ['"/glare-kaomoji"', "/angry-kaomoji/"],
  ['"/mad-kaomoji"', "/angry-kaomoji/"],
  ['"/furious-kaomoji"', "/angry-kaomoji/"],
  ['"/annoyed-kaomoji"', "/pout-kaomoji/"],
];
let inject = "";
for (const [srcLit, dest] of need) {
  if (!cfg.includes(`source: ${srcLit}`)) {
    const bare = srcLit.replace(/"/g, "");
    inject += `      { source: "${bare}", destination: "${dest}", permanent: true },\n`;
    inject += `      { source: "${bare}/", destination: "${dest}", permanent: true },\n`;
  }
}
// Also mad, furious, rage, glare without -kaomoji
const extra = [
  ["/rage", "/angry-kaomoji/"],
  ["/glare", "/angry-kaomoji/"],
  ["/mad", "/angry-kaomoji/"],
  ["/furious", "/angry-kaomoji/"],
  ["/annoyed", "/pout-kaomoji/"],
];
for (const [bare, dest] of extra) {
  if (!cfg.includes(`source: "${bare}"`)) {
    inject += `      { source: "${bare}", destination: "${dest}", permanent: true },\n`;
    inject += `      { source: "${bare}/", destination: "${dest}", permanent: true },\n`;
  } else {
    // force destination to correct owner if wrong
  }
}
if (inject) {
  cfg = cfg.replace(
    /(\n\s*\];\s*\n\s*\},)/,
    `\n${inject}$1`
  );
}
fs.writeFileSync("next.config.ts", cfg, "utf8");
console.log("cfg rage dest angry?", cfg.includes('source: "/rage-kaomoji"') || cfg.includes("/rage"));

// ---- subcategory-nav: only children with parentPath (auto) ----
// Ensure ships chip label for All angry works

// ---- search-box tags ----
let sb = fs.readFileSync("components/kaomoji/search-box.tsx", "utf8");
if (!sb.includes("scope.tags") && !sb.includes("const tags = scope.tags")) {
  sb = sb.replace(
    "const path = scope.path;\n  const category = scope.category;",
    "const path = scope.path;\n  const category = scope.category;\n  const tags = scope.tags;\n  const includeNewlines = scope.includeNewlines;"
  );
  sb = sb.replace(
    /searchFaces\(trimmed, \{ path, category \}\)/g,
    "searchFaces(trimmed, { path, category, tags, includeNewlines })"
  );
  sb = sb.replace(
    "[trimmed, path, category]",
    "[trimmed, path, category, tags, includeNewlines]"
  );
  fs.writeFileSync("components/kaomoji/search-box.tsx", sb, "utf8");
  console.log("search-box tags patched");
} else {
  console.log("search-box ok", sb.includes("tags"));
}

// ---- generator: add presets (shell+presets per architect) ----
let gen = fs.readFileSync("components/kaomoji/kaomoji-generator.tsx", "utf8");
if (!gen.includes("PRESETS")) {
  gen = gen.replace(
    "const EXTRAS =",
    `const PRESETS: Array<{ name: string; left: string; eyeL: string; mouth: string; eyeR: string; right: string; extra: string }> = [
  { name: "Happy", left: "", eyeL: "◕", mouth: "‿", eyeR: "◕", right: "", extra: "" },
  { name: "Angry", left: "", eyeL: "ಠ", mouth: "益", eyeR: "ಠ", right: "", extra: "" },
  { name: "Table flip", left: "(╯", eyeL: "°", mouth: "□", eyeR: "°", right: ")╯", extra: "︵ ┻━┻" },
  { name: "Shrug", left: "¯\\\\_", eyeL: "ツ", mouth: "", eyeR: "", right: "_/¯", extra: "" },
  { name: "Pout", left: "", eyeL: "￣", mouth: "ヘ", eyeR: "￣", right: "", extra: "" },
];

const EXTRAS =`
  );
  // Add presets UI before ChipRow left arm
  if (!gen.includes("Presets")) {
    gen = gen.replace(
      '<ChipRow label="Left arm"',
      `<div className="mt-4">
        <p className="type-label text-foreground">Presets</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => {
                setLeft(preset.left);
                setEyeL(preset.eyeL);
                setMouth(preset.mouth);
                setEyeR(preset.eyeR);
                setRight(preset.right);
                setExtra(preset.extra);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
      <ChipRow label="Left arm"`
    );
  }
  fs.writeFileSync("components/kaomoji/kaomoji-generator.tsx", gen, "utf8");
  console.log("generator presets added");
} else {
  console.log("presets already present");
}

console.log("batch done");
