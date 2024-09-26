const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", function (req, res) {
  fs.readFile(`./files/${req.params.filename}`,"utf-8" ,function(err, filedata){
    res.render('show', {filename: req.params.filename, data: filedata});
  })
});

app.post("/create", function (req, res) {
  const title = req.body.title.split(" ").join("_");
  fs.writeFile(`./files/${title}.txt`,req.body.notes, function (err) {
    res.redirect('/')
    });
});

app.listen(3000, function () {
  console.log("working");
});

