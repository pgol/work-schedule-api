const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql');
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
    },
    description: {
      type: GraphQLString,
      resolve: get('description')
    },
    //creator @TODO add user type later
    start_date: {
      type: GraphQLString,
      resolve: get('start_date')
    },
    end_date: {
      type: GraphQLString,
      resolve: get('end_date')
    },
    created_at: {
      type: GraphQLString,
      resolve: get('created_at')
    },
    updated_at: {
      type: GraphQLString,
      resolve: get('updated_at')
    }
  }
});
