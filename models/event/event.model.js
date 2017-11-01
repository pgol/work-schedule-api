const {GraphQLObjectType, GraphQLInt, GraphQLString} = require('graphql');
const get = require('lodash/fp/get');

module.exports = new GraphQLObjectType({
  name: 'Event',
  fields: {
    id: {
      type: GraphQLInt,
      resolve: get('id')
    },
    name: {
      type: GraphQLString,
      resolve: get('name')
    }
  }
});
