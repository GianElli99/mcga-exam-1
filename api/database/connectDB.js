const mongoose = require('mongoose');

const connectDB = async (connectionString) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
    });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
