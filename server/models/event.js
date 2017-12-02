var Sequelize = require('sequelize');
var JsonField = require('sequelize-json');
var Organisation = require('./organisation.js');

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
	requireDistrict: {
		type: Sequelize.BOOLEAN
	},
	bookingPolicy: {
		type: Sequelize.ENUM,
		values: ['guest', 'registered', 'approved']
	},
	feeModel: {
		type: Sequelize.ENUM,
		values: ['free', 'flat', 'ealing']
	},
	feeData: JsonField(o, "Event", "feeData"),
	paymentTypes: JsonField(o, "Event", "paymentTypes"),
	paymentInfo: {
		type: Sequelize.TEXT
	},
	customQuestions: JsonField(o, "Event", "feeData"),
});

Event.belongsTo(User)

Event.Organisation = Event.hasMany(Organisation, {
	foreignKey: {
		allowNull: false,
	}
});
//do the thingie


module.exports = Event;