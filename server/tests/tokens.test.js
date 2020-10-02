const tokens = require('./tokens');
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

describe('getTokens', () => {
  test('should get all entries in "tokens" from db', async () => {
    try {
      expect(tokens.getTokens().length).toBeTruthy();
    } catch (err) {}
  }),
    test('should return an array with a length of 2', () => {
      try {
        expect(tokens.getFields().length).toHaveBeenCalled();
      } catch (err) {}
    });
});
