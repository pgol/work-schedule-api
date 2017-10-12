const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models').User;
const usersService = require('../services/users-service')({
  userModel: User
});
const usersController = require('../controllers/users-controller')({
  usersService
});

const passport = require('passport');
const config = require('../config');
var auth = passport.authenticate('jwt', {session: false});

router
  .post('/login', (req, res) => {
    if(req.body.id === 1) {
      res.send({
        token: jwt.sign({id: req.body.id}, config.jwtSecret),
        id: 1
      });
    } else {
      res.status(401).json({
        message: 'Wrong pass'
      });
    }
  })
  .get('/users',auth, usersController.getUsers)
  .get('/users/:id', usersController.getUser)
  .post('/users', usersController.createUser)
  .put('/users/:id', usersController.updateUser)
  .delete('/users/:id', usersController.removeUser);


module.exports = router;
