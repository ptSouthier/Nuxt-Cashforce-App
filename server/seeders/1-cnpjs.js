'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Cnpjs', [
      {
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: new Date('2020-10-29T21:20:33'),
        updatedAt: new Date('2020-10-29T21:20:33'),
      },
      {
        cnpj: '00000000000002',
        companyType: '1',
        createdAt: new Date('2020-10-29T21:20:33'),
        updatedAt: new Date('2020-10-29T21:20:33'),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Cnpjs', null, {});
  }
};
