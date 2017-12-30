module.exports = (sequelize, DataTypes) => {
    const event = sequelize.define('event', {

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
            type: DataTypes.BOOLEAN
        },
        organisationsEnabled: {
            type: DataTypes.BOOLEAN
        },
        partialDates: {
            type: DataTypes.ENUM,
            values: ['whole', 'presets']
        },
        partialDatesData: {
            type: DataTypes.JSON
        },
        bookingPolicy: {
            type: DataTypes.ENUM,
            values: ['guest', 'registered', 'approved']
        },
        feeModel: {
            type: DataTypes.ENUM,
            values: ['free', 'flat', 'ealing']
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
        }
    });

    event.associate = models => {
        models.event.hasMany(models.organisation);
        models.event.hasMany(models.booking);
        models.event.hasMany(models.village);
        models.event.hasMany(models.application);
        models.event.hasMany(models.role);
        models.event.belongsTo(models.user);

        models.event.addScope('details',
            {
                include: [{model: models.role, include: [models.user, models.organisation, models.village]},
                    {model: models.organisation},
                    {model: models.application, include: [models.user]},
                    {model: models.village},
                    {model: models.user}]
            },
            {override: true});
    };
    return event
};


/*
Event.Organisation = Event.hasMany(Organisation, {
    foreignKey: {
        allowNull: false,
    }
});
*/
//do the thingie


