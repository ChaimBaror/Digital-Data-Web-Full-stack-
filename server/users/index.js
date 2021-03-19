const crypto = require('crypto');
const express = require("express");
const validator = require("validator");
const { addtojson, tempData } = require('../db/users/data.')
const { getUserByEmail } = require('../services/users.service')

const route = express.Router()

const data = tempData()

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
  let user = body.user
  let userClient = JSON.parse(user)

  try {
    const user = validateUser(userClient, false);
    // console.log("post user ",user);
    const chechEmail = getUserByEmail(user.email)
    // console.log("chechEmail --- ", chechEmail);
    if (!chechEmail) {
      const newUser = addtojson(user)
      res.json(newUser);
    } else {
      res.status(405).json({
        message: "this email Not unique",
      })
    }

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


