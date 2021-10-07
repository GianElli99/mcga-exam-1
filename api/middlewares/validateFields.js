const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validateFields = (req = request, res = response, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    let errorResponse = { errors: [] };
    let lastError;
    for (let i = 0; i < errors.errors.length; i++) {
      if (errors.errors[i].msg !== lastError) {
        lastError = errors.errors[i].msg;
        errorResponse.errors.push(lastError);
      }
    }
    res.status(400).json(errorResponse);
  }
};

module.exports = validateFields;
