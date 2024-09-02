const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.post('/clients', async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).send(client);
});

router.get('/clients', async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

// Add other CRUD routes here

module.exports = router;
