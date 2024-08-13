const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env')
});

const express = require('express');
const app = express();

// transform json file in JavaScript object to be understood by express
app.use(express.json());

// user route
const userRouter = require('./routes/user');
app.use('/users', userRouter);

// variables
const SECRET_KEY = process.env.SECRET_KEY;
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

// to start server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
