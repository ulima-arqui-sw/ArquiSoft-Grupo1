const { Sequelize } = require('sequelize');

const sequelizeOpts = {
  username: 'postgres',
  port: '5432',
  password: 'postgres',
  database: 'postgres',
  dialect: 'postgres',
  host: "postgres-1.cx74vpe1f6lb.us-east-1.rds.amazonaws.com",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // You may need to set this to true depending on your RDS configuration
    },
  },
};

const sequelize = new Sequelize(sequelizeOpts);


module.exports = sequelize;