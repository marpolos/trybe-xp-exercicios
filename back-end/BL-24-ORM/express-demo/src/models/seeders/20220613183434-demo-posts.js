'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'Learning Javascript',
          content: 'Learn to learn javascript',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Learn Express',
          content: 'Express is pretty easy!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {})
  }
};
