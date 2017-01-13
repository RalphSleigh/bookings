var Sequelize = require('Sequelize');
var JsonField = require('sequelize-json');

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
  },
  feeModel: {
	  type: Sequelize.ENUM,
	  values: ['free','flat','ealing']
  },
  feeData: JsonField(o, "Event", "feeData"),
});

Event.belongsTo(User)
//do the thingie


module.exports = Event;