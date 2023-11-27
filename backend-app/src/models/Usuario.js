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
  tipo_documento: {
    type: DataTypes.ENUM,
    values: ['dni', 'pasaporte', 'c_extranjeria'],
  },
  n_documento: DataTypes.STRING,
  correo: DataTypes.STRING,
  contrasenia: DataTypes.STRING,
  imagen_url: DataTypes.STRING,
  tipo_usuario: {
    type: DataTypes.ENUM,
    values: ['admin', 'usuario', 'profesional'],
  },
}, {
  sequelize,
  modelName: 'usuario',
  freezeTableName: true
});

module.exports = { usuario };
