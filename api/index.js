const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  console.log(`Server running on ${port}`);
});
