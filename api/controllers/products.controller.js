const Product = require('../models/product.model');
const { request, response } = require('express');

const getProducts = async (req = request, res = response) => {
  try {
    res.json('GET PRODUCTS');
  } catch (error) {}
};

const getProductById = async (req = request, res = response) => {
  try {
    res.json('GET PRODUCT BY ID');
  } catch (error) {}
};

const addProduct = async (req = request, res = response) => {
  try {
    const product = new Product(req.body);

    const nameAlreadyUsed = await Product.findOne({ name: product.name });
    if (nameAlreadyUsed) {
      res.status(400).json({
        error: 'A product with the same name already exists.',
      });
    } else {
      await product.save();
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'An internal server error ocurred.' });
  }
};

const modifyProduct = async (req = request, res = response) => {
  try {
    const { productId } = req.params;

    const nameAlreadyUsed = Product.findOne({
      name: req.body.name,
      _id: { $ne: productId },
    });
    if (nameAlreadyUsed) {
      return res.status(400).json({
        error: 'A product with the same name already exists.',
      });
    }

    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (product) {
      res.json(tecnico);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An internal server error ocurred.' });
  }
};

const deleteProduct = async (req = request, res = response) => {
  try {
    res.json('DELETE PRODUCT');
  } catch (error) {}
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  modifyProduct,
  deleteProduct,
};
