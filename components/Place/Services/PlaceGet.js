/**
 * Esta función solicita los lugares.
 * @param {string} search
 * 
 */

const dal = require("../PlaceDAL");
const {
    Op
} = require("sequelize");

module.exports = async ({search}, res) => {
    let status = 200;
    let response = {
        message: "Error al buscar lugares",
        parameters: ["search"],
        data: [],
    };

    console.log(search);

    if (search) {
        const places = await dal.findAll({
            where: {
                name: {
                    [Op.like]: '%' + search + '%',
                },
                deleted: {
                    [Op.eq]: 1
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