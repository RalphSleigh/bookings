module.exports = {
    up:   function (migration, DataTypes) {
        return migration.addColumn('participants', 'internalExtra', {type: DataTypes.JSON}).then(() =>
                                                                                                     migration.addColumn('participants', 'externalExtra', {type: DataTypes.JSON}));
    },
    down: function (migration, DataTypes) {
        return migration.removeColumn('participants', 'internalExtra').then(() =>
                                                                                migration.removeColumn('participants', 'externalExtra'));

    }
};