var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 5001;
const { uri } = require("./Config/db.config");
var itemRoutes = require("./Route/item.routes");

mongoose.connect(uri);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/items", itemRoutes);

app.get("/", function (req, res) {
  console.log("app starting on port: " + port);
  res.send("use /items to perform item crud operations");
});

app.listen(port, function () {
  console.log("app listening on port: " + port);
});
