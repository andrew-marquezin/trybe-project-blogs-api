const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || '🍌';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = extractToken(bearerToken);

  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};