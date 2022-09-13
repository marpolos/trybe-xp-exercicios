const express = require('express');
const bookRouter = require('./controller/booksController');
const routers = express.Router();

routers.use('/books', bookRouter);

module.exports = routers;