const Occupation = require('../models/occupations.model.js')

const getOccupations = async (req, res) => {
  const searchText = req.query.q;

  if (!searchText) {
    return res.status(400).json({ message: 'Search text is required' });
  }

  try {
    const occupations = await Occupation.find({ 
      title: { $regex: searchText, $options: 'i' } 
    })
    .limit(10);
    res.json(occupations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching occupations', error });
  }
}

module.exports = getOccupations
