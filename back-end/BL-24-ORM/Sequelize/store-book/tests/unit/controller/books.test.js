const sinon = require('sinon');
const { expect } = require('chai');

const bookService = require('../../../service/BooksService');
const bookController = require('../../../controller/booksController');

describe('Book controller', () => {
    const books = [];
    const specificBook = {};

    describe('get Books', () => {
        it('Chama a função findAll e envia uma response', async () => {
            const findAll = sinon.stub(bookService, 'getBooks').resolves(books);
            let resSpy = sinon.spy();
            const req = {};
            const res = {
                status: sinon.stub().returns({ send: resSpy }),
            }
        });
    });
});
