const express = require('express');
const router = express.Router();

const {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    pagination
} = require('../controllers/book');

router
    .route('/')
    .get(getBooks)
    .post(createBook);

router
    .route('/:id')
    .get(getBookById)
    .put(updateBook)
    .delete(deleteBook);

router
    .route('/pagination')
    .post(pagination);

module.exports = router;
