const Op = require('sequelize').Op;

module.exports = (sequelize, DataTypes) => {


    const booking = sequelize.define('booking', {

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
        }
    });

    booking.associate = models => {
        models.booking.belongsTo(models.organisation);
        models.booking.belongsTo(models.user);
        models.booking.belongsTo(models.village);
        models.booking.belongsTo(models.event, {
            foreignKey: {
                field: 'eventId',
                allowNull: false,
                unique: 'userEvent',
            },
            onDelete: 'cascade'
        });
        models.booking.hasMany(models.participant, {
            foreignKey: {
                allowNull: false,
            }
        });

        models.booking.addScope('Limited', (event, village, organisation, scope) => {

                let where = null;

                if (village !== null && organisation !== null) where = {
                    "$and": {
                        eventId: {
                            "$eq": event
                        },
                        "$or": {
                            organisationId: {
                                "$eq": organisation
                            },
                            villageId: {
                                "$eq": organisation
                            }
                        }
                    }
                };

                else if (village === null && organisation !== null) where = {
                    "$and": {
                        eventId: {
                            "$eq": event
                        },
                        organisationId: {
                            "$eq": organisation
                        }
                    }
                };


                else if (village !== null && organisation === null) where = {
                    "$and": {
                        eventId: {
                            "$eq": event
                        },
                        villageId: {
                            "$eq": village
                        }
                    }
                };

                else where = {
                        eventId: {
                            "$eq": event
                        }
                    };

                const include = [{model: models.participant, scope: scope}];

                return {where: where, include: include}
            }
        );
    };

    return booking
}
;