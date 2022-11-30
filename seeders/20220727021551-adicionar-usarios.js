'use strict';
  const {decrypt,encrypt}= require("./../criptografia");


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { usuario: 'johndoe', nome: 'John Doe', senha: encrypt('123') },
      { usuario: 'picolo', nome: 'Picolo', senha: encrypt('123') },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
