const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const knex = require('../config/db').knex;
const events = require('../models/event/event')(knex);

const schema = require('./schema');

module.exports = graphqlHTTP({
 schema,
 graphiql: true,
 context: {
   events
 }
});
