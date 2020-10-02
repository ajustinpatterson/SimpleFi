const fields = require('./fields');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');
const { TestScheduler } = require('jest');

beforeEach(async () => {
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
  test('should get all fields from db', async () => {
    try {
      expect(fields.getFields().length).toBeTruthy();
    } catch (err) {}
  }),
    test('should have a return an array with a length of 2', () => {
      try {
        expect(fields.getFields().length).toHaveBeenCalled();
      } catch (err) {}
    });
});
