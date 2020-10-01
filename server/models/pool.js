const { Pool } = require ('pg');

const pool = new Pool ({
  user: 'davidhardy',
  host: 'localhost',
  database: 'davidhardy',
  password: 'admin',
  port: 5432
});

module.exports = pool;