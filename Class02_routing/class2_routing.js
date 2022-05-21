// task
// main page shows :- welcome to my homepage
// /about :- welcome to my about page
// /contact :- welcome to my contact page
// /temp :- welcome to my temp page


const express= require("express");
const app = express();


app.get("/" , (req,res) =>{
    res.send("welcome to my homepage");
});

app.get("/about" , (req,res) =>{
    res.send("welcome to my about");
});

app.get("/contact" , (req,res) =>{
    res.send("welcome to my contact");
});

app.get("/temp" , (req,res) =>{
    res.status(200).send("welcome to my temp");  //new to learn
});

app.listen("5500" ,()=>{
    console.log("listening the port" + " 5500");
});




