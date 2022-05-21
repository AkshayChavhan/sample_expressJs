const express = require("express") ;
const app = express();
const path = require("path");

// console.log(path.join(__dirname , "./public"));
// buildin middleware
const staticPath = path.join(__dirname , "./public");
app.use(express.static(staticPath));

app.get("/" ,(req,res) =>{
    res.send("<h1>Welcome to normal homepage</h1>")
});


app.listen(5500 , () =>{
    console.log("listening port 5500");
});
