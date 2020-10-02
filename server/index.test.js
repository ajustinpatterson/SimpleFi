const express = require('express');
const router = require('./router');
const db = require('./models');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { doesNotMatch } = require('assert');
dotenv.config({ path: __dirname + '/../.env' });

describe('Sequelize', () => {
  it('connects to a SQL database', async () => {
    try {
      expect(await db.authenticate()).toReturn('SimpleFi DB connected 🐘');
    } catch (err) {}
  });
});
