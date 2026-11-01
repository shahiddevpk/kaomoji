const fs=require("fs");
const seo=fs.readFileSync("lib/seo.ts","utf8");
const i=seo.indexOf("export function pageMetadata");
console.log(seo.slice(i, i+900));
console.log("---has robots word---", /robots/.test(seo));
