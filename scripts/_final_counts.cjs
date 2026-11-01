const fs=require("fs");
const raw=JSON.parse(fs.readFileSync("data/items.json","utf8"));
function norm(f){return String(f).replaceAll("\\n","\n").replaceAll("&quot;",'"').replaceAll("&#x27;","'").replaceAll("&gt;",">").replaceAll("&lt;","<").replaceAll("&amp;","&");}
const has=(i,tags)=>(i.tags||[]).some(t=>tags.includes(String(t).toLowerCase()));
const angry=raw.filter(i=>has(i,["angry"]));
const table=raw.filter(i=>has(i,["tableflip","table flip"]));
const fight=raw.filter(i=>has(i,["fight","punch","hit"]));
const pout=raw.filter(i=>has(i,["pout","hmph","annoyed"]));
const rage=raw.filter(i=>has(i,["rage","mad"]));
const mlTag=raw.filter(i=>has(i,["multi-line","multiline"]));
const nl=raw.filter(i=>norm(i.face).includes("\n"));
const union=new Set([...mlTag.map(i=>i.id),...nl.map(i=>i.id)]);
const ov=(a,b)=>{const ids=new Set(b.map(i=>i.id)); const shared=a.filter(i=>ids.has(i.id)).length; return {n:a.length,shared,pct:Math.round(shared/a.length*1000)/10};};
console.log(JSON.stringify({
  angry:angry.length,
  tableflip:ov(table,angry),
  fight:ov(fight,angry),
  pout:ov(pout,angry),
  rage:ov(rage,angry),
  multiline:{tag:mlTag.length,newline:nl.length,union:union.size,sampleHasRealNl:nl[0]?norm(nl[0].face).includes("\n"):false}
},null,2));
