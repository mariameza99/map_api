'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {});
  Usuario.associate = function(models) {
    // hasMany
    Usuario.hasMany(models.Place);
  };
  return Usuario;
};
