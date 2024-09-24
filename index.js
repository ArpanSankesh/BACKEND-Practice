const { log } = require('console');
const fs = require('fs');


fs.appendFile("hey.txt", ", how are you, i am fine ", function(err){
    if(err){console.error(err);}
    else{console.log("done");
    }
})