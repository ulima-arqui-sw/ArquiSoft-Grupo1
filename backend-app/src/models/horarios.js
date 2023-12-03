'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class horarios extends Model {

}

horarios.init({
  id_mentor: DataTypes.UUID,
  dia_semana: DataTypes.STRING,
  hora_inicio: DataTypes.TIME,
  hora_fin: DataTypes.TIME
}, {
  sequelize,
  modelName: 'horarios',
  freezeTableName: true
});

module.exports = { horarios };