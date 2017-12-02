var Sequelize = require('sequelize');
var o = require('../orm.js');

var Booking = require('./booking.js');

var Village = o.define('village', {
  name: {
    type: Sequelize.STRING
  }
});

Village.Booking = Village.hasMany(Booking, {
	foreignKey: {
		allowNull: false,
	}
});

module.exports = Village;