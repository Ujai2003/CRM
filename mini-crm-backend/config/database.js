const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',        // Ensure this is correct
  password: process.env.DB_PASSWORD || 'bcujai2003',  // Add the correct password here
  database: process.env.DB_NAME || 'mini_crm',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
