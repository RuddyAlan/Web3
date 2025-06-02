const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('examen_vue', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;