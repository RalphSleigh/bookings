module.exports = {
    up: function (queryInterface, Sequelize) {
        if (queryInterface.sequelize.connectionManager.dialectName === 'sqlite') return Promise.resolve();
        return queryInterface.sequelize.query(`ALTER TYPE "enum_events_feeModel" ADD VALUE 'big'`);
    },

    down: (queryInterface, Sequelize) => {
        if (queryInterface.sequelize.connectionManager.dialectName === 'sqlite') return Promise.resolve();
        return queryInterface.sequelize.query(`
        DELETE 
        FROM
            pg_enum
        WHERE
            enumlabel = 'big' AND
            enumtypid = (
                SELECT
                    oid
                FROM
                    pg_type
                WHERE
                    typname = 'enum_events_feeModel'
            )
    `);
    }
};