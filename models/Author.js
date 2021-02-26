const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    names: String,
    lastNames: String,
    academicGrade: String,
    fullName: String
});

module.exports = mongoose.model('Author', AuthorSchema);
