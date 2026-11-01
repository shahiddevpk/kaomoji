const fs = require("fs");
let s = fs.readFileSync("lib/site.ts", "utf8");
const bumps = [
  ['"Crying kaomoji (\u0CA5\uFE4F\u0CA5) copy and paste: cry, tears, and sobbing faces. Cry kaomoji searches land here, not on quiet sad."',
   '"Crying kaomoji (\u0CA5\uFE4F\u0CA5) copy and paste: cry, tears, and sobbing faces. Cry searches land here; quiet downcast faces stay on sad."'],
  ['"Rage kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE copy and paste: mad outburst and fury faces. Peak heat, distinct from quiet pout or a hard glare."',
   '"Rage kaomoji (\u30CE\u0CA0\u76CA\u0CA0)\u30CE copy and paste: mad outburst and fury faces. Peak heat that stays distinct from quiet pout or glare."'],
  ['"Glare kaomoji (\uFF40\u03B5\u00B4) copy and paste: grr, gununu, and staring-down faces. Side-eye heat without flipping a table."',
   '"Glare kaomoji (\uFF40\u03B5\u00B4) copy and paste: grr, gununu, and staring-down faces. Side-eye heat without a table flip or full rage."'],
  ['"Angry kaomoji (\u256C\u0CA0\u76CA\u0CA0) copy and paste: scowls, growls, and mad faces. Browse the angry set, or open table flip, fight, rage, pout, and glare."',
   '"Angry kaomoji (\u256C\u0CA0\u76CA\u0CA0) copy and paste: scowls, growls, and mad faces. Browse angry, or open table flip, fight, rage, pout, and glare."'],
];
for (const [a,b] of bumps) {
  if (s.includes(a)) s = s.split(a).join(b);
  else console.log("miss bump", a.slice(0,50));
}
fs.writeFileSync("lib/site.ts", s, "utf8");
console.log("desc bumps done");