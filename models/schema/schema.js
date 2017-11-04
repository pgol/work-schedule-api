const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const event = require('../event/event.query');
const events = require('../event/events.query');
const user = require('../user/user.query');
const users = require('../user/users.query');
const queryType = new GraphQLObjectType({
  name: 'rootSchema',
  description: 'all resources for schedules app',
  fields: {
    version: {
      type: GraphQLString,
      resolve: () => '1.0.0'
    },
    events,
    event,
    users,
    user
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
