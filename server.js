const dotenv = require('dotenv');
const express = require('express');

const book = require('./routes/book');

dotenv.config({ path: './config/config.env' });
// to execute in windows is with SET NODE_ENV=production node server in Linux is NODE_ENV=production node server

const app = express();

app.use('/api/book', book);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server is executing in environment', process.env.NODE_ENV));
