const Sequelize = require('sequelize'); // Import sequelize 
require("dotenv").config(); // import .env creds 



const sequelize = new Sequelize(   
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  pool: {
    max: 10, // Maximum number of connections in the pool
    min: 0, // Minimum number of connections in the pool
    acquire: 30000, // Maximum time (in milliseconds) that a connection can be idle before being released
    idle: 10000 // Maximum time (in milliseconds) that a connection can remain idle in the pool before being released
  },
  logging: false, // Disable logging SQL queries (optional)
});

module.exports = sequelize;