/**
 * Esta función solicita los lugares asignados a un usuario.
 * @param {string} search
 * 
 */

const dal = require("../PlaceDAL");
const { Op } = require("sequelize");

module.exports = async ({ id, search }, res) => {
    let status = 500;
    let response = {
        message: "Error al buscar lugares",
        parameters: ["id"],
        data: [],
    };

    if (id) {
        const places = await dal.findAll({
            where: {
                userId: {
                    [Op.eq]: id
                },
                deleted: {
                    [Op.eq]: 1
                },
                name: {
                    [Op.like]: '%' + search + '%',
                },
            },
        });
        if (places) {
            status = 200;
            response = {
                message: "Lugares encontrados",
                data: places
            };
        }
    }

    res.status(status).json(response);
};