const { getTokens, getUserFieldTokens } = require('./tokens');
const Tokens = require('../models/tokens');
const path = require('path');
const helpers = require('./helpers');
const { get } = require('http');

const mocks = {
  req: {
    Host: 'localhost:3020',
    Connection: 'keep-alive',
  },
  res: {
    status: 0,
  },
};

getTokens().then((data) => console.log(data));

describe('getTokens', () => {
  test('test function', () => {
    return getTokens(mocks.req.method).then((data) => console.log(data));
  });
});
