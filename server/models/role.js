var Sequelize = require('sequelize');
var o = require('../orm.js');
var Event = require('./event.js')
var Organisation = require('./organisation.js')
var Village = require('./village.js')

var Role = o.define('role', {
  name: {
    type: Sequelize.STRING
  },
});

Role.belongsTo(Event);
Role.belongsTo(Organisation);
Role.belongsTo(Village);

module.exports = Role;