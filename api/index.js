const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./database/connectDB');

const port = process.env.PORT;
const connectionStringDB = process.env.MONGO_CONNECTION;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  console.log(`Server running on ${port}`);
  await connectDB(connectionStringDB);
});
