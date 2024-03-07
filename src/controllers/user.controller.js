const { userService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const requestAddUser = async (req, res) => {
  const { body } = req;

  const response = await userService.addUser(body);

  const token = generateToken(response);
  return res.status(201).json({ token });
};

const requestAll = async (_req, res) => {
  const response = await userService.findAll();

  if (!response) return res.status(404).json({ message: 'No user found' });

  return res.status(200).json(response);
};

module.exports = {
  requestAddUser,
  requestAll,
};