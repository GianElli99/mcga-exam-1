const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'The username field is required'],
  },
  password: {
    type: String,
    required: [true, 'The password field is required'],
  },
});

module.exports = mongoose.model('User', userSchema);
