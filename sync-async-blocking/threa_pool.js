const fs = require("node:fs");
const crypto = require("crypto");
let a = 100;
process.env.UV_THREADPOOL_SIZE = 2;
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key 1");
});

// fs.readFile("./sample.txt", "utf8", function (err, data) {
//   console.log(data);
// });

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key 2");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key 3");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key 4");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key 5");
});
