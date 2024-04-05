const express = require('express')
const listItemControler = require('../app/controllers/listItemControler')
const router = express.Router()

router.post('/list-item', listItemControler.postItem)
router.get('/list-item/:chainId', listItemControler.getItem)
router.post('/buy-item', listItemControler.buyItem)





module.exports = router

