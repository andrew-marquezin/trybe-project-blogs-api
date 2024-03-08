const { blogPostService } = require('../services');

const requestNewPost = async (req, res) => {
  const { body } = req;
  const { id } = req.user.dataValues;

  const response = await blogPostService.addNewPost(body, id);

  return res.status(201).json(response);
};

module.exports = {
  requestNewPost,
};