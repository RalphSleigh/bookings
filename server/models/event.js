var Sequelize = require('Sequelize');
var o = require('../orm.js');

var User = require('./user.js');

var Event = o.define('event', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  startDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  },
  bookingDeadline: {
    type: Sequelize.DATE
  },
  allowGuestBookings: {
	type: Sequelize.BOOLEAN
  }
});

Event.belongsTo(User)
//do the thingie


module.exports = Event;