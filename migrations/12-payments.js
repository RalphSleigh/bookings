module.exports = {
    up: function (migration, DataTypes) {
        return migration.createTable("payments", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            type: {
                type: DataTypes.STRING,
                values: ['adjustment', 'payment'],
                allowNull: false
            },
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            note: {
                type: DataTypes.TEXT
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
        return migration.dropTable("payments");
    }
};