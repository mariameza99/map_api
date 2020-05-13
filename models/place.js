'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.STRING,
    lang: DataTypes.STRING,
    img: DataTypes.TEXT,
    icon: DataTypes.TEXT
  }, {});
  Place.associate = function(models) {
    // belongsTo
    Place.belongsTo(models.Usuario);
  };
  return Place;
};
