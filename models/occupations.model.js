const mongoose = require('mongoose');

const Occupation_Schema = new mongoose.Schema({
  title: { type: String, required: true }
});

const Occupation = mongoose.model('occupation', Occupation_Schema);

module.exports = Occupation