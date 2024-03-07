const { User } = require('../models');

const findByEmail = async ({ email }) => {
  const response = await User.findOne({ where: { email } });

  return response;
};

const addUser = async (body) => {
  const response = await User.create(body);

  return response;
};

module.exports = {
  addUser,
  findByEmail,
};