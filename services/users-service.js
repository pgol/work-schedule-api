function createUsersService({userModel}) {
  function getUsers() {
    return userModel.findAll({});
  }

  function getUser(id) {
    return userModel.find({
      where: {
        id
      }
    });
  }

  function createUser(user) {
    return userModel.create(user)
  }

  function removeUser(id) {
    return userModel.destroy({
      where: {
        id
      }
    })
  }

  function updateUser(id, user) {
    return userModel.getUser(id)
      .then(currentUser => {
        return currentUser.updateAttributes(Object.assign({}, currentUser, user))
      });
  }

  return {
    createUser,
    removeUser,
    updateUser,
    getUsers,
    getUser
  }
}

module.exports = createUsersService;
