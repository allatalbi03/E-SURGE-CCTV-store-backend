const Produit = require('./Produit');
const Client = require('./Client');
const Commande = require('./Commande');
const Paiement = require('./Paiement');
const Livraison = require('./Livraison');

// 1. علاقة بين Client و Commande (العميل يمكن أن يكون له عدة طلبات)
Client.hasMany(Commande, { foreignKey: 'client_id' });
Commande.belongsTo(Client, { foreignKey: 'client_id' });

// 2. علاقة بين Commande و Paiement (الطلب يحتوي على دفع معين)
Commande.belongsTo(Paiement, { foreignKey: 'paiement_id' });
Paiement.hasMany(Commande, { foreignKey: 'paiement_id' });

// 3. علاقة بين Commande و Livraison (الطلب يحتوي على توصيل معين)
Commande.belongsTo(Livraison, { foreignKey: 'livraison_id' });
Livraison.hasMany(Commande, { foreignKey: 'livraison_id' });

module.exports = { Produit, Client, Commande, Paiement, Livraison };
