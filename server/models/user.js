var Sequelize = require('Sequelize');
var bcrypt = require('bcrypt');
var o = require('../orm.js');

var Role = require('./role.js');

var User = o.define('user', {
  UserName: {
    type: Sequelize.STRING
  },
  Password: {
    type: Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  }
});



User.belongsToMany(Role, {through:"UserRoles"});
Role.belongsToMany(User, {through:"UserRoles"});
//can we now not require Roles Directly? Who knows..


module.exports = User;