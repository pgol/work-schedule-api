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
  .post('/users', usersController.createUser);


module.exports = router;
