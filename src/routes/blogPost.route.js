const route = require('express').Router();
const { blogPostController } = require('../controllers');
const authenticateJWT = require('../middlewares/authenticateJWT');
const { checkPostFields, checkUpdateFields } = require('../middlewares/inputValidation');
const { checkPostOwner } = require('../middlewares/userValidations');

route.post('/', authenticateJWT, checkPostFields, blogPostController.requestNewPost);
route.get('/', authenticateJWT, blogPostController.requestfindAll);
route.get('/:id', authenticateJWT, blogPostController.requestFindById);
route.put(
  '/:id',
  authenticateJWT,
  checkPostOwner,
  checkUpdateFields,
  blogPostController.requestUpdtPost,
);

module.exports = route;