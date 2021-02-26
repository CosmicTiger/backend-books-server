const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'It was process correctly'
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book by Id was returned'
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was created correctly'
    });
});

router.put('/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was updated correctly'
    });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Book was deleted correctly'
    });
});

module.exports = router;
