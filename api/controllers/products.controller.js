const Product = require('../models/product.model');

const getProducts = async (req, res) => {
  try {
    res.json('GET PRODUCTS');
  } catch (error) {}
};

const getProductById = async (req, res) => {
  try {
    res.json('GET PRODUCT BY ID');
  } catch (error) {}
};

const addProduct = async (req, res) => {
  try {
    res.json('ADD PRODUCT');
  } catch (error) {}
};

const modifyProduct = async (req, res) => {
  try {
    res.json('MODIFY PRODUCT');
  } catch (error) {}
};

const deleteProduct = async (req, res) => {
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
