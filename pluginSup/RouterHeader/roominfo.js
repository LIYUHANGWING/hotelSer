const db=require('../db/index')


exports.updateroomInfo=(req,res)=>{
    
    const sql='update bsusers01.room set ? where id = ? '

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