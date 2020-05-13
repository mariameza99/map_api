/*
  Esta función crea un nuevo lugar en la DB
  @param [string] data
  @param [string] data.name
  @param [string] data.address
  @param [string] data.lat
  @param [string] data.lang
  @param [string] data.img
  @param [string] data.icon
*/

const dal = require("../PlaceDAL")
module.exports = ({ name,address,lat,lang,img,icon}, res) => {

  if(name && address && lat && lang && img && icon){
      dal.create({
        name,
        address,
        lat,
        lang,
        img,
        icon,
      });
      res.status(200).json({
        message: "Lugar creado.",
      });
  }else{
    res.status(400).json({
      message: "No se enviaron correctamente los datos.",
      parameters: ["name","address","lat","lang","img","icon"],
    }); //Bad request
  }

};
