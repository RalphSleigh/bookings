var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');


var sequelize = new Sequelize('bookings', null, null, {
	dialect: 'sqlite', storage: 'database.sqlite',
	logging: console.log
});

var db = {};
var modelsDir = path.join(__dirname, 'models')


fs
	.readdirSync(modelsDir)
	.filter(file => {
		return (file.indexOf('.') !== 0);
	})
	.forEach(file => {
		var model = sequelize['import'](path.join(modelsDir, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
