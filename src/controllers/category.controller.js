const { categoryService } = require('../services');

const requestAddCat = async (req, res) => {
  const { body } = req;

  const response = await categoryService.addCategory(body);

  return res.status(201).json(response);
};

const requestFindAll = async (req, res) => {
  const response = await categoryService.findAll();

  return res.status(200).json(response);
};

module.exports = {
  requestAddCat,
  requestFindAll,
};