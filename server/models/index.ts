const Sequelize = require('sequelize');
require('dotenv').config();
const db: any = {};

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    //REL reminder to change the table name
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
