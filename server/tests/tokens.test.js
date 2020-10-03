const { getTokens, selectUserFieldTokens } = require('../models/tokens');
require('dotenv').config();
const Sequelize = require('sequelize');
require('dotenv').config();
const db = {};
const path = require('path');
const sequelize = require('../models');

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

describe('', () => {
  test('', () => {
    return selectUserFieldTokens(
      `token_id = 2f996b90-d62b-4b79-a153-495dbdc728c0`,
    ).then((data) => console.log(data));
  });
});
