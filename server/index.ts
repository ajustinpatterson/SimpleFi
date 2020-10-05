import express from 'express';
import { router } from './router';
import db from './models';
import cors = require('cors');
import morgan = require('morgan');
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app: any = express();
const port: number = 3020;
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
