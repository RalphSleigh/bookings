
module.exports = (sequelize, DataTypes) => {
	var user = sequelize.define('user', {
		userName: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
			unique: true
		}
	});

	user.associate = models => {
		models.user.hasMany(models.event)
		models.user.hasMany(models.role)
		models.user.hasMany(models.booking)
	}

	return user
}
