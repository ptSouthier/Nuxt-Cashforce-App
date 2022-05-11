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
        type: Sequelize.STRING,
      },
      responsibleName: {
        type: Sequelize.STRING,
      },
      responsibleEmail: {
        type: Sequelize.STRING,
      },
      responsiblePosition: {
        type: Sequelize.STRING,
      },
      responsiblePhone: {
        type: Sequelize.STRING,
      },
      responsibleMobile: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
      complement: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      situation: {
        type: Sequelize.STRING,
      },
      situationDate: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
      },
    });

    return BuyersTable;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Buyers');
  }
};
