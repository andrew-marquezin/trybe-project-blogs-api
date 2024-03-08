const { blogPostService } = require('../services');

const requestNewPost = async (req, res) => {
  const { body } = req;
  const { id } = req.user.dataValues;

  const response = await blogPostService.addNewPost(body, id);

  return res.status(201).json(response);
};

const requestfindAll = async (_req, res) => {
  const response = await blogPostService.findAll();

  return res.status(200).json(response);
};

const requestFindById = async (req, res) => {
  const { id } = req.params;

  const response = await blogPostService.findById(id);

  if (!response) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(response);
};

const requestUpdtPost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const response = await blogPostService.updatePost(id, body);

  if (!response) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(response);
};

module.exports = {
  requestNewPost,
  requestfindAll,
  requestFindById,
  requestUpdtPost,
};