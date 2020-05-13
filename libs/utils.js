const bcrypt = require("bcrypt");
const jwtConfig = require("./jwtConfig");

module.exports = {
  /**
   * Esta función encripta contraseña
   * @param {String} password
   *@returns {String} encripted password
   */
  hashPassword: (password) => bcrypt.hashSync(password, 10),
  /**
   * Esta función verifica que una contraseña esta encriptada o no
   * @param {String} plaintTextPassword Contraseña sin encriptar
   * @param {String} encryptedPassword Contraseña encriptada
   * @returns {Boolean}
   * */
  verifyPassword: (plaintTextPassword, encryptedPassword) =>
    bcrypt.compareSync(plaintTextPassword, encryptedPassword),
    /**
     * Configuración de los tokens
     */
    jwtConfig,
};
