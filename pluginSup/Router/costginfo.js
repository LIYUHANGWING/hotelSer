const express = require('express')

const router=express.Router()


//获取用户基本信息
const costinfo_handler= require('../RouterHeader/costginfo')
//导入验证中间件
router.get('/upcost',costinfo_handler.getcostgInfo)

router.post('/upcost',costinfo_handler.updatecustInfo)

module.exports=router 