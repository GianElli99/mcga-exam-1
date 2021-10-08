const { body } = require('express-validator');

const productsValidationChain = () => {
  return [
    body('name', 'The name is invalid').isString().trim().notEmpty(),
    body('price', 'The price is invalid').isNumeric().toInt(),
    body('shortDescription', 'The Short Description is invalid')
      .isString()
      .trim()
      .notEmpty(),
    body('fullDescription', 'The Full Description is invalid')
      .isString()
      .trim()
      .notEmpty(),
    body('isDigital', 'The isDigital field is invalid').isBoolean({
      strict: true,
    }),
    body('weightInKg', 'The weight is invalid')
      .if(body('isDigital').equals('false'))
      .isNumeric(),
  ];
};

module.exports = productsValidationChain;
