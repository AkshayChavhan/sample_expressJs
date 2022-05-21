const express = require("express");         //to aquire the express in app.js
const app = express() ;      //saving express function in app variable now it has mothods and features

//creating routing for methods as follows
// get  - read
// post -create
// put  -update
// delete -delete

app.get("/" , (req , res) =>{
    res.send("Helllo from express")
});

app.get("/about" , (req , res) =>{
    res.send("Helllo from about page")
});

app.listen(5000 , ()=>{
    console.log("listening port at 8000");
});







