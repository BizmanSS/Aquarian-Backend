const express = require('express')
const router = express.Router()
const {postWorkPermForm,putWorkPermForm} = require("../controllers/work_permit_form.controller.js")

router.post('/', postWorkPermForm)

router.put('/:id', putWorkPermForm)

module.exports = router;