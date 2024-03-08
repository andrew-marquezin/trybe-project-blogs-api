const route = require('express').Router();
const { blogPostController } = require('../controllers');
const authenticateJWT = require('../middlewares/authenticateJWT');
const { checkPostFields } = require('../middlewares/inputValidation');

route.post('/', authenticateJWT, checkPostFields, blogPostController.requestNewPost);
route.get('/', authenticateJWT, blogPostController.requestfindAll);
route.get('/:id', authenticateJWT, blogPostController.requestFindById);

module.exports = route;