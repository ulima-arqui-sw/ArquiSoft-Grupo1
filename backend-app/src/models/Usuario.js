'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {
  static associate({ Reunion }) {
    this.belongsToMany(Reunion, { as: 'reunionesInvitadas', through: 'UsuarioReunion', foreignKey: 'idInvitado' });
    this.hasMany(Reunion, { as: 'reuniones', foreignKey: 'idAnfitrion' });
  }
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
