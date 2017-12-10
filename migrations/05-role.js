module.exports = {
	up: function (migration, DataTypes) {
		return migration.createTable("roles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: {
				type: DataTypes.STRING
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "users",
					key: "id"
				},
				onDelete: "CASCADE"
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "events",
					key: "id"
				},
				onDelete: "CASCADE"
			},
			organisationId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "organisations",
					key: "id"
				},
				onDelete: "CASCADE"
			},
			villageId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "villages",
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
		return migration.dropTable("roles");
	}
};