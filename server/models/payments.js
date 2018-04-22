module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define('payment', {
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
        }
    });

    payment.associate = models => {
        models.payment.belongsTo(models.booking);
    };
    return payment
};


/*
Event.Organisation = Event.hasMany(Organisation, {
    foreignKey: {
        allowNull: false,
    }
});
*/
//do the thingie




