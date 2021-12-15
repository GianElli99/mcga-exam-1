const { Router } = require('express');
const { body } = require('express-validator');

const validateFields = require('../middlewares/validateFields');
const { signIn, signUp } = require('../controllers/users.controller');

const router = Router();

router.post(
  '/signin',
  [
    body('username', 'Invalid Username').isString().trim().notEmpty(),
    body('password', 'Invalid Password').isString().trim().notEmpty(),
    validateFields,
  ],
  signIn,
);

router.post(
  '/signup',
  [
    body('username', 'Invalid Username').isString().trim().notEmpty(),
    body('password', 'Invalid Password').isString().trim().notEmpty(),
    validateFields,
  ],
  signUp,
);

module.exports = router;
