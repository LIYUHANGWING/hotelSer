const db=require('../db/index')

exports.getIDex = (req,res)=>{
    const sql = 'select * from citycode where id=?'
    db.query(sql,req.query.id,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.length!==1){
            return res.cc('获取失败！') 
        }
        res.send({
            status:0,
            message:'获取成功',
            data:results[0]

        })

    })


}

