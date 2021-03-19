
const { tempData } = require('../db/users/data.')

const User = tempData()

const createUser = async (userBody) => {
  const user = await User.create(userBody);
  return user;
};

const getUserById = async (id) => {
  return User.findById(id);
};

const getUserByName = async (name) => {
  return User.findByName(name);
};

const getUserByEmail =  (email) => {
  console.log("email user" , email);
  return User.find( ({ email }) => email == email );
};



module.exports = {
    getUserByEmail,

};
