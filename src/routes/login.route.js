const route = require('express').Router();
const { loginController } = require('../controllers');
const { checkLoginFields } = require('../middlewares/inputValidation');

route.post('/', checkLoginFields, loginController.requestUser);

module.exports = route;