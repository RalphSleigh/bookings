const config = require("../config");
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const log = require('./logging.js');

const sequelize = new Sequelize(config.DB_URL, {
    operatorsAliases: Sequelize.Op.Aliases,
    logging:          false
});

const db = {};
const modelsDir = path.join(__dirname, 'models');


fs
    .readdirSync(modelsDir)
    .filter(file => {
        return (file.indexOf('.') !== 0);
    })
    .forEach(file => {
        const imported = require(path.join(modelsDir, file))
        const model = imported(sequelize, Sequelize.DataTypes)
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
