module.exports = {
    up:   function (migration, DataTypes) {
        return migration.changeColumn('roles', 'note', {type: DataTypes.TEXT});
    },
    down: function (migration, DataTypes) {
        return migration.changeColumn('roles', 'note', {type: DataTypes.STRING})
    }
};