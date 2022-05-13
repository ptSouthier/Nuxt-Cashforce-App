'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Providers', [
      {
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: new Date('2020-10-29T21:22:21'),
        updatedAt: new Date('2020-10-29T21:22:22'),
        cnpjId: 2,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Providers', null, {});
  }
};
