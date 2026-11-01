const fs = require("fs");
const lines = fs.readFileSync("lib/site.ts","utf8").split(/\n/);
for (let n of [575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639]) {
  console.log(String(n).padStart(4) + "| " + lines[n-1]);
}