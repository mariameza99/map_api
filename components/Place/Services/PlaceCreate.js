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

module.exports = ({name, lat, long, dir, color, img, rank, price, cat, desc}, res) => {
    if (name && lat && long && dir && color && img && rank && price && cat && desc ) {
        dal.create({
            name,
            lat,
            long,
            dir,
            color,
            img,
            rank,
            price,
            cat,
            desc
        });
        res.status(200).json({
            message: "Lugar creado",
        })
    } else {
        res.status(400).json({
            message: "No se enviaron correctamente los parametros.",
            parameters: ["name", "lat", "long", "dir", "color", "img", "rank", "price", "cat", "desc"]
        });
    }
};
