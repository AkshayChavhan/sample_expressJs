// http://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express

const express = require("express")
const app = express();



//changing views folder name 
const path = require("path") ;
// console.log(path.join(__dirname , "./templates"));
const templatePath = path.join(__dirname , "./templates");

//to set view engine
app.set("view engine" ,"hbs");
app.set("views" , templatePath);



//template engine route
app.get("/" , (req ,res)=>{
    res.render("index.hbs");  //searching index.hbs file inside views folder
});

app.get("/about" ,(req,res) =>{
    res.render("about.hbs");
});



app.get("/" ,(req ,res) =>{
    res.send("<h1>this is homepage</h1>");
});

//listening at port
app.listen(5500 , ()=>{
    console.log("listening to the port number 5500");
});











