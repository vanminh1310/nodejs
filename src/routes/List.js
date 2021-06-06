const express = require('express')
const espContronller = require('../app/controllers/list')
const router = express.Router()


router.get('/',espContronller.home)
router.get('/:id/edit',espContronller.edit)

router.put('/:id',espContronller.puts)




module.exports = router