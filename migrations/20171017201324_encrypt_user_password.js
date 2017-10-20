
const saltHashPassword = require('../helpers/helpers').saltHashPassword;

exports.up = function(knex, Promise) {
  function convertPassword (user) {
    const {salt, hash} = saltHashPassword(user.password);
    return knex('users')
      .where({id: user.id})
      .update({
        salt,
        encrypted_password: hash
      });
  }

  return knex.schema
    .table('users', t => {
      t.string('salt');
      t.string('encrypted_password');
    })
    .then(() => knex('users'))
    .then(users => Promise.all(users.map(convertPassword)))
    .then(() => knex.schema.table('users', t => t.dropColumn('password')));
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', t => {
    t.dropColumn('salt');
    t.dropColumn('encrypted_password');
    t.string('password').notNullable();
  })
};
