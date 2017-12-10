
module.exports = (sequelize, DataTypes) => {
	var organisation = sequelize.define('organisation', {
		name: {
			type: DataTypes.STRING
		}
	});

	organisation.associate = models => {
		models.organisation.belongsTo(models.event)
		models.organisation.hasMany(models.booking)
		models.organisation.hasMany(models.role)
	}

	return organisation
}

