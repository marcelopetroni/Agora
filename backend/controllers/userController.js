const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt'); // for hashing passwords

const prisma = new PrismaClient();

// GET: Get data from users
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users); // JSON
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST: Add new user
const createUser = async (req, res) => {
  const { name, email, birthDate, country, searchFields, password, hedera_account_id } = req.body;

  try {
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Adicionar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        birthDate: new Date(birthDate),
        country,
        searchFields,
        hedera_account_id,
        password: hashedPassword,
      }
    });
    res.status(201).json(user); // JSON
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getUsers, createUser };
