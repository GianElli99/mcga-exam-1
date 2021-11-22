const Product = require('../models/product.model');
const { request, response } = require('express');

const getProducts = async (req = request, res = response) => {
  try {
    const { name, isDigital } = req.query;

    let filterConditions = {};
    if (name) {
      const regex = new RegExp(name, 'i');
      filterConditions.name = { $regex: regex };
    }
    if (isDigital === true || isDigital === false) {
      filterConditions.isDigital = isDigital;
    }
    const products = await Product.find(filterConditions);
    res.send(products);
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

const getProductById = async (req = request, res = response) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ errors: ['Resource not found'] });
    }
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

const addProduct = async (req = request, res = response) => {
  try {
    const product = new Product(req.body);
    if (product.isDigital) {
      product.weightInKg = undefined;
    }

    const nameAlreadyUsed = await Product.findOne({ name: product.name });
    if (nameAlreadyUsed) {
      res.status(400).json({
        errors: ['A product with the same name already exists.'],
      });
    } else {
      await product.save();
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

const modifyProduct = async (req = request, res = response) => {
  try {
    const { productId } = req.params;

    const nameAlreadyUsed = await Product.findOne({
      name: req.body.name,
      _id: { $ne: productId },
    });

    if (nameAlreadyUsed) {
      return res.status(400).json({
        error: 'A product with the same name already exists.',
      });
    }
    if (req.body.isDigital) {
      req.body.weightInKg = undefined;
      req.body.$unset = { weightInKg: 1 };
    }

    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ errors: ['Resource not found'] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

const deleteProduct = async (req = request, res = response) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ errors: ['Resource not found'] });
    }
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  modifyProduct,
  deleteProduct,
};
