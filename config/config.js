const env = process.env;
module.exports = {
  env: env.ENV,
  db: {
    host: env.DB_HOST,
    user: env.DB_USER,
    pass: env.DB_PASS,
    name: env.DB_NAME
  }
};
