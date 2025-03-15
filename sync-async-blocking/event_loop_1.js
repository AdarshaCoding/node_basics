const fs = require("node:fs");
let a = 100;
setTimeout(() => {
  console.log("setTimeout");
}, 0);

fs.readFile("./sample.txt", "utf8", function (err, data) {
  console.log(data);
});

setImmediate(() => console.log("setImmediate"));

function printA() {
  console.log("A = ", a);
}
printA();

/**
 * A = 100
 * setTimeout
 * setImmediate
 * sample data from file
 */

// process.nextTick (prc.nxt_TICK) => promise (pr) => Timer => prc.nxt_TICK => pr => Poll => prc.nxt_TICK => pr => check => prc.nxt_TICK => pr => close => prc.nxt_TICK => pr => timer....
