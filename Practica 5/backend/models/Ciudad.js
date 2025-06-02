const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pais = require('./Pais');

const Ciudad = sequelize.define('Ciudad', {
  id_ciudad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  poblacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_pais: {
    type: DataTypes.INTEGER,
    references: {
      model: Pais,
      key: 'id_pais',
    },
  },
}, {
  tableName: 'ciudad',
  timestamps: false,
});

Pais.hasMany(Ciudad, { foreignKey: 'id_pais' });
Ciudad.belongsTo(Pais, { foreignKey: 'id_pais' });

module.exports = Ciudad;