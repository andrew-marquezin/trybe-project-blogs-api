const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || '🍌';

const generateToken = (data) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  return jwt.sign({ data: { userId: data.id } }, secret, jwtConfig);
};

module.exports = { generateToken };