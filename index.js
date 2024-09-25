const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(function(req, res, next){
    console.log("middelWare chalaa do bro");
    next();
})

app.get('/', function (req, res){
    res.send('Yes bro challl raha hai Nodemon');
})
app.get('/home', function (req, res, next){
    return next (new Error("Something Went Worng"));
})

app.use((err, req, res, next) => {
console.log(err.stack);
res.status(500).send('Something Went Worng');

})

app.listen(1000)
