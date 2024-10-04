const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/', (req, res) => {
    res.cookie("name", "Xuixui");
    res.send("hey ");
});

app.get('/read', (req, res) => {
    console.log(req.cookies)
    res.send("Cookies");
});

app.listen(3000);