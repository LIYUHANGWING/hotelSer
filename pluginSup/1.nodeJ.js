//导入服务器
const express=require('express')
//创建服务器对象
const app=express()
//cors跨域
const joi = require('@hapi/joi')

const cors = require('cors')
//将cors注册为中间件
app.use(cors())
//配置解析表
app.use(express.urlencoded({
    extended:false
}))

app.use((req,res,next)=>{
    res.cc=function(err,status = 1){
        res.send({
            status,
            message :err instanceof Error ? err.message : err,
        })
    }
    next()
})
//jwt token解密相关
const  {  expressjwt : Ejwt }  =  require ( "express-jwt" )

const config=require('./schema/config')

app.use(Ejwt({ secret: config.jwtSecretKey,algorithms:["HS256"] }).unless({path: [/^\/api\//],}))
//导入路由
const userRouter=require('./Router/user')
app.use('/api',userRouter)

//导入路由
const userinfoRouter = require('./Router/userinfo')
//const router=require('./Router/user')
app.use('/my',userinfoRouter)
//定义错误级别中间件 
app.use((err,req,res,next)=>{
    if(err instanceof joi.ValidationError){
        return res.cc(err)
    }
    if(err.name==='UnauthorizedError'){
        return res.cc('身份认证败')
    }
    res.cc(err)
    

})
//注册用户
const costinfoRouter=require('./Router/costg')

app.use('/api',costinfoRouter)
//获取用户信息
const upcustsRouter=require('./Router/costginfo')

app.use('/api',upcustsRouter)
//获取地区信息
const getcitycode=require('./Router/idcardEX')

app.use('/api',getcitycode)
//注入订单信息
const orderRe=require('./Router/orderre')

app.use('/api',orderRe)

const orderGet=require('./Router/orderinfo')

app.use('/api',orderGet)

const pCname=require('./Router/nameinfo')

app.use('/api',pCname)




const pRoom=require('./Router/room')

app.use('/api',pRoom)

const upRoom=require('./Router/roominfo')

app.use('/api',upRoom)

app.listen(3007,()=>{
    console.log('api server running at http://127.0.0.1:3007')
})
//module.exports=router