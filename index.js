let express = require("express");
let expressApp = express();

expressApp.listen(8080, () => {
  console.log("Server is up and running");
});
