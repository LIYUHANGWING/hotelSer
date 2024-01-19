const db=require('../db/index')

exports.regOrder= (req,res)=>{
    const ad=req.body
    const sql = 'insert into bsusers01.orderta set?'
    db.query(sql,{custname: ad.custname,custid:ad.custid,roomnum:ad.roomnum},(err,results)=>{
        console.log(ad.custname)
        if(err) return res.send({status:1,message:err.message})
        if(results.affectedRows !==1){
            return res.send({status:1,message:'用户录入失败'})
        } 
        res.send({status:0,message:'录入成功'})
    
       })
}
//,indate:ad.indate,outdate:ad.outdate,pay:ad.pay,source:ad.source,payway:ad.payway
