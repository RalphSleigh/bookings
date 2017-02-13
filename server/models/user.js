var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var o = require('../orm.js');

var Role = require('./role.js');

var User = o.define('user', {
  userName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
	unique: true
  }
});



User.belongsToMany(Role, {through:"UserRoles"});
Role.belongsToMany(User, {through:"UserRoles"});
//can we now not require Roles Directly? Who knows..


module.exports = User;
