const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDatabase = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDatabase();


const book = require('./routes/book');
const author = require('./routes/author');

// to execute in windows is with SET NODE_ENV=production node server in Linux is NODE_ENV=production node server

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/authorLibrary', author);
app.use('/api/book', book);

// Middleware after the routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log('Server is executing in environment', process.env.NODE_ENV)
);

process.on('unhandleRejection', (err, promise) => {
    console.log('Errors', err.message);
    server.close(() => process.exit(1));
})
