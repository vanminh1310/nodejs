const express = require('express')
const homeContronller = require('../app/controllers/socket')
const router = express.Router()



router.get('/',homeContronller.index)


module.exports = router