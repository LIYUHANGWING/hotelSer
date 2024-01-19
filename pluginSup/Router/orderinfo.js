const express = require('express')
//
const router=express.Router()

const orderhander= require('../RouterHeader/orderinfo')

router.get('/orderinfo',orderhander.getOrder)
//router.get('/')

module.exports = router