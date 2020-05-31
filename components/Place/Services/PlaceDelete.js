
const dal = require("../PlaceDAL");

module.exports = ({id}, res) => {
    console.log(id);
    if (id) {
        dal.update({
            deleted: 0,    
        }, {
            returning: true,
            where: {
                id: id,
            }
        });
        res.status(200).json({
            message: "Lugar borrado",
        })
    } else {
    res.status(400).json({
        message: "No se enviaron correctamente los parametros.",
        parameters: ["delete"]
    });
}
};