// http://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express

const express = require("express")
const app = express();
// we use template engine for creating dyanamic web

// handlebar :_ https://www.npmjs.com/package/handlebars

// hbs is express.js view engine for handlebars.js
// to install hbs :_ npm install hbs


//to set view engine
app.set("view engine" ,"hbs");


//template engine route
app.get("/" , (req ,res)=>{
    res.render("index.hbs");  //searching index.hbs file inside views folder
});


app.get("/" , (req ,res)=>{
    res.render("about.hbs");  //searching about.hbs file inside views folder
});




app.get("/" ,(req ,res) =>{
    res.send("<h1>this is homepage</h1>");
});


app.listen(5500 , ()=>{
    console.log("listening to the port number 5500");
});











