'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const BuyersTable = await queryInterface.createTable('Buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tradingName: {
        type: Sequelize.STRING,
      },
      cashforceTax: {
        type: Sequelize.INTEGER,
      },
      responsibleName: {
        type: Sequelize.INTEGER,
      },
      responsibleEmail: {
        type: Sequelize.INTEGER,
      },
      responsiblePosition: {
        type: Sequelize.INTEGER,
      },
      responsiblePhone: {
        type: Sequelize.INTEGER,
      },
      responsibleMobile: {
        type: Sequelize.INTEGER,
      },
      website: {
        type: Sequelize.INTEGER,
      },
      postalCode: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.INTEGER,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      complement: {
        type: Sequelize.INTEGER,
      },
      neighborhood: {
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.INTEGER,
      },
      state: {
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      situation: {
        type: Sequelize.INTEGER,
      },
      situationDate: {
        type: Sequelize.INTEGER,
      },
      cnpjId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cnpjs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      email: {
        type: Sequelize.INTEGER,
      },
    });

    return BuyersTable;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Buyers');
  }
};
