const fs = require('node:fs');

fs.copyFile("hello.txt", "./copy/chay.txt", function(err){
     if(err)
    {
        console.error(err);
         console.log();
    }
    else
    {
        console.log("done");
    }
})
