const {
  GraphQLInt
} = require('graphql');
const eventType = require('./event.model');

module.exports = {
  type: eventType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve(data, args, {events}) {
    return events.getEvent(args.id)
  }
};
