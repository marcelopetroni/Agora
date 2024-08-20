const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getUsers);

router.post('/', createUser);

module.exports = router;
