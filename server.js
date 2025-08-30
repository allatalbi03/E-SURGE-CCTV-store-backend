const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// اختبار الاتصال بقاعدة البيانات
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
const sequelize = require('./config/connection');
const { Produit, Client, Commande, Paiement, Livraison } = require('./models');

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});


