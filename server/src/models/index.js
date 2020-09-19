import Sequelize from 'sequelize'

const config = {
  dbName: process.env.NODE_DB_NAME,
  dbUser: process.env.NODE_DB_USER,
  dbPassword: process.env.NODE_DB_PASSWORD,
  dbHost: process.env.NODE_DB_HOST,
  dbDialect: 'mysql'
}

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: config.dbDialect,
  operatorsAliases: false
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)

module.exports = db
