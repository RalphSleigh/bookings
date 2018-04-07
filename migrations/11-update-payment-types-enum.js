module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .changeColumn('events', 'feeModel', {
                type: Sequelize.ENUM('free', 'flat', 'ealing', 'big'),
                allowNull: false
            });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface
            .changeColumn('events', 'feeModel', {
                type: Sequelize.ENUM('free', 'flat', 'ealing'),
                allowNull: false
            });
    }
};