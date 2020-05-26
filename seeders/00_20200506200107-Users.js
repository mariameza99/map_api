"use strict";
const { hashPassword } = require("../libs/utils");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "Maria Meza",
          email: "maria@gmail.com",
          password: hashPassword("holamundo123"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
