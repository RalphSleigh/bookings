module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        facebookProfileId: {
            type: DataTypes.STRING
        },
        userName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        source: {
            type: DataTypes.STRING
        }
    });

    user.associate = models => {
        models.user.hasMany(models.event);
        models.user.hasMany(models.role);
        models.user.hasMany(models.booking);
        models.user.hasMany(models.application);

        models.user.addScope('defaultScope',
            {
                attributes: ['id', 'userName', 'email']

            },
            {override: true});

        models.user.addScope('withPassword',
            {});

        models.user.addScope('withData', {
            attributes: ['id', 'userName', 'email'],
            include: [{model: models.role}, {model: models.application}]
        });
    };

    return user;
};
