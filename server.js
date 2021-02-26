const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const connectDatabase = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDatabase();


const book = require('./routes/book');

// to execute in windows is with SET NODE_ENV=production node server in Linux is NODE_ENV=production node server

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/book', book);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log('Server is executing in environment', process.env.NODE_ENV)
);

process.on('unhandleRejection', (err, promise) => {
    console.log('Errors', err.message);
    server.close(() => process.exit(1));
})
