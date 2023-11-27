'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Publicacion extends Model {
  static associate({ Usuario }) {
    this.belongsTo(Usuario, { as: 'usuario', foreignKey: 'idUsuario' });
  }

}
Publicacion.init({
  nombreReunion: DataTypes.STRING,
  fecha: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Publicacion',
  freezeTableName: true
});

module.exports = { Publicacion };
