const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({});

  return { status: StatusCodes.OK, data: users };
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
  });

  if (!user) {
    return { status: StatusCodes.NOT_FOUND, message: `USER ID: ${id} does not exist.`};
  };

  return { status: StatusCodes.OK, data: user};
};

module.exports = {
  getAll,
  getById,
};
