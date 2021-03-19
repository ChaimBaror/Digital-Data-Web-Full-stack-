
const { tempData } = require('../db/users/data.')

const Users = tempData()

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

const getUserByEmail = (email) => {
  for (let user of Users){
    if(user.email==email){
      return true;
    }
  }
  return null;
};



module.exports = {
    getUserByEmail,

};
