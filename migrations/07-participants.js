module.exports = {
	up: function (migration, DataTypes) {
		return migration.createTable("participants", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: {
				type: DataTypes.STRING
			},
			age: {
				type: DataTypes.STRING
			},
			diet: {
				type: DataTypes.STRING
			},
			dietExtra: {
				type: DataTypes.TEXT
			},
			medical: {
				type: DataTypes.TEXT
			},
			days: {
				type: DataTypes.INTEGER
			},
			bookingId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "bookings",
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
		return migration.dropTable("participants");
	}
};