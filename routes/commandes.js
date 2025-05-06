const router = require('express').Router();
const { Commande, Client, Product } = require('../../models');

// The `/api/commandes` endpoint

router.get('/', (req, res) => {
  Commande.findAll({
    include: [
      {
        model: Client,
        attributes: ['id', 'first_name', 'last_name'],
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
      }
    ]
  })
    .then(dbCommandeData => res.json(dbCommandeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Commande.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Client,
        attributes: ['id', 'first_name', 'last_name'],
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock'],
      }
    ]
  })
    .then(dbCommandeData => {
      if (!dbCommandeData) {
        res.status(404).json({ message: 'No order found with this ID' });
        return;
      }
      res.json(dbCommandeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Commande.create({
    total_price: req.body.total_price,
    order_date: req.body.order_date,
    status: req.body.status,
    client_id: req.body.client_id, // ID العميل
    product_ids: req.body.product_ids, // مصفوفة ID للمنتجات
  })
    .then(dbCommandeData => res.json(dbCommandeData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Commande.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCommandeData => {
      if (!dbCommandeData[0]) {
        res.status(404).json({ message: 'No order found with this ID' });
        return;
      }
      res.json(dbCommandeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Commande.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommandeData => {
      if (!dbCommandeData) {
        res.status(404).json({ message: 'No order found with this ID' });
        return;
      }
      res.json(dbCommandeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
