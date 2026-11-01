const fs=require("fs");
const site=fs.readFileSync("lib/site.ts","utf8");
console.log("TYPE", site.slice(site.indexOf("export type SitePage"), site.indexOf("export const pages")));
console.log("FNS", [...site.matchAll(/export function (\w+)/g)].map(m=>m[1]));
console.log("CONFIG", (site.match(/export const \w+Config[\s\S]*?as const;/)||[])[0]?.slice(0,200));
// angry title segments lengths
const re=/path: "(\/[^"]+)"[\s\S]*?titleSegment: "([^"]+)"[\s\S]*?description:\s*\n\s*"([^"]*)"/g;
let m; while((m=re.exec(site))){
  if(!m[1].includes("angry")&&!m[1].includes("multiline")&&!m[1].includes("generator")) continue;
  const seg=m[2]; const final=seg.includes("Paste Kaomoji")?seg:seg+" | Paste Kaomoji";
  console.log(m[1], "t="+[...final].length, "d="+[...m[3]].length, JSON.stringify(final));
}
const data=fs.readFileSync("data/index.ts","utf8");
console.log("DATA_EXPORTS", [...data.matchAll(/export (?:const|function|type) (\w+)/g)].map(m=>m[1]));
// check includeNewlines option name in countByTags
console.log("tags opts", (data.match(/export function countByTags[\s\S]{0,200}/)||[])[0]);
console.log("getForPage", (data.match(/export function getForPage[\s\S]{0,350}/)||[])[0]);
