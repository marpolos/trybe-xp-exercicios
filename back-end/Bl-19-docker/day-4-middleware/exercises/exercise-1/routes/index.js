const express = require('express');
const { restart } = require('nodemon');
const routes = express.Router();

routes.post('/sales', (req, res) => {
    const { productName, infos } = req.body;
    if (productName.length > 4) {
        res.status(201).send("INSERT OK");
    }
    res.status(404).json({ "message": "O campo productName é obrigatório" });

});

module.exports = routes;