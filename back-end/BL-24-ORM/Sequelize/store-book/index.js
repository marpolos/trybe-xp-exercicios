require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const routes = require('./routes');
const error = require('./middlewares/error');

app.use(express.json());
app.use(routes);

app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
