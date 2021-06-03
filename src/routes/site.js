const express = require('express')
const homeContronller = require('../app/controllers/site')
const router = express.Router()



router.get('/',homeContronller.home)


module.exports = router