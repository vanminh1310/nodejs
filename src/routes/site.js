const express = require('express')
const homeContronller = require('../app/controllers/site')
const router = express.Router()



router.get('/',homeContronller.home)
router.get('/cuocsong',homeContronller.cuocsong)
router.get('/khampha',homeContronller.khampha)
router.get('/taymaytomo',homeContronller.taymaytomo)
router.get('/suckhoe',homeContronller.suckhoe)

// router.get('/:slug', courseController.show);

module.exports = router