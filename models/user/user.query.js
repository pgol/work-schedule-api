const { GraphQLInt } = require('graphql');
const userType = require('./user.model');

module.exports = {
  type: userType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve(data, { id }, { users }) {
    return users.getUser(id);
  }
};
