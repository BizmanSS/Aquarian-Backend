const express = require('express')
const router = express.Router()
const {postStudyPermForm,putStudyPermForm} = require("../controllers/study_permit_form.controller.js")

router.post('/', postStudyPermForm)

router.put('/:id', putStudyPermForm)

module.exports = router;