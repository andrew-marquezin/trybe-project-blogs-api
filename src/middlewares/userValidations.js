// const { User } = require('../models');
const { userService } = require('../services');
const { emailSchema } = require('./schemas/schema');

const validateName = async (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const checkRegisteredEmail = async (req, res, next) => {
  const { body } = req;
  const { error } = emailSchema.validate(body.email);

  if (error) return res.status(400).json({ message: '"email" must be a valid email' });

  const response = await userService.findByEmail(body);

  if (response !== null) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  validateName,
  validatePassword,
  checkRegisteredEmail,
};