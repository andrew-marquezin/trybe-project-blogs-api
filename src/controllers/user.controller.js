const { userService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const requestAddUser = async (req, res) => {
  const { body } = req;

  const response = await userService.addUser(body);
  if (response) {
    const token = generateToken(response);
    return res.status(201).json({ token });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  requestAddUser,
};