const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.get('/', (req, res) => {
    res.cookie("name", "Xuixui");
    res.send("hey ");
});

app.listen(3000);