const ProductModel = require('../models/productModel');

const getAll = async () => {
    const data = await ProductModel.getAll();
    return data;
};

const getById = async (id) => {
    console.log('id no service', id);
    console.log('id no service', typeof +id);
    if (typeof id !== 'number') {
        throw new error('Precisa ser um número');
    }
    const data = await ProductModel.getById(id);
    return data;
};

const add = async (name, brand) => {
    const data = await ProductModel.add(name, brand);
    return data;
};

const exclude = async (id) => {
    const data = await ProductModel.exclude(id);
    return data.id;
};

const update = async (id, name, brand) => {
    const data = await ProductModel.update(id, name, brand);
    return data;

};

module.exports = {
    getAll,
    getById,
    add,
    exclude,
    update,
}