let express = require("express");
let expressApp = express();

//HTTP call for base route
expressApp.get("/", (req, res) => {
  res.write("This is my base route");
  res.end();
});

expressApp.get("/user", (req, res) => {
  res.write("This is User route");
  res.end();
});
//expressApp.get("/user/:userId", (req, res) => {
expressApp.get(/^\/user\/(\d+)$/, (req, res) => {
  //regular expression
  // res.write("This is user " + req.params.userId);
  res.write("This is user " + req.params[0]);
  res.end();
});

expressApp.listen(8080, () => {
  console.log("Server is Up and Running");
});
