// config.js

const mysql = require('mysql');

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
  connectionLimit: 10, 
  host: 'localhost', 
  user: 'root',      
  password: '12345678', 
  database: 'mydatabase' 
});

module.exports = pool;