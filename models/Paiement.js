const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Paiement extends Model {}

Paiement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    statut_paiement: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_paiement: {
      type: DataTypes.DATE,
      allowNull: false
    },
    methode_paiement: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'paiement',
  }
);

module.exports = Paiement;
