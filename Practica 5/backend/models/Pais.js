const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pais = sequelize.define('Pais', {
  id_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  continente: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'pais',
  timestamps: false,
});

module.exports = Pais;