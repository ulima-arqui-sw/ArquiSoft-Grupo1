'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Reunion extends Model {
  static associate({ Usuario }) {
    this.belongsToMany(Usuario, { as: 'invitados', through: 'UsuarioReunion', foreignKey: 'idReunion' });
    this.belongsTo(Usuario, { as: 'anfitrion', foreignKey: 'idAnfitrion' });
  } 
  
}
Reunion.init({
  nombreReunion: DataTypes.STRING,
  fecha: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Reunion',
  freezeTableName: true
});

module.exports = { Reunion };
