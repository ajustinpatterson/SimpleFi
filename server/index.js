const express = require('express');
const router = require('./router');
// const pool = require('./models/pool');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Sequelize = require('sequelize')
dotenv.config();
// const { Client } = require('pg');

// const client = new Client({
//   connectionString: 'postgres://hcoyfhcuaawtsf:1b4544fbea3825ad1793f7f5f50f0bede010a11a4963698c057de9d8d9d8c4e3@ec2-54-228-209-117.eu-west-1.compute.amazonaws.com:5432/d8pb16l0oa34hu?ssl=true',
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
const sequelize = new Sequelize('postgres://hcoyfhcuaawtsf:1b4544fbea3825ad1793f7f5f50f0bede010a11a4963698c057de9d8d9d8c4e3@ec2-54-228-209-117.eu-west-1.compute.amazonaws.com:5432/d8pb16l0oa34hu?ssl=true', 
  {
    protocol: 'postgres',
    dialect: 'postgres',
    dialectOptions: {ssl:{rejectUnauthorized: false}},
  })

const app = express();
const port = process.env.PORT || 3020;

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('SimpleFi DB connected 🐘');
    app.listen(port, () => {
      console.log(`Solo server listening on localhost:${port} 🎉`)
    });
  } catch (err) {
    console.error('SimpleFi DB connection error', err)
  }
})();