const { Router } = require('express');
const express = require('express');

const router = express.Router();

const { createAuthor } = require('../controllers/author');

router
    .route('/')
    .post(createAuthor);

module.exports = router;
