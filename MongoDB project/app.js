const express = require('express');
const app =express();
const path=require('path');
const usermodel= require('./models/user');


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/read",async(req,res)=>{
    let users = await usermodel.find({});
    res.render("read", { users });
});

app.get("/edit/:id",async(req,res)=>{
    let users = await usermodel.findOne({_id:req.params.id});
    res.render("edit", { users });
});



app.post("/update/:id",async(req,res)=>{
    let {name,email,image} =req.body;
    let users = await usermodel.findOneAndUpdate({_id:req.params.id},{image,name,email}, {new:true});
    res.redirect("/read");
});

app.get("/delete/:id",async(req,res)=>{
    let users = await usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect("/read");
});


app.post("/create",async(req,res)=>{
    let{name,email,image} =req.body;
   const createduser = await usermodel.create({
        name,email,image
    })
     res.redirect("/read");
})


app.listen(3000) 