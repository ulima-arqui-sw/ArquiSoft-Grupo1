// Definición del modelo Mensaje
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Mensaje extends Model {}

Mensaje.init(
  {
    contenido: DataTypes.TEXT,
    remitente: DataTypes.INTEGER, // ID del usuario remitente
    receptor: DataTypes.INTEGER, // ID del usuario receptor
    salaId: DataTypes.STRING, // ID de la sala correspondiente
  },
  {
    sequelize,
    modelName: 'Mensaje',
    freezeTableName: true,
  }
);

module.exports = { Mensaje };
