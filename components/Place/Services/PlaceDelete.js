/*
  Esta función crea un nuevo lugar en la DB
    @param[object] data.name
    @param[object] data.lat
    @param[object] data.long
    @param[object] data.dir
    @param[object] data.color
    @param[object] data.img
    @param[object] data.rank
    @param[object] data.price
    @param[object] data.cat
    @param[object] data.desc
*/

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