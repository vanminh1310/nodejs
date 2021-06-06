const express = require('express')
const espContronller = require('../app/controllers/creat')
const router = express.Router()


router.get('/',espContronller.index)
router.post('/',espContronller.postc)





module.exports = router