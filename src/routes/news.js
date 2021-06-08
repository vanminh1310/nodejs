const express = require('express')
const newcontronllers = require('../app/controllers/about')
const router = express.Router()



router.get('/',newcontronllers.index)


module.exports = router