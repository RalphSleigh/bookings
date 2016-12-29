var Sequelize = require('Sequelize');
var o = require('../orm.js');

//var User = require('./user.js');
//var Event = require('./event.js');

var Participant = o.define('participant', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  diet: {
    type: Sequelize.STRING
  },
  dietExtra: {
    type: Sequelize.TEXT
  },
  medical: {
    type: Sequelize.TEXT
  }
});

module.exports = Participant;