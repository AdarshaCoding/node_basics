"use strict";
// const { add } = require("./calculate/add.js");
// const { multiply } = require("./calculate/multiply.js");

const { add, multiply } = require("./calculate");
const user = require("./data/user.json");

console.log("Hello world!--app.js");
const x = 10;
const y = 20;
add(x, y);
multiply(x, y);
console.log(user);
