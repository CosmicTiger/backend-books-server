exports.getBooks = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'It was process correctly'
    });
}

exports.getBook = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Book by Id was returned'
    });
}

exports.createBook = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Book was created correctly'
    });
}

exports.createBook = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Book was created correctly'
    });
}

exports.updateBook = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Book was updated correctly'
    });
}

exports.deleteBook = (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Book was deleted correctly'
    });
}
