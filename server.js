const express = require("express");
const app = express();
const path = require("path");
const api = require("./server/routes/api");
const bodyParser = require("body-parser");
app.use("/", api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})
// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Bank", { useNewUrlParser: true });

const port = 4200;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
