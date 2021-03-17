
const express = require("express");
const validator = require("validator");
const data = require('../db/data.json');


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
  console.log("req.body " + req.body);
    const { body } = req;
    try {
      const user = validateUser(body, false);
  console.log(user);
      const newUser = "";
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
    if(enforce && !email || email && !validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
    if(enforce && !name || name && "string" !== typeof name) {
      throw new Error("Invalid name");
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

