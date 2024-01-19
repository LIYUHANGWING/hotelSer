const db=require('../db/index')
//获取用户基本信息
exports.getcostgInfo =(req,res)=>{
   
    const sql ='select *from bsusers01.custs where id=?'
    db.query(sql,req.query.id,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.length!==1){
           // console.log(results)
            return res.cc('获取用户信息失败') 
        }
        res.send({
            status:0,
            message :'获取成功',
            data :results[0]
        })
    })
}
exports.updatecustInfo=(req,res)=>{
    const sql='update bsusers01.custs set ? where id = ? '

    db.query(sql,[req.body,req.body.id],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.affectedRows !==1){          
            return res.cc('更新信息失败')
        }
        res.cc('更新成功',0)
    })

}
