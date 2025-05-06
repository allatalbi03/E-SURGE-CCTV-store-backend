const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Livraison extends Model {}

Livraison.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_livraison_estimee: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_livraison_reelle: {
      type: DataTypes.DATE
    },
    statut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_suivi: {
      type: DataTypes.STRING
    },
    est_livree: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'livraison',
  }
);

module.exports = Livraison;
