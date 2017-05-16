function createUsersService({userModel}) {
  function getUsers() {
    return userModel.findAll({});
  }

  function createUser(user) {
    return userModel.create(user)
  }

  return {
    createUser,
    getUsers
  }
}

module.exports = createUsersService;
