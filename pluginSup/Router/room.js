const express = require('express')

const router=express.Router()


//获取用户基本信息
const roominfo_handler= require('../RouterHeader/room')
//导入验证中间件
router.get('/getroom',roominfo_handler.pRoom)



module.exports=router 