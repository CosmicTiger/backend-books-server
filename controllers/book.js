const Book = require('../models/Book');
const errorResponse = require('../helpers/errorResponse');

exports.getBooks = async (req, res, next) => {
    try {
        const bookList = await Book.find();

        res.status(200).json(bookList);
    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const lookedBook = await Book.findById(req.params.id);

        if (!lookedBook) {
            return next(
                new ErrorResponse('The Book cannot be found', 400)
            );
        }

        res.status(200).json(lookedBook);
    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const createdBook = await Book.create(req.body);

        res.status(200).json({
            status: 200,
            data: createdBook
        });
    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);

        if (!deletedBook) {
            return next(
                new ErrorResponse("The book doesn't exist", 400)
            );
        }

        res.status(200).json({
            status: 200,
            data: updatedBook
        });
    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id, req.body);

        if (!deletedBook) {
            return next(
                new ErrorResponse("The book doesn't exist", 400)
            );
        }

        res.status(200).json({
            status: 200,
            data: deletedBook
        });
    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
};

exports.pagination = async (req, res, next) => {
    try {
        const sort = req.body.sort;
        const sortDirection = req.body.sortDirection;
        const page = parseInt(req.body.page);
        const pageSize = parseInt(req.body.pageSize);

        let filterValue = "";
        let filterProperty = "";
        let books = [];

        let totalRows = 0;

        // filterValue = { value: "", property: "" }
        if (req.body.filterValue) {

            filterValue = req.body.filterValue.value;
            filterProperty = req.body.filterValue.property;

            books = await Book
                .find({
                    [filterProperty]: new RegExp(filterValue, "i")
                })
                .sort(
                    { [sort]: sortDirection }
                )
                .skip((page - 1) * pageSize)
                .limit(pageSize);

            totalRows = await Book.find({
                [filterProperty]: new RegExp(filterValue, "i")
            })
                .count();

        } else {
            books = await Book
                .find()
                .sort({
                    [sort]: sortDirection
                })
                .skip((page - 1) * pageSize)
                .limit(pageSize);

            totalRows = await Book.find().count();
        }

        const pagesQuantity = Math.ceil(totalRows / pageSize);

        res.status(200).json({
            status: 200,
            pageSize,
            page,
            sort,
            sortDirection,
            pagesQuantity,
            totalRows,
            data: books
        });

    } catch (err) {
        next(
            new ErrorResponse('The request cannot be processed ' + err.message, 400)
        );
    }
}
