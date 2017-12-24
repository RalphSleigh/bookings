module.exports = (sequelize, DataTypes) => {
    const application = sequelize.define('application', {
        message: {
            type: DataTypes.STRING
        },
    });

    application.associate = models => {
        models.application.belongsTo(models.user, {
            foreignKey: {
                field: 'userId',
                allowNull: false,
                unique: 'userEvent',
            },
            onDelete: 'cascade'
        });
        models.application.belongsTo(models.event, {
            foreignKey: {
                field: 'eventId',
                allowNull: false,
                unique: 'userEvent',
            },
            onDelete: 'cascade'
        });
    };
    return application
};
