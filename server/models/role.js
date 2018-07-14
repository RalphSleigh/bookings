
module.exports = (sequelize, DataTypes) => {
	var role = sequelize.define('role', {
		name: {
			type: DataTypes.STRING
		},
        note: {
            type: DataTypes.TEXT
        },
	});

	role.associate = models => {
		models.role.belongsTo(models.user)
		models.role.belongsTo(models.event)
		models.role.belongsTo(models.organisation)
		models.role.belongsTo(models.village)
	}

	return role
}
