const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;
const models = require('./models');

const router = require('./routes/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1', router);

//404 handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json('error');
});


models.sequelize.sync()
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)));

module.exports = app;
