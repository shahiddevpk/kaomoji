const fs=require("fs");

// patch search-box for tags
let sb=fs.readFileSync("components/kaomoji/search-box.tsx","utf8");
if(!sb.includes("scope.tags")){
  sb=sb.replace(
    "const path = scope.path;\n  const category = scope.category;",
    "const path = scope.path;\n  const category = scope.category;\n  const tags = scope.tags;\n  const includeNewlines = scope.includeNewlines;"
  );
  sb=sb.replace(
    "void searchFaces(trimmed, { path, category }).then(",
    "void searchFaces(trimmed, { path, category, tags, includeNewlines }).then("
  );
  sb=sb.replace(
    "[trimmed, path, category]",
    "[trimmed, path, category, tags, includeNewlines]"
  );
  // alternate patterns
  sb=sb.replace(
    "searchFaces(trimmed, { path, category })",
    "searchFaces(trimmed, { path, category, tags, includeNewlines })"
  );
  fs.writeFileSync("components/kaomoji/search-box.tsx",sb,"utf8");
  console.log("search-box patched");
} else console.log("search-box already has tags");

// verify resolveSearchScope
const site=fs.readFileSync("lib/site.ts","utf8");
const i=site.indexOf("export function resolveSearchScope");
console.log(site.slice(i, i+700));

// Check SearchDoc export name
const data=fs.readFileSync("data/index.ts","utf8");
console.log("Search type", (data.match(/export type Search\w+/)||[])[0]);
const act=fs.readFileSync("lib/search/actions.ts","utf8");
console.log("actions head", act.slice(0,250));
