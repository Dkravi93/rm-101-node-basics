// install and import express
const express = require('express');
let app = express();
const path = require('path');
// import user from "./assets/user.json"  
const user = require("./assets/user.json")

// Code here


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'assets','users.html'));
})

app.get('/users', (req,res) => {
    res.json(user);
});

app.get('/users/:id', (req, res) => {
  let dev = req.params.id;
  function check(data) {
    return data.id == dev;
  }
   const person = user.find(check);
   
   res.json(person);
})
app.post('users', (req,res) =>{
  const updatedUser = user.assign(req.body);
  res.json(updatedUser);
})


app.listen(8000);
console.log("Running at Port 8000");
// Note: Do not remove this export statement
module.exports = app;
