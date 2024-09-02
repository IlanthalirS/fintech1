const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  interactionHistory: [{ date: Date, note: String }],
});

module.exports = mongoose.model('Client', clientSchema);
