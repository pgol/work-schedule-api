const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const event = require('../models/event/event.query');
const events = require('../models/event/events.query');

const queryType = new GraphQLObjectType({
  name: 'rootSchema',
  description: 'all resources for schedules app',
  fields: {
    version: {
      type: GraphQLString,
      resolve: () => '1.0.0'
    },
    events,
    event
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
