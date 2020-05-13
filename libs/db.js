const { Sequelize } = require("sequelize");

const db = {};

const sequelize = new Sequelize("map_api", "root", "mariameza", {
  host: "localhost",
  dialect: "mysql"
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
