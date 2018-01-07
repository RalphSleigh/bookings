module.exports = (sequelize, DataTypes) => {

    const participant = sequelize.define('participant', {
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
        }
    });

    participant.associate = models => {
        models.participant.belongsTo(models.booking);

        models.participant.addScope('KP', {
            attributes: ['id', 'name', 'age', 'diet', 'dietExtra', 'days', 'bookingId'],
        });

        models.participant.addScope('Money', {
            attributes: ['id', 'name', 'days', 'age', 'bookingId']
        });
    };

    return participant

};