module.exports = {
    up:   (queryInterface, DataTypes) => queryInterface.addConstraint('bookings', ['userId', 'eventId'], {type: 'UNIQUE'}),
    down: (queryInterface, DataTypes) => true
};