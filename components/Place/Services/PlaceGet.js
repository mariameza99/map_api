/**
 * Esta función solicita los lugares asignados a un usuario.
 * 
 * 
 */

 const dal = require("../PlaceDAL");

 module.exports = async ({id}, res) => {
    let status = 500;
    let response = {
        message: "Error al buscar lugares",
        parameters: ["id"],
        data: [],
    };

    console.log(id);

    res.status(status).json(response);
 };