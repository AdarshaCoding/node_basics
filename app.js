// const { add } = require("./calculate/add.js");
// const { multiply } = require("./calculate/multiply.js");

const { add, multiply } = require("./calculate");
const user = require("./data/user.json");

console.log("Hello world!--app.js");
x = 10;
y = 20;
add(x, y);
multiply(x, y);
console.log(user);
