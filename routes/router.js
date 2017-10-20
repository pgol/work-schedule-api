const jwt = require('jsonwebtoken');
const router = require('express').Router();
const knex = require('knex')(require('../knexfile'));
const User = require('../models/user')(knex);
const Events = require('../models/events')(knex);
const passport = require('passport');
const config = require('../config');
var auth = passport.authenticate('jwt', {session: false});

const eventsController = require('../controllers/events-controller')({
  eventsService: Events,
});

const usersController = require('../controllers/users-controller')({
  usersService: User,
});

router
  .post('/login', (req, res) => {
    if (req.body.id === 1) {
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
  .get('/users', usersController.getUsers)
  .get('/users/:id', usersController.getUser)
  .post('/users', usersController.createUser)
  .put('/users/:id', usersController.updateUser)
  .delete('/users/:id', usersController.removeUser)
  .get('/events', eventsController.getEvents)
  .post('/events', eventsController.createEvent);


module.exports = router;
