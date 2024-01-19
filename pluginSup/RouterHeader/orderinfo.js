const db=require('../db/index')

exports.getOrder=(req,res)=>{
    const sql ='select *from orderta where custname=?'
    db.query(sql,req.query.custname,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        //if(results.length!==1){
           // console.log(results)
           // return res.cc('获取用户信息失败')           
       // }
        res.send({
            status:0,
            message :'获取成功',
            data :results[1]
        })
    })
}