const express = require('express')
const router = express.Router()
const getOccupations = require("../controllers/occupations.controller.js")

router.get('/', getOccupations)

module.exports = router;