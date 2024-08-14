const { Pool } = require('pg');

// PostgreSQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // .env
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to database:', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  release();
});

module.exports = pool;
