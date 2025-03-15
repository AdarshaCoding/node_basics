const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    user = { name: "Adarsha", age: 32, city: "Bengaluru" };
    res.end(JSON.stringify(user));
  }
  //   res.end("Hello World!");
});

server.listen(8080, function () {
  console.log("Server is up and running at port# 8080");
});
