const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env')
});

console.log('Database URL:', process.env.DATABASE_URL);
const express = require('express');
const cors = require('cors');  
const app = express();

app.use(cors());
app.use(express.json());

// user route
const userRouter = require('./routes/user');
app.use('/users', userRouter);

const SECRET_KEY = process.env.SECRET_KEY;
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
