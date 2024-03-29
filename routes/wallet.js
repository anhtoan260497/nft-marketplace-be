const express = require('express')
const walletController = require('../app/controllers/walletController')
const router = express.Router()

router.get('/:address', walletController.index)





module.exports = router

