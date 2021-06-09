const express = require('express')
const espContronller = require('../app/controllers/list')
const router = express.Router()


router.get('/',espContronller.home)
router.get('/:id/edit',espContronller.edit)
router.delete('/trash/:id',espContronller.tracha)
router.put('/:id',espContronller.puts)




module.exports = router