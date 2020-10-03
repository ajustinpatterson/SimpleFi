const { getFields } = require('../models/fields');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');

console.log(getFields);

beforeAll(async () => {
  const sequelize = await new Sequelize(
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
});

describe('getFields', () => {
  test('query should return values', () => {
    return getFields().then((data) => {
      console.log(data[0]);
      expect(data).toBeTruthy();
    });
  });
  test('values should be inside an array', () => {
    return getFields().then((data) => {
      console.log({ data });
      expect(Array.isArray(data)).toBe(true);
    });
  });
});
