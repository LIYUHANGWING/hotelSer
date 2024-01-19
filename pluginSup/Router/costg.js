const express = require('express')
//
const router=express.Router()

const cuserhander= require('../RouterHeader/costg')

router.post('/creguser',cuserhander.regCostinfo)
//router.get('/')

module.exports = router