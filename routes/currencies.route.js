const express = require('express')
const router = express.Router()
const getCurrencies = require("../controllers/currencies.controller.js")

router.get('/', getCurrencies)

module.exports = router;