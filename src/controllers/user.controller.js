const { userService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const requestAddUser = async (req, res) => {
  const { body } = req;

  const response = await userService.addUser(body);

  const token = generateToken(response);
  return res.status(201).json({ token });
};

module.exports = {
  requestAddUser,
};