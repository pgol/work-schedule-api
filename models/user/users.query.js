const { GraphQLList } = require('graphql');
const userType = require('./user.model');

module.exports = {
  type: new GraphQLList(userType),
  resolve(data, args, { users }) {
    return users.getUsers();
  }
};
