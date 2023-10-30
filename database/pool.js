const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // Your MySQL host
  user: 'root',      // Your MySQL user
  password: '',  // Your MySQL password
  database: 'test', // Your MySQL database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;