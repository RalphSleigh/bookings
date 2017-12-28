module.exports = {
	up: function (migration, DataTypes) {
		return migration.createTable("bookings", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			userName: {
				type: DataTypes.STRING
			},
			userEmail: {
				type: DataTypes.TEXT,
				unique: 'userEvent' //each booking must have a unique event/email combo
			},
			userContact: {
				type: DataTypes.TEXT
			},
            district: {
                type: DataTypes.TEXT
            },
			paymentType: {
				type: DataTypes.STRING
			},
			paid: {
				type: DataTypes.BOOLEAN,
                defaultValue: false
			},
			note: {
				type: DataTypes.TEXT
			},
			emergencyName: {
				type: DataTypes.TEXT
			},
			emergencyPhone: {
				type: DataTypes.TEXT
			},
            campWith: {
                type: DataTypes.TEXT
            },
			guestUUID: {
				type: DataTypes.UUID
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "users",
					key: "id"
				},
				onDelete: "CASCADE"
			},
			eventId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "events",
					key: "id",
				},
				unique: 'userEvent',
				onDelete: "CASCADE"
			},
			organisationId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "organisations",
					key: "id",
				},
                onDelete: "SET NULL"
			},
			villageId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: "villages",
					key: "id",
				},
                onDelete: "SET NULL"
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
		return migration.dropTable("bookings");
	}
};