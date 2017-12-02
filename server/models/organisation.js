var Sequelize = require('sequelize');
var o = require('../orm.js');
var Event = require('./event.js')

var Organisation = o.define('organisation', {
  name: {
    type: Sequelize.STRING
  }
});

Organisation.belongsTo(Event);

module.exports = Organisation;