var Sequelize = require('Sequelize');

var sequelize = new Sequelize('bookings', null, null, {dialect:'sqlite', storage: 'database.sqlite'});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize

