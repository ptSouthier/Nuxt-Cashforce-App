'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Buyers', [
      {
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        createdAt: new Date('2020-10-29T21:20:33'),
        updatedAt: new Date('2020-10-29T21:20:34'),
        cnpjId: 1,
        confirm: 1,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Buyers', null, {});
  }
};
