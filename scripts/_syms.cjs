const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
const data=fs.readFileSync("data/index.ts","utf8");
const cv=fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
const pag=fs.readFileSync("lib/category-pagination.ts","utf8");
console.log("SITE_FNS", JSON.stringify([...site.matchAll(/export function (\w+)/g)].map(m=>m[1])));
console.log("DATA_FNS", JSON.stringify([...data.matchAll(/export (?:const|function) (\w+)/g)].map(m=>m[1])));
console.log("CV_IMPORT_DATA", JSON.stringify((cv.match(/import \{([^}]+)\} from "@\/data\/index"/)||[])[1]?.replace(/\s+/g,"")));
console.log("CV_IMPORT_SITE", JSON.stringify((cv.match(/import \{([^}]+)\} from "@\/lib\/site"/)||[])[1]?.replace(/\s+/g,"")));
console.log("CV_IMPORT_PAG", JSON.stringify((cv.match(/import \{([^}]+)\} from "@\/lib\/category-pagination"/)||[])[1]?.replace(/\s+/g,"")));
console.log("PAG_EXPORTS", JSON.stringify([...pag.matchAll(/export (?:const|function|type) (\w+)/g)].map(m=>m[1])));
console.log("PAG_FN_NAMES", JSON.stringify([...pag.matchAll(/export function (\w+)/g)].map(m=>m[1])));
// list existing cute route as template
console.log("CUTE", fs.readFileSync("app/cute-kaomoji/page.tsx","utf8"));
try{console.log("CUTE_N", fs.readFileSync("app/cute-kaomoji/page/[n]/page.tsx","utf8"));}catch(e){console.log("no n",e.message)}
console.log("SEARCH_ENGINE_OPTS", (fs.readFileSync("lib/search/index-engine.ts","utf8").match(/export function searchIndexed[\s\S]{0,400}/)||[])[0]);
