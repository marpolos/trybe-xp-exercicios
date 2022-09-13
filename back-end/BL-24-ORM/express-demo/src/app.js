require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const db = require('./models'); 
const createSeeds = require('./models/seeders')

const app = express();
const PORT = process.env.PORT;

const postRouter = require('./routes/posts');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postRouter);

const seed = process.argv[2]
if (seed) {
  db.sequelize
    .sync({ force: true })
    .then(() => {
      createSeeds()
    })

    .catch((err) => {
      console.error(err)
    })
} else {
  db.sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}`)
      })
    })
    .catch((err) => {
      console.error(err)
    })
}


/* db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.info(`App listen in port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error(err);
    }); */

module.exports = app;