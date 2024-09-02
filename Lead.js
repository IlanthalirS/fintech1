const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: String, // e.g., New, Contacted, Qualified
  source: String, // e.g., Referral, Web
});

module.exports = mongoose.model('Lead', leadSchema);
