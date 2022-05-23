const Orders = require('../services/OrdersService');

const getAll = async (_req, res) => {
  const { status, data } = await Orders.getAll();

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Orders.getById(id);

  if (message) {
    return res.status(status).json({ message });
  };

  res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
};
