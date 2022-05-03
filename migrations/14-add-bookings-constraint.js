module.exports = {
    up:   (queryInterface, DataTypes) => queryInterface.addConstraint('bookings',{type: 'UNIQUE', fields: ['userId', 'eventId']}),
    down: (queryInterface, DataTypes) => Promise.resolve()
};

//  --max-old-space-size=1536