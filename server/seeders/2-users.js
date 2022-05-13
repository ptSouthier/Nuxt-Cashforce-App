'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'ALAN SOUZA',
        email: 'allan@cashforce.com.br',
        verificationCode: '',
        emailChecked: 1,
        createdAt: new Date('2020-10-01T21:31:37'),
        updatedAt: new Date('2020-10-01T22:10:23'),
        cashforceAdm: 1,
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
