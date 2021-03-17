const crypto = require('crypto');

const express = require("express");
const validator = require("validator");
const data = require('../data.json');
const fs = require('fs');

const route = express.Router()



route.get("/", (req, res, next) => {
    console.log("tempData" ,data);
    const users = data;
    if(users) {
      res.send(users);
      return;
    }
    next();
  });


route.post("/", async (req, res) => {
  
  // res.send('POST request to the homepage')
    const { body } = req;
 
    try {
      const user = validateUser(body, false);
  console.log(user);
      const newUser = addtojson(user) 
      res.json(newUser);
    } catch(e) {
      res.status(422).json({
        error: e.message,
      })
    }
  })


  function validateUser(body, enforce) {
    if(!body) {
      throw new Error("Invalid body");
    }
    const { email, name, age, id} = body;
    if( !email || email && !validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
    if( !name || name && "string" !== typeof name) {
      throw new Error("Invalid name");
    }
    if( !age || age && "string" !== typeof age) {
      throw new Error("Invalid age");
    }
   
    return {
      id: id || crypto.randomBytes(8).toString("hex"),
      name,
      email,
      age
    }
  }

  const ROUTE_PATH = "/user"
  module.exports = {
  route,
  ROUTE_PATH
}



const addtojson=(customer)=>{
const jsonString = JSON.stringify({...customer,...data})
fs.writeFile('data.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
}
