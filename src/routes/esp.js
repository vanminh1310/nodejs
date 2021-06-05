const express = require('express')
const espContronller = require('../app/controllers/esp32')
const router = express.Router()


router.get('/',espContronller.home)


router.post('/',espContronller.posty)



module.exports = router