let express = require("express");
let expressApp = express();

let logTime = (req, res, next) => {
  console.log("request time was" + Date.now());
  next();
};

let logurl = (req, res, next) => {
  console.log("request url is " + req.originalUrl);
  next();
};
expressApp.use(logTime);
expressApp.use(logurl);

expressApp.get("/user", (req, res) => {
  res.write("Basic User Route");
  res.end();
});

expressApp.listen(8080, () => {
  console.log("Server is up and running");
});
