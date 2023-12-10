'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Sala extends Model {
 
}


Sala.init({
  server: DataTypes.INTEGER,
  fecha: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Sala',
  freezeTableName: true
});

module.exports = { Sala };
