const express = require('express');
const app = express(); 

const morgan = require('morgan')

app.use(morgan('dev'))


app.set('view engine', 'ejs')


app.use((req, res, next) => {
    const a = 10; 
    const b = 20;
    console.log(a+b);

    return next();
})

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000);