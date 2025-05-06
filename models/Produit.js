const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Produit extends Model {}

Produit.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    prix: { type: DataTypes.DECIMAL, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'produit'
  }
);

module.exports = Produit;
