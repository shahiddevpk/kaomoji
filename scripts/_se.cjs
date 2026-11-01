const fs=require("fs");
const eng=fs.readFileSync("lib/search/index-engine.ts","utf8");
console.log("has tags filter", eng.includes("doc.tags"));
console.log(eng.slice(eng.indexOf("export function searchIndexed"), eng.indexOf("export function searchIndexed")+900));
const sb=fs.readFileSync("components/kaomoji/search-box.tsx","utf8");
console.log("search-box import", (sb.match(/from "@\/lib\/search\/actions"/)&&sb.match(/import[\s\S]+?from "@\/lib\/search\/actions"/)[0]));
console.log("uses tags?", sb.includes("tags"));
console.log("scope fields", sb.match(/scope\.\w+/g));
