const connection = require('./connection');

const serialize = (bookData) => ({
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
});

const getAll = async() => {
    const query = 'SELECT * FROM model_example.books';
    const [book] = await connection.execute(query);
    return book.map(serialize);
};

const getByAuthorId = async (id) => {
    const query = `SELECT * FROM model_example.books WHERE author_id LIKE ?;`;
    const [books] = await connection.execute(query, [id]);
    if (books.length === 0) return null;
    return books.map(serialize);
};

const isValid = async (title, authorId) => {
    
    if (!authorId || typeof authorId !== 'number') return false;
    if (!title || title.length >= 3) return false;
    
    if (authorId){
      const query = 'SELECT * FROM model_example.authors WHERE id=?';
      const existAuthor = await connection.execute(query, [authorId]);
      if (existAuthor) return true;
      return false;
    }

}

const create = async (title, authorId) => {
    const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);';
    connection.execute(query, [title, authorId]);

}

module.exports = { 
    getAll,
    getByAuthorId,
    isValid,
    create,
}