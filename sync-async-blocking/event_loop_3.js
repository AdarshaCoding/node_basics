const fs = require("node:fs");
let a = 100;

setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./sample.txt", "utf8", function (err, data) {
  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);
  process.nextTick(() => console.log("Process.nextTick 2"));

  setImmediate(() => console.log("setImmediate 2"));
  console.log(data);
});

process.nextTick(() => console.log("Process.nextTick 1"));

function printA() {
  console.log("A = ", a);
}
printA();
console.log("Last line of the code.");

/**
 * A = 100
 * Last line of the code.
 * Process.nextTick 1
 * Promise
 * setTimeout 1
 * setImmediate 1
 * sample data from file
 * Process.nextTick 2
 * setImmediate 2
 * setTimeout 2
 */

// process.nextTick (prc.nxt_TICK) => promise (pr) => Timer => prc.nxt_TICK => pr => Poll => prc.nxt_TICK => pr => check => prc.nxt_TICK => pr => close => prc.nxt_TICK => pr => timer....
