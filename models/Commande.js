const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Commande extends Model {}

Commande.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_commande: {
      type: DataTypes.DATE,
      allowNull: false
    },
    statut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    montant_total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    paiement_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'paiement',
        key: 'id'
      }
    },
    livraison_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'livraison',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'commande',
  }
);

module.exports = Commande;
