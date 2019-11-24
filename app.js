//jshint esversion:6
const express = require("express");
const ejs = require('ejs');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

const app = express();
mongoose.connect('mongodb://localhost:27017/myBlogDB', {
  useNewUrlParser: true
});
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());


var postSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now()
  },
});

var Post = mongoose.model("CollectionOfPosts", postSchema);

// 1- ROOT ROUTE => INDEX
app.get("/", (req, res) => {
  res.redirect("/posts");
});

// 1- INDEX
app.get("/posts", (req, res) => {
  Post.find({}, function(err, allPosts) {
    if (!err) {
      res.render("index", {
        blogposts: allPosts
      });
    } else {
      console.log(err);
    }
  });
});

// 2- Add NEW and ... create
app.get("/posts/new", (req, res) => {
  res.render("newPost.ejs");
});

// 3- CREATE
app.post("/posts", function(req, res) {
  req.body.post.body = req.sanitize(req.body.post.body);
  Post.create(req.body.post, function(err, addedPost) {
    if (!err) {
      console.log("new post added successfully");
      console.log(addedPost);
    } else {
      console.log(err);
    }
    res.redirect("/posts");
  });
});

// 4- SHOW
app.get("/posts/:id", (req, res) => {
  Post.findById(req.params.id,function(err,shownPost){
    if(!err){
      res.render("showPOST",{shownPost:shownPost});
    }else{
      console.log(err);
    }
  });
});

// 5- Make an EDIT and ... update
app.get("/posts/:id/edit", (req, res) => {
  Post.findById(req.params.id,function(err,editedPost){
    if(!err){
      res.render("editPost",{editedPost:editedPost});
    }else{
      console.log(err);
    }
  });
});

// 6- UPDATE

app.put("/posts/:id",(req,res)=>{
  req.body.post.body = req.sanitize(req.body.post.body);
  Post.findByIdAndUpdate(req.params.id,req.body.post,function(err,updatedPost){
    if(!err){
      console.log(updatedPost);
      res.redirect("/posts/");
    }else{
      res.redirect("/posts");
    }
  });
});

// 7- DELETE

app.delete("/posts/:id",(req,res)=>{
  Post.findByIdAndRemove(req.params.id,function(err,deletedPost){
    if(!err){
      res.redirect("/posts");
    }else{
      console.log(err);
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
