const Orders = require('../services/OrdersService');

const getAll = async (_req, res) => {
  const { status, data } = await Orders.getAll();

  res.status(status).json(data);
};

module.exports = {
  getAll,
};
