const {
  GraphQLList
} = require('graphql');
const eventType = require('./event.model');

module.exports = {
  type: new GraphQLList(eventType),
  resolve(data, args, {events}) {
    return events.getEvents();
  }
};
