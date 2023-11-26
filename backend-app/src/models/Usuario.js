'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {
  /**
   static associate(models) {
      // define association here
    } 
    */
  
}
Usuario.init({
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  tipo_documento: DataTypes.STRING,
  n_documento: DataTypes.STRING,
  correo: DataTypes.STRING,
  contraseña: DataTypes.STRING,
  imagen_url: DataTypes.STRING,
  tipo_usuario: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Usuario',
  freezeTableName: true
});

module.exports = { Usuario };
