const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
console.log([...site.matchAll(/export function (\w+)/g)].map(m=>m[1]));
console.log("type", (site.match(/export type \w+/)||[])[0]);
console.log("parent field", (site.match(/parent\w+\?:/)||[])[0]);
console.log("howTo", /howTo\?:/.test(site), /howTo:/.test(site));
console.log("generator", /kaomoji-generator/.test(site));
const pag=fs.readFileSync("lib/category-pagination.ts","utf8");
console.log("pag href", [...pag.matchAll(/export function (\w+)/g)].map(m=>m[1]));
// check existing cute page naming for CategoryView prop
console.log(fs.readFileSync("app/cute-kaomoji/page.tsx","utf8"));
