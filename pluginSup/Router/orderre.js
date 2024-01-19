const express = require('express')
//
const router=express.Router()

const orederhander= require('../RouterHeader/orderre')

router.post('/orderre',orederhander.regOrder)

module.exports = router