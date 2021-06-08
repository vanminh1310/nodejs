const express = require('express')
const khcontronllers = require('../app/controllers/khcontronllers')
const router = express.Router()



router.get('/:id',khcontronllers.show)
router.get('/cuocsong/:id',khcontronllers.show)
router.get('/khampha/:id',khcontronllers.show)
router.get('/taymaytomo/:id',khcontronllers.show)

module.exports = router