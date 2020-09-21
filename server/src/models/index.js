'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const config = {
    dbName: process.env.NODE_DB_NAME,
    dbUser: process.env.NODE_DB_USER,
    dbPassword: process.env.NODE_DB_PASSWORD,
    dbHost: process.env.NODE_DB_HOST,
    dbDialect: 'mysql'
}

let sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: config.dbDialect,
    operatorsAliases: false
})

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
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
