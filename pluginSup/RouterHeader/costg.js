const db=require('../db/index')

exports.regCostinfo = (req,res)=>{
    const cuser=req.body
    const sql = 'insert into bsusers01.custs set?'
    db.query(sql,{custname: cuser.custname,cardid:cuser.cardid,remarks:cuser.remarks,phoneNum:cuser.phoneNum,roomNum:cuser.roomNum,city:cuser.city,pay:cuser.pay,indate:cuser.indate,outdate:cuser.outdate,payway:cuser.payway,source:cuser.source},(err,results)=>{
        if(err) return res.send({status:1,message:err.message})
        if(results.affectedRows !==1){
            return res.send({status:1,message:'用户录入失败'})
        }
        res.send({status:0,message:'录入成功',results})
        console.log(results)
       })
}
//,roomNum:cuser.roomNum,city:cuser.city,pay:cuser.pay,indate:cuser.indate,outdate:cuser.outdate,payway:cuser.payway,source:cuser.source