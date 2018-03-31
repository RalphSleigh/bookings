module.exports = {
    up: function (migration, DataTypes) {
        return migration.addColumn('bookings', 'maxParticipants', {
            type: DataTypes.INTEGER
        })
    },
    down: function (migration, DataTypes) {
        return migration.removeColumn("participants", 'maxParticipants');
    }
};