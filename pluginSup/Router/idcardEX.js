const express = require('express')
//
const router=express.Router()

const getCity=require('../RouterHeader/idcardEX')

router.get('/getcity',getCity.getIDex)

module.exports=router