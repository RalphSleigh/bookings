var Sequelize = require('Sequelize');
var o = require('../orm.js');

var Role = o.define('role', {
  Name: {
    type: Sequelize.STRING
  }
});

module.exports = Role;