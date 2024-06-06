const express = require('express')
const router = express.Router()
const {postPermImmForm, putPermImmForm} = require("../controllers/permanent_immigration_form.controller.js")

router.post('/', postPermImmForm)

router.put('/:id', putPermImmForm)

module.exports = router;