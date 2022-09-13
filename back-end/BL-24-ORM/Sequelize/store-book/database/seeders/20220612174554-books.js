'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', [
      {
        title: 'As aventuras de Anita',
        author: 'Marcelle Monteiro',
        pageQuantity: 188
      },
      {
        title: 'Loucuras de uma jovem senhora',
        author: 'Marcelle Monteiro',
        pageQuantity: 377
      },
      {
        title: 'Revoluções de bairro',
        author: 'Marcelle Monteiro',
        pageQuantity: 854
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
