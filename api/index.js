const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./database/connectDB');
const productsRouter = require('./routes/products.routes');

const port = process.env.PORT;
const connectionStringDB = process.env.MONGO_CONNECTION;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/api/products', productsRouter);

// app.get('*', (_req, res) => {
//   res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

app.listen(port, async () => {
  console.log(`Server running on ${port}`);
  await connectDB(connectionStringDB);
});
