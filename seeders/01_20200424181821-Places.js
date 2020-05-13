'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.bulkInsert(
      'places',
      [
        {
        name: "UABCS",
        address: "Forjadores",
        lat: 24.101493,
        lang: -110.314203,
        img: "",
        icon: "",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('places', null, {});
  }
};
