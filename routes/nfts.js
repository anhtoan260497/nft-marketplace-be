const express = require('express')
const listItemControler = require('../app/controllers/listItemControler')
const router = express.Router()

router.post('/list-item', listItemControler.postItem)
router.get('/list-item/:chainId', listItemControler.getItem)





module.exports = router

    