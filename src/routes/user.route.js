const route = require('express').Router();
const { userController } = require('../controllers');
const {
  checkRegisteredEmail,
  validateName,
  validatePassword,
} = require('../middlewares/postUserValidations');

route.post(
  '/', 
  validateName,
  validatePassword,
  checkRegisteredEmail,
  userController.requestAddUser,
);

module.exports = route;