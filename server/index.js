const express = require('express');
const cors = require('cors');
const OrdersRouter = require('./routes/OrdersRouter');
require('dotenv').config();

const PORT = process.env.API_PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}!`);
});

app.use('/orders', OrdersRouter);
