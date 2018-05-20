module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.removeColumn(`users`, `facebookProfileId`)
        .then(() => queryInterface.addColumn('users', 'remoteId', {
            type: DataTypes.STRING
        })),


    down: (queryInterface, DataTypes) => queryInterface.removeColumn(`users`, `remoteId`, {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    })
        .then(() => queryInterface.addColumn('users', 'facebookProfileId', {
            type: DataTypes.STRING,
        }))
};