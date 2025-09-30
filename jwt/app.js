const express = require('express')
const app=express();


app.get("/", function (req, res) {
    res.cookie("name", "poti");
    res.send("j");
});


app.get("/read", function(req,res){
    res.send("ji");
})

app.listen(3000);