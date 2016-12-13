var Sequelize = require('Sequelize');
var o = require('../orm.js');

var User = require('./user.js');

var Event = o.define('event', {
  Name: {
    type: Sequelize.STRING
  },
  Description: {
    type: Sequelize.TEXT
  },
  StartDate: {
    type: Sequelize.DATE
  },
  EndDate: {
    type: Sequelize.DATE
  },
  BookingDeadline: {
    type: Sequelize.DATE
  },
  AllowGuestBookings: {
	type: Sequelize.BOOLEAN
  }
});

Event.belongsTo(User)
//do the thingie


module.exports = Event;