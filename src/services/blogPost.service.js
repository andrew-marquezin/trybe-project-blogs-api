const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  addNewPost,
};