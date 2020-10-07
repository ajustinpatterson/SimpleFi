import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

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

const db: {} = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  findOne: Function,
};

export default { sequelize, Sequelize };
