const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
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
const port = 5000;
app.listen(port, () => {
  console.log("CleanBlog serverine bağlandık!");
});
