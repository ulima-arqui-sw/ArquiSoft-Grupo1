import { DataTypes, Sequelize } from "sequelize";
import { db } from "../db.js"

const Horario = db.define('horarios', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  id_mentor: {
    type: DataTypes.UUID,
    allowNull: false
  },
  dia_semana: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  hora_fin: {
    type: DataTypes.TIME,
    allowNull: false
  },
}, {
  tableName: 'Horario',
  modelName: 'Horario',
  timestamps: false,
  freezeTableName: true
}
);

module.exports = {
  Horario
}