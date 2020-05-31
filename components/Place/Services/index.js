const create = require("./PlaceCreate");
const getplaces = require("./PlaceGet");
const getplacesFiltered = require("./PlaceGetFiltered");
const deleteplace = require("./PlaceDelete");
const updatePlace = require("./PlaceUpdate");

module.exports = {
  create,
  getplaces,
  getplacesFiltered,
  deleteplace,
  updatePlace,
}
