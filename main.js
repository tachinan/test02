let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
const data = require('./data')


app.get("/", (req, res) => {
    res.json(data)
  });
  
  app.listen(port, () => {
    console.log("Starting node.js at port " + port);
  });
  module.exports = app;

  