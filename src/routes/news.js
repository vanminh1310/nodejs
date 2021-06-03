const express = require('express')
const newcontronllers = require('../app/controllers/newcontronllers')
const router = express.Router()



router.get('/',newcontronllers.index)


module.exports = router