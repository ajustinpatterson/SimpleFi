const fields = require('../models/fields');
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
  test('query should return an array of values', (done) => {
    try {
      expect(Array.isArray(fields)).toBe(true);
      done();
    } catch (err) {
      done(err);
    }
  });
  test('first value should be a string', (done) => {
    try {
      expect(typeof fields[0]).toBe('string');
      done();
    } catch (err) {
      done(err);
    }
  });
});
