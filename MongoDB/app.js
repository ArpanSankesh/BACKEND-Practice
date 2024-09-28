const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', function(req, res){
    res.send('it is working')
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Max", 
        username: "XuiXui__", 
        email: "max@gamil.com"
    });
    res.send(createdUser);
});

app.get('/update', async (req, res) => {
    let updateUser = await userModel.findOneAndUpdate({name: "Max"}, {name: "Maxxxx"}, {new : true});
    res.send(updateUser);
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({name: "Max"});
    res.send(users);
});

app.listen(3000);