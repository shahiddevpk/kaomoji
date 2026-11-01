const fs=require("fs");
const cv=fs.readFileSync("components/kaomoji/category-view.tsx","utf8");
fs.writeFileSync("scripts/_cv_backup.tsx", cv);
console.log(cv.length, "chars");
console.log(cv);
