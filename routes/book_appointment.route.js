const express = require('express')
const router = express.Router()
const postBookAppointment = require("../controllers/book_appointment.controller.js")

router.post('/', postBookAppointment)

module.exports = router;