const express = require("express");

const app = express();
const port = 5500 ;

app.get("/" ,(req ,res) =>{
    res.send("<h1>this is my homepage</h1>");
    // res.write("<h1>this is my homepage</h1>");
});

//below we pass js object and we will get back as json
app.get("/json",(req,res) =>{
    res.send(
        [{
            id:1 ,
            name :"akshay"
        },
        {
            id:2 ,
            name :"Cahvhan"
        }
    ]
    )
})

app.listen(port ,()=>{
    console.log(`listening to ${port}`)
})