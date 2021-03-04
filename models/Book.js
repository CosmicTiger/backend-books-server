const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        required: [true, 'You must add a title for a book'],
        maxlength: [500, 'The title of the book cannot be larger than 500 characters'],
        type: String
    },
    description: String,
    price: Number,
    publicationDate: Date,
    author: { id: String, fullName: String }
})

module.exports = mongoose.model('Book', BookSchema);
