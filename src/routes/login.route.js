const route = require('express').Router();
const { loginController } = require('../controllers');
const { checkFields } = require('../middlewares/inputValidation');

route.post('/', checkFields, loginController.requestUser);

module.exports = route;