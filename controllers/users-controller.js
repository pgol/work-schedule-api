function initUsersController({usersService}) {
  function getUsers(req, res) {
    return usersService.getUsers()
      .then(users => res.json(users))
      .catch(console.error);
  }

  function getUser(req, res) {
    console.log(req.params.id);
    return usersService.getUser(req.params.id)
      .then(user => res.json(user))
      .catch(console.error);
  }

  function createUser(req, res) {
    return usersService.createUser({
      username: req.body.username,
      email: req.body.email
    })
      .then(user => res.json(user))
      .catch(console.error);
  }

  function removeUser(req, res) {
    return usersService.removeUser(req.params.id)
      .then(removedUser => res.json(removedUser));
  }

  function updateUser(req, res) {
    return usersService.updateUser(req.params.id, {
      username: req.body.username,
      email: req.body.email
    })
      .then(updatedUser => res.json(updatedUser));
  }

  return {
    getUsers,
    getUser,
    createUser,
    removeUser,
    updateUser
  };
}

module.exports = initUsersController;
