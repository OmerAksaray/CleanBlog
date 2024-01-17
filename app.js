const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const BlogPost = require("./models/blogPost.js");
//app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1/cleanblog-test-db");
app.get("/", async (req, res) => {
  //burda index sayfamıza databaseden gelenleri döndürmesi için find ile buluyoruz
  const blogPost = await BlogPost.find({});
  res.render("index", {
    blogPost,
  });
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.post("/add", async (req, res) => {
  console.log(req.body);
  await BlogPost.create(req.body);
  res.redirect("/");
});
app.get("/post/:id", async (req, res) => {
  console.log(req.params.id);
  const blogPost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogPost,
  });
});
const port = 5000;
app.listen(port, () => {
  console.log("CleanBlog serverine bağlandık!");
});
