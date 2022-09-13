const express = require('express');
const BookRouter = express.Router();
const BooksService = require('../service/BooksService');

BookRouter.get('/', async (req, res, next) => {
    const { author } = req.query;
    
    if (!author) {
        const { status, data } = await BooksService.getBooks();
        return res.status(status).json(data);
    }
    const { status, data, message } = await BooksService.getByAuthor(author);

    if (message) {
        next({
            status,
            message
        });
    };

    return res.status(status).json(data);
});

BookRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    const { status, data, message } = await BooksService.getByIdBook(id);

    if (message) {
        next({
            status,
            message
        });
    };

    return res.status(status).json(data);
});



BookRouter.post('/', async (req, res) => {
    console.log(req.body)
    const { status, data } = await BooksService.createBook(req.body);
    return res.status(status).json(data);
});

BookRouter.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    
    const { status, message } = await BooksService.updateBook(id, req.body);

    if (status === 404) {
        next({
            status,
            message
        });
    };

    return res.status(status).json({ message });
});

BookRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    
    const { status, message } = await BooksService.deleteBook(id);
    
    if (!id || status === 404 ) {
        next({
            status,
            message
        })
    }
    return res.status(status).json({ message });
})
module.exports = BookRouter;