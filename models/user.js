const saltHashPassword = require('../helpers/helpers').saltHashPassword;

function makeUser(db) {
  const TABLE_NAME = 'users';
  function createUser({username, password}) {
    const {salt, hash} = saltHashPassword(password);
    return db(TABLE_NAME).insert({
      salt,
      encrypted_password: hash,
      username
    }).returning('*');
  }

  function getUsers() {
    return db.select('*').from(TABLE_NAME);
  }
  function getUser(id) {
    return db.select('*').from(TABLE_NAME).where('id', id);
  }

  function removeUser(id) {
    return db(TABLE_NAME).where('id', id).del();
  }

  function updateUser(id, user) {
    return db(TABLE_NAME).where('id', id).update(user);
  }
  return {
    createUser,
    getUser,
    getUsers,
    removeUser,
    updateUser
  };
}

module.exports = makeUser;


