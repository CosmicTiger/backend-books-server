const Author = require('../models/Author');
const ErrorResponse = require("../helpers/errorResponse");

exports.getAuthors = async (req, res, next) => {
    try {
        const authorList = await Author.find();
        res.status(200).json(authorList);
    } catch (err) {
        next(new ErrorResponse("The authors cannot be retrieved " + err.message, 404));
    }
};

exports.getAuthorById = async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id);

        if (!author) {
            return next(new ErrorResponse("The author could not be found in the DB with this ID " + req.params.id, 404));
        }

        res.status(200).json(author);
    } catch (err) {
        next(new ErrorResponse("The author doesn't exits with this ID " + req.params.id, 404));
    }
};

exports.createAuthor = async (req, res, next) => {
    try {
        const authorData = await Author.create(req.body);

        res.status(200).json({
            status: 200,
            data: authorData
        });
    } catch (err) {
        next(new ErrorResponse("Is not possible to create the author " + err.message, 404));
    }
};

exports.updateAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if (!author) {
            return next(new ErrorResponse("The author could not be found in the DB with this ID " + req.params.id, 404));
        }

        res.status(200).json({ status: 200, data: author });
    } catch (err) {
        next(new ErrorResponse("The author doesn't exits with this ID " + req.params.id, 404));
    }
};

exports.deleteAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);

        if (!author) {
            return next(new ErrorResponse("The author could not be found in the DB with this ID " + req.params.id, 404));
        }

        res.status(200).json({ status: 200 });
    } catch (err) {
        next(new ErrorResponse("The author doesn't exits with this ID " + req.params.id, 404));
    }
};
