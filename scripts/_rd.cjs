const fs=require("fs");
function head(f,n=60){console.log("\n## "+f); console.log(fs.readFileSync(f,"utf8").split(/\n/).slice(0,n).join("\n"));}
head("lib/category-pagination.ts",100);
head("lib/paginated-category-route.tsx",80);
head("lib/seo.ts",90);
head("lib/search/actions.ts",60);
head("lib/search/index-engine.ts",30);
// find searchIndexed
const eng=fs.readFileSync("lib/search/index-engine.ts","utf8");
const i=eng.indexOf("export function searchIndexed");
console.log(eng.slice(i, i+500));
head("components/kaomoji/category-view.tsx",30);
const cv=fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
console.log("...\n", cv.slice(cv.indexOf("export function CategoryView"), cv.indexOf("export function CategoryView")+900));
head("components/layout/header.tsx",40);
head("components/layout/footer.tsx",40);
