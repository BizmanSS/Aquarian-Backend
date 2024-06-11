const express = require('express')
const router = express.Router()
const {postTouristVisaForm,putTouristVisaForm} = require("../controllers/tourist_visa_form.controller.js")

router.post('/', postTouristVisaForm)

router.put('/:id', putTouristVisaForm)

module.exports = router;