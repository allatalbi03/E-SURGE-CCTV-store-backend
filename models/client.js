const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Client extends Model {}

Client.init(
  {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    motdepasse: { type: DataTypes.STRING, allowNull: false },
    adresse: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'client'
  }
);

module.exports = Client;
