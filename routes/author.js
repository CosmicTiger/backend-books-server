const { Router } = require('express');
const express = require('express');

const router = express.Router();

const {
    createAuthor,
    getAuthor,
    getAuthorById,
    updateAuthor,
    deleteAuthor
} = require('../controllers/author');

router
    .route('/')
    .post(createAuthor)
    .get(getAuthor);

router
    .route('/:id')
    .get(getAuthorById)
    .put(updateAuthor)
    .delete(deleteAuthor);


module.exports = router;
