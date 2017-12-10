module.exports = {
	up: function (migration, DataTypes) {
		return migration.createTable("villages", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: {
				type: DataTypes.STRING
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "events",
					key: "id"
				},
				onDelete: "CASCADE"
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
		return migration.dropTable("villages");
	}
};