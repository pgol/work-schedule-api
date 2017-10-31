const router = require('express').Router();
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

module.exports = graphqlHTTP({
 schema,
});