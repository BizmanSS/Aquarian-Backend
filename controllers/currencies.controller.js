const Currency = require('../models/currencies.model.js')

const getCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching currencies', error });
  }
}

module.exports = getCurrencies
