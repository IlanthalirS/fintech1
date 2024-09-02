const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  clientId: mongoose.Schema.Types.ObjectId,
  category: String,
  amount: Number,
  date: Date,
  receipt: String, // URL or path to receipt
});

module.exports = mongoose.model('Expense', expenseSchema);
