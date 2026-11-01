const fs=require("fs");
function names(file, re){const s=fs.readFileSync(file,"utf8"); return [...s.matchAll(re)].map(m=>m[1]);}
console.log("data exports", names("data/index.ts", /export (?:const|function|type) (\w+)/g).join(","));
console.log("site helpers", names("lib/site.ts", /export function (\w+)/g).join(","));
console.log("site fields sample", (fs.readFileSync("lib/site.ts","utf8").match(/path: "\/angry-kaomoji"[\s\S]*?related:/)||[])[0]?.slice(0,800));
const cv=fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
console.log("cv import", (cv.match(/import \{[\s\S]*?\} from "@\/data\/index"/)||[])[0]);
console.log("cv props", (cv.match(/export function \w+\([\s\S]*?\}\)/)||[])[0]?.slice(0,200));
console.log("cv page fields", [...cv.matchAll(/page\.(\w+)/g)].map(m=>m[1]).filter((v,i,a)=>a.indexOf(v)===i).join(","));
const seo=fs.readFileSync("lib/seo.ts","utf8");
console.log("seo exports", names("lib/seo.ts", /export function (\w+)/g).join(","));
console.log("seo site import", (seo.match(/from "@\/lib\/site"/)||[])[0], (seo.match(/import \{[^}]+\} from "@\/lib\/site"/)||[])[0]);
const pag=fs.readFileSync("lib/paginated-category-route.tsx","utf8");
console.log("pag route", pag.slice(0,600));
const search=fs.readFileSync("lib/search/actions.ts","utf8");
console.log("search actions", search);
const eng=fs.readFileSync("lib/search/index-engine.ts","utf8");
console.log("engine searchIndexed sig", (eng.match(/export function \w+\([\s\S]*?\): /)||[])[0]);
