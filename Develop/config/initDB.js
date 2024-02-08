// initDB.js

const pool = require('./database');

// Get a connection from the pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');

  // Use the created database
  connection.query('USE mydatabase', (err) => {
    connection.release(); // Release the connection back to the pool
    if (err) {
      console.error('Error selecting database:', err);
      return;
    }
    console.log('Using database: mydatabase');

    // Do further database operations here if needed

    // Close the connection pool when done
    pool.end((err) => {
      if (err) {
        console.error('Error closing pool:', err);
        return;
      }
      console.log('Connection pool closed');
    });
  });
});