const Author = require('../models/Author');

exports.createAuthor = async (req, res, next) => {
    try {
        const authorData = await Author.create(req.body);

        console.log(authorData);
        res.status(200).json({
            status: 200,
            data: authorData
        });
    } catch (err) {
        res.status(400).json({ status: 400, message: err });
    }
};

exports.getAuthor = async (req, res, next) => {
    try {
        const authorList = await Author.find();
        res.status(200).json(authorList);
    } catch (err) {
        res.status(400).json({ status: 400, message: err });
    }
};

exports.getAuthorById = async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json(author);
    } catch (err) {
        res.status(400).json({ status: 400, message: err });
    }
};
