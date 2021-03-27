module.exports = {
    up:   function (migration, DataTypes) {
        return migration.changeColumn('applications', 'message', {type: DataTypes.TEXT});
    },
    down: function (migration, DataTypes) {
        return migration.changeColumn('applications', 'message', {type: DataTypes.STRING})
    }
};