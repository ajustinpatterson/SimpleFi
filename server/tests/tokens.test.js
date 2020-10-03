const { getTokens, selectUSerFieldTokens } = require('../models/tokens');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');

console.log(getTokens());

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

describe('getTokens', () => {
  test('query should return values', () => {
    return getTokens().then((data) => {
      expect(data).toBeTruthy();
    });
  });
  test('values should be inside an array', () => {
    return getTokens().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });
  test('array should contain data objects', () => {
    return getTokens().then((data) => {
      expect(typeof data[0] === 'object' && !Array.isArray(data[0][0])).toBe(
        true,
      );
    });
  });
  test('should return an object with a "token_id" property', () => {
    return getTokens().then((data) => {
      expect(data[0].token_id).toBeTruthy();
    });
  });
});
