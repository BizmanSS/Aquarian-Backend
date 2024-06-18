const mongoose = require('mongoose');

const Study_Field_Schema = new mongoose.Schema({
  title: { type: String, required: true }
});

const StudyField = mongoose.model('studyfield', Study_Field_Schema);

module.exports = StudyField