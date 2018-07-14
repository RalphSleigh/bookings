module.exports = {
    up:   function (migration, DataTypes) {
        return migration.addColumn('roles', 'note', {
            type: DataTypes.STRING
        })
    },
    down: function (migration, DataTypes) {
        return migration.removeColumn("roles", 'note');
    }
};