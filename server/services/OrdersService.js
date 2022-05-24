const { StatusCodes } = require('http-status-codes');
const { Order, Buyer, Provider } = require('../models');
const orderStatusBuyerDescription = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
];

const formatOrderData = (order) => {
  const orderStatusBuyerInteger = parseInt(order.orderStatusBuyer);
  const valueInteger = parseInt(order.value);
  const formatedEmissionDate = new Date(order.emissionDate).toLocaleDateString('pt-br');
  const valueToReal = valueInteger.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  order.orderStatusBuyer = orderStatusBuyerDescription[orderStatusBuyerInteger];
  order.emissionDate = formatedEmissionDate;
  order.value = valueToReal;

  return order;
};

const getAll = async () => {
  const orders = await Order.findAll({
    include: [
      { model: Buyer, as: 'buyer' },
      { model: Provider, as: 'provider' }
    ]
  });

  orders.map((order) => {
    formatOrderData(order);
    return order;
  });

  return { status: StatusCodes.OK, data: orders };
};

const getById = async (id) => {
  const order = await Order.findOne({
    where: { id },
    include: [
      { model: Buyer, as: 'buyer' },
      { model: Provider, as: 'provider' }
    ]
  });

  if (!order) {
    return { status: StatusCodes.NOT_FOUND, message: `Order ID: ${id} does not exist.`};
  };

  formatOrderData(order);

  return { status: StatusCodes.OK, data: order};
};

module.exports = {
  getAll,
  getById,
};
