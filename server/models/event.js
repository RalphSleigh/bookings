

module.exports = (sequelize, DataTypes) => {
	var event = sequelize.define('event', {

		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.TEXT
		},
		startDate: {
			type: DataTypes.DATE
		},
		endDate: {
			type: DataTypes.DATE
		},
		bookingDeadline: {
			type: DataTypes.DATE
		},
		requireDistrict: {
			type: DataTypes.BOOLEAN
		},
		organisationsEnabled: {
			type: DataTypes.BOOLEAN
		},
		partialDates: {
			type: DataTypes.ENUM,
			values: ['whole', 'presets']
		},
		partialDatesData: {
			type: DataTypes.JSON
		},
		bookingPolicy: {
			type: DataTypes.ENUM,
			values: ['guest', 'registered', 'approved']
		},
		feeModel: {
			type: DataTypes.ENUM,
			values: ['free', 'flat', 'ealing']
		},
		feeData: {
			type: DataTypes.JSON
		},
		paymentTypes: {
			type: DataTypes.JSON
		},
		paymentInfo: {
			type: DataTypes.TEXT
		},
		customQuestions: {
			type: DataTypes.JSON
		}
	});

	event.associate = models => {
		models.event.hasMany(models.organisation)
		models.event.hasMany(models.booking)
		models.event.hasMany(models.village)
		models.event.belongsTo(models.user)
	}

return event
}



	/*
	Event.Organisation = Event.hasMany(Organisation, {
		foreignKey: {
			allowNull: false,
		}
	});
	*/
	//do the thingie


