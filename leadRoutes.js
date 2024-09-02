const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

router.post('/leads', async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.status(201).send(lead);
});

router.get('/leads', async (req, res) => {
  const leads = await Lead.find();
  res.send(leads);
});

// Add other CRUD routes here

module.exports = router;
