module.exports = {
    up: function (migration, DataTypes) {
        return migration.createTable("applications", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            message: {
                type: DataTypes.STRING
            },
            eventId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "events",
                    key: "id"
                },
                onDelete: "CASCADE",
                unique: 'userEvent'
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id"
                },
                onDelete: "CASCADE",
                unique: 'userEvent'
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
        return migration.dropTable("applications");
    }
};