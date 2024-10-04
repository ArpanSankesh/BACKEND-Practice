const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/read', async function(req, res){
    let users = await userModel.find();
    res.render('read', {users});
});

app.post('/create', async function(req, res){
    let {name, email, image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image
    });
    res.redirect('/read'); 
});

app.get('/edit/:userId', async function(req, res){
    let users = await userModel.findOne({_id: req.params.userId});
    res.render('edit', {users});
});

app.post('/update/:userId', async function(req, res){
    let { name, email, image } = req.body;
    let users = await userModel.findOneAndUpdate({_id: req.params.userId}, {name, email, image }, {new: true});
    res.redirect('/read');
});

app.get('/delete/:id', async function(req, res){
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
});



app.listen(3000);