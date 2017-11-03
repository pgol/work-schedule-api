const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const { knex } = require('../config/db');
const { env } = require('../config/config');
const events = require('../models/event/event')(knex);
const users = require('../models/user/user')(knex);

const schema = require('./schema');

module.exports = graphqlHTTP({
  schema,
  graphiql: env === 'dev',
  context: {
    events,
    users
  }
});
