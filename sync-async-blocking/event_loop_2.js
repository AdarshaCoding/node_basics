const fs = require("node:fs");
let a = 100;

setImmediate(() => console.log("setImmediate"));
Promise.resolve("Promise").then(console.log);
fs.readFile("./sample.txt", "utf8", function (err, data) {
  console.log(data);
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  console.log("A = ", a);
}
printA();
console.log("Last line of the code.");

/**
 * A = 100
 * Last line of the code.
 * Process.nextTick
 * Promise
 * setTimeout
 * setImmediate
 * sample data from file
 */

// process.nextTick (prc.nxt_TICK) => promise (pr) => Timer => prc.nxt_TICK => pr => Poll => prc.nxt_TICK => pr => check => prc.nxt_TICK => pr => close => prc.nxt_TICK => pr => timer....
