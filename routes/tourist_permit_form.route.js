const express = require('express')
const router = express.Router()
const {postTouristPermForm,putTouristPermForm} = require("../controllers/tourist_permit_form.controller.js")

router.post('/', postTouristPermForm)

router.put('/:id', putTouristPermForm)

module.exports = router;