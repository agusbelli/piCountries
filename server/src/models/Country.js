const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    maps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};