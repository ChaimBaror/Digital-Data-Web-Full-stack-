
const createUser = async (userBody) => {
  const user = await User.create(userBody);
  return user;
};

const getUserById = async (id) => {
  return User.findById(id);
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};



module.exports = {
    getUserByEmail,
    getUserById,
    createUser

};
