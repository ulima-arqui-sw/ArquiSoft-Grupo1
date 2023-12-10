const sequelize = require('../db');

const db = {
  Sequelize: sequelize,
  sequelize,
  ...require('./Usuario.js'),
  ...require('./Reunion.js'),
  ...require('./Usuario_Reunion.js'),
  ...require('./Publicacion.js'),
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


module.exports = {
  ...db,
};
