const { Category } = require('../models');

const addCategory = async (body) => Category.create(body);

const findAll = async () => Category.findAll();

const findById = async (id) => Category.findByPk(id);

module.exports = {
  addCategory,
  findAll,
  findById,
};