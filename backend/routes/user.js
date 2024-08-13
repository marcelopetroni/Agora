const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// map specific URLs to controller functions
// the '/users' prefix is only defined in index.js to allow these functions to be mapped to different routes if needed

// get users
router.get('/', getUsers);

// add new user
router.post('/', createUser);

module.exports = router;
