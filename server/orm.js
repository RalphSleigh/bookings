const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');


const sequelize = new Sequelize('bookings', null, null, {
	dialect: 'sqlite', storage: 'database.sqlite',
    logging: console.log,
    operatorsAliases: Sequelize.Op.Aliases
});

const db = {};
const modelsDir = path.join(__dirname, 'models');


fs
	.readdirSync(modelsDir)
	.filter(file => {
		return (file.indexOf('.') !== 0);
	})
	.forEach(file => {
        const model = sequelize['import'](path.join(modelsDir, file));
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
