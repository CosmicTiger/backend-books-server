const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './config/config.env' });
// to execute in windows is with SET NODE_ENV=production node server in Linux is NODE_ENV=production node server

const app = express();

app.get('/api/book', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'It was process correctly'
    });
});

app.get('/api/book/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book by Id was returned'
    });
});

app.post('/api/book/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was created correctly'
    });
});

app.put('/api/book/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was updated correctly'
    });
});

app.delete('/api/book/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was deleted correctly'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server is executing in environment', process.env.NODE_ENV));
