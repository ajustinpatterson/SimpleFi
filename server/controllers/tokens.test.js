const { getTokens, getUserFieldTokens } = require('./tokens');
require('dotenv').config();
const path = require('path');
const sequelize = require('.');

describe('getTokens', () => {
  test('', () => {
    return getTokens().then((data) => console.log(data));
  });
});
