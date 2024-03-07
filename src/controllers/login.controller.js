const { loginService } = require('../services');
const { generateToken } = require('../utils/generateToken');

const requestUser = async (req, res) => {
  const { body } = req;

  const user = await loginService.findUser(body);
  if (user) {
    const token = generateToken(user);
    return res.status(200).json({ token });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  requestUser,
};