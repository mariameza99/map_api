/**
 * @author María Concepción Meza Manríquez
 * @description API de Express bajo CBD
 */

// Libs
const express = require("express");
const cors = require("cors");

// Components
const Place = require("./components/Place/Place");
const Usuario = require("./components/Usuario/Usuario");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/lugares", Place.api);
app.use("/usuarios", Usuario.api);

/*
console.log("---------------------------");
console.log("---------------------------");
console.log(Object.keys(Place.dal));
console.log("---------------------------");
console.log("---------------------------");
*/

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puesto 3000");
});
