const express = require('express');
const app = express()

app.get('/', function (req, res){
    res.send('Hi World');
})
app.get('/home', function (req, res){
    res.send('Haa bhai tu sahi hai!');
})

app.listen(3000)
