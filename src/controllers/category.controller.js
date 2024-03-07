const { categoryService } = require('../services');

const requestAddCat = async (req, res) => {
  const { body } = req;

  const response = await categoryService.addCategory(body);

  return res.status(201).json(response);
};

module.exports = {
  requestAddCat,
};