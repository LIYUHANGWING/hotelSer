const db=require('../db/index')
//获取用户基本信息
exports.pRoom =(req,res)=>{
   
    const sql ='select *from bsusers01.room where id=?'
    db.query(sql,req.query.id,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        /*if(results.length!==1){
           // console.log(results)
            return res.cc('获取用户信息失败') 
        }*/
            res.send({
            status:0,
            message :'获取成功',
            data :results[0]
        })

    })
}

