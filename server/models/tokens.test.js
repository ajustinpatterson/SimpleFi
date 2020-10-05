const { getTokens, selectUserFieldTokens } = require('./tokens');
require('dotenv').config();
const Sequelize = require('sequelize');
const db = {};
const path = require('path');
const sequelize = require('.');

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
