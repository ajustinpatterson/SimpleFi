const { Pool } = require ('pg');

const pool = new Pool ({
  user: 'hcoyfhcuaawtsf',
  host: 'ec2-54-228-209-117.eu-west-1.compute.amazonaws.com',
  database: 'd8pb16l0oa34hu',
  password: '1b4544fbea3825ad1793f7f5f50f0bede010a11a4963698c057de9d8d9d8c4e3',
  port: 5432
});

module.exports = pool;