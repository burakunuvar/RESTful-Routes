//jshint esversion:6
const express = require("express");
const ejs = require('ejs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/myBlogDB', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", (req, res) => {
  // name of homepage, in views folder
  res.render("index");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
