const crypto = require('crypto');

const express = require("express");
const validator = require("validator");
const data = require('../data.json');
const fs = require('fs');
const addtojson = require('../db/users/data.')

const route = express.Router()



route.get("/", (req, res, next) => {
  console.log("tempData", data);
  const users = data;
  if (users) {
    res.send(users);
    return;
  }
  next();
});


route.post("/", async (req, res) => {

  const { body } = req;
  let user =body.user
  let userClient =JSON.parse(user)
  console.log('jhg',userClient);

  try {
    const user = validateUser(userClient, false);
    console.log("post user ",user);
    const newUser =addtojson(user)
    res.json(newUser);
  } catch (e) {
    res.status(422).json({
      error: e.message,
    })
  }
})


function validateUser(body, enforce) {
  if (!body) {
    throw new Error("Invalid body");
  }
  const { email, name, age, id } = body;
  if (!email || email && !validator.isEmail(email)) {
    throw new Error("Invalid email");
  }
  if (!name || name && "string" !== typeof name) {
    throw new Error("Invalid name");
  }
  if (!age || age && "string" !== typeof age) {
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



// const addtojson = (user) => {
//   const dataflie = {user, ...data }
//   const jsonString = JSON.stringify(dataflie)
//   fs.writeFile('data.json', jsonString, err => {
//     if (err) {
//       console.log('Error writing file', err)
//     } else {
//       console.log('Successfully wrote file')
//     }
//   })
// }
