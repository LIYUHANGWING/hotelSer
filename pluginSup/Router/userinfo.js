const express = require('express')

const router=express.Router()


//获取用户基本信息
const userinfo_handler = require('../RouterHeader/userinfo')
//导入验证中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')
//获取用户信息
router.get('/userinfo',userinfo_handler.getUserInfo)
//更新用户基本信息
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateuseriInfo)
//更新密码的路由
//router.post('/updatepwd',userinfo_handler.) 

module.exports=router 