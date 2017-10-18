function initUsersController({usersService}) {
  async function getUsers(req, res) {
    try {
      const users = await usersService.getUsers();
      res.json(users);
    } catch(e) {
      console.error(e);
    }
  }

  async function getUser(req, res) {
    console.log(req.params.id);
    try {
      const user = await usersService.getUser(req.params.id);
      res.json(user);
    } catch(e) {
      console.error(e);
    }
  }

  async function createUser(req, res) {
    try {
      const user = await usersService.createUser({
        username: req.body.username,
        password: req.body.password
      });
      res.json(user);
    } catch(e) {
      console.log(e);
    }
  }

  async function removeUser(req, res) {
    try {
      const removedUser = usersService.removeUser(req.params.id);
      res.json(removedUser);
    } catch(e) {
      console.log(e);
    }
  }

  async function updateUser(req, res) {
    try {
      const updatedUser = usersService.updateUser(req.params.id, {
        username: req.body.username,
        email: req.body.email
      });
      res.json(updatedUser);
    } catch(e) {
      console.log(e);
    }
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
