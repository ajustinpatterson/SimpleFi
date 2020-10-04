const { getTokens, getUserFieldTokens } = require('./tokens');
const Tokens = require('../models/tokens');
const path = require('path');
const helpers = require('./helpers');

getTokens().then((data) => console.log(data));

describe('getTokens', () => {
  test('', () => {
    return getTokens().then((data) => console.log(data));
  });
});
