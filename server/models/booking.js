var Sequelize = require('sequelize');
var o = require('../orm.js');

var User = require('./user.js');
var Event = require('./event.js');
var Participant = require('./participant.js');

var Booking = o.define('booking', {
  userName: {
    type: Sequelize.STRING
  },
  userEmail: {
    type: Sequelize.TEXT,
	unique: 'userEvent' //each booking must have a unique event/email combo
  },
  userContact: {
    type: Sequelize.TEXT
  },
  paymentType: {
	  type: Sequelize.STRING
  },
  paid: {
	  type: Sequelize.BOOLEAN
  },
  guestUUID: {
	  type:Sequelize.UUID
  }
});

Booking.Participant = Booking.hasMany(Participant, {foreignKey: {
    allowNull: false,
  }});

Booking.belongsTo(User);//this one can be null in case of guest booking

Booking.belongsTo(Event, {
  foreignKey: {
    field: 'eventId',
    allowNull: false,
	unique: 'userEvent', 
  },
  
  onDelete: 'cascade'
});


module.exports = Booking;