const express = require('express')
const khcontronllers = require('../app/controllers/khcontronllers')
const router = express.Router()



router.get('/:id',khcontronllers.show)


module.exports = router