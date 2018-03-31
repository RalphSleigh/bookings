module.exports = {
    up: function (migration, DataTypes) {
        return migration.addColumn('users', 'source', {
            type: DataTypes.STRING
        })
    },
    down: function (migration, DataTypes) {
        return migration.removeColumn("users", 'source');
    }
};