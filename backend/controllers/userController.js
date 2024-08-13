const pool = require('../config/db'); // PostgreSQL connection pool
const bcrypt = require('bcrypt'); // for hashing passwords

// GET: Get data from users
const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aluno_matricula');
    res.status(200).json(result.rows); // JSON
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST: Add new user
const createUser = async (req, res) => {
  const { name, email, birthDate, country, languages, searchFields, password, hedera_account_id = null, private_key = null } = req.body;

  try {
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // add user
    const result = await pool.query(
      'INSERT INTO aluno_matricula (name, email, birth_date, country, languages, search_fields, password_hash, hedera_account_id, private_key) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, email, birthDate, country, languages, searchFields, hashedPassword, hedera_account_id, private_key]
    );
    res.status(201).json(result.rows[0]); // JSON
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getUsers, createUser };
