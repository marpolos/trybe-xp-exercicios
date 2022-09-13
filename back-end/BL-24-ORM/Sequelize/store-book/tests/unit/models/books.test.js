const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
chai.use(require('sinon-chai'));


const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } = require('sequelize-test-helpers')

// const routes = require('../../../index');

const BookModel = require('../../../database/models/book');

// const BookMocks = require('../../mock/bookMock');

/* describe('GET /books', () => {
    describe('Quando os livros retornam com sucesso', () => {
        let response;
        before(async() => {
            sinon.stub(BookModel, 'findAll').callsFake(BookMocks.getAll);
            response = await chai.request(routes).get('/books');
        });
        after(() => {
            BookModel.findAll.restore();
        });

        it('Retorna status 200', () => {
            expect(response).to.have.status(200);
        });
        it('Retorna um array', () => {
            expect(response.body).to.be.an('array');
        });
    });
}); */

describe('database/Models/Book', () => {
    const Book = BookModel(sequelize, dataTypes);
    const book = new Book;

    checkModelName(Book)('Book');

    context('Properties', () => {
        ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
    });

});
