const express = require('express')
//
const router=express.Router()
//
const userhander=require('../RouterHeader/user')

//导入验证中间件
const expressJoi=require('@escook/express-joi')
//2导入需要验证的规则对象
const {reg_login_schema} = require('../schema/user')


router.post('/reguser',expressJoi(reg_login_schema),userhander.regUser)
//
router.post('/login',expressJoi(reg_login_schema),userhander.login)
//
const userinfo_handler = require('../RouterHeader/userinfo')



module.exports = router