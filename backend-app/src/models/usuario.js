'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class usuario extends Model {
  static associate({ Reunion }) {
    this.belongsToMany(Reunion, { as: 'reunionesInvitadas', through: 'UsuarioReunion', foreignKey: 'idInvitado' });
    this.hasMany(Reunion, { as: 'reuniones', foreignKey: 'idAnfitrion' });
  }
} 
  
usuario.init({
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  tipo_documento: DataTypes.ENUM,
  n_documento: DataTypes.STRING,
  correo: DataTypes.STRING,
  contrasenia: DataTypes.STRING,
  imagen_url: DataTypes.STRING,
  tipo_usuario: DataTypes.ENUM
}, {
  sequelize,
  modelName: 'usuario',
  freezeTableName: true
});

module.exports = { usuario };
