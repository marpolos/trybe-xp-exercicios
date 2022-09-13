const express = require('express');
const router = express.Router();

// const ProductModel = require('../models/productModel');
// const ProductModel = require('../models/productModel');
const ProductService = require('../services/productService');

router.get('/list-products', async (_req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get('/get-by-id/:id', async (req, res, next) => {
  try {
    const product = await ProductService.getById(req.params.id);
    console.log(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.post('/add-product', async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductService.add(name, brand);
    res.send(newProduct);
  } catch(err) {
    next(err);
  }
});

router.delete('/delete-product/:id', async (req, res, next) => {
  try {
    console.log('controler', req.params);
    const products = await ProductService.exclude(req.params.id);
    res.send(products);
  } catch(err) {
    next(err);
  }
});

router.put('/update-product/:id', async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const products = await ProductService.update(req.params.id, name, brand);
    res.send(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;