const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      console.log(hash);
      let user = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      const token = jwt.sign({ email }, "shhh");
      res.cookie("token", token);
      res.send(user);
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) res.render("error");

  bcrypt.compare(req.body.password, user.password , (err, result) => {
    if(result){
      const token = jwt.sign({ email: user.email }, "shhh");
      res.cookie("token", token);
      res.render('profile');
    }else{
      res.render('error');
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000);
