const express = require('express');
const app = express();

const usermodel=require('./usermodel');
const { name } = require('ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
   let createduser= await  usermodel.create({
    name:'nihal',
    email:'nihal@example.com',
    username:'nihal123'
  });
  res.send(createduser);
});


app.get('/update', async (req, res) => {
  let updateduser = await usermodel.findOneAndUpdate({name:"nihal"},{name:"ali"},{new:true})

  res.send(updateduser);
});


app.get('/delete', async (req, res) => {
  let deleteduser = await usermodel.findOneAndDelete({name:"ali"})

  res.send(deleteduser);
});


app.get('/read', async (req, res) => {
  let users = await usermodel.findOne({name: "nihal"});
  res.send(users);
});

app.listen(3000);