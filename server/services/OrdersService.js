const { StatusCodes } = require('http-status-codes');
const { Order } = require('../models');

const getAll = async () => {
  const orders = await Order.findAll({});
  return { status: StatusCodes.OK, data: orders };
};

module.exports = {
  getAll,
};
