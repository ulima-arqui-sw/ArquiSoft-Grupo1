'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class UsuarioReunion extends Model {
  /**
   static associate(models) {
      // define association here
    } 
    */

}
UsuarioReunion.init({
}, {
  sequelize,
  modelName: 'UsuarioReunion',
  freezeTableName: true
});

module.exports = { UsuarioReunion };