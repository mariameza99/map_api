/**
 * Este script crea un nuevo usuario en la base de datos
 * @param {Object} data.fullName
 * @param {Object} data.email
 * @param {Object} data.password
 */

const dal = require("../UserDAL");
const {
    hashPassword
} = require("../../../libs/utils");

module.exports = ({
    fullName,
    email,
    password
}, res) => {
    if (fullName && email && password) {
        var password = hashPassword(password);
        dal.create({
            fullName,
            email,
            password
        });
        res.status(200).json({
            message: "Usuario creado",
        })
    } else {
        res.status(400).json({
            message: "No se enviaron correctamente los parametros.",
            parameters: ["fullName", "email", "password"]
        });
    }

};
