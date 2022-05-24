const express = require('express');
const app = express();
const PORT = 3000;
const Author = require('./models/Author');
const Book = require('./models/Book');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;

    const books = await Book.getByAuthorId(id);
    if (!books) res.status(404).json({ message: 'Not found books.' });
    res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();
    res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;

    if (!Book.isValid(title, author_id)) {
        return res.status(400).json({ message: 'Dados inválidos.'});
    }

    await Book.create(title, author_id);
    res.status(201).json({ message: 'Livro inserido com sucesso.'});
});

app.listen(PORT, () => console.log('hello world'));