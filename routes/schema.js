const get = require('lodash/fp/get');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');


const eventType = new GraphQLObjectType({
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

const queryType = new GraphQLObjectType({
  name: 'Root',
  fields: {
    version: {
      type: GraphQLString,
      resolve: () => '1.0.0'
    },
    events: {
      type: new GraphQLList(eventType),
      resolve(data, args, {events}) {
        return events.getEvents();
      }
    },
    event: {
      type: eventType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(data, args, {events}) {
        return events.getEvent(args.id)
      }
    }
  }
});

const mySchema = new GraphQLSchema({
  query: queryType
});

module.exports = mySchema;
