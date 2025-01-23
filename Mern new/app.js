const express = require("express");
const morgan = require("morgan");
const userModel = require('./models/user')
const dbconnection = require('./config/db')

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.send("/ page")
});

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', async (req, res) => {

  const {username , email, password} = req.body;

  const newUser = await userModel.create({
    username:username,
    email:email,
    password:password
  })

  res.send(newUser)
})

app.get('/users', (req, res) => {
  userModel.find({
    username:'Asta'
  }).then((user) => {
    res.send(user)
  })
})

app.listen(3000);
