const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  status: String, // e.g., Open, Closed, Won, Lost
  clientId: mongoose.Schema.Types.ObjectId,
  stage: String, // e.g., Prospect, Negotiation
});

module.exports = mongoose.model('Deal', dealSchema);
