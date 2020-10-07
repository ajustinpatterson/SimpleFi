import fs from 'fs';
const UserFactory = require('./user');
const Sequelize = require('sequelize');
import path from 'path';
const basename = path.basename(__filename);
import dotenv from 'dotenv';
dotenv.config();

const db = {};
const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:${process.env.PORT}/${process.env.DATABASE}`,
  {
    //REL reminder to change the table name
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

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ('.js' || '.ts')
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes,
//     );
//     db[model.name] = model;
//   });
const User = UserFactory.UserFactory(sequelize, Sequelize.DataTypes);
db.UserFactory = User;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
