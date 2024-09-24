const { log } = require('console');
const fs = require('fs');


fs.unlink("hi.txt", function(err){
    if(err) console.log(err);
    else console.log("DONE");
});