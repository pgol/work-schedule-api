const router = require('express').Router();
const User = require('../models').User;
const usersService = require('../services/users-service')({
  userModel: User
});
const usersController = require('../controllers/users-controller')({
  usersService
});

router
  .get('/users', usersController.getUsers)
  .get('/users/:id', usersController.getUser)
  .post('/users', usersController.createUser)
  .put('/users/:id', usersController.updateUser)
  .delete('/users/:id', usersController.removeUser);


module.exports = router;
