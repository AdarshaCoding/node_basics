const { add } = require("./add");
const { multiply } = require("./multiply");

console.log("index--module");

console.log(module.exports);

module.exports = { add, multiply };

console.log(module.exports);

// made calculate as a module
