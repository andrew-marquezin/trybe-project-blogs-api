const route = require('express').Router();
const { categoryController } = require('../controllers');
const authenticateJWT = require('../middlewares/authenticateJWT');
const { checkCatName } = require('../middlewares/inputValidation');

route.post('/', authenticateJWT, checkCatName, categoryController.requestAddCat);
route.get('/', authenticateJWT, categoryController.requestFindAll);

module.exports = route;