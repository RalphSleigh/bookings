module.exports = {
    up:   function (migration, DataTypes) {
        return migration.addColumn('bookings', 'internalExtra', {type: DataTypes.JSON})
        .then(() => migration.addColumn('bookings', 'externalExtra', {type: DataTypes.JSON}));
    },
    down: function (migration, DataTypes) {
        return migration.removeColumn('bookings', 'internalExtra')
        .then(() => migration.removeColumn('bookings', 'externalExtra'));

    }
};