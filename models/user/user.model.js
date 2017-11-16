const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');
const get = require('lodash/fp/get');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLInt,
      resolve: get('id')
    },
    username: {
      type: GraphQLString,
      resolve: get('username')
    },
    created_at: {
      type: GraphQLString,
      resolve: get('created_at')
    },
    updated_at: {
      type: GraphQLString,
      resole: get('updated_at')
    }
  }
});
