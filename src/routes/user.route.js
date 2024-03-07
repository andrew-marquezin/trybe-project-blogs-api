const route = require('express').Router();
const authenticateJWT = require('../middlewares/authenticateJWT');
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
route.get('/', authenticateJWT, userController.requestAll);
route.get('/:id', authenticateJWT, userController.requestById);

module.exports = route;