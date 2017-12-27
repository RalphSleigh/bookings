module.exports = {
    up: function (migration, DataTypes) {
        return migration.createTable("events", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.TEXT
            },
            startDate: {
                type: DataTypes.DATE
            },
            endDate: {
                type: DataTypes.DATE
            },
            bookingDeadline: {
                type: DataTypes.DATE
            },
            bigCampMode: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            organisationsEnabled: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            partialDates: {
                type: DataTypes.ENUM,
                values: ['whole', 'presets'],
                defaultValue: 'whole'
            },
            partialDatesData: {
                type: DataTypes.JSON
            },
            bookingPolicy: {
                type: DataTypes.ENUM,
                values: ['guest', 'registered', 'approved'],
                defaultValue: 'guest'
            },
            feeModel: {
                type: DataTypes.ENUM,
                values: ['free', 'flat', 'ealing'],
                defaultValue: 'free'
            },
            feeData: {
                type: DataTypes.JSON
            },
            paymentTypes: {
                type: DataTypes.JSON
            },
            paymentInfo: {
                type: DataTypes.TEXT
            },
            customQuestions: {
                type: DataTypes.JSON
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
        return migration.dropTable("events");
    }
};