'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cnpjs',
          key: 'id',
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      buyerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Buyers',
          key: 'id',
        },
      },
      providerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
