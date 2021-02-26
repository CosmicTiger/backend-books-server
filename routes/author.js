const { Router } = require('express');
const express = require('express');

const router = express.Router();

const { createAuthor, getAuthor, getAuthorById } = require('../controllers/author');

router
    .route('/')
    .post(createAuthor)
    .get(getAuthor);

router
    .route('/:id')
    .get(getAuthorById);


module.exports = router;
