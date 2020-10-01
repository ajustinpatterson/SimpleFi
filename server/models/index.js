const Sequelize = require('sequelize')

const sequelize = new Sequelize('davidhardy', 'davidhardy', 'admin', { //REL reminder to change the table name
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = sequelize;