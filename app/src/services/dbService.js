const { Pool } = require('pg');
const config = require('../config/config');

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: config.dbUrl,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};