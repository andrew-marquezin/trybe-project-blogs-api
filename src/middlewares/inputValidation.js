const { categoryService } = require('../services');

const checkLoginFields = (req, res, next) => {
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

const checkPostCategories = async (categoryIds) => {
  const verifyCat = await Promise.all(categoryIds.map((catId) => (
    categoryService.findById(catId))));

  if (verifyCat.some((cat) => cat === null)) return 'NOK';

  return 'OK';
};

const checkPostFields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const catExists = await checkPostCategories(categoryIds);

  if (catExists === 'NOK') {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const checkUpdateFields = async (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  checkLoginFields,
  checkCatName,
  checkPostFields,
  checkUpdateFields,
};