"use strict";
const { hashPassword } = require("../libs/utils");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "usuarios",
      [
        {
          fullname: "Maria Meza",
          email: "maria@gmail.com",
          pass: hashPassword("holamundo123"),
          birthday: "1999-08-28",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuarios", null, {});
  },
};
