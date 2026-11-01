const fs=require("fs");
const pag=fs.readFileSync("lib/category-pagination.ts","utf8");
const i=pag.indexOf("PAGINATED_SLUGS");
console.log(pag.slice(i, i+1800));
