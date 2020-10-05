import * as express from 'express';
import * as router from './router';
const db = require('./models');
import cors = require('cors');
import morgan = require('morgan');
import dotenv = require('dotenv');
import path = require('path');
dotenv.config();

const app = express();
const port = 3020;
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('SimpleFi DB connected 🐘');
    app.listen(port, () => {
      console.log(`Solo server listening on localhost:${port} 🎉`);
    });
  } catch (err) {
    console.error('SimpleFi DB connection error', err);
  }
})();
