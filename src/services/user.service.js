const { User } = require('../models');

const addUser = async (body) => {
  const response = await User.create(body);

  return response;
};

module.exports = {
  addUser,
};