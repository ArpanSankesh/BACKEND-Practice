const { log } = require('console');
const fs = require('fs');


fs.writeFile("hey.txt", "hey bro", function(err){
    if(err){console.error(err);}
    else{console.log("done");
    }
})