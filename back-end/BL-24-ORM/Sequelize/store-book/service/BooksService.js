const { Book } = require('../database/models');
const { Op } = require('sequelize');

const getBooks = async () => {
    const books = await Book.findAll({
        order: [
            ['author', 'ASC']
        ]
    });

    return { status: 200, data: books };
};

const createBook = async ({
    title,
    author,
    pageQuantity,
    publisher
}) => {
    console.log(title, publisher)
    const book = await Book.create({ title, author, pageQuantity, publisher });
    return { status: 200, data: book };
}

const getByIdBook = async (id) => {
    const book = await Book.findByPk(id);
    if (!book) return { status: 404, message: 'Book not exists'};
    return { status: 200, data: book };
}

const getByAuthor = async (author) => {
    const books = await Book.findAll({
        where: {
            author: {
                [Op.like]: `%${author}%`
            }
        },
        order: [
            ['author', 'ASC']
        ]
    });

    if (books) return { status: 200, data: books };
    return { status: 404, message: 'Don"t have any book of this author' };
}

const updateBook = async (id, {
    title, author, pageQuantity, publisher
}
) => {
    console.log('cheguei aqui 2');
    const [qtdeBookUp] = await Book.update({title, author, pageQuantity}, {
        where: { id }
    });

    if (qtdeBookUp) return { status: 200, message: 'Udated book' };
    return { status: 404, message: 'Error in update book.'};
}

const deleteBook = async (id) => {
    const qtdeBook = await Book.destroy({ where: { id }});
    if (qtdeBook) return { status: 200, message: 'Deleted book' };
    return { status: 404, message: 'Error in delete book.'};
}

module.exports = { getBooks, createBook, getByIdBook, updateBook, deleteBook, getByAuthor };