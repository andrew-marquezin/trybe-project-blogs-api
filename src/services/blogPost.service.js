const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, PostCategory, User, Category } = require('../models');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const addNewPost = async ({ title, content, categoryIds }, userId) => {
  const response = await sequelize.transaction(async (t) => {
    const date = new Date();

    const newPost = await BlogPost.create({
      title, content, userId, updated: date, published: date,
    }, { transaction: t });

    const insertCategories = categoryIds.map((categoryId) => (
      { postId: newPost.id, categoryId }
    ));
    await PostCategory.bulkCreate(insertCategories, { transaction: t });

    return newPost;
  });
  return response.dataValues;
};

const findAll = async () => {
  const response = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
  });
  return response;
};

const findById = async (id) => {
  const response = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
  });
  return response;
};

const updatePost = async (id, { title, content }) => {
  const response = await BlogPost.update({ title, content }, { where: { id } });

  if (response[0] === 1) return findById(id);
  
  return null;
};

module.exports = {
  addNewPost,
  findAll,
  findById,
  updatePost,
};