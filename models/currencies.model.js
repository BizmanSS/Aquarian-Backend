const mongoose = require('mongoose');

const Currency_Schema = new mongoose.Schema({
  currency_code: { type: String, required: true },
  currency_name: { type: String, required: true }
});

const Currency = mongoose.model('currencies', Currency_Schema);

module.exports = Currency