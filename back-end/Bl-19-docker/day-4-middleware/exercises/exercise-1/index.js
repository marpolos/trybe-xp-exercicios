const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors);

app.use('/sistema', require('./routes/index'));

app.listen(3005, () => console.log('Estou na porta 3005'));
