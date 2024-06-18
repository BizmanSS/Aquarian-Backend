const StudyField = require('../models/study_fields.model.js')

const getStudyFields = async (req, res) => {
  const searchText = req.query.q;

  if (!searchText) {
    return res.status(400).json({ message: 'Search text is required' });
  }

  try {
    const studyFields = await StudyField.find({ 
      title: { $regex: searchText, $options: 'i' } 
    })
    .limit(10);
    res.json(studyFields);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study fields', error });
  }
}

module.exports = getStudyFields
