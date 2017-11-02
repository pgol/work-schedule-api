const crypto = require('crypto');

function saltHashPassword(password) {
  const salt = crypto.randomBytes(4).toString('hex');
  const hash = crypto.createHmac('sha512', salt).update(password);
  return {
    salt,
    hash: hash.digest('hex')
  };
}

module.exports = {
  saltHashPassword
};
