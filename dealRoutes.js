const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');

router.post('/deals', async (req, res) => {
  const deal = new Deal(req.body);
  await deal.save();
  res.status(201).send(deal);
});

router.get('/deals', async (req, res) => {
  const deals = await Deal.find();
  res.send(deals);
});

// Add other CRUD routes here

module.exports = router;
