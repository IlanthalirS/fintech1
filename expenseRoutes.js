const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.post('/expenses', async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.status(201).send(expense);
});

router.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
});

// Add other CRUD routes here

module.exports = router;
