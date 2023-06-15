const { Pool } = require('pg');

const pool = new Pool({
  password: process.env.PWD_DB,
  port: process.env.PORT_DB,
  host: process.env.HOST_DB,
  database: process.env.DBNAME_DB,
  user: process.env.USER_DB,
});

module.exports = pool;
