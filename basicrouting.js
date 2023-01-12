let http = require("http");
let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/grocery":
      res.write("This is Grocery Page");
      break;
    case "/clothing":
      res.write("this is clotihing Route");
      break;

    default:
      res.write("This is Home Route");
      break;
  }

  res.end();
});

server.listen(8080, () => {
  console.log("Server is up and running");
});
