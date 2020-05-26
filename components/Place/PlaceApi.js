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

Place.get("/", middleware, (req, res) => {
  res.status(200).json({
    message: "Metodo get"
  });
});

Place.post("/", middleware, (req, res) => {
    services.create(req.body,res);
});

Place.put("/", middleware,  (req, res) => {
  res.status(200).json({
    message: "Metodo post"
  });
});

Place.delete("/", middleware, (req, res) => {
  res.status(200).json({
    message: "Metodo delete"
  });
});

module.exports = Place;
