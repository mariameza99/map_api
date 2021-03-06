/**
 * @author María Concepción Meza Manríquez
 * Rutas de Lugares
 */

// Libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const middleware = require('../Middleware');

const Place = express.Router();

Place.use(express.urlencoded({ extended: false }));
Place.use(express.json());
Place.use(cors());

Place.get("/getplaces", (req, res) => {
  services.getplaces(req.query,res);
});

Place.get("/getplacesFiltered", middleware, (req, res) => {
  services.getplacesFiltered(req.query, res);
});

Place.post("/createPlace", middleware, (req, res) => {
    services.create(req.body,res);
});

Place.put("/delete", middleware,  (req, res) => {
  services.deleteplace(req.body,res);
});

Place.put("/updatePlace", middleware, (req, res) => {
  services.updatePlace(req.body, res);
});


module.exports = Place;
