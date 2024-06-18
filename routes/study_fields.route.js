const express = require('express')
const router = express.Router()
const getStudyFields = require("../controllers/study_fields.controller.js")

router.get('/', getStudyFields)

module.exports = router;