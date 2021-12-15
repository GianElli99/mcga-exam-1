const User = require('../models/user.model');
const { request, response } = require('express');

const signUp = async (req = request, res = response) => {
  try {
    const user = new User(req.body);

    const usernameAlreadyUsed = await User.findOne({ username: user.username });
    if (usernameAlreadyUsed) {
      res.status(400).json({
        errors: ['Username already in use'],
      });
    } else {
      await user.save();
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

const signIn = async (req = request, res = response) => {
  try {
    const { username, password } = req.body;
    const validCredentials = await User.findOne({
      username: username,
      password: password,
    });
    if (validCredentials) {
      res.status(200).json({});
    } else {
      res
        .status(400)
        .json({ errors: ['Invalid credentials, please try again'] });
    }
  } catch (error) {
    res.status(500).json({ errors: ['An internal server error ocurred.'] });
  }
};

module.exports = {
  signUp,
  signIn,
};
