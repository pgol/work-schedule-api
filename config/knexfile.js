const {db} = require('./config');

module.exports = {
  client: 'pg',
  connection: {
    host : db.host,
    user : db.user,
    password : db.pass,
    database : db.name
  }
};
