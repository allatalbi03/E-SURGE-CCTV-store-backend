const router = require('express').Router();
const { Paiement, Commande, Client } = require('../../models');

// The `/api/paiements` endpoint

router.get('/', (req, res) => {
  Paiement.findAll({
    include: [
      {
        model: Commande,
        attributes: ['id', 'total_price', 'order_date'],
      },
      {
        model: Client,
        attributes: ['id', 'first_name', 'last_name'],
      }
    ]
  })
    .then(dbPaiementData => res.json(dbPaiementData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Paiement.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Commande,
        attributes: ['id', 'total_price', 'order_date'],
      },
      {
        model: Client,
        attributes: ['id', 'first_name', 'last_name'],
      }
    ]
  })
    .then(dbPaiementData => {
      if (!dbPaiementData) {
        res.status(404).json({ message: 'No payment found with this ID' });
        return;
      }
      res.json(dbPaiementData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Paiement.create({
    payment_method: req.body.payment_method,
    payment_status: req.body.payment_status,
    paiement_date: req.body.paiement_date,
    client_id: req.body.client_id, // ID العميل
    commande_id: req.body.commande_id, // ID الطلب
  })
    .then(dbPaiementData => res.json(dbPaiementData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Paiement.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPaiementData => {
      if (!dbPaiementData[0]) {
        res.status(404).json({ message: 'No payment found with this ID' });
        return;
      }
      res.json(dbPaiementData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Paiement.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPaiementData =>
