const checkFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const checkCatName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  next();
};

module.exports = {
  checkFields,
  checkCatName,
};