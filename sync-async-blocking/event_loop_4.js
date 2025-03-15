const fs = require("node:fs");
let a = 100;

setImmediate(() => console.log("setImmediate"));
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./sample.txt", "utf8", function (err, data) {
  console.log(data);
});

process.nextTick(() => {
  process.nextTick(() => console.log("Inner nextTick"));
  console.log("Outer nextTick");
});

function printA() {
  console.log("A = ", a);
}
printA();
console.log("Last line of the code.");

/**
 * A = 100
 * Last line of the code.
 * Outer nextTick
 * Inner nextTick
 * Promise
 * setTimeout
 * setImmediate
 * sample data from file
 */

// if nested process.nextTick then it keeps execute all the nextTick then it goes to promise
