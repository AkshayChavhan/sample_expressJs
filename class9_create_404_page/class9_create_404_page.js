const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


const filesPath = path.join(__dirname,"./files");
const partialPath = path.join(__dirname,"./partials");


app.set("view engine" ,"hbs");
app.set("views" ,filesPath);
hbs.registerPartials(partialPath);


app.get("/" , (req ,res) =>{
    res.render("index.hbs");
});

app.get("/about" , (req ,res) =>{
    res.render("about.hbs");
});

app.get("/" ,(req , res ) =>{
    res.send("this is homepage");
});

app.get("*" ,(req , res ) =>{
    res.render("404.hbs");
});

app.listen(5500,() =>{
    console.log("Port number 5500 is listening");
});