const { Category } = require('../models');

const addCategory = async (body) => Category.create(body);

const findAll = async () => Category.findAll();

module.exports = {
  addCategory,
  findAll,
};