const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || 'postgres://user:password@localhost:5432/mydatabase',
};