let http = require("http");
let server = http.createServer((req, res) => {
  res.write("Hi From Your Server");
  res.end();
});

server.listen(8080, () => {
  console.log("Server is up and running");
});
