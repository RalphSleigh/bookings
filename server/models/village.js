module.exports = (sequelize, DataTypes) => {
	var village = sequelize.define('village', {
		name: {
			type: DataTypes.STRING
		}
	});

	village.associate = models => {
		models.village.belongsTo(models.event)
		models.village.hasMany(models.role)
		models.village.hasMany(models.booking)
	}
	return village
}