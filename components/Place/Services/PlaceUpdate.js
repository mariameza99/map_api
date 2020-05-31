const dal = require("../PlaceDAL");

module.exports = ({name,lat,long,dir,color,img,rank,price,cat,desc,id}, res) => {
    console.log(id);
    if (id && name && lat && long && dir && color && img && rank && price && cat && desc) {
        dal.update({
            name: name ,
            lat: lat ,
            long: long ,
            dir: dir ,
            color: color ,
            img: img ,
            rank: rank ,
            price: price ,
            cat: cat ,
            desc: desc ,
        }, {
            returning: true,
            where: {
                id: id,
            }
        });
        res.status(200).json({
            message: "Lugar editado",
        })
    } else {
        res.status(400).json({
            message: "No se enviaron correctamente los parametros.",
            parameters: ["id", "name", "lat", "long", "dir", "color", "img", "rank", "price", "cat", "desc"]
        });
    }
};