const { Sequelize } = require('sequelize');

const sequelizeOpts = {
  username: 'postgres',
  password: 'postgres',
  database: 'grupo01',
  dialect: 'postgres',
  host: "127.0.0.1",
};

const sequelize = new Sequelize(sequelizeOpts);


module.exports = sequelize;