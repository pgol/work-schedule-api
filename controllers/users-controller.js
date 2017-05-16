function initUsersController({usersService}) {
  function getUsers(req, res) {
    return usersService.getUsers()
      .then(users => res.json(users))
      .catch(console.error);
  }

  function createUser(req, res) {
    return usersService.createUser({
      username: req.body.user,
      email: req.body.email
    })
      .then(user => res.json(user))
      .catch(console.error);
  }

  return {
    getUsers,
    createUser
  };
}

module.exports = initUsersController;
