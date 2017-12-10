module.exports = {
	up: function (migration, DataTypes) {
		return migration.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			userName: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
				unique: true
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE
			}
		});
	},
	down: function (migration, DataTypes) {
		return migration.dropTable("users");
	}
};