const router = require('express').Router();
const { Client, Commande } = require('../../models');

// The `/api/clients` endpoint

router.get('/', (req, res) => {
  Client.findAll({
    include: [
      {
        model: Commande,
        attributes: ['id', 'total_price', 'order_date', 'status'],
      }
    ]
  })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Client.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Commande,
        attributes: ['id', 'total_price', 'order_date', 'status'],
      }
    ]
  })
    .then(dbClientData => {
      if (!dbClientData) {
        res.status(404).json({ message: 'No client found with this ID' });
        return;
      }
      res.json(dbClientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Client.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
  })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Client.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbClientData => {
      if (!dbClientData[0]) {
        res.status(404).json({ message: 'No client found with this ID' });
        return;
      }
      res.json(dbClientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Client.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbClientData => {
      if (!dbClientData) {
        res.status(404).json({ message: 'No client found with this ID' });
        return;
      }
      res.json(dbClientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
