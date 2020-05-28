'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    'Place',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
      dir: DataTypes.TEXT,
      color: DataTypes.STRING,
      img: DataTypes.STRING,
      rank: DataTypes.DOUBLE,
      price: DataTypes.STRING,
      cat: DataTypes.STRING,
      desc: DataTypes.TEXT,
      deleted: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
      
    },
    {}
  );
  Place.associate = function(models) {
    // belongsTo
    Place.belongsTo(models.User);
  };
  return Place;
};
