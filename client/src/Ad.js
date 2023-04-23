const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  company: String,
  primaryText: String,
  headline: String,
  description: String,
});

module.exports = mongoose.model('Ad', AdSchema);
