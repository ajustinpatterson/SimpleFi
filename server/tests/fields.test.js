const { getFields } = require('../models/fields');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');

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
      expect(data).toBeTruthy();
    });
  });
  test('values should be inside an array', () => {
    return getFields().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });
  test('array should contain data objects', () => {
    return getFields().then((data) => {
      expect(typeof data[0][0] === 'object' && !Array.isArray(data[0][0])).toBe(
        true,
      );
    });
  });
  test('should return an object with a "field_id" property', () => {
    return getFields().then((data) => {
      expect(data[0][0].field_id).toBeTruthy();
    });
  });
});
