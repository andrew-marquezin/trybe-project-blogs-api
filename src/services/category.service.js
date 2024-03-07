const { Category } = require('../models');

const addCategory = async (body) => Category.create(body);

module.exports = {
  addCategory,
};