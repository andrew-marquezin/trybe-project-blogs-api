const { User } = require('../models');

const findById = async (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const findByEmail = async ({ email }) => {
  const response = await User.findOne({ where: { email } });

  return response;
};

const addUser = async (body) => {
  const response = await User.create(body);

  return response;
};

const findAll = async () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  addUser,
  findByEmail,
  findById,
  findAll,
};