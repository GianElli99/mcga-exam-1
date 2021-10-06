const { Router } = require('express');

const {
  getProducts,
  getProductById,
  addProduct,
  modifyProduct,
  deleteProduct,
} = require('../controllers/products.controller');

const router = Router();

router.get('/', getProducts);

router.get('/:productId', getProductById);

router.post('/', addProduct);

router.put('/:productId', modifyProduct);

router.delete('/:productId', deleteProduct);

module.exports = router;
