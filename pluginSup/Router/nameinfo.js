const express = require('express')

const router=express.Router()


//获取用户基本信息
const pNamehander= require('../RouterHeader/nameinfo')
//导入验证中间件
router.get('/getname',pNamehander.pName)

module.exports=router 