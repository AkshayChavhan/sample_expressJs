// MROE INFO : https://expressjs.com/en/starter/static-files.html

const express = require("express");

const app = express() ;
const port = 5500;

//need absolute path from directory for which we require "path module"
const path = require("path");


// console.log(path.join(__dirname,"./public"));   this line to see where 
// are we now in absolute path
const staticPath = path.join(__dirname,"./public");
//build in middleware in express
app.use(express.static(staticPath));


app.get("/" , (req ,res) =>{
    res.send("<p>Welcome to the Homepage</p>")
})

app.listen(port , () =>{
    console.log(`listening to port number ${port}`);
});


