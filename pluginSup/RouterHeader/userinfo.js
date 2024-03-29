const db=require('../db/index')
//获取用户基本信息
exports.getUserInfo =(req,res)=>{
   
    const sql ='select id ,username,password from htlusers where id=?'
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
//更新用户基本信息的基本函数 
exports.updateuseriInfo=(req,res)=>{
    const sql='update htlusers set ? where id = ? '

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